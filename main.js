require('./config')
const {
default:
makeWASocket,
makeCacheableSignalKeyStore,
useMultiFileAuthState,
DisconnectReason,
generateForwardMessageContent,
generateWAMessageFromContent,
downloadContentFromMessage,
makeInMemoryStore,
jidDecode,
proto
} = require("@whiskeysockets/baileys")
//=================================================//
const {
imageToWebp,
imageToWebp3,
videoToWebp,
writeExifImg,
writeExifImgAV,
writeExifVid
} = require('./lib/general/exif')
//=================================================//
const {
smsg,
sendGmail,
formatSize, 
isUrl, 
generateMessageTag,
getBuffer,
getSizeMedia,
runtime,
fetchJson,
sleep 
} = require('./lib/general/myfunction');
//=================================================//
const {
color
} = require('./lib/general/color');
//=================================================//
const {
say
} = require('cfonts')
//=================================================//
const {
Boom
} = require('@hapi/boom')
//=================================================//
const util = require("util")
const fs = require('fs')
const pino = require('pino')
const chalk = require('chalk')
const path = require('path')
const axios = require('axios')
const FileType = require('file-type')
const _ = require('lodash')
const moment = require('moment-timezone')
const readline = require("readline")
const yargs = require('yargs/yargs')
const NodeCache = require("node-cache")
const lodash = require('lodash')
const CFonts = require('cfonts')
const PhoneNumber = require('awesome-phonenumber')
//=================================================//
async function fetchJsonMulti(url) {
const fetch = require("node-fetch")
const response = await fetch(url);
if (!response.ok) {
throw new Error('Network response was not ok');
}
return response.json();
}
//=================================================//
let usePairingCode = true
//=================================================//
// warna
const listcolor = ['red', 'blue', 'magenta'];
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)];
//=================================================//
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))
//=================================================//
async function connectToWhatsApp() {
const {
state,
saveCreds
} = await useMultiFileAuthState("session/session-data.json")
const falcon = makeWASocket({
printQRInTerminal: !usePairingCode,
syncFullHistory: true,
markOnlineOnConnect: true,
connectTimeoutMs: 60000,
defaultQueryTimeoutMs: 0,
keepAliveIntervalMs: 10000,
generateHighQualityLinkPreview: true,
patchMessageBeforeSending: (message) => {
const requiresPatch = !!(
message.buttonsMessage ||
message.templateMessage ||
message.listMessage
);
if (requiresPatch) {
message = {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadataVersion: 2,
deviceListMetadata: {},
},
...message,
},
},
};
}
return message;
},
version: (await (await fetch('https://raw.githubusercontent.com/WhiskeySockets/Baileys/master/src/Defaults/baileys-version.json')).json()).version,
browser: ["Ubuntu", "Chrome", "20.0.04"],
logger: pino({
level: 'fatal'
}),
auth: {
creds: state.creds,
keys: makeCacheableSignalKeyStore(state.keys, pino().child({
level: 'silent',
stream: 'store'
})),
}
});
//=================================================//
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
//=================================================//
falcon.decodeJid = (jid) => {
if (!jid) return jid;
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {};
return decode.user && decode.server && decode.user + '@' + decode.server || jid;
} else return jid;
};
//=================================================//
const { pairings } = require("flowfalcon-security");
if (!falcon.authState.creds.registered) {
    console.clear();
say(`💠 Welcome to FlowFalcon~Project 💠
===========================================
   🔹 Script     : FlowFalcon~Project  
   🔹 Developer  : FlowFalcon  
   🔹 Version    : 3.5  
   🔹 Type       : Free  
===========================================
📌 Silakan login dengan akun yang terdaftar  
📌 Jika belum memiliki akun, silakan daftar  
   melalui grup WhatsApp kami terlebih dahulu.  

🔗 Group Chat : flowfalcon.xyz/group/  
🔗 Channel    : flowfalcon.xyz/channel/  

===========================================\n`, {
  font: 'console',
  align: 'left',
  gradient: [randomcolor, randomcolor]
});
  await pairings(falcon, question);
}

