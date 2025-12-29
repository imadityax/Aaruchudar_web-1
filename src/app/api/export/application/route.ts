import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

function toCSV(data: Record<string, unknown>[]) {
  if (data.length === 0) return "";

  const headers = Object.keys(data[0]);
  const rows = data.map(row =>
    headers.map(h => JSON.stringify(row[h] ?? "")).join(",")
  );

  return [headers.join(","), ...rows].join("\n");
}

export async function GET() {
  const applications = await prisma.application.findMany();

  const csv = toCSV(applications);

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": "attachment; filename=applications.csv",
    },
  });
}
