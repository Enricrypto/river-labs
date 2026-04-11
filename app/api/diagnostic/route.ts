import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

interface Question {
  id: string;
  label: string;
  type: string;
}

interface Step {
  id: string;
  title: string;
  questions: Question[];
}

type AnswerValue = string | string[] | number;

function formatAnswer(val: AnswerValue | undefined): string {
  if (val === undefined || val === null) return "<em>Não respondido</em>";
  if (Array.isArray(val)) return val.join(", ");
  return String(val);
}

function buildHtml(steps: Step[], answers: Record<string, AnswerValue>): string {
  const rows = steps
    .map(
      (step) => `
      <tr>
        <td colspan="2" style="padding: 20px 0 8px; font-size: 13px; font-weight: 600;
          color: #6B7280; text-transform: uppercase; letter-spacing: 0.08em;
          border-top: 1px solid #E5E7EB;">
          ${step.title}
        </td>
      </tr>
      ${step.questions
        .map(
          (q) => `
        <tr>
          <td style="padding: 6px 16px 6px 0; font-size: 14px; color: #374151;
            vertical-align: top; width: 55%;">
            ${q.label}
          </td>
          <td style="padding: 6px 0; font-size: 14px; color: #111827;
            font-weight: 500; vertical-align: top;">
            ${formatAnswer(answers[q.id])}
          </td>
        </tr>`
        )
        .join("")}`
    )
    .join("");

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="margin:0; padding:0; background:#F9FAFB; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
  <div style="max-width: 640px; margin: 40px auto; background: #FFFFFF;
    border-radius: 12px; overflow: hidden; border: 1px solid #E5E7EB;">

    <div style="background: #111827; padding: 32px 40px;">
      <p style="margin: 0 0 4px; color: #6B7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">
        River Labs · Diagnóstico Gratuito
      </p>
      <h1 style="margin: 0; color: #FFFFFF; font-size: 22px; font-weight: 600;">
        Nova resposta recebida
      </h1>
      <p style="margin: 8px 0 0; color: #9CA3AF; font-size: 14px;">
        ${answers["nome"] ?? "Anônimo"} · ${answers["empresa_nome"] ?? "-"} · ${answers["email"] ?? "-"}
        ${answers["whatsapp"] ? ` · ${answers["whatsapp"]}` : ""}
      </p>
    </div>

    <div style="padding: 8px 40px 40px;">
      <table style="width: 100%; border-collapse: collapse;">
        ${rows}
      </table>
    </div>

  </div>
</body>
</html>`;
}

export async function POST(req: Request) {
  const { answers, steps } = await req.json();

  const html = buildHtml(steps, answers);
  const nome = answers["nome"] ?? "Anônimo";
  const empresa = answers["empresa_nome"] ?? "sem empresa";

  const { error } = await resend.emails.send({
    from: "Diagnóstico River Labs <onboarding@resend.dev>",
    to: "eibarraf@gmail.com",
    subject: `Diagnóstico: ${nome} - ${empresa}`,
    html,
  });

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