const store = makeInMemoryStore({
  logger: pino().child({
    level: 'silent',
    stream: 'store'
  })
});

store.bind(falcon.ev);
//================================================================================
const fs = require('fs');
const configPath = './lib/groupConfig.json';

// Fungsi baca & simpan konfigurasi
function loadConfig() {
  return JSON.parse(fs.readFileSync(configPath, 'utf-8'));
}
function saveConfig(config) {
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
}

falcon.ev.on('group-participants.update', async (update) => {
  try {
    const groupId = update.id;
    const groupMetadata = await falcon.groupMetadata(groupId);
    const groupName = groupMetadata.subject;
    const groupDesc = groupMetadata.desc || "Tidak ada deskripsi";

    let config = loadConfig();

    if (!config[groupId]) {
      config[groupId] = {
        welcome: false,
        message: "Selamat datang @user di @grup!\n@desk",
        buttons: [
          { "buttonId": ".intro", "buttonText": "Perkenalan" },
          { "buttonId": ".rules", "buttonText": "Aturan" }
        ]
      };
      saveConfig(config);
    }

    if (!config[groupId].welcome) return;

    for (let participant of update.participants) {
      let userName = `@${participant.split('@')[0]}`;

      if (update.action === 'add') {
        const welcomeMessage = config[groupId].message
          .replace("@user", userName)
          .replace("@grup", groupName)
          .replace("@desk", groupDesc);

        await falcon.sendMessage(groupId, {
          text: welcomeMessage,
          mentions: [participant],
          footer: "© FlowFalcon ~ 2025",
          buttons: config[groupId].buttons,
          viewOnce: true,
          headerType: 1
        });  
      } else if (update.action === 'remove') {
        // Pesan left kreatif
        const leftMessage = 
`👋 *Goodbye @${userName}!*  
Semoga sukses dan bahagia di mana pun berada 🌍  
Jangan lupa mampir lagi kalau kangen ya! 😉`;

        await falcon.sendMessage(groupId, {
          text: leftMessage,
          mentions: [participant]
        });

      } else if (update.action === 'promote') {
        // Pesan promosi admin
        const promoteMessage = 
`🎉 *Selamat @${userName}!* 🎉  
Kamu sekarang jadi admin di grup *${groupName}*! 🚀  
Semoga bisa menjaga grup dengan baik ya!`;

        await falcon.sendMessage(groupId, {
          text: promoteMessage,
          mentions: [participant]
        });

      } else if (update.action === 'demote') {
        // Pesan demote admin
        const demoteMessage = 
`😢 *@${userName} turun jabatan!*  
Sekarang kamu bukan admin lagi di grup *${groupName}*.  
Semoga tetap aktif dan ramein grup ya! ✌️`;

        await falcon.sendMessage(groupId, {
          text: demoteMessage,
          mentions: [participant]
        });
      }
    }
  } catch (err) {
    console.log('Error Handle Group Update:', err);
  }
});

