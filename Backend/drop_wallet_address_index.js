const { MongoClient } = require('mongodb');
require('dotenv').config();

(async () => {
  const url = process.env.DATABASE_URL;
  if (!url) {
    console.error('DATABASE_URL is not defined in .env');
    process.exit(1);
  }

  const client = new MongoClient(url);
  try {
    await client.connect();
    const db = client.db();
    const coll = db.collection('User');
    const indexes = await coll.indexes();
    console.log('Indexes on User collection:');
    indexes.forEach((idx) => console.log(JSON.stringify(idx, null, 2)));

    const walletIndex = indexes.find((idx) => idx.name === 'User_walletAddress_key');
    if (walletIndex) {
      console.log('Dropping index:', walletIndex.name);
      await coll.dropIndex(walletIndex.name);
      console.log('Dropped index successfully.');
    } else {
      console.log('No walletAddress unique index found.');
    }
  } catch (err) {
    console.error('Error inspecting indexes:', err);
    process.exit(1);
  } finally {
    await client.close();
  }
})();
