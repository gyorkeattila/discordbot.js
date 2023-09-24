const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

client.on("ready", () => {
  console.log("Szia uram");
});

client.on("messageCreate", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});









client.login("OTEwNjQyNjg0ODAzMjg1MDcz.G1GmuG.0svwfyVOdYOf8QsRW16WVr4Ia5LltP0ekXfoQ0");