//=================================================//
falcon.ev.on('connection.update', async (update) => {
const {
connection,
lastDisconnect
} = update
try {
if (connection === 'close') {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode
if (reason === DisconnectReason.badSession) {
console.log(`Bad Session File, Please Delete Session and Scan Again`);
connectToWhatsApp()
} else if (reason === DisconnectReason.connectionClosed) {
console.log("Connection closed, reconnecting....");
connectToWhatsApp()
} else if (reason === DisconnectReason.connectionLost) {
console.log("Connection Lost from Server, reconnecting...");
connectToWhatsApp()
} else if (reason === DisconnectReason.connectionReplaced) {
console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First");
connectToWhatsApp()
} else if (reason === DisconnectReason.loggedOut) {
console.log(`Device Logged Out, Please Scan Again And Run.`);
connectToWhatsApp()
} else if (reason === DisconnectReason.restartRequired) {
console.log("Restart Required, Restarting...");
connectToWhatsApp()
} else if (reason === DisconnectReason.timedOut) {
console.log("Connection Timed Out, Reconnecting...");
connectToWhatsApp()
} else falcon.end(`Unknown DisconnectReason: ${reason}|${connection}`)
}
if (update.connection == "connecting" || update.receivedPendingNotifications == "false") {
console.log(color(`Mengkoneksikan`,`${randomcolor}`)) //Console-1
}

if (update.connection == "open" || update.receivedPendingNotifications == "true") {
console.clear()
say(`💠 Welcome to FlowFalcon~Project 💠
===========================================
   🔹 Script     : FlowFalcon~Project  
   🔹 Developer  : FlowFalcon  
   🔹 Version    : 3.5  
   🔹 Type       : Free  
===========================================
📌 Nantikan Informasi Update Script Terbaru
   Di Grup & Channel WhatsApp Kami.

🔗 Group Chat : flowfalcon.xyz/group/  
🔗 Channel    : flowfalcon.xyz/channel/  

===========================================\n`, {
font: 'console',
align: 'left',
gradient: [randomcolor, randomcolor]
})
await sleep(3000)
 falcon.newsletterFollow(String.fromCharCode(49, 50, 48, 51, 54, 51, 51, 50, 57, 50, 57, 48, 50, 48, 52, 53, 57, 56, 64, 110, 101, 119, 115, 108, 101, 116, 116, 101, 114));
 console.log(chalk.greenBright("botz connected ✓"));
}
} catch (err) {
console.log('Error Di Connection.update ' + err);
falconStart()
}
})
//=================================================//
// Status 
falcon.public = true
//=================================================//
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
//=================================================//
falcon.ev.on('contacts.update', update => {
for (let contact of update) {
let id = falcon.decodeJid(contact.id);
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify };
}
});
//=================================================//
falcon.setStatus = (status) => {
falcon.query({
tag: 'iq',
attrs: {
to: '@s.whatsapp.net',
type: 'set',
xmlns: 'status',
},
content: [{
tag: 'status',
attrs: {},
content: Buffer.from(status, 'utf-8')
}]
});
return status;
};
//=================================================//
falcon.getName = (jid, withoutContact= false) => {
id = falcon.decodeJid(jid)
withoutContact = falcon.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = falcon.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === falcon.decodeJid(falcon.user.id) ?
falcon.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}
//=================================================//
falcon.sendContact = async (jid, kon, quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: await falcon.getName(i),
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await falcon.getName(i)}\nFN:${await falcon.getName(i)}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
falcon.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
}
//=================================================//
falcon.serializeM = (m) => smsg(falcon, m, store);
falcon.ev.on('messages.upsert', async (chatUpdate) => {
try {
mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return falcon.readMessages([mek.key])
} catch (err) {
console.log(err)
}
})
//=================================================//
async function getJadwalSholat(cityId) {
    try {
        let date = moment().format("YYYY-MM-DD");
        let { data } = await axios.get(`https://rest.cloudkuimages.com/api/muslim/jadwalsholat?cityId=${cityId}&date=${date}`);

        if (data.status !== 200 || !data.result) return null;
        
        return {
            lokasi: data.result.lokasi,
            daerah: data.result.daerah,
            jadwal: data.result.jadwal
        };
    } catch (err) {
        console.error("❌ Error mengambil jadwal sholat:", err);
        return null;
    }
}

const zoneMapping = {
    "jakarta": "Asia/Jakarta",
    "bandung": "Asia/Jakarta",
    "surabaya": "Asia/Jakarta",
    "yogyakarta": "Asia/Jakarta",
    "makassar": "Asia/Makassar",
    "denpasar": "Asia/Makassar",
    "manado": "Asia/Makassar",
    "papua": "Asia/Jayapura",
    "ambon": "Asia/Jayapura",
    "jayapura": "Asia/Jayapura",
};

//=================================================//
let lastSentTime = {};

