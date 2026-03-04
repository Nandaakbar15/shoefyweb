const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcryptjs");

async function main() {
  // Hashing password dengan bcryptjs
  const hashedPassword = await bcrypt.hash("password123", 10); // '10' adalah salt rounds

  // Data user yang akan di-seed
  const userData = [
    {
      email: "admin@gmail.com",
      username: "admin123",
      // Simpan password yang sudah di-hash
      password: hashedPassword,
      role: "admin",
    },
  ];

  // Tambahkan data user ke database
  await prisma.user.createMany({
    data: userData,
    skipDuplicates: true,
  });
}

main()
  .then(() => {
    console.log("Seeding selesai ✅");
  })
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
