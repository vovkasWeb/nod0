/** @format */

const { MongoClient } = require("mongodb");

const client = new MongoClient(
  "mongodb+srv://admin:12345@cluster0.kijyq0f.mongodb.net/?retryWrites=true&w=majority"
);

const start = async () => {
  try {
    await client.connect();
    console.log("Соиденения получино");
    await client.db().createCollection("users");
    const users = client.db().collection("users");
    await users.insertOne({ name: "ff", age: 21 });
    const user = await users.findOne({ name: "ff" });
    console.log(user);
  } catch (e) {
    console.log(e);
  }
};

start();
