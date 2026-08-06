import { Webhook } from "svix";
import { headers } from "next/headers";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const body = await req.text();

  const headerList = await headers();

  return Response.json({
    ok: true,
    bodyLength: body.length,
    hasHeaders: !!headerList,
  });
}