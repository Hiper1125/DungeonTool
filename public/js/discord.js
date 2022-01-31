const RPC = require("discord-rpc");
const { clientId } = require("../../config.json");
RPC.register(clientId);
const client = new RPC.Client({ transport: "ipc" });

const startTimestamp = Date.now();

const connect = () => {
  return new Promise((resolve, reject) => {
    client.login({ clientId }).catch(console.error);

    client.on("connected", async () => {
      console.log("[RPC]: Connected");
    });

    client.on("ready", async () => {
      console.log("[RPC]: Ready");

      client.subscribe("ACTIVITY_JOIN", ({ secret }) => {
        console.log("should join game with secret:", secret);
      }).then((e) => {console.log("Answered with ", e)});

      client.subscribe("ACTIVITY_JOIN_REQUEST", (user) => {
        console.log("user wants to join:", user);
      }).then((e) => {console.log("Answered with ", e)});

      client.on("ACTIVITY_JOIN", ({ secret }) => {
        console.log("should join game with secret:", secret);
      });

      client.on("ACTIVITY_JOIN_REQUEST", (user) => {
        console.log("user wants to join:", user);
      });

      setActivity({
        details: "Dungeon Tool",
        largeImageKey: "tool",
        startTimestamp,
        instance: true,
      });

      resolve(client);
    });
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

const setGame = (
  campaign,
  role,
  currentPlayers,
  maxPlayers,
  joinSecret,
  partyID
) => {
  setActivity({
    details: campaign,
    state: `Playing as a ${role}`,
    largeImageKey: "game",
    largeImageText: campaign,
    smallImageKey: role,
    smallImageText: role,
    partySize: maxPlayers,
    partyMax: currentPlayers,
    partyId: partyID,
    joinSecret: joinSecret,
    startTimestamp,
    instance: true,
  });
};

const getTimeSinceStart = () => {
  return startTimestamp;
};

module.exports = { connect, getUser, setActivity, setGame, getTimeSinceStart };