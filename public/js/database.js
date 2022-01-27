const { dbName, dbUser, dbPassword, cluster } = require("../../config.json");
const { MongoClient } = require("mongodb");

const uri = `mongodb+srv://${dbUser}:${dbPassword}@${cluster}.yeabh.mongodb.net/${dbName}?retryWrites=true&w=majority`;

const log = false;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connect = async () => {
  try {
    await client.connect();
    if (log) console.log("Connected to database");
  } catch (err) {
    console.log(err);
  }
};

const disconnect = async () => {
  client.close();
  if (log) console.log("Disconnected from database");
};

const createCharacter = async (character) => {
  try {
    await connect();

    const insertion = await client
      .db(dbName)
      .collection("characters")
      .insertOne(character);

    if (log) console.log("[!]: Character inserted" + insertion.insertedId);

    disconnect();
  } catch (error) {
    console.error(error);
  }
};

const findCharacter = async (filter) => {
  try {
    await connect();

    const character = await client
      .db(dbName)
      .collection("characters")
      .findOne(filter);

    if (log) {
      console.log("[!]: Character found");
      console.log(character);
    }

    disconnect();

    return character;
  } catch (error) {
    console.error(error);
  }
};

const findAllCharacters = async (filter) => {
  try {
    await connect();

    const character = await client
      .db(dbName)
      .collection("characters")
      .find(filter)
      .toArray();

    if (log) {
      console.log("[!]: Character found");
      console.log(character);
    }

    disconnect();

    return character;
  } catch (error) {
    console.error(error);
  }
};

const editCharacter = async (filter, updateParam) => {
  try {
    await connect();

    const character = await client
      .db(dbName)
      .collection("characters")
      .updateOne(filter, updateParam);

    if (log) {
      console.log("[!]: Character found");
      console.log(character);
    }

    disconnect();

    return character;
  } catch (error) {
    console.error(error);
  }
};

const deleteCharacter = async (name) => {
  try {
    await connect();

    const character = await client
      .db(dbName)
      .collection("characters")
      .deleteOne({ name: name });

    if (log) {
      console.log("[!]: Character found");
      console.log(character);
    }

    disconnect();

    return character;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  createCharacter,
  findCharacter,
  findAllCharacters,
  editCharacter,
  deleteCharacter,
};
