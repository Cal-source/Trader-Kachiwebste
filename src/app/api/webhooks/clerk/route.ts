import { Webhook } from "svix";
import { headers } from "next/headers";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const secret = process.env.CLERK_WEBHOOK_SIGNING_SECRET;

  if (!secret) {
    return new Response("Missing secret", { status: 500 });
  }

  const body = await req.text();

  const headerList = await headers();

  const svixId = headerList.get("svix-id");
  const svixTimestamp = headerList.get("svix-timestamp");
  const svixSignature = headerList.get("svix-signature");

  if (!svixId || !svixTimestamp || !svixSignature) {
    return new Response("Missing headers", { status: 400 });
  }

  return Response.json({
    ok: true,
  });
}