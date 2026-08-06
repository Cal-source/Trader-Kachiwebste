import { Webhook } from "svix";
import { headers } from "next/headers";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const SIGNING_SECRET = process.env.CLERK_WEBHOOK_SIGNING_SECRET;

  if (!SIGNING_SECRET) {
    throw new Error("Missing Clerk webhook signing secret");
  }

  const headerPayload = await headers();

  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Missing Svix headers", { status: 400 });
  }

  const payload = await req.text();

  const wh = new Webhook(SIGNING_SECRET);

  let evt: any;

  try {
    evt = wh.verify(payload, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });
  } catch (err) {
    console.error("Webhook verification failed", err);
    return new Response("Invalid signature", { status: 400 });
  }

  switch (evt.type) {
    case "user.created":
  await prisma.user.upsert({
    where: {
      clerkId: evt.data.id,
    },
    update: {
      email: evt.data.email_addresses[0]?.email_address,
      firstName: evt.data.first_name,
      lastName: evt.data.last_name,
      imageUrl: evt.data.image_url,
    },
    create: {
      clerkId: evt.data.id,
      email: evt.data.email_addresses[0]?.email_address,
      firstName: evt.data.first_name,
      lastName: evt.data.last_name,
      imageUrl: evt.data.image_url,
    },
  });

  console.log("✅ User synced");

  break;

    case "user.updated":
      await prisma.user.update({
        where: {
          clerkId: evt.data.id,
        },
        data: {
          email: evt.data.email_addresses[0]?.email_address,
          firstName: evt.data.first_name,
          lastName: evt.data.last_name,
          imageUrl: evt.data.image_url,
        },
      });

      console.log("✏️ User updated");
      break;

    case "user.deleted":
  if (evt.data?.id) {
    await prisma.user.delete({
      where: {
        clerkId: evt.data.id,
      },
    });

    console.log("🗑 User deleted");
  }

  break;
  }

  return Response.json({
    success: true,
  });
}