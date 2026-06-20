import { PrismaClient } from "@prisma/client";
import { SERVICES } from "../src/lib/services-data";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Seed services
  for (const service of SERVICES) {
    await prisma.service.upsert({
      where: { slug: service.slug },
      update: {
        name: service.name,
        description: service.description,
        shortDescription: service.shortDescription,
        basePrice: service.basePrice,
        minimumPrice: service.minimumPrice,
        emergencyFee: service.emergencyFee,
        depositAmount: service.depositAmount,
        depositType: service.depositType,
        durationEstimate: service.durationEstimate,
        imageUrl: service.imageUrl,
        metaTitle: service.metaTitle,
        metaDescription: service.metaDescription,
      },
      create: {
        name: service.name,
        slug: service.slug,
        description: service.description,
        shortDescription: service.shortDescription,
        basePrice: service.basePrice,
        minimumPrice: service.minimumPrice,
        emergencyFee: service.emergencyFee,
        depositAmount: service.depositAmount,
        depositType: service.depositType,
        durationEstimate: service.durationEstimate,
        imageUrl: service.imageUrl,
        metaTitle: service.metaTitle,
        metaDescription: service.metaDescription,
      },
    });
    console.log(`  Seeded service: ${service.name}`);
  }

  // Seed admin user
  try {
    const { default: bcrypt } = await import("bcryptjs");
    const passwordHash = await bcrypt.hash("admin123", 12);
    await prisma.adminUser.upsert({
      where: { email: "admin@n-nodes.com" },
      update: {},
      create: {
        email: "admin@n-nodes.com",
        passwordHash,
        name: "N-Nodes Admin",
        role: "admin",
      },
    });
    console.log("  Seeded admin user: admin@n-nodes.com");
  } catch {
    console.log("  Skipped admin seed (bcryptjs not available)");
  }

  console.log("Seeding complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
