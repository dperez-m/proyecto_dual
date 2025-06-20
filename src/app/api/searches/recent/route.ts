import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get("sessionId");

  if (!sessionId) {
    return NextResponse.json({ error: "Missing sessionId" }, { status: 400 });
  }

  try {
    const result = await pool.query(
      "SELECT * FROM searches WHERE session_id = $1 ORDER BY created_at DESC LIMIT 5",
      [sessionId]
    );

    return NextResponse.json(result.rows);
  } catch (err) {
    console.error("Error al obtener las busquedas recientes:", err);
    return NextResponse.json(
      { error: "Error al obtener las busquedas recientes" },
      { status: 500 }
    );
  }
}
