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

      client.subscribe("ACTIVITY_JOIN");
      client.subscribe("ACTIVITY_JOIN_REQUEST");

      setActivity({
        details: "Dungeon Tool",
        largeImageKey: "tool",
        startTimestamp,
        instance: true,
      });

      resolve(client);
    });

    client.on("ACTIVITY_JOIN_REQUEST", () => {
      console.log("Join request");
    })

    client.on("ACTIVITY_JOIN", () => {
      console.log("Join");
    })

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
    largeImageText: campaign,
    smallImageKey: role,
    smallImageText: role,
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