const { dbName, dbUser, dbPassword, cluster } = require("../../config.json");
const { MongoClient } = require("mongodb");

const uri = `mongodb+srv://${dbUser}:${dbPassword}@${cluster}.yeabh.mongodb.net/${dbName}?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const createCharacter = async (character) => {
  try {
    await client.connect();
    console.log("[!]: Connected to database");

    const insertion = await client
      .db(dbName)
      .collection("characters")
      .insertOne(character);
    console.log("[!]: Character inserted" + insertion.insertedId);

    await client.close();
    console.log("[!]: Disconnected from database");
  } catch (error) {
    console.error(error);
  }
};

const findCharacter = async (filter) => {
  try {
    await client.connect();
    console.log("[!]: Connected to database");

    const character = await client
      .db(dbName)
      .collection("characters")
      .findOne(filter);

    console.log("[!]: Character found");
    console.log(character);

    await client.close();
    console.log("[!]: Disconnected from database");

    return character;
  } catch (error) {
    console.error(error);
  }
};

const findAllCharacters = async (filter) => {
  try {
    await client.connect();
    console.log("[!]: Connected to database");

    const character = await client
      .db(dbName)
      .collection("characters")
      .find({}, { playerId: { $elemMatch: filter.playerId } })
      .toArray(function (err, result) {
        if (err) throw err;
        console.log("result: " + result);
        client.close();
      });
    console.log("[!]: Disconnected from database");

    return character;
  } catch (error) {
    console.error(error);
  }
};

const editCharacter = async (filter, updateParam) => {
  try {
    await client.connect();
    console.log("[!]: Connected to database");

    const character = await client
      .db(dbName)
      .collection("characters")
      .updateOne(filter, updateParam);

    console.log("[!]: Character found");
    console.log(character);

    await client.close();
    console.log("[!]: Disconnected from database");

    return character;
  } catch (error) {
    console.error(error);
  }
};

const deleteCharacter = async (name) => {
  try {
    await client.connect();
    console.log("[!]: Connected to database");

    const character = await client
      .db(dbName)
      .collection("characters")
      .deleteOne({ name: name });

    console.log("[!]: Character found");
    console.log(character);

    await client.close();
    console.log("[!]: Disconnected from database");

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
