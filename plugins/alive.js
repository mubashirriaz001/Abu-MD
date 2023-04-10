const {
  Module,
  isPublic,
  sendMenu
} = require("../lib/");

Module
	(
		{
            pattern: "ty?(.*)",
	    fromMe: isPublic,
	    desc: "show your menu items",
            type: "info",
            },
		async (message, match) => {			
		return await sendMenu(message);

})
