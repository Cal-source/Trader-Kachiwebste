import pkg from "@prisma/client";

// Support environments where the package may export differently
const PrismaClientClass = (pkg as any).PrismaClient ?? (pkg as any).default ?? pkg;

const globalForPrisma = globalThis as unknown as {
  prisma?: InstanceType<typeof PrismaClientClass>;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClientClass();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}