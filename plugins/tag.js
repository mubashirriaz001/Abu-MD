const { Module, parsedJid } = require("../lib/");

Module(
  {
    pattern: "forward ?(.*)",
    fromMe: true,
    desc: "description",
    type: "type",
  },
  async (message, match, m) => {
    if (!match[1]) return await message.sendMessage("*Give me a jid*\nExample .forward jid...");
        if (!message.reply_message) return await message.sendMessage("*Reply to a Message*");
        
    let jid = match
    for (let i of jjhd) {
     let msg =  await message.client.relayMessage(jid, m.quoted.message, {
        messageId: m.quoted.key.id,
      });
      console.log(msg)
    }   
  }
);

Module(
  {
    pattern: "send ?(.*)",
    fromMe: true,
    desc: "description",
    type: "type",
  },
  async (message, match, m) => {
    if (!match[1]) return await message.sendMessage("*Give me a jid*\nExample .forward jid...");
        if (!message.reply_message) return await message.sendMessage("*Reply to a Message*");
        
    let jid = match
    for (let i of jjhd) {
     let msg =  await message.client.relayMessage(jid, m.quoted.message, {
        messageId: m.quoted.key.id,
      });
      console.log(msg)
    }   
  }
);

