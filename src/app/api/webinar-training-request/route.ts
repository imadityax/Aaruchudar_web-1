import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { Resend } from "resend";

interface WebinarRequestBody {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  role?: string;
  requestType: string;
  topic: string;
  audienceType: string;
  mode: string;
  audienceSize?: number | string;
  preferredDate?: string;
  location?: string;
  duration: string;
  requirements?: string;
}

/* ---------- helpers ---------- */

function escapeHtml(value: string, preserveNewlines = false) {
  const escaped = value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
  return preserveNewlines ? escaped.replace(/\n/g, "<br/>") : escaped;
}

function buildHtml(data: WebinarRequestBody) {
  return `
    <h2>New Webinar / Training Request</h2>
    <p><strong>Name:</strong> ${escapeHtml(data.fullName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
    <p><strong>Organization:</strong> ${escapeHtml(data.organization)}</p>
    <p><strong>Role:</strong> ${escapeHtml(data.role ?? "-")}</p>
    <p><strong>Request Type:</strong> ${escapeHtml(data.requestType)}</p>
    <p><strong>Topic:</strong> ${escapeHtml(data.topic)}</p>
    <p><strong>Audience:</strong> ${escapeHtml(data.audienceType)}</p>
    <p><strong>Mode:</strong> ${escapeHtml(data.mode)}</p>
    <p><strong>Audience Size:</strong> ${escapeHtml(String(data.audienceSize ?? "-"))}</p>
    <p><strong>Preferred Date:</strong> ${escapeHtml(data.preferredDate ?? "-")}</p>
    <p><strong>Location:</strong> ${escapeHtml(data.location ?? "-")}</p>
    <p><strong>Duration:</strong> ${escapeHtml(data.duration)}</p>
    <p><strong>Requirements:</strong><br/>
      ${escapeHtml(data.requirements ?? "-", true)}
    </p>
    <hr />
    <p>Submitted at ${new Date().toISOString()}</p>
  `;
}

/* ---------- API ---------- */

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as Partial<WebinarRequestBody>;

    /* validation */
    const required: (keyof WebinarRequestBody)[] = [
      "fullName",
      "email",
      "phone",
      "organization",
      "requestType",
      "topic",
      "audienceType",
      "mode",
      "duration",
    ];

    const missing = required.filter((k) => !data[k]);
    if (missing.length) {
      return NextResponse.json(
        { ok: false, error: `Missing fields: ${missing.join(", ")}` },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.email))) {
      return NextResponse.json(
        { ok: false, error: "Invalid email address" },
        { status: 400 }
      );
    }

    /* prepare payload */
    const payload = {
      fullName: String(data.fullName),
      email: String(data.email),
      phone: String(data.phone),
      organization: String(data.organization),
      role: data.role ? String(data.role) : null,
      requestType: String(data.requestType),
      topic: String(data.topic),
      audienceType: String(data.audienceType),
      mode: String(data.mode),
      audienceSize: data.audienceSize ? Number(data.audienceSize) : null,
      preferredDate: data.preferredDate ?? null,
      location: data.location ?? null,
      duration: String(data.duration),
      requirements: data.requirements ?? null,
    };

    /* save to DB */
    const saved = await prisma.webinarTrainingRequest.create({
      data: payload as any,
    });

    /* send email (only when RESEND_API_KEY is configured) */
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: "Aaruchudar <hi@aaruchudar.com>",
          to: ["hi@aaruchudar.com"],
          replyTo: payload.email,
          subject: `New Webinar / Training Request – ${payload.fullName}`,
          html: buildHtml(payload as WebinarRequestBody),
        });
      } catch (emailErr: any) {
        console.error("Error sending email via Resend:", emailErr);
        // don't fail the request for email errors
        return NextResponse.json({ ok: true, saved, warning: "Saved but failed to send notification email" }, { status: 201 });
      }
    } else {
      console.warn("RESEND_API_KEY not configured — skipping notification email");
    }

    return NextResponse.json(
      {
        ok: true,
        saved,
        message:
          "Your request has been successfully submitted. Our team will contact you shortly.",
      },
      { status: 201 }
    );
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: err?.message || "Unexpected error" },
      { status: 500 }
    );
  }
}