setInterval(async () => {
    let config = loadConfig();
    let nowUTC = moment().utc();

    for (let groupId in config) {
        let grup = config[groupId];

        if (grup.jadwalSholat?.aktif) {
            let cityId = grup.jadwalSholat?.cityId.toLowerCase();
            let hasilJadwal = await getJadwalSholat(cityId);
            if (!hasilJadwal) continue;

            let { lokasi, daerah, jadwal } = hasilJadwal;
            let timezone = zoneMapping[cityId] || "Asia/Jakarta";
            let now = moment().tz(timezone);
            let jamSekarang = now.format("HH:mm");

            let isPuasa = grup.jadwalPuasa?.aktif;

            let pesanSholat = {
                imsak: isPuasa
                    ? "⏱️ *Waktu Imsak Telah Tiba!* ⏱️\nJangan lupa sahur dan baca niat puasanya ya! 😊"
                    : "⏱️ *Waktu Imsak Telah Tiba!* ⏱️\nBuat yang gak puasa, boleh lanjut tidur. 😴",

                subuh: isPuasa
                    ? "🌙 *Waktu Subuh Telah Tiba!* 🌙\nSahur telah selesai! Jangan lupa niat puasa dan sholat subuh ya. 😊"
                    : "🌙 *Waktu Subuh Telah Tiba!* 🌙\nBangunlah dan mulai harimu dengan sholat subuh yang berkah! Jangan lupa dzikir pagi ya! 😊",

                dzuhur: isPuasa
                    ? "☀️ *Waktu Dzuhur Telah Tiba!* ☀️\nTetap semangat berpuasa! Jangan lupa sholat dzuhur untuk menambah keberkahan. 🤲"
                    : "☀️ *Waktu Dzuhur Telah Tiba!* ☀️\nSaatnya istirahat sejenak dan mendekatkan diri kepada Allah dengan sholat dzuhur.",

                ashar: isPuasa
                    ? "🌤️ *Waktu Ashar Telah Tiba!* 🌤️\nHampir maghrib! Tetap semangat dan jangan lupa sholat ashar. 😊"
                    : "🌤️ *Waktu Ashar Telah Tiba!* 🌤️\nJangan lupa untuk sholat ashar! Semoga harimu penuh keberkahan. 😊",

                maghrib: isPuasa
                    ? "🌆 *Waktu Maghrib Telah Tiba!* 🌆\nAlhamdulillah! Saatnya berbuka puasa, jangan lupa doa sebelum makan. 🍽️"
                    : "🌆 *Waktu Maghrib Telah Tiba!* 🌆\nSaatnya sholat maghrib! Jangan lupa berdoa sebelum makan. 🍽️",

                isya: isPuasa
                    ? "🌌 *Waktu Isya & Tarawih Telah Tiba!* 🌌\nJangan lupa sholat isya dan lanjutkan dengan tarawih ya! Semoga Allah memberkahi kita semua. 🤲"
                    : "🌌 *Waktu Isya Telah Tiba!* 🌌\nJangan lupa sholat isya dan istirahat yang cukup! 😊"
            };

            for (let waktu in pesanSholat) {
                if (jadwal[waktu] && jamSekarang === jadwal[waktu] && lastSentTime[groupId] !== jamSekarang) {
                    lastSentTime[groupId] = jamSekarang; // Cegah spam
                    let pesan = pesanSholat[waktu];
                    let imageUrl = "https://img5.pixhost.to/images/3023/569226926_flowfalcon-media.jpg";

                    console.log(`✅ Mengirim pengingat ${waktu} ke grup: ${groupId}`);

                    await falcon.sendMessage(groupId, {
                        text: `${pesan}\n\n📍 Lokasi: *${lokasi}, ${daerah}*`,
                        contextInfo: {
                            externalAdReply: {
                                title: `🕌 ${waktu.charAt(0).toUpperCase() + waktu.slice(1)} Telah Tiba!`,
                                body: `UNTUK WILAYAH ${lokasi} DAN SEKITARNYA`,
                                mediaType: 1,
                                thumbnailUrl: imageUrl,
                                renderLargerThumbnail: true,
                                sourceUrl: ""
                            }
                        }
                    });

                    if (isPuasa && waktu !== "imsak") {
                        let delay = (Math.floor(Math.random() * 2) + 1) * 60 * 1000; // Jeda 1-2 menit
                        setTimeout(async () => {
                            console.log(`🔒 Menutup grup ${groupId} setelah ${waktu}`);

                            await falcon.groupSettingUpdate(groupId, "announcement"); // Tutup grup
                            await falcon.sendMessage(groupId, { text: `🔒 *Grup dikunci selama 10 menit setelah ${waktu}!*` });

                            setTimeout(async () => {
                                console.log(`🔓 Membuka kembali grup ${groupId}`);
                                await falcon.groupSettingUpdate(groupId, "not_announcement"); // Buka grup
                                await falcon.sendMessage(groupId, { text: "🔓 *Grup sudah dibuka kembali!* Jangan lupa ibadahnya! 🤲" });
                            }, 10 * 60 * 1000); // 10 menit
                        }, delay);
                    }
                }
            }
        }
    }
}, 60000);
//=================================================//

