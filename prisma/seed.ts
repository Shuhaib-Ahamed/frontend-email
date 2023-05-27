import { PrismaClient } from "@prisma/client";

const prisma: any = new PrismaClient();

const seedData = [{}];

async function main() {
  console.log(`Initialized seeding...`);
  for (const item of seedData) {
    await prisma.collectionName.create({ data: item });
  }
  console.log(`Seeding completed successfully.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
