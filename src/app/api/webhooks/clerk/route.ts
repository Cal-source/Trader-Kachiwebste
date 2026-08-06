import { prisma } from "@/lib/prisma";

export async function POST() {
  return Response.json({ ok: true });
}