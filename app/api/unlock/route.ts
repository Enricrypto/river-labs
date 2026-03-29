import { NextRequest, NextResponse } from "next/server";

function getPassword(client: string): string | undefined {
  switch (client) {
    case "apia":           return process.env.APIA_PASSWORD;
    case "matrisoja":      return process.env.MATRISOJA_PASSWORD;
    case "pier-maua":      return process.env.PIER_MAUA_PASSWORD;
    case "trem-corcovado": return process.env.TREM_CORCOVADO_PASSWORD;
    case "bondinho":       return process.env.BONDINHO_PASSWORD;
    case "cataratas":      return process.env.CATARATAS_PASSWORD;
    default:               return undefined;
  }
}

export async function POST(req: NextRequest) {
  const { client, password } = await req.json();

  if (!client || !password) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const expected = getPassword(client);

  if (!expected || password !== expected.trim()) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  return NextResponse.json({ ok: true });
}
