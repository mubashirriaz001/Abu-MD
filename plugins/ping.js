const { Module, styletext, listall, tiny, isPublic } = require("../lib/");
const { FancyRandom } = require('abu-bot');
Module(
  {
    pattern: "ping",
    fromMe: isPublic,
    desc: "check bot ping",
    type: "user",
  },
  async (message, match) => {
    const start = new Date().getTime();
    const botz = await FancyRandom("Testing Bot Speed")
    await message.reply(botz);
    const end = new Date().getTime();    
const Jsl1 = await FancyRandom("︎Response in " + (end - start) + " ms︎")
    return await message.reply(Jsl1);
  }
);

Module({
  pattern: 'runtime',
  fromMe: isPublic,
  type: 'utility',
  desc: 'Shows Bot Running time'
}, (async (message, match) => {
  var ut_sec = require("os").uptime(); 
  var ut_min = ut_sec/60; 
  var ut_hour = ut_min/60; 
  ut_sec = Math.floor(ut_sec); 
  ut_min = Math.floor(ut_min); 
  ut_hour = Math.floor(ut_hour); 
  ut_hour = ut_hour%60; 
  ut_min = ut_min%60; 
  ut_sec = ut_sec%60; 
  var sec_num = parseInt(process.uptime(), 10);
  var hours   = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  var seconds = sec_num - (hours * 3600) - (minutes * 60);
  var uptime_process = (`Runtime: ${ut_hour} Hour  ${ut_min} minute ${ut_sec} second`)  
  var Jl1 = await FancyRandom(uptime_process)
    return await message.reply(Jl1);
}));


Module(
  {
    pattern: "reboot ?(.*)",
    fromMe: true,
    desc: "Reboot Module.",
    type: "misc",
  },
  async (message) => {
    await message.reply("_Rebooting..._")
    require("supervisor").restart("index.js");
  }
);

Module(
  {
    pattern: "readmore ?(.*)",
    fromMe: isPublic,
    desc: "Readmore generator",
    type: "whatsapp",
  },
  async (message, match) => {
    await message.reply(match.replace(/\+/g, (String.fromCharCode(8206)).repeat(4001)))
  }
);

Module(
  {
    pattern: "wame ?(.*)",
    fromMe: isPublic,
    desc: "wame generator",
    type: "whatsapp",
  },
  async (message, match) => {
    let jsl = 'https://wa.me/' + (message.reply_message.jid || message.mention[0] || match).split('@')[0];
    await message.reply(jsl)
  }
);
