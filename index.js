const Discord = require("discord.js");
const client = new Discord.Client();
const PREFIX = "!";
const TOKEN = "Nzc4MTU2MjU2Mzg4NzEwNDIw.X7N4fA.CtGPiNlUYCj108ioVLCiKRRZSnQ";

client.on("ready", () => {
  console.log(`Logged in as \n${client.user.tag}`);
  setInterval(() => {
    const statuses = [
      `${client.guilds.cache.size} servers | dsc.gg/tunaaa`,
      `${PREFIX}help | why are bots so cool?`,];

    const status = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(status, { type: "WATCHING" });
  }, 5000);

});
client.login(process.env.TOKEN);
