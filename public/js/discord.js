const RPC = require("discord-rpc");
const client = new RPC.Client({ transport: "ipc" });
const { clientId } = require("../../config.json");
RPC.register(clientId);

const startTimestamp = Date.now();

const connect = () => {
  return new Promise((resolve, reject) => {
    client.on("connected", async () => {
      console.log("[RPC]: Connected");
    });

    client.on("ready", async () => {
      console.log("[RPC]: Ready");

      setActivity({
        details: "Dungeon Tool",
        largeImageKey: "tool",
        startTimestamp,
        instance: true,
      });

      resolve(client);
    });

    client.login({ clientId });
  });
};

const getUser = () => {
  return new Promise(async (resolve, reject) => {
    resolve(client.user);
  });
};

const setActivity = (activity) => {
  client.setActivity(activity, process.pid);
};

const Game = () => {
  setActivity({
    details: "Campaign Name",
    state: "Playing as a role here",
    largeImageKey: "game",
    smallImageKey: "master",
    startTimestamp,
    instance: true,
  });
};

const getTimeSinceStart = () => {
  return startTimestamp;
}

module.exports = { connect, getUser, setActivity, getTimeSinceStart };