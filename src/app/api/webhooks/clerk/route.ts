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

  const evt = new Webhook(secret).verify(body, {
    "svix-id": svixId,
    "svix-timestamp": svixTimestamp,
    "svix-signature": svixSignature,
  }) as { type: string };

  return Response.json({
    type: evt.type,
  });
}