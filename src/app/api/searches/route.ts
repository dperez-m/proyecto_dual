import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { sessionId, filters } = body;

    if (!sessionId || !filters) {
      return NextResponse.json({ error: "Missing sessionId or filters" }, { status: 400 });
    }

    const query = "INSERT INTO searches (session_id, filters) VALUES ($1, $2)";
    const values = [sessionId, filters];

    await pool.query(query, values);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error al guardar busqueda:", err);
    return NextResponse.json({ error: "No se pudo guardar la busqueda" }, { status: 500 });
  }
}
