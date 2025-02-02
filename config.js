const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "zyx3WSaC#JtYsqH5YOZ1MPXXYGlll3A4m2mBQkmsL3xthJ1v6mLw", // 𝐀𝐃𝐃 𝐒𝐄𝐒𝐒𝐈𝐎𝐍 𝐈𝐃 
SUDO_NB: process.env.SUDO_NB || "", // 𝐀𝐃𝐃 𝐘𝐎𝐔𝐑 𝐍𝐔𝐌𝐁𝐄𝐑 𝐖𝐈𝐓𝐇 𝐂𝐎𝐔𝐍𝐓𝐑𝐘 𝐂𝐎𝐃𝐄
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true", //  𝐓𝐑𝐔𝐄 𝐎𝐑 𝐅𝐀𝐋𝐒𝐄
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
    OWNER_NUMBER: "",
MODE: process.env.MODE || "public", //𝐏𝐑𝐈𝐕𝐀𝐓𝐄 𝐎𝐑 𝐏𝐔𝐁𝐋𝐈𝐂
BOT_NAME: process.env.BOT_NAME || "ROMEK-XD-V2",
// add bot namw here for menu
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "919341378016",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ROMEK-XD",
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʀᴏᴍᴇᴋ-xᴅ-ᴠ2*",
};
