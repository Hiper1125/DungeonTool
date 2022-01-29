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

const setGame = (campaign, role, currentPlayers, maxPlayers, joinSecret, partyID) => {
  setActivity({
    details: campaign,
    state: `Playing as a ${role}`,
    largeImageKey: "game",
    smallImageKey: role,
    startTimestamp,
    instance: true,
    partySize: maxPlayers,
    partyMax: currentPlayers,
    partyId: partyID,
    joinSecret: joinSecret
  });
};

const getTimeSinceStart = () => {
  return startTimestamp;
}

module.exports = { connect, getUser, setActivity, setGame, getTimeSinceStart };