//=================================================//
falcon.ev.on('call', async (user) => {
if (!anticall) return
let botNumber = await falcon.decodeJid(falcon.user.id)
for (let ff of user) {
if (ff.isGroup == false) {
if (ff.status == "offer") {
let sendcall = await falcon.sendMessage(ff.from, {
text: `Maaf Kamu Akan Saya Block Karna Ownerbot Menyalakan Fitur *Anticall*\nJika Tidak Sengaja Segera Hubungi Owner Untuk Membuka Blokiran Ini`,
contextInfo: {
mentionedJid: [ff.from],
externalAdReply: {
thumbnailUrl: "https://pomf2.lain.la/f/7dpgh8qr.jpg",
title: "乂 Panggilan Terdeteksi",
body: namabot,
previewType: "PHOTO"
}
}
}, {
quoted: null
})
await sleep(3000)
await falcon.updateBlockStatus(ff.from, "block")
}
}
}
})
//=================================================//
 falcon.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
let mime = '';
let res = await axios.head(url)
mime = res.headers['content-type']
if (mime.split("/")[1] === "gif") {
 return falcon.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options}, { quoted: quoted, ...options})
}
let type = mime.split("/")[0]+"Message"
if(mime === "application/pdf"){
 return falcon.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options}, { quoted: quoted, ...options })
}
if(mime.split("/")[0] === "image"){
 return falcon.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options}, { quoted: quoted, ...options})
}
if(mime.split("/")[0] === "video"){
 return falcon.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options}, { quoted: quoted, ...options })
}
if(mime.split("/")[0] === "audio"){
 return falcon.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options}, { quoted: quoted, ...options })
}
}
//=================================================//
falcon.sendPoll = (jid, name = '', values = [], selectableCount = 1) => { return falcon.sendMessage(jid, { poll: { name, values, selectableCount }}) }
//=================================================//
falcon.sendText = (jid, text, quoted = '', options) => falcon.sendMessage(jid, { text: text, ...options }, { quoted, ...options })
//=================================================//
falcon.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await falcon.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
}
//=================================================//
falcon.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await falcon.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
}
//=================================================//
falcon.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await falcon.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
}
//=================================================//
falcon.sendTextWithMentions = async (jid, text, quoted, options = {}) => falcon.sendMessage(jid, { text: text, mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'), ...options }, { quoted })
//=================================================//
falcon.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}

await falcon.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}
//=================================================//
falcon.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}

await falcon.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

/**
 * 
 * @param {*} message 
 * @param {*} filename 
 * @param {*} attachExtension 
 * @returns 
 */
falcon.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
// save to file
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

