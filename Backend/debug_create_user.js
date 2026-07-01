const { prisma } = require('./prisma');
const bcrypt = require('bcrypt');

(async () => {
  try {
    const hashed = await bcrypt.hash('pass1234', 10);
    const uniq = Date.now();
    const data = {
      firstName: 'ScriptDebug',
      lastName: 'User',
      username: `scriptdebuguser_${uniq}`,
      email: `scriptdebug+${uniq}@example.com`,
      password: hashed,
      role: 'INVESTOR',
      country: 'US',
      phone: '1234567890'
    };
    console.log('Create payload:', data);
    const user = await prisma.user.create({ data });
    console.log('Created user:', user);
  } catch (err) {
    console.error('Error creating user:', err);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
