const mongoose = require("mongoose");

// const DBurl = "";
// mongoose.connect(DBurl).then(console.log("connected to the database"));

async function connectDB(dbUrl) {
  console.log("Connecting to database");
  return mongoose
    .connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log("Connected to database successfully");
    })
    .catch((e) => {
      console.log("Failed connecting to database");
      console.error(e);
    });
}

async function disconnectDB() {
  await mongoose.disconnect();
}

module.exports = { connectDB, disconnectDB };