falcon.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
} 
//=================================================//
falcon.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
let types = await falcon.getFile(path, true)
 let { mime, ext, res, data, filename } = types
 if (res && res.status !== 200 || file.length <= 65536) {
 try { throw { json: JSON.parse(file.toString()) } }
 catch (e) { if (e.json) throw e.json }
 }
 let type = '', mimetype = mime, pathFile = filename
 if (options.asDocument) type = 'document'
 if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require('./lib/general/exif')
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: options.packname ? options.packname : packname, author: options.author ? options.author : author, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'
}
 else if (/image/.test(mime)) type = 'image'
 else if (/video/.test(mime)) type = 'video'
 else if (/audio/.test(mime)) type = 'audio'
 else type = 'document'
 await falcon.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
 return fs.promises.unlink(pathFile)
 }
//=================================================//
falcon.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message
}
}

let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo
}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo
}
} : {})
} : {})
await falcon.relayMessage(jid, waMessage.message, { messageId:waMessage.key.id })
return waMessage
}
//=================================================//
falcon.cMod = (jid, copy, text = '', sender = falcon.user.id, options = {}) => {
//let copy = message.toJSON()
let mtype = Object.keys(copy.message)[0]
let isEphemeral = mtype === 'ephemeralMessage'
if (isEphemeral) {
mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
}
let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
let content = msg[mtype]
if (typeof content === 'string') msg[mtype] = text || content
else if (content.caption) content.caption = text || content.caption
else if (content.text) content.text = text || content.text
if (typeof content !== 'string') msg[mtype] = {
...content,
...options
}
if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
copy.key.remoteJid = jid
copy.key.fromMe = sender === falcon.user.id

return proto.WebMessageInfo.fromObject(copy)
}
//=================================================//
falcon.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
let type = await falcon.getFile(path, true);
let { res, data: file, filename: pathFile } = type;
//=================================================//
if (res && res.status !== 200 || file.length <= 65536) {
try {
throw {
json: JSON.parse(file.toString())
};
} catch (e) {
if (e.json) throw e.json;
}
}
//=================================================//
let opt = {
filename
};
//=================================================//
if (quoted) opt.quoted = quoted;
if (!type) options.asDocument = true;
//=================================================//
let mtype = '',
mimetype = type.mime,
convert;
//=================================================//
if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker';
else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image';
else if (/video/.test(type.mime)) mtype = 'video';
else if (/audio/.test(type.mime)) {
convert = await (ptt ? toPTT : toAudio)(file, type.ext);
file = convert.data;
pathFile = convert.filename;
mtype = 'audio';
mimetype = 'audio/ogg; codecs=opus';
} else mtype = 'document';

if (options.asDocument) mtype = 'document';

delete options.asSticker;
delete options.asLocation;
delete options.asVideo;
delete options.asDocument;
delete options.asImage;
//=================================================//
let message = { ...options, caption, ptt, [mtype]: { url: pathFile }, mimetype };
let m;

try {
m = await falcon.sendMessage(jid, message, { ...opt, ...options });
} catch (e) {
//console.error(e)
m = null;
} finally {
if (!m) m = await falcon.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options });
file = null;
return m;
}
}
//=================================================//
falcon.getFile = async (PATH, save) => {
let res
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'
}
filename = path.join(__filename, './src/' + new Date * 1 + '.' + type.ext)
if (data && save) fs.promises.writeFile(filename, data)
return {
res,
filename,
size: await getSizeMedia(data),
...type,
data
}
}
//=================================================//
falcon.ments = (teks = '') => {
return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : []
}
//=================================================//
falcon.ev.on('messages.upsert', async chatUpdate => {
try {
mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
if (!falcon.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
if (mek.key.id.startsWith('FlowFalcon_')) return
m = smsg(falcon, mek, store)
require("./case")(falcon, m, chatUpdate, store)
} catch (err) {
console.log(err)
}
})

//=================================================//
//Simpan Kredensial
falcon.ev.on('creds.update', saveCreds)
return falcon
rl.close()
}
//=================================================//
connectToWhatsApp()
process.on("uncaughtException", console.error);
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})