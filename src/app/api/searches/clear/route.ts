import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function DELETE(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('sessionId');

    if (!sessionId) {
        return NextResponse.json({ error: 'Falta sessionId' }, { status: 400 });
    }

    try {
        await pool.query('DELETE FROM searches WHERE session_id = $1', [sessionId]);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error al borrar historial:', error);
        return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
    }
}
