import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, company, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background:#F9FAFB;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="max-width:600px;margin:40px auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #E5E7EB;">
    <div style="background:#111827;padding:32px 40px;">
      <p style="margin:0 0 4px;color:#6B7280;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;">River Labs · Contato</p>
      <h1 style="margin:0;color:#fff;font-size:22px;font-weight:600;">Nova mensagem recebida</h1>
    </div>
    <div style="padding:32px 40px;">
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:8px 16px 8px 0;color:#6B7280;font-size:13px;width:30%;">Nome</td><td style="padding:8px 0;color:#111827;font-size:14px;font-weight:500;">${name}</td></tr>
        <tr><td style="padding:8px 16px 8px 0;color:#6B7280;font-size:13px;">E-mail</td><td style="padding:8px 0;color:#111827;font-size:14px;font-weight:500;">${email}</td></tr>
        ${company ? `<tr><td style="padding:8px 16px 8px 0;color:#6B7280;font-size:13px;">Empresa</td><td style="padding:8px 0;color:#111827;font-size:14px;font-weight:500;">${company}</td></tr>` : ""}
      </table>
      <div style="margin-top:24px;padding-top:24px;border-top:1px solid #E5E7EB;">
        <p style="margin:0 0 8px;color:#6B7280;font-size:13px;text-transform:uppercase;letter-spacing:0.08em;">Mensagem</p>
        <p style="margin:0;color:#111827;font-size:15px;line-height:1.6;white-space:pre-wrap;">${message}</p>
      </div>
    </div>
  </div>
</body>
</html>`;

  const { error } = await resend.emails.send({
    from: "Contato River Labs <onboarding@resend.dev>",
    to: "eibarraf@gmail.com",
    replyTo: email,
    subject: `Contato: ${name}${company ? ` - ${company}` : ""}`,
    html,
  });

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
