import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

const priceRanges: Record<string, [number, number]> = {
  "1": [0, 30000],
  "2": [30000, 40000],
  "3": [40000, 50000],
  "4": [50000, 1000000],
};

const batteryRanges: Record<string, [number, number]> = {
  "1": [0, 300],
  "2": [300, 400],
  "3": [400, 500],
  "4": [500, 2000],
};

const powerRanges: Record<string, [number, number]> = {
  "1": [0, 150],
  "2": [150, 200],
  "3": [200, 300],
  "4": [300, 400],
  "5": [400, 1000],
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  // Obtener todos los valores para cada filtro
  const priceIds = searchParams.getAll("price");
  const rangeIds = searchParams.getAll("range");
  const powerIds = searchParams.getAll("power");
  const brands = searchParams.getAll("brand");
  const categories = searchParams.getAll("category");

  // Obtener los valores únicos para seats y trunk
  const seats = parseInt(searchParams.get("seats") || "0");
  const trunk = parseInt(searchParams.get("trunk") || "0");

  try {
    let query = "SELECT * FROM cars WHERE 1=1";
    const params: (string | number)[] = [];
    let paramIndex = 1;

    // Procesar rangos de precio (OR entre rangos)
    if (priceIds.length > 0) {
      const priceConditions: string[] = [];

      priceIds.forEach((priceId) => {
        if (priceRanges[priceId]) {
          const [min, max] = priceRanges[priceId];
          priceConditions.push(`(price BETWEEN $${paramIndex++} AND $${paramIndex++})`);
          params.push(min, max);
        }
      });

      if (priceConditions.length > 0) {
        query += ` AND (${priceConditions.join(" OR ")})`;
      }
    }

    // Procesar rangos de autonomía (OR entre rangos)
    if (rangeIds.length > 0) {
      const rangeConditions: string[] = [];

      rangeIds.forEach((rangeId) => {
        if (batteryRanges[rangeId]) {
          const [min, max] = batteryRanges[rangeId];
          rangeConditions.push(`(battery_range BETWEEN $${paramIndex++} AND $${paramIndex++})`);
          params.push(min, max);
        }
      });

      if (rangeConditions.length > 0) {
        query += ` AND (${rangeConditions.join(" OR ")})`;
      }
    }

    // Procesar rangos de potencia (OR entre rangos)
    if (powerIds.length > 0) {
      const powerConditions: string[] = [];

      powerIds.forEach((powerId) => {
        if (powerRanges[powerId]) {
          const [min, max] = powerRanges[powerId];
          powerConditions.push(`(power BETWEEN $${paramIndex++} AND $${paramIndex++})`);
          params.push(min, max);
        }
      });

      if (powerConditions.length > 0) {
        query += ` AND (${powerConditions.join(" OR ")})`;
      }
    }

    // Procesar marcas (IN si hay múltiples)
    if (brands.length > 0) {
      const placeholders = brands.map(() => `$${paramIndex++}`).join(", ");
      query += ` AND LOWER(brand) IN (${placeholders})`;
      params.push(...brands.map((b) => b.toLowerCase()));
    }

    // Procesar categorías (IN si hay múltiples)
    if (categories.length > 0) {
      const placeholders = categories.map(() => `$${paramIndex++}`).join(", ");
      query += ` AND LOWER(category) IN (${placeholders})`;
      params.push(...categories.map((b) => b.toLowerCase()));
    }

    // Procesar plazas (>=)
    if (seats > 0) {
      query += ` AND seats >= $${paramIndex++}`;
      params.push(seats);
    }

    // Procesar maletero (>=)
    if (trunk > 0) {
      query += ` AND trunk_capacity >= $${paramIndex++}`;
      params.push(trunk);
    }

    const result = await pool.query(query, params);
    return NextResponse.json(result.rows);
  } catch (err) {
    console.error("Error al obtener coches:", err);
    return NextResponse.json({ error: "Error al obtener datos de coches" }, { status: 500 });
  }
}
