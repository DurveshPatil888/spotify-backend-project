const mongoose = require('mongoose');
const dns = require('dns');

dns.setServers(['1.1.1.1', '8.8.8.8']);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('DB connected');
  } catch (err) {
    console.error('Database Connection Error', err);
    process.exit(1);
  }
};

module.exports = connectDB;
