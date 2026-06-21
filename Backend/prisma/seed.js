const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('MySecret123', 10);
  await prisma.user.create({
    data: {
      firstName: 'Test',
      lastName: 'User',
      username: 'testuser',
      email: 'test@example.com',
      password: hashedPassword,
      role: 'ENTREPRENEUR'
    }
  });
  console.log('Dummy user seeded');
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
