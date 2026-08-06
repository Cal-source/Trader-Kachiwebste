import { verifyWebhook } from "@clerk/backend/webhooks";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const evt = await verifyWebhook(req);

    switch (evt.type) {
      case "user.created": {
        const user = evt.data;

        await prisma.user.upsert({
          where: {
            clerkId: user.id,
          },
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
      }

      case "user.updated": {
        const user = evt.data;

        await prisma.user.update({
          where: {
            clerkId: user.id,
          },
          data: {
            email: user.email_addresses[0]?.email_address ?? "",
            firstName: user.first_name,
            lastName: user.last_name,
            imageUrl: user.image_url,
          },
        });

        break;
      }

      case "user.deleted": {
        const user = evt.data;

        if (user.id) {
          await prisma.user.delete({
            where: {
              clerkId: user.id,
            },
          });
        }

        break;
      }
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error(err);

    return new Response("Webhook Error", {
      status: 400,
    });
  }
}