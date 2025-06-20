import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET() {
  try {
    const result = await pool.query("SELECT NOW()");
    return NextResponse.json({ success: true, time: result.rows[0].now });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: "Error connecting to DB" });
  }
}
