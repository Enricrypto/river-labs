import { NextRequest, NextResponse } from "next/server";

const PASSWORDS: Record<string, string | undefined> = {
  apia: process.env.APIA_PASSWORD,
  matrisoja: process.env.MATRISOJA_PASSWORD,
  "pier-maua": process.env.PIER_MAUA_PASSWORD,
  "trem-corcovado": process.env.TREM_CORCOVADO_PASSWORD,
  bondinho: process.env.BONDINHO_PASSWORD,
  cataratas: process.env.CATARATAS_PASSWORD,
};

export async function POST(req: NextRequest) {
  const { client, password } = await req.json();

  if (!client || !password) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const expected = PASSWORDS[client];

  if (!expected || password !== expected) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  return NextResponse.json({ ok: true });
}
