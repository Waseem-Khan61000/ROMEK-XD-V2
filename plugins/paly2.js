const { cmd, commands } = require('../command');
const fg = require('api-dylux');
const yts = require('yt-search');
const fs = require('fs');

// Play2 Command
cmd({
    pattern: "play2",
    alias: ["ytmp3", "audio"],
    desc: "Download songs",
    category: "download",
    react: "🎵",
    filename: __filename
}, async (conn, mek, m, {
    from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply
}) => {
    try {
        if (!q) return reply("*Please provide a link or a name 🔎...*");

        const search = await yts(q);
        const anuan = search.all; // All search results
        const data = search.videos[0]; // First result
        const url = data.url;

        // Format search results
        let teks = "\n  *[ Result From Youtube Search ]*\n\n";
        for (let i = 0; i < anuan.length; i++) {
            let res = anuan[i];
            teks += `* *Title :* ${res.title}\n* *Duration :* ${res.timestamp}\n* *Upload :* ${res.ago}\n* *Views :* ${res.views}\n* *Author :* ${res?.author?.name || "Unknown"}\n* *Source :* ${res.url}\n\n`;
        }

        // Display results with buttons
        await conn.sendMessage(from, {
            document: fs.readFileSync('./package.json'),
            mimetype: "application/vnd.android.package-archive",
            caption: teks,
            fileName: `ROMEK-XD`,
            footer: "© 𝑾𝒂𝒏𝒏 𝑫𝒆𝒗𝒆𝒍𝒐𝒑𝒎𝒆𝒏𝒕",
            buttons: [
                {
                    buttonId: `d ${data.url} ytmp3`,
                    buttonText: { displayText: "Download MP3" },
                    type: 2
                },
                {
                    buttonId: `d ${data.url} ytmp4`,
                    buttonText: { displayText: "Download MP4" },
                    type: 2
                }
            ],
            contextInfo: {
                mentionedJid: [`919341378016@s.whatsapp.net`, m.sender],
                forwardedNewsletterMessageInfo: {
                    newsletterName: `ROMEK-XD IᑎᖴOᖇᗰᗩTOᑎ`,
                    newsletterJid: "120363321472746562@newsletter"
                }
            },
            headerType: 4
        }, { quoted: mek });

        // Download and send audio
        let down = await fg.yta(url);
        let downloadUrl = down.dl_url;

        await conn.sendMessage(from, { audio: { url: downloadUrl }, mimetype: "audio/mpeg" }, { quoted: mek });

    } catch (e) {
        reply(`${e}`);
    }
});

// Darama Command (Video)
cmd({
    pattern: "darama",
    alias: ["video2", "ytmp4"],
    desc: "Download video",
    category: "download",
    react: "🎥",
    filename: __filename
}, async (conn, mek, m, {
    from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply
}) => {
    try {
        if (!q) return reply("*Please provide a link or a name 🔎...*");

        const search = await yts(q);
        const data = search.videos[0];
        const url = data.url;

        // Description for video
        let desc = `╭━━━〔 *KHANX-MD* 〕━━━┈⊷
┃▸╭───────────
┃▸┃๏ *VIDEO DOWNLOADER*
┃▸└───────────···๏
╰────────────────┈⊷
╭━❮ *Download Video* ❯━┈⊷
┃▸╭─────────────·๏
┃▸┃๏ *Title* - ${data.title}
┃▸┃๏ *Views* - ${data.views}
┃▸┃๏ *Description* - ${data.description}
┃▸┃๏ *Duration:* ${data.timestamp}
┃▸┃๏ *Link* - ${data.url}
┃▸┃๏ *Ago* - ${data.ago}
┃▸└────────────┈⊷
╰━━━━━━━━━━━━━━━⪼
> *© Pᴏᴡᴇʀᴇᴅ Bʏ Jᴀᴡᴀᴅ TᴇᴄʜX ♡*`;

        await conn.sendMessage(from, { image: { url: data.thumbnail }, caption: desc }, { quoted: mek });

        // Download and send video
        let down = await fg.ytv(url);
        let downloadUrl = down.dl_url;

        await conn.sendMessage(from, { video: { url: downloadUrl }, mimetype: "video/mp4" }, { quoted: mek });

    } catch (e) {
        reply(`${e}`);
    }
});