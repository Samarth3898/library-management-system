const { MongoMemoryServer } = require("mongodb-memory-server");
const { connectDB, disconnectDB } = require("./database");

let mongod;

async function startDbServer() {
  console.log("starting DB server");
  mongod = new MongoMemoryServer();
  await mongod.start();
  const uri = mongod.getUri();
  console.log(uri);
  await connectDB(uri);
  console.log("started DB server");
}

async function stopDBServer() {
  console.log("stopping DB server");
  await disconnectDB();
  await mongod.stop();
  new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Stopped DB Server");
}

module.exports = { startDbServer, stopDBServer };
