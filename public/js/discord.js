const RPC = require("discord-rpc");
const client = new RPC.Client({ transport: "ipc" });
const { clientId } = require("../../config.json");
RPC.register(clientId);

const startTimestamp = Date.now();

const connect = () => {
  return new Promise((resolve, reject) => {
    client.on("connected", async () => {
      console.log("RPC Connected.");
    });

    client.on("ready", async () => {
      console.log("Client Ready.");
    });

    client.login({ clientId });

    resolve();
  });
};

const temp = () => {
  let gameActivity = {
    details: "Campaign Name",
    state: "Playing as a role here",
    largeImageKey: "game",
    smallImageKey: "master",
    startTimestamp,
    instance: true,
  };

  client.setActivity(gameActivity, process.pid);
};

const getUser = () => {
  return client.user;
};

module.exports = { connect, getUser };
