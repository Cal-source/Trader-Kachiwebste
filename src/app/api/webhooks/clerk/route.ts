export const dynamic = "force-dynamic";

import { Webhook } from "svix";
import { headers } from "next/headers";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const secret = process.env.CLERK_WEBHOOK_SIGNING_SECRET;

  if (!secret) {
    return new Response("Missing webhook secret", { status: 500 });
  }

  const body = await req.text();
  const headerList = await headers();

  const svixId = headerList.get("svix-id");
  const svixTimestamp = headerList.get("svix-timestamp");
  const svixSignature = headerList.get("svix-signature");

  if (!svixId || !svixTimestamp || !svixSignature) {
    return new Response("Missing Svix headers", { status: 400 });
  }

  let evt: any;

  try {
    evt = new Webhook(secret).verify(body, {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature,
    });
  } catch (err) {
    console.error("Webhook verification failed:", err);
    return new Response("Invalid webhook signature", { status: 400 });
  }

  const user = evt.data;

  switch (evt.type) {
    case "user.created":
      await prisma.user.upsert({
        where: { clerkId: user.id },
        update: {
          email: user.email_addresses[0]?.email_address ?? "",
          firstName: user.first_name,
          lastName: user.last_name,
          imageUrl: user.image_url,
        },
        create: {
          clerkId: user.id,
          email: user.email_addresses[0]?.email_address ?? "",
          firstName: user.first_name,
          lastName: user.last_name,
          imageUrl: user.image_url,
        },
      });
      break;

    case "user.updated":
      await prisma.user.update({
        where: { clerkId: user.id },
        data: {
          email: user.email_addresses[0]?.email_address ?? "",
          firstName: user.first_name,
          lastName: user.last_name,
          imageUrl: user.image_url,
        },
      });
      break;

    case "user.deleted":
      if (user?.id) {
        await prisma.user.delete({
          where: { clerkId: user.id },
        });
      }
      break;
  }

  return Response.json({ success: true });
}