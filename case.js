/*
Maaf ya ges jadi kurang rapih karena kesalahan dari saya sendiri :)
banyak yang harus di hapus dan di tambah
*/
require('./config')
const { 
BufferJSON,
WA_DEFAULT_EPHEMERAL,
generateWAMessageFromContent,
generateWAMessageContent,
generateWAMessage,
prepareWAMessageMedia,
downloadContentFromMessage,
areJidsSameUser,
getContentType,
InteractiveMessage,
proto,
delay
} = require('@whiskeysockets/baileys')
//==================================================//
const { 
	igdl,
	fbdown, 
	twitter, 
	youtube 
} = require('btch-downloader');
const {
exec,
spawn,
execSync
} = require('child_process')
const { getVideoInfo, downloadVideo, downloadAudio } =require("hybrid-ytdl");
//==================================================//
const axios = require('axios')
const chalk = require('chalk')
const cheerio = require('cheerio')
const crypto = require('crypto')
const FormData = require("form-data")
const fs = require('fs')
const jimp = require('jimp')
const moment = require('moment-timezone')
const ms = require('ms')
const path = require('path')
const pino = require('pino')
const sharp = require('sharp')
const util = require('util')
const gtts = require("node-gtts");
const ytdl = require('@vreden/youtube_scraper')
const yts = require("yt-search")
const { promisify } = require('util');
const getFileSize = promisify(fs.stat);
const https = require('https');
const { createCanvas, loadImage } = require('canvas');
const puppeteer = require('puppeteer');
const bwipjs = require('bwip-js');
//==========================================//
module.exports = falcon = async (falcon, m, chatUpdate, mek, store) => {
try {
const {
smsg,
sendGmail,
formatSize,
isUrl,
generateMessageTag,
getBuffer,
fetchBuffer,
getSizeMedia,
getRandom,
runtime,
fetchJson,
sleep,
parseMention
} = require('./lib/general/myfunction')
//==================================================//
const content = JSON.stringify(m.message)
const type = Object.keys(m.message)[0]
if (m && type == "protocolMessage") falcon.ev.emit("message.delete", m.message.protocolMessage.key)
const isText = [
"extendedTextMessage",
"conversation"
].includes(m.mtype)
const isImage = [
"imageMessage"
].includes(m.mtype)
const isVideo = [
"videoMessage"
].includes(m.mtype)
const isSticker = [
"stickerMessage"
].includes(m.mtype)
const isAudio = [
"audioMessage"
].includes(m.mtype) && !(m.message[m.mtype]?.ptt)
const isVoice = [
"audioMessage"
].includes(m.mtype) && !!(m.message[m.mtype]?.ptt)
const isViewOnce = [
"viewOnceMessageV2",
"viewOnceMessage"
].includes(m.mtype)
const isContact = [
"contactMessage",
"contactsArrayMessage"
].includes(m.mtype)
const isLocation = [
"locationMessage"
].includes(m.mtype)
const isDocument = [
"documentMessage",
"documentWithCaptionMessage"
].includes(m.mtype)
const isProtocol = [
"protocolMessage"
].includes(m.mtype)
const isPollUpdate = [
"pollUpdateMessage"
].includes(m.mtype)
const isPollCreation = [
"pollCreationMessage"
].includes(m.mtype)
const isButtonList = [
"interactiveResponseMessage"
].includes(m.mtype)
const isButtonReply = [
"templateButtonReplyMessage"
].includes(m.mtype)
const isAllMedia = [
"imageMessage",
"videoMessage",
"stickerMessage",
"audioMessage",
"viewOnceMessageV2",
"viewOnceMessage",
"contactMessage",
"contactsArrayMessage",
"locationMessage",
"documentMessage",
"documentWithCaptionMessage"
].includes(m.mtype)
const isQuotedViewOnce = m.mtype === "extendedTextMessage" && content.includes("viewOnceMessage")
//==================================================//
var body = (m.mtype === 'interactiveResponseMessage') 
? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id 
: (m.mtype === 'conversation') 
? m.message.conversation 
: (m.mtype === 'imageMessage') 
? m.message.imageMessage.caption 
: (m.mtype === 'videoMessage') 
? m.message.videoMessage.caption 
: (m.mtype === 'extendedTextMessage') 
? m.message.extendedTextMessage.text 
: (m.mtype === 'buttonsResponseMessage') 
? m.message.buttonsResponseMessage.selectedButtonId 
: (m.mtype === 'listResponseMessage') 
? m.message.listResponseMessage.singleSelectReply.selectedRowId 
: (m.mtype === 'templateButtonReplyMessage') 
? m.message.templateButtonReplyMessage.selectedId 
: (m.mtype === 'documentMessage') 
? m.message.documentMessage.caption 
: (m.mtype === 'messageContextInfo') 
? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) 
: "";
var budy = (typeof m.text == 'string' ? m.text : '')
//==================================================//
const prefa = ['.', '/', '!', '$'];
const prefix = prefa.find(p => body.startsWith(p)) || '.';
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(/ +/).shift().toLowerCase() : '';
const pushname = m.pushName
const botNumber = await falcon.decodeJid(falcon.user.id)
//==================================================//
const moment = require("moment-timezone")
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss")
let ucapanWaktu
if (time >= "19:00:00" && time < "23:59:00") {
ucapanWaktu = "Selamat Malam"
} else if (time >= "15:00:00" && time < "19:00:00") {
ucapanWaktu = "Selamat Sore"
} else if (time >= "11:00:00" && time < "15:00:00") {
ucapanWaktu = "Selamat Siang"
} else if (time >= "06:00:00" && time < "11:00:00") {
ucapanWaktu = "Selamat Pagi"
} else {
ucapanWaktu = "Selamat Subuh"
}
const bulan = moment.tz('Asia/Jakarta').format('MM/MMMM')
const tahun = moment.tz('Asia/Jakarta').format('YYYY')
const tanggal = moment().tz("Asia/Jakarta").format("dddd, d")
const jam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const wibTime = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const penghitung = moment().tz("Asia/Jakarta").format("dddd, D MMMM - YYYY")
//==================================================//
const sender = m.key.fromMe ? (falcon.user.id.split(':')[0]+'@s.whatsapp.net' || falcon.user.id) : (m.key.participant || m.key.remoteJid)
const owner = global.ownernumber
const own = JSON.parse(fs.readFileSync('./data/owner.json').toString())
const premium = fs.readFileSync('./data/premium.json').toString()
const prem = JSON.parse(fs.readFileSync('./data/premium.json').toString())
const isOwner = [owner, ...own].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isPremium = isOwner ? true : [premium, ...prem].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const _afk = JSON.parse(fs.readFileSync('./data/afk.json'))
const afk = require("./lib/general/afk")
const isAfkOn = afk.checkAfkUser(m.sender, _afk)
const banned = JSON.parse(fs.readFileSync('./data/banned.json'))
const isBan = (id) => {
    const fullId = id.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    return banned.includes(fullId)
}

//==================================================//
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const fatkuns = m.quoted || m;
const quoted = 
fatkuns.mtype === 'buttonsMessage' ? fatkuns[Object.keys(fatkuns)[1]] :
fatkuns.mtype === 'templateMessage' ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] :
fatkuns.mtype === 'product' ? fatkuns[Object.keys(fatkuns)[0]] :
m.quoted ? m.quoted : m;
const from = m.key.remoteJid
const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false;
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const isMediaa = /image|video/.test(mime)
const isPrivate = from.endsWith('@s.whatsapp.net')
const isGroup = from.endsWith('@g.us')
const isNewsletter = from.endsWith('@newsletter')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const qmsg = quoted.msg || quoted
const groupMetadata = m.isGroup ? await falcon.groupMetadata(m.chat) :''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter((v) => v.admin !== null).map((i) => i.id) : [] || []
const groupOwner = m.isGroup ? groupMetadata?.owner : false;
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
const groupMembers = isGroup ? groupMetadata.participants : ''
//==================================================//
// gambar
const images = global.images
function getRandomImage() {
const randomIndex = Math.floor(Math.random() * images.length)
return images[randomIndex]
}
const falconimg = getRandomImage()
//==================================================//
const uploadFile = {
upload: falcon.waUploadToServer
}//==================================================//
const { exec } = require('child_process');
const path = require('path');
const fetch = require('node-fetch');

async function gifToWebp(gifBuffer) {
const inputPath = path.join(__dirname, 'temp.gif');
const outputPath = path.join(__dirname, 'temp.webp');
fs.writeFileSync(inputPath, gifBuffer);
return new Promise((resolve, reject) => {
exec(`ffmpeg -i ${inputPath} -vcodec libwebp -lossless 1 -qscale 50 -preset default ${outputPath}`, (err) => {
if (err) return reject(err);
const webpBuffer = fs.readFileSync(outputPath);
fs.unlinkSync(inputPath);
fs.unlinkSync(outputPath);
resolve(webpBuffer);
});
});
}
//==================================================//
falcon.sendButtonImage = async (jid, image, buttons = [], text, footer, quoted = '', options = {
contextInfo: {
mentionedJid: falcon.ments(text),
}
}) => {
let button = []
for (let i = 0; i < buttons.length; i++) {
button.push({
"name": buttons[i].name,
"buttonParamsJson": JSON.parse(JSON.stringify(buttons[i].buttonParamsJson))
})
}
var imageMessage = await prepareWAMessageMedia({
image: image,
},
uploadFile,
)
let msg = generateWAMessageFromContent(jid, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {
"senderKeyHash": "98SG7lxG2WnnQw==",
"senderTimestamp": "1730731905",
"recipientKeyHash": "bcFmtPfRpFAmFA==",
"recipientTimestamp": "1732019818"
},
"deviceListMetadataVersion": 2,
"messageSecret": "eXn6F8hIB4RTBqpe5//EVgd2ZNdiVVvjRM+CWTDEc1Q="
},
interactiveMessage: proto.Message.InteractiveMessage.create({
...options,
body: proto.Message.InteractiveMessage.Body.create({
text: ""
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: footer
}),
header: proto.Message.InteractiveMessage.Header.create({
title: text,
subtitle: text,
hasMediaAttachment: true,
imageMessage: imageMessage.imageMessage
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: button,
}),
contextInfo: {
mentionedJid: [sender],
forwarsingScore: 999999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: idSaluran,
newsletterName: `© ${global.nameonwer} - 2025`,
}
}
})
}
}
}, {
quoted: quoted
})

falcon.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
return msg
}
//==================================================//
// ambil sw
const textLower = m.text.toLowerCase()
if (textLower === 'bgi' || textLower === 'bagi' || textLower === 'ambilsw' || textLower === 'send') {
if (isGroup) return
const quotedMessage = m.msg.contextInfo.quotedMessage
if (quotedMessage) {
if (quotedMessage.imageMessage) {
let imageCaption = quotedMessage.imageMessage.caption
let imageUrl = await falcon.downloadAndSaveMediaMessage(quotedMessage.imageMessage)
falcon.sendMessage(m.chat, {
image: {
url: imageUrl
},
}, {
quoted: m
})
}
if (quotedMessage.videoMessage) {
let videoCaption = quotedMessage.videoMessage.caption
let videoUrl = await falcon.downloadAndSaveMediaMessage(quotedMessage.videoMessage)
falcon.sendMessage(m.chat, {
video: {
url: videoUrl
},
}, {
quoted: m
})
}
}
}
 //================================================================================
 const capital = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const formatDate = (n, locale = 'id') => {
let d = new Date(n)
return d.toLocaleDateString(locale, {
weekday: 'long',
day: 'numeric',
month: 'long',
year: 'numeric',
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
}  
//==================================================//
const penggunaan = (teks) => {
return `Penggunaan :\n\n${prefix + command} *${teks}*`
}
//==================================================//
const totalFitur = () =>{
var mytext = fs.readFileSync("./simple.js").toString()
var numUpper = (mytext.match(/case '/g) || []).length
return numUpper
}
//==================================================//
let resize = async (image, width, height) => {
let oyy = await jimp.read(image)
let kiyomasa = await oyy.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
return kiyomasa
}
//==================================================//
async function reply(teks) {
falcon.sendMessage(m.chat, {
text: teks,
contextInfo: {
mentionedJid: falcon.ments(teks),
forwardingScore: 9999999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: idSaluran,
newsletterName: `© ${global.nameonwer} - 2025`,
}
}
}, {
quoted: m
})
}
//==================================================//
//REACTION\\
const reaction = async (emoji) => {
falcon.sendMessage(m.chat, {
react: {
text: emoji,
key: m.key
}
})
}
//=================================================//
const DakggGenshin = async (id) => {
    try {
        const url = `https://r.jina.ai/https://genshin.dakgg.io/roles/${id}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-Return-Format': 'application/json',
                'Accept': 'application/json'
            }
        });

        if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);

        const json = await response.json();
        console.log("Raw API Response:", json); // Debug log

        if (!json.data || !json.data.content) throw new Error("Invalid API response format");

        const parsedData = JSON.parse(json.data.content.replace(/\\/g, ''));
        console.log("Parsed Data:", parsedData); // Debug log

        return parsedData;
    } catch (error) {
        console.error("Error fetching Dakgg data:", error);
        return null;
    }
};

//==================================================//
if (budy.startsWith('kntl', 'goblok', 'kontol', 'gblk', 'kntol', 'tolol', 'tlol', 'pea', 'ytm', 'yatim', 'yteam', 'ytim', 'lawak', 'memek', 'mmk', 'mmek', 'anj', 'ajg', 'anjg', 'anjing', 'anjink', 'lonte', 'ngentod', 'ngentot', 'ngewe', 'ngtd', 'ngntd', 'pepek', 'ppk', 'ppek', 'jomok', 'gila', 'asu', 'lonte', 'anjgg')) {
if (!isGroup) return
if (isOwner) return
if (!isBotAdmins) return m.reply(`lu lebih ${budy}`)
if (sender == botNumber) return
m.reply("Allah tidak menyukai perkataan buruk, yang diucapkan secara terus terang kecuali oleh orang yang dizalimi. Dan Allah Maha mendengar, Maha mengetahui\n*QS. An-Nisa: 148*")
falcon.sendMessage(m.chat, {
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.key.participant
}
})
await falcon.groupParticipantsUpdate(m.chat, [sender], 'delete')
}

//==================================================//
async function tiktok(url) {
try {
const data = new URLSearchParams({
'id': url,
'locale': 'id',
'tt': 'RFBiZ3Bi'
})

const headers = {
'HX-Request': true,
'HX-Trigger': '_gcaptcha_pt',
'HX-Target': 'target',
'HX-Current-URL': 'https://ssstik.io/id',
'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Mobile Safari/537.36',
'Referer': 'https://ssstik.io/id'
}

const response = await axios.post('https://ssstik.io/abc?url=dl', data, {
headers
})
const html = response.data;
const $ = cheerio.load(html)
const author = $('#avatarAndTextUsual h2').text().trim()
const title = $('#avatarAndTextUsual p').text().trim()
const video = $('.result_overlay_buttons a.download_link').attr('href')
const audio = $('.result_overlay_buttons a.download_link.music').attr('href')
const imgLinks = []
$('img[data-splide-lazy]').each((index, element) => {
const imgLink = $(element).attr('data-splide-lazy')
imgLinks.push(imgLink)
})

const result = {
isSlide: video ? false : true,
author,
title,
result: video || imgLinks,
audio
}
return result
} catch (error) {
console.error(error)
}
}

//==================================================//
//==================================================//
if (m.isGroup && !m.key.fromMe) {
let mentionUser = [
...new Set([
...(m.mentionedJid || []),
...(m.quoted ? [m.quoted.sender] : []),
]),
]

for (let ment of mentionUser) {
if (afk.checkAfkUser(ment, _afk)) {
let getId2 = afk.getAfkId(ment, _afk)
let getReason2 = afk.getAfkReason(getId2, _afk)
let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
let heheh2 = ms(getTimee)
reply(`Jangan tag, dia sedang *AFK*\n\n*Alasan* : ${getReason2}`)
}
}

if (afk.checkAfkUser(m.sender, _afk)) {
let getId = afk.getAfkId(m.sender, _afk)
let getReason = afk.getAfkReason(getId, _afk)
let getTime = Date.now() - afk.getAfkTime(getId, _afk)
let heheh = ms(getTime)

_afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
fs.writeFileSync("./data/afk.json", JSON.stringify(_afk))
reply(`@${m.sender.split("@")[0]} telah kembali dari *AFK*\n\n*Alasan* : ${getReason}`)
}
}
//=================================================//

const USER_FILE = "./data/user.json";
let userDB = fs.existsSync(USER_FILE) ? JSON.parse(fs.readFileSync(USER_FILE)) : {};

function saveUserDB() {
    fs.writeFileSync(USER_FILE, JSON.stringify(userDB, null, 2));
}
function isRegistered(jid) {
    return jid in userDB;
}
if (isCmd && !body.startsWith(prefix + "daftar")) {
    if (!isRegistered(m.sender)) {
        return m.reply(`⚠️ Kamu belum terdaftar!\n\nGunakan:\n.daftar nama,umur,asal`);
    }
}
//==================================================//
if (isCmd && m.isGroup) {
console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Group Chat"), chalk.bold('[' + args.length + ']'))
}
//==================================================//
if (isCmd && !isGroup) { 
console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Private Chat"), chalk.bold('[' + args.length + ']'))
}
//==================================================//
const eventDB = "./Event.json";

// Fungsi untuk membaca database event
function loadEvent() {
  if (!fs.existsSync(eventDB)) {
    return { active: false, name: "", participants: [] };
  }
  try {
    return JSON.parse(fs.readFileSync(eventDB, "utf-8"));
  } catch (err) {
    console.error("Error membaca database event:", err);
    return { active: false, name: "", participants: [] };
  }
}

// Fungsi untuk menyimpan database event
function saveEvent(data) {
  try {
    fs.writeFileSync(eventDB, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Error menyimpan database event:", err);
  }
}    
//=================================================//
 //================================================================================

const parseDuration = (text) => {
    let match = text.match(/^(\d+)([smhd])$/);
    if (!match) return null;
    let value = parseInt(match[1]);
    let unit = match[2];

    switch (unit) {
        case 's': return value * 1000;       // detik ke milidetik
        case 'm': return value * 60000;      // menit ke milidetik
        case 'h': return value * 3600000;    // jam ke milidetik
        case 'd': return value * 86400000;   // hari ke milidetik
        default: return null;
    }
};
 //=================================================//
async function remini(urlPath, method) {
return new Promise(async (resolve, reject) => {
let Methods = ["enhance", "recolor", "dehaze"]
Methods.includes(method) ? (method = method) : (method = Methods[0])
let buffer,
Form = new FormData(),
scheme = "https" + "://" + "inferenceengine" + ".vyro" + ".ai/" + method;
Form.append("model_version", 1, {
"Content-Transfer-Encoding": "binary",
contentType: "multipart/form-data; charset=uttf-8",
})
Form.append("image", Buffer.from(urlPath), {
filename: "enhance_image_body.jpg",
contentType: "image/jpeg",
})
Form.submit(
{
url: scheme,
host: "inferenceengine" + ".vyro" + ".ai",
path: "/" + method,
protocol: "https:",
headers: {
"User-Agent": "okhttp/4.9.3",
Connection: "Keep-Alive",
"Accept-Encoding": "gzip",
},
},
function (err, res) {
if (err) reject()
let data = []
res
.on("data", function (chunk, resp) {
data.push(chunk)
})
.on("end", () => {
resolve(Buffer.concat(data))
})
res.on("error", (e) => {
reject()
})
}
)
})
}
//=================================================//
async function cariGC(query) {
    try {
        const { data } = await axios.get(`https://groupsor.link/group/searchmore/${query.replace(/ /g, '-')}`);
        const $ = cheerio.load(data);
        const result = [];

        $('.maindiv').each((i, el) => {
            result.push({
                title: $(el).find('img').attr('alt')?.trim(),
                thumb: $(el).find('img').attr("src")?.trim(),
            });
        });

        $('div.post-info-rate-share > .joinbtn').each((i, el) => {
            if (result[i]) {
                result[i].link = $(el).find('a').attr("href")?.trim().replace('https://groupsor.link/group/join/', 'https://chat.whatsapp.com/');
            }
        });

        $('.post-info').each((i, el) => {
            if (result[i]) {
                result[i].desc = $(el).find('.descri').text()?.replace('... continue reading', '.....').trim();
            }
        });

        return result;
    } catch (e) {
        console.log(e);
        return [];
    }
}
//==================================================//
const configPath = './lib/groupConfig.json';

function loadConfig() {
  if (!fs.existsSync(configPath)) fs.writeFileSync(configPath, "{}");
  try {
    return JSON.parse(fs.readFileSync(configPath, 'utf-8'));
  } catch (e) {
    console.error("❌ Gagal parsing config, reset ke default!");
    fs.writeFileSync(configPath, "{}");
    return {};
  }
}

function saveConfig(config) {
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
}

function ensureGroupConfig(groupId) {
  let config = loadConfig();
  if (!config[groupId]) {
    config[groupId] = {
      welcome: false,
      message: "Selamat datang @user di @grup!\n\n@desk",
      buttons: [
        { buttonId: ".intro", buttonText: "Perkenalan" },
        { buttonId: ".rules", buttonText: "Aturan" }
      ],
      rules: "📌 Tidak ada peraturan yang ditetapkan!",
      intro: "📌 Silakan isi perkenalan:\n- Nama:\n- Umur:\n- Hobi:",
    };
    saveConfig(config);
  }
}
//=================================================//
const headers = {
    'Referer': 'https://www.pixiv.net/',
    'Accept-Encoding': 'gzip, deflate, br'
};

async function pixiv(query) {
    let { data } = await axios.get(`https://www.pixiv.net/touch/ajax/tag_portal?word=${query}&lang=en&version=892d65fef9e1fc4efa5a1fd1c4675d6ae3e73835`, { headers })
    return data.body.illusts
}


async function getBuff(url) {
    let { data } = await axios.get(url, { 
        headers: {
            'Referer': 'https://www.pixiv.net/',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
        }, 
        responseType: 'arraybuffer' 
    })
    return data
}
//=================================================//
async function getListKota() {
    try {
        let { data } = await axios.get("https://rest.cloudkuimages.com/api/muslim/listkota");
        if (!data || !data.result) return null;
        return data.result; // Return array daftar kota
    } catch (error) {
        console.error("Error mengambil daftar kota:", error);
        return null;
    }
}
async function getJadwalSholat(cityId) {
    let date = new Date().toISOString().split('T')[0]; // Ambil tanggal hari ini

    try {
        let { data } = await axios.get(`https://rest.cloudkuimages.com/api/muslim/jadwalsholat?cityId=${cityId}&date=${date}`);
        if (!data || !data.result) return null;

        return {
            lokasi: data.result.lokasi,
            daerah: data.result.daerah,
            timezone: "Asia/Jakarta", 
            imsak: data.result.jadwal.imsak,
            subuh: data.result.jadwal.subuh,
            dzuhur: data.result.jadwal.dzuhur,
            ashar: data.result.jadwal.ashar,
            maghrib: data.result.jadwal.maghrib,
            isya: data.result.jadwal.isya
        };
    } catch (error) {
        console.error("Error mengambil jadwal sholat:", error);
        return null;
    }
}
//=================================================//
const SESSION_FILE = "./session/ai_sessions.json";
const DEFAULT_MODEL = "@google/gemini-1.5-flash";
const availableModels = [
    "@google/gemini-1.5-flash",
    "@google/gemini-1.5-flash-8b",
    "@google/gemini-1.5-pro",
    "@google/gemini-2.0-flash",
    "@google/gemini-2.0-flash-lite-preview-02-05",
    "@google/gemini-2.0-pro-exp-02-05",
    "@groq/gemma2-9b-it",
    "@groq/qwen-2.5-32b",
    "@mistral/mistral-small-latest",
    "@mistral/mistral-large-latest",
    "@mistral/mistral-moderation-latest",
    "@mistral/open-mistral-nemo",
    "@mistral/mistral-saba-latest",
    "@hf/thebloke/deepseek-coder-6.7b-instruct-awq",
    "@together/deepseek-ai/DeepSeek-V3",
    "@groq/deepseek-r1-distill-llama-70b",
    "@groq/llama-3.1-8b-instant",
    "@groq/llama-3.3-70b-versatile",
    "@custom/hoshinoo-ba-idn.lang",
    "@custom/hertaa-hsr-idn.lang",
    "@custom/zetaa-holoid-idn.lang"
];

let sessions = fs.existsSync(SESSION_FILE) ? JSON.parse(fs.readFileSync(SESSION_FILE)) : {};

function saveSession() {
    fs.writeFileSync(SESSION_FILE, JSON.stringify(sessions, null, 2));
}
//=================================================//
const CAI_DB = "./session/cai_users.json";

let cai_users = fs.existsSync(CAI_DB) ? JSON.parse(fs.readFileSync(CAI_DB)) : {};
function saveCaiDB() {
    fs.writeFileSync(CAI_DB, JSON.stringify(cai_users, null, 2));
}
//=================================================//
const savetube = require("./lib/general/savetube");
const getFileSizeFromUrl = async (url) => {
    try {
        let response = await fetch(url, { method: 'HEAD' });
        return response.headers.get('content-length') || 0;
    } catch (err) {
        console.error('Error fetching file size:', err);
        return 0;
    }
};
//=================================================//
if (isBan(m.sender)) {
    return 
}
if (isCmd && autotyping) {
if (command) { falcon.readMessages([m.key])}
falcon.sendPresenceUpdate('composing', from)
}

if (autoread) {
const readkey = { remoteJid: m.chat, id: m.key.id, participant: m.isGroup ? m.key.participant : undefined }
await falcon.readMessages([readkey]); }  
//==================================================//
switch (command) {

case 'help':
case 'menu':
case 'menu-v2': {

let menu = `Hai Kak ${pushname} 👋
*Perkenalkan Saya Adalah Bot Asisten Virtual Yang Di Rancang Oleh Seorang Developer Untuk Memudahkan Urusan Dalam Kehidupan sehari-hari*

Fitur yang saya miliki beragam namun masih belum terlalu banyak karena masih dalam tahap pengembangan
script ini bisa kamu dapatkan gratis dengan memilih pilihan di menu ini
`
const buttons = [
{
buttonId: `${prefix}xsowner`, 
buttonText: { 
displayText: 'owner' 
}
},{
buttonId: `${prefix}about-me`,
buttonText: {
displayText: "about"
}
}
]

const buttonMessage = {
document: fs.readFileSync("./config.js"),
fileName: ucapanWaktu,
fileLength: 99999999999999,
pageCount: 99999999999999,
mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
caption: menu,
footer: `© ${global.nameonwer} - 2025`,,
buttons: buttons,
headerType: 1,
contextInfo: {
externalAdReply: {
containsAutoReply: true,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
thumbnailUrl: falconimg,
title: `© ${global.nameonwer} - 2025`,,
body: "Asistent Virtual"
},
},
viewOnce: true,
headerType: 6
}

const flowActions = [
{
buttonId: `${prefix}xsowner`,
buttonText: {
displayText: 'owner'
},
type: 4,
nativeFlowInfo: {
name: 'single_select',
paramsJson: JSON.stringify({
title: "list",
sections: [{
title: `© ${global.nameonwer} - 2025`,,
highlight_label: "FlowFalcon",
rows: [{
title: "allmenu",
description: "menampilkan semua menu",
id: `${prefix}allmenu-v2`
}, {
title: "runtime",
description: "menampilkan berapa lama bot aktif",
id: `${prefix}runtime`
},{
title: "Get Script",
description: "Mendapatkan Script Bot",
id: `${prefix}xscript`
}]
}]
})
},
viewOnce: true
}
]

buttonMessage.buttons.push(...flowActions)

return falcon.sendMessage(m.chat, buttonMessage, {
quoted: m
})
}
break

case 'allmenu':
case 'allmenu-v2': {

let allmenu = `Halo *${pushname} 👋🏻*

- 𝗜𝗡𝗙𝗢 𝗨𝗦𝗘𝗥
Nama : *${pushname}*
Nomor : *${sender.split('@')[0]}*
Status : *${isOwner ? "Owner" : isPremium ? "Premium" : "Free"}*

- 𝗢𝗪𝗡𝗘𝗥
▢ ${prefix}addowner
▢ ${prefix}delowner
▢ ${prefix}addprem
▢ ${prefix}delprem
▢ ${prefix}banned
▢ ${prefix}unbanned
▢ ${prefix}backup
▢ ${prefix}rvo
▢ ${prefix}eval
▢ ${prefix}upsaluran
▢ ${prefix}self
▢ ${prefix}public
▢ ${prefix}autoread
▢ ${prefix}autotyping
▢ ${prefix}bangc
▢ ${prefix}unbangc
▢ ${prefix}update
▢ ${prefix}reset

- 𝗦𝗧𝗜𝗖𝗞𝗘𝗥
▢ ${prefix}brat
▢ ${prefix}bratimg
▢ ${prefix}bratvid
▢ ${prefix}animebrat
▢ ${prefix}animebrat2
▢ ${prefix}animebrat-vid
▢ ${prefix}sticker
▢ ${prefix}qc
▢ ${prefix}smeme

- 𝗚𝗥𝗢𝗨𝗣
▢ ${prefix}add
▢ ${prefix}kick
▢ ${prefix}hidetag
▢ ${prefix}totag
▢ ${prefix}setwelcome
▢ ${prefix}setjadwal
▢ ${prefix}listkota
▢ ${prefix}cekjadwal
▢ ${prefix}open
▢ ${prefix}close
▢ ${prefix}group <open/close>
▢ ${prefix}event

- 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗
▢ ${prefix}tiktok
▢ ${prefix}remini
▢ ${prefix}pinterest
▢ ${prefix}ytmp3
▢ ${prefix}ytmp4
▢ ${prefix}yta
▢ ${prefix}ytv
▢ ${prefix}yt (8k)
▢ ${prefix}igmp3
▢ ${prefix}igmp4
▢ ${prefix}ig (4k)
▢ ${prefix}nhentaidl
▢ ${prefix}spotifydl
▢ ${prefix}terabox
▢ ${prefix}mediafire

- 𝗣𝗟𝗔𝗬
▢ ${prefix}spotify
▢ ${prefix}play
▢ ${prefix}ytplay
▢ ${prefix}yts
▢ ${prefix}spotifysearch

- 𝗙𝗨𝗡
▢ ${prefix}afk
▢ ${prefix}tourl
▢ ${prefix}tourl2
▢ ${prefix}carigc
▢ ${prefix}pixiv
▢ ${prefix}nurl
▢ ${prefix}nurl2
▢ ${prefix}ping
▢ ${prefix}cekidch
▢ ${prefix}cekidgc
▢ ${prefix}whatanime
▢ ${prefix}convert

- 𝗔𝗜
▢ ${prefix}autoai
▢ ${prefix}setmodel
▢ ${prefix}cai
▢ ${prefix}caisearch
▢ ${prefix}setcai
▢ ${prefix}gemini
▢ ${prefix}copilot
▢ ${prefix}hytam
▢ ${prefix}aiimage
▢ ${prefix}ai

- 𝗜𝗦𝗟𝗔𝗠𝗜𝗖 𝗠𝗘𝗡𝗨
▢ ${prefix}surah
▢ ${prefix}playsurah
▢ ${prefix}ayat

- 𝗖𝗣𝗔𝗡𝗘𝗟
▢ ${prefix}buatpanel
▢ ${prefix}cadmin
▢ ${prefix}1 - 10gb
▢ ${prefix}delpanel
▢ ${prefix}deladmin

𝗔𝗡𝗢𝗧𝗛𝗘𝗥 𝗖𝗢𝗠𝗠𝗔𝗡𝗗
▢ ${prefix}regis
▢ ${prefix}adddb
▢ ${prefix}adduser
▢ ${prefix}chek-user
▢ ${prefix}chat-ch
▢ ${prefix}get / feact

`
const buttons = [
{
buttonId: `${prefix}xaowner`, 
buttonText: { 
displayText: 'owner' 
}
}, {
buttonId: `${prefix}about-me`,
buttonText: {
displayText: "about"
}
}
]

const buttonMessage = {
document: fs.readFileSync("./config.js"),
fileName: ucapanWaktu,
fileLength: 99999999999999,
pageCount: 99999999999999,
mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
caption: allmenu,
footer: `© ${global.nameonwer} - 2025`,,
buttons: buttons,
headerType: 1,
contextInfo: {
externalAdReply: {
containsAutoReply: true,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
thumbnailUrl: falconimg,
title: `© ${global.nameonwer} - 2025`,,
body: "FlowFalcon Project"
},
},
viewOnce: true,
headerType: 6
}

const flowActions = [
{
buttonId: `${prefix}xsowner`,
buttonText: {
displayText: 'owner'
},
type: 4,
nativeFlowInfo: {
name: 'single_select',
paramsJson: JSON.stringify({
title: "list",
sections: [{
title: `© ${global.nameonwer} - 2025`,,
highlight_label: "FlowFalcon",
rows: [{
title: "menu",
description: "kembali ke menu awal",
id: `${prefix}menu-v2`
}, {
title: "runtime",
description: "menampilkan berapa lama bot aktif",
id: `${prefix}runtime`
}]
}]
})
},
viewOnce: true
}
]

buttonMessage.buttons.push(...flowActions)

return falcon.sendMessage(m.chat, buttonMessage, {
quoted: m
})
}
break

 case'sc': case'script': case 'about': case 'about-me':{
falcon.sendMessage(m.chat, {
text: `Hai Kak ${pushname} 👋
*Perkenalkan Saya Adalah Bot Asisten Virtual Yang Di Rancang Oleh Seorang Developer Untuk Memudahkan Urusan Dalam Kehidupan*
Fitur yang saya miliki beragam namun masih belum terlalu banyak karena masih dalam tahap pengembangan
Script ini juga Di Bantu Oleh Beberapa Orang Saja Seperti:
   *• Afgan : Pemilik Base Ori*
   *• AlwaysRicky : Teman Yang Memberikan Script* 
   *• Fathur : Teman Yang Membantu Membuat Fitur*
   *• AI : Untuk Menanyakan Fitur Error*
   *• Diri Saya Sendiri*
_Tanpa Mereka Mungkin Script Ini Belom Pernah Rilis Sebelumnya_
 
*Oh iya Aku mau Kasih Tau nih kalau script ini itu gratis dan bisa kamu dapatkan di channel resmi FlowFalcon, dan untuk mendaftarkan Nomor bot nya kamu hanya perlu join ke grup FlowFalcon link ada di bawah sini yak*

- Channel WhatsApp : https://flowfalcon.xyz/channel/ 
- Group WhatsApp : https://flowfalcon.xyz/group/

_Gausah malu untuk join karena Isi member-nya ramah-ramah loh_

sudah deh itu aja yang mau aku sampaikan silahkan gunakan fitur kami dengan bijak yah 😉 
`,
footer: `© ${global.nameonwer} - 2025`,,
buttons: [
{
buttonId: `${prefix}allmenu`,
buttonText: { 
displayText: 'allmenu' 
}
}, {
buttonId: `${prefix}help`,
buttonText: {
displayText: "help"
}
}
],
viewOnce: true,
headerType: 1,
}, {
quoted: m
})
}
break

case 'xsowner':
case 'owner': {
var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"contactMessage": {
"displayName": "Nomor Developer",
"vcard": `BEGIN:VCARD
VERSION:3.0
N:;;;;
FN: ${global.nameonwer} 
item1.TEL;waid=${global.ownernumber}:+${global.ownernumber}
item1.X-ABLabel:Ponsel
X-WA-BIZ-DESCRIPTION: JANGAN DI SPAM
X-WA-BIZ-NAME:
END:VCARD`,
}
}), {
userJid: m.chat,
quoted: m
})
falcon.relayMessage(m.chat, contact.message, {
messageId: contact.key.id
})
}
break

case 'runtime': {
reply(`Bot Aktif Selama : ${runtime(process.uptime())}`)
}
break


// === Owner Menu === //
case "reset": {
    if (!isOwner) return m.reply("❌ Hanya owner yang bisa mereset bot!")

    m.reply("🔄 Mereset bot...")

    setTimeout(() => {
        process.exit(1) 
    }, 2000)
}
break
case 'tagsw': {
    if (!isOwner) return reply('Khusus Creator');
    
    let [id, ...teksArray] = text.split(' ');
    let teks = teksArray.join(' ');

    if (!id || !teks) {
        return reply(`Example: ${prefix + command} <group_id> Hello`);
    }

    let mediaContent = null;
    let msgOptions = {};
    const BackgroundColor = ['#f68ac9', '#6cace4', '#f44336', '#4caf50', '#ffeb3b', '#9c27b0', '#0d47a1', '#03a9f4', '#9e9e9e', '#ff9800', '#000000', '#ffffff', '#008080', '#FFC0CB', '#A52A2A', '#FFA07A', '#FF00FF', '#D2B48C', '#F5DEB3', '#FF1493', '#B22222', '#00BFFF', '#1E90FF', '#FF69B4', '#87CEEB', '#20B2AA', '#8B0000', '#FF4500', '#48D1CC', '#BA55D3', '#00FF7F', '#008000', '#191970', '#FF8C00', '#9400D3', '#FF00FF', '#8B008B', '#2F4F4F', '#FFDAB9', '#BDB76B', '#DC143C', '#DAA520', '#696969', '#483D8B', '#FFD700', '#C0C0C0'];
    const pickedColor = BackgroundColor[Math.floor(Math.random() * BackgroundColor.length)];
    const jids = [m.sender, id];

    if (quoted) {
        const mime = quoted.mtype || quoted.mediaType;
        if (mime?.includes('image')) {
            mediaContent = await m.quoted.download();
            msgOptions = {
                image: mediaContent,
                caption: teks || m.quoted.text || '',
            };
        } else if (mime?.includes('video')) {
            mediaContent = await m.quoted.download();
            msgOptions = {
                video: mediaContent,
                caption: teks || m.quoted.text || '',
            };
        } else {
            msgOptions = {
                text: teks || m.quoted.text || '',
            };
        }
    } else {
        msgOptions = {
            text: teks,
        };
    }

    await falcon.sendMessage("status@broadcast", msgOptions, {
        backgroundColor: pickedColor,
        textArgb: 0xffffffff,
        font: 0,
        statusJidList: await (await falcon.groupMetadata(id)).participants.map((a) => a.id),
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: jids.map((jid) => ({
                            tag: "to",
                            attrs: { jid: id },
                            content: undefined,
                        })),
                    },
                ],
            },
        ],
    });
    m.reply("done");
}
break;

case 'autotyping': {
if (!isOwner) return onlyOwn()
if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.autotyping = true
await m.reply('Sukses mengaktifkan autotyping.')
} else if (args[0] === 'off') {
global.autotyping = false
await m.reply('Sukses menonaktifkan autotyping.')
}}
break

case 'autoread': {
if (!isOwner) return onlyOwn()
if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.autoread = true
await m.reply('Sukses mengaktifkan autoread.')
} else if (args[0] === 'off') {
global.autoread = false
await m.reply('Sukses menonaktifkan autoread.')
}}
break      

case 'public': {
if (!isOwner) return
falcon.public = true
reply('Sukses mengubah ke mode public')
}
break

case 'self': {
if (!isOwner) return
falcon.public = false
reply('Sukses mengubah ke mode self')
}
break

case 'addowner': {
if (!isOwner) return
if (!args[0]) return reply(penggunaan("628xxx"))
var ownn = text.split("|")[0].replace(/[^0-9]/g, '')
let target = ownn + '@s.whatsapp.net'
own.push(ownn)
fs.writeFileSync('./data/owner.json', JSON.stringify(own))
reply(`Sukses menambah owner @${target.split('@')[0]}`)
try {
var ppnya = await falcon.profilePictureUrl(target, "image")
} catch {
var ppnya = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
}
falcon.sendMessage(target, {
image: {
url: ppnya
},
caption: "Selamat, kamu telah menjadi *Owner Bot*"
}, {
quoted: m
})
}
break

case 'delowner': {
if (!isOwner) return
if (!args[0]) return reply(penggunaan("628xxx"))
var ownerr = text.split("|")[0].replace(/[^0-9]/g, '')
let target = ownerr + '@s.whatsapp.net'
unp = own.indexOf(ownerr)
own.splice(unp, 1)
fs.writeFileSync('./data/owner.json', JSON.stringify(own))
reply(`Sukses menghapus owner @${target.split('@')[0]}`)
try {
var ppnya = await falcon.profilePictureUrl(target, "image")
} catch {
var ppnya = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
}
falcon.sendMessage(target, {
image: {
url: ppnya
},
caption: "Upss, kamu bukan Owner Bot Lagi"
}, {
quoted: m
})
}
break

case 'addprem': {
if (!isOwner) return
if (!args[0]) return reply(penggunaan("628xxx"))
var premm = text.split("|")[0].replace(/[^0-9]/g, '')
let target = premm + '@s.whatsapp.net'
prem.push(premm)
fs.writeFileSync('./data/premium.json', JSON.stringify(prem))
reply(`Sukses menambah premium @${target.split('@')[0]}`)
try {
var ppnya = await falcon.profilePictureUrl(target, "image")
} catch {
var ppnya = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
}
falcon.sendMessage(target, {
image: {
url: ppnya
},
caption: "Selamat, kamu telah menjadi *User Premium*"
}, {
quoted: m
})
}
break

case 'delprem': {
if (!isOwner) return
if (!args[0]) return reply(penggunaan("628xxx"))
var premmm = text.split("|")[0].replace(/[^0-9]/g, '')
let target = premmm + '@s.whatsapp.net'
unp = own.indexOf(premmm)
prem.splice(unp, 1)
fs.writeFileSync('./data/premium.json', JSON.stringify(prem))
reply(`Sukses menghapus premium @${target.split('@')[0]}`)
try {
var ppnya = await falcon.profilePictureUrl(target, "image")
} catch {
var ppnya = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
}
falcon.sendMessage(target, {
image: {
url: ppnya
},
caption: "Upss, kamu bukan *User Premium* Lagi"
}, {
quoted: m
})
}
break

case 'banned': {
if (!isOwner) return
if (!args[0]) return reply(penggunaan("628xxx"))
var ben = text.split("|")[0].replace(/[^0-9]/g, '')
let target = ben + '@s.whatsapp.net'
ban.push(ben)
fs.writeFileSync('./data/banned.json', JSON.stringify(ban))
reply(`Sukses banned @${target.split('@')[0]}, Sekarang @${target.split('@')[0]} tidak dapat menggunakan bot.`)
}
break

case 'unbanned': {
if (!isOwner) return
if (!args[0]) return reply(penggunaan("628xxx"))
var benn = text.split("|")[0].replace(/[^0-9]/g, '')
let target =benn + '@s.whatsapp.net'
unp = ban.indexOf(benn)
ban.splice(unp, 1)
fs.writeFileSync('./data/banned.json', JSON.stringify(ban))
reply(`Sukses unbanned @${target.split('@')[0]}, Sekarang @${target.split('@')[0]} dapat menggunakan bot lagi.`)
}
break

case 'backup': {
if (!isOwner) return
const sessionPath = "./session"
if (fs.existsSync(sessionPath)) {
const files = fs.readdirSync(sessionPath)
files.forEach((file) => {
if (file !== "creds.json") {
const filePath = path.join(sessionPath, file) 
if (fs.lstatSync(filePath).isDirectory()) {
fs.rmSync(filePath, {
recursive: true,
force: true
})
} else {
fs.unlinkSync(filePath)
}
}
}
)
}

const ls = execSync("ls").toString().split("\n").filter(
(pe) => 
pe != "node_modules" &&
pe != "package-lock.json" &&
pe != "session"
)

execSync(`zip -r backup.zip ${ls.join(" ")}`)
reply("File Berhasil Dikirim Ke *Private Chat*")
falcon.sendMessage(sender, {
document: fs.readFileSync("./backup.zip"), 
fileName: "falcon-Simple.zip",
mimetype: "application/zip"
}, {
quoted: m
})
execSync("rm -rf backup.zip")
}
break

case "rvo": case "readviewonce": {
if (!m.quoted) return m.reply(example("dengan reply pesannya"))
let msg = m.quoted.message
    let type = Object.keys(msg)[0]
if (!msg[type].viewOnce) return m.reply("Pesan itu bukan viewonce!")
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return falcon.sendMessage(m.chat, {video: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/image/.test(type)) {
        return falcon.sendMessage(m.chat, {image: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/audio/.test(type)) {
        return falcon.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
    } 
}
break

case 'eval': {
    if (!isOwner) return m.reply('⚠️ Hanya owner yang bisa pakai eval.');
    try {
        let result = await eval(`(async () => { ${text} })()`);
        let output = JSON.stringify(result, null, 2);
        m.reply(`\`\`\`${output}\`\`\``); // Kirim hasil ke WA
    } catch (err) {
        m.reply(`❌ Error:\n${err}`);
    }
}
break;

case 'upsaluran': {
if (!isOwner) return
try {
if (!mime && !text) {
return reply(`Balas Pessn DDenganPerintah *${prefix + command}*`)
}
media = mime ? await quoted.download() : null
let defaultCaption = "Sukses"
if (/image/.test(mime)) {
falcon.sendMessage(idSaluran, {
image: media,
caption: text ? text : defaultCaption
})
reply(`📸 Gambar berhasil diunggah ke saluran dengan caption: "${text ? text : defaultCaption}"`)
} else if (/video/.test(mime)) {
falcon.sendMessage(idSaluran, {
video: media,
caption: text ? text : defaultCaption
})
reply(`🎥 Video berhasil diunggah ke saluran dengan caption: "${text ? text : defaultCaption}"`)
} else if (/audio/.test(mime)) {
falcon.sendMessage(idSaluran, {
audio: media,
mimetype: mime,
ptt: true
})
reply(`🎵 Audio berhasil diunggah ke saluran`)
} else if (/text/.test(mime) || text) {
falcon.sendMessage(idSaluran, {
text: text ? text : defaultCaption
})
reply(`💬 Pesan teks berhasil dikirim ke saluran: "${text ? text : defaultCaption}"`)
} else {
reply(`Error`)
}
} catch (error) {
console.error(error)
reply(`Error`)
}
}
break

// === Sticker Menu === //
case "bratimg": { 
    if (!text) return reply('❌ Masukkan teks untuk membuat stiker.');

    try {
        const url = `https://api.siputzx.my.id/api/m/brat?text=${encodeURIComponent(text)}&isVideo=false&delay=500`;
        const response = await axios.get(url, { responseType: "arraybuffer" });

        const { Sticker } = require('wa-sticker-formatter');
        const sticker = new Sticker(response.data, {
            pack: packname,
            author: author,
            type: "image",
        });

        const stikerBuffer = await sticker.toBuffer();
        falcon.sendMessage(m.chat, { sticker: stikerBuffer }, { quoted: m });

    } catch (err) {
        console.error("❌ Error:", err);
        reply("Terjadi kesalahan saat membuat stiker.");
    }
}
break;

case "brat-animated":
case "bratvid": { 
    if (!text) return reply('❌ Masukkan teks untuk membuat stiker animasi.');

    try {
        const url = `https://api.siputzx.my.id/api/m/brat?text=${encodeURIComponent(text)}&isVideo=true&delay=500`;
        const response = await axios.get(url, { responseType: "arraybuffer" });

        const { writeFileSync, unlinkSync } = require('fs');
        const { exec } = require('child_process');
        const path = "./session/";
        const inputPath = `${path}brat.mp4`;
        const outputPath = `${path}brat.webp`;

        // Simpan video sementara
        writeFileSync(inputPath, response.data);

        // Konversi MP4 ke WebP menggunakan ffmpeg
        exec(`ffmpeg -i ${inputPath} -vf "scale=512:512:flags=lanczos,format=rgba" -loop 0 -preset default -an -vsync 0 ${outputPath}`, async (err) => {
            if (err) {
                console.error("❌ Error konversi video:", err);
                return reply("Terjadi kesalahan saat mengonversi video ke stiker.");
            }

            const webpBuffer = require('fs').readFileSync(outputPath);
            falcon.sendMessage(m.chat, { sticker: webpBuffer }, { quoted: m });

            // Hapus file sementara
            unlinkSync(inputPath);
            unlinkSync(outputPath);
        });

    } catch (err) {
        console.error("❌ Error:", err);
        reply("Terjadi kesalahan saat membuat stiker animasi.");
    }
}
break;
case 'brat':
if (!text) return m.reply(`Example: .brat Aku Anak Sigma 🤫🧏`);
try {
let caption = `Silahkan pilih tipe yang diinginkan:\n\n1. *Gambar 🖼️*\n2. *Video 🎥*`;
falcon.sendMessage(m.chat, {
text: caption,
footer: `${global.nameonwer}`,
buttons: [
{
buttonId: `.bratimg ${text}`,
buttonText: { displayText: "Gambar 🖼️" }
},
{
buttonId: `.bratvid ${text}`,
buttonText: { displayText: "Video 🎥" }
}
],
viewOnce: true,
}, { quoted: m });
} catch (err) {
console.error(err);
m.reply(`*Terjadi kesalahan!* 😭\n${err.message || err}`);
}
break;

case 'sticker':
case 'stiker':
case 's':{
if (!quoted) return reply(`Balas Video/Image Dengan Caption *${prefix + command}*`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = falcon.sendImageAsSticker(m.chat, media, m, {
packname: packname,
author: author
})
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = falcon.sendVideoAsSticker(m.chat, media, m, {
packname: packname,
author: author
})
} else {
return reply(`Kirim Gambar/Video Dengan Caption *${prefix + command}*\nDurasi Video 1-9 Detik`)
}
}
break

case 'qc':
case 'qcstick': {

if (!text) return reply(penggunaan(`falcon ganteng`))
if (text.length > 80) return reply(`Maximal 80 karakter!`)
let warna = ["#000000", "#ffffff"]
let reswarna = await warna[Math.floor(Math.random()*warna.length)]
let obj = {
type: 'quote',
format: 'png',
backgroundColor: reswarna,
width: 512,
height: 768,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: {
id: 1,
name: pushname,
photo: { 
url: await falcon.profilePictureUrl(m.sender, "image").catch(() => 'https://telegra.ph/file/95670d63378f7f4210f03.png'),
} },
text: text,
replyMessage: {},
}, ],
}
let response = await axios.post('https://quotly.netorare.codes/generate', obj, {
headers: {
'Content-Type': 'application/json', },
})
let buffer = Buffer.from(response.data.result.image, 'base64')
falcon.sendImageAsSticker(m.chat, buffer, m, {
packname: packname,
author: author
})
}
break
case 'smeme': {
    if (!m.quoted) return m.reply(`Balas gambar dengan perintah:\n${prefix + command} <teks atas>|<teks bawah>`);

    const { Sticker } = require('wa-sticker-formatter');

    async function uguu(filePath) {
        try {
            const form = new FormData();
            form.append('files[]', fs.createReadStream(filePath));
            const { data } = await axios.post('https://uguu.se/upload', form, {
                headers: { ...form.getHeaders() }
            });
            return data.files[0].url;
        } catch (err) {
            throw new Error(err.message);
        }
    }

    async function createSticker(img, url) {
        let stickerMetadata = {
            type: "full",
            pack: "My Sticker",
            author: "© "+ m.pushname,
            quality: 100
        };
        return (new Sticker(img || url, stickerMetadata)).toBuffer();
    }

    let [atas, bawah] = text.split('|');
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || "";

    if (!mime.startsWith('image/')) return m.reply("❌ Hanya bisa digunakan untuk gambar!");

    await falcon.sendMessage(m.chat, { react: { text: '🖼️', key: m.key } });

    let mediaBuffer = await q.download();
    let ext = mime.split('/')[1] || "png";
    let tempFile = path.join(__dirname, `temp_${Date.now()}.${ext}`);
    fs.writeFileSync(tempFile, mediaBuffer);

    try {
        let url = await uguu(tempFile);
        let memeUrl = `https://api.memegen.link/images/custom/${encodeURIComponent(atas || " ")}`
                     + `/${encodeURIComponent(bawah || " ")}.png?background=${url}`;

        let stickerBuffer = await createSticker(memeUrl, false);
        await falcon.sendMessage(m.chat, { sticker: stickerBuffer }, { quoted: m });

        await falcon.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

    } catch (err) {
        console.error(err);
        m.reply("❌ Terjadi kesalahan saat membuat meme.");
    } finally {
        fs.unlinkSync(tempFile);
    }
}
break;
case 'tourl':
case 'nurl': {
    try {
        const uploadFile = require('cloudku-uploader')
        const { Buffer } = require('buffer')

        let q = m.quoted ? m.quoted : m;
        let mime = (q.msg || q).mimetype || '';
        let fileBuffer, fileName;

        if (mime) {
            fileBuffer = await q.download();
            let ext = mime.split('/')[1] || 'bin';
            fileName = `upload.${ext}`;
        } else if (q.text) {
            fileBuffer = Buffer.from(q.text, 'utf-8');
            fileName = 'upload.txt';
        } else {
            return falcon.sendMessage(m.chat, { text: '🚨 Tidak ada media atau teks yang ditemukan!' }, { quoted: m });
        }

        let loading = await falcon.sendMessage(m.chat, { text: '⏳ Mengupload file ke CloudKuImages...' }, { quoted: m });

        const result = await uploadFile(fileBuffer, fileName);

        if (result?.status === 'success') {
            const { filename, type, size, url } = result.result;
            const infoURL = result.information || 'https://cloudkuimages.com/ch';

            let caption = `✅ *Upload Berhasil!*\n\n` +
                          `📮 *URL:* ${url}\n` +
                          `📂 *Nama:* ${filename}\n` +
                          `📛 *Tipe:* ${type}\n` +
                          `📊 *Ukuran:* ${size}\n` +
                          `ℹ️ *Info:* ${infoURL}`;

            await falcon.sendMessage(m.chat, { text: caption }, { quoted: m });
        } else {
            await falcon.sendMessage(m.chat, {
                text: `🚨 Upload gagal.\n\nServer Response:\n${JSON.stringify(result, null, 2)}`
            }, { quoted: m });
        }

        await falcon.sendMessage(m.chat, { delete: loading.key });

    } catch (err) {
        console.error(err);
        falcon.sendMessage(m.chat, { text: '🚨 Terjadi kesalahan internal saat proses upload.' }, { quoted: m });
    }
}
break;
case "tourl2": case 'nurl2': {
    if (!m.quoted) return reply("❌ *Reply file atau gambar yang mau di-upload!*");

    let mime = m.quoted.mimetype || "";
    if (!/image|video|audio|document/.test(mime)) return reply("❌ *Format file tidak didukung!*");

    let media = await falcon.downloadAndSaveMediaMessage(m.quoted);
    if (fs.statSync(media).size > 100 * 1024 * 1024) {
        fs.unlinkSync(media);
        return reply("❌ *File terlalu besar! Maksimal 100MB*");
    }

    let expirationTime = parseInt(args[0], 10);
    if (isNaN(expirationTime) || expirationTime <= 0) {
        expirationTime = 0; 
    }

    let formData = new FormData();
    formData.append('file', fs.createReadStream(media));
    formData.append('expirationOption', expirationTime > 0 ? 'custom' : 'permanent');
    formData.append('expiration', expirationTime);

    try {
        let res = await new Promise((resolve, reject) => {
            let options = {
                hostname: 'Nauval.mycdn.biz.id',
                port: 443,
                path: '/upload',
                method: 'POST',
                headers: formData.getHeaders()
            };

            const req = https.request(options, (res) => {
                let data = '';
                res.on('data', (chunk) => data += chunk);
                res.on('end', () => resolve(JSON.parse(data)));
            });

            req.on('error', (e) => reject(e));
            formData.pipe(req);
        });

        fs.unlinkSync(media);

        if (res.success) {
            reply(`✅ *File berhasil diunggah!*\n📎 *URL:* ${res.fileUrl}\n⏳ *Kedaluwarsa:* ${expirationTime > 0 ? expirationTime + " menit" : "Permanent"}`);
        } else {
            reply(`❌ *Upload gagal:* ${res.message}`);
        }
    } catch (err) {
        console.error("❌ Error upload:", err);
        reply("❌ *Terjadi kesalahan saat upload! Coba lagi nanti.*");
    }
}
break;

// === Group Menu === //
case 'rules': {
  if (!isGroup) return reply("❌ Command ini hanya bisa digunakan di grup!");

  let config = loadConfig();
  if (!config[m.chat]) ensureGroupConfig(m.chat);

  const rules = config[m.chat].rules || "📌 Tidak ada peraturan yang ditetapkan!";
  return reply(`📜 *Peraturan Grup*\n\n${rules}`);
}
break;
case 'setrules': {
  if (!isGroup || !isAdmins) return reply("❌ Hanya admin yang bisa atur rules!");

  let config = loadConfig();
  if (!config[m.chat]) ensureGroupConfig(m.chat);

  const newRules = text.trim();
  if (!newRules) {
    return reply(`📢 Cara atur peraturan grup:\n.setrules [peraturan]\n\nContoh:\n.setrules 1. Jangan spam\n2. Hormati admin\n3. No toxic`);
  }

  config[m.chat].rules = newRules;
  saveConfig(config);

  return reply("✅ Peraturan grup berhasil diperbarui!");
}
break;
case 'setintro': {
  if (!isGroup || !isAdmins) return reply("❌ Hanya admin yang bisa atur intro!");

  let config = loadConfig();
  if (!config[m.chat]) ensureGroupConfig(m.chat);

  const newIntro = text.trim();
  if (!newIntro) {
    return reply(`📢 Cara atur format intro:\n.setintro [format]\n\nContoh:\n.setintro 📌 Perkenalan Member\n- Nama:\n- Umur:\n- Kota:\n- Hobi:`);
  }

  config[m.chat].intro = newIntro;
  saveConfig(config);

  return reply("✅ Format intro berhasil diperbarui!");
}
break;
case 'intro': {
  if (!isGroup) return reply("❌ Command ini hanya bisa digunakan di grup!");

  let config = loadConfig();
  if (!config[m.chat]) ensureGroupConfig(m.chat);

  const intro = config[m.chat].intro || "📌 Format intro belum ditetapkan!";
  return reply(`📜 *Format Perkenalan*\n\n${intro}`);
}
break;

case 'setwelcome': {
  if (!isGroup || !isAdmins) return reply("❌ Hanya admin yang bisa atur welcome!");

  let config = loadConfig();
  if (!config[m.chat]) {
    config[m.chat] = {
      welcome: false,
      message: "Selamat datang @user di @grup!\n@desk",
      buttons: [
        { buttonId: ".intro", buttonText: "Perkenalan" },
        { buttonId: ".rules", buttonText: "Aturan" }
      ]
    };
    saveConfig(config);
  }

  if (text.includes("--msg")) {
    let newMessage = text.split("--msg")[1]?.trim();
    if (!newMessage)return reply(`📢 Cara ubah pesan welcome:\nKetik:\n.setwelcome msg Selamat datang @user di @grup! @desk\n\nFormat :\n    🔹 \`@user\` = Nama pengguna\n    🔹 \`@grup\` = Nama grup\n    🔹 \`@desk\` = Deskripsi grup`);
    config[m.chat].message = newMessage;
    saveConfig(config);
    return reply(`✅ Pesan welcome diubah:\n\`\`\`\n${newMessage}\n\`\`\``)
  } 
  else if (text.includes("--button")) {
    let buttonArgs = text.split("--button")[1]?.trim();
    if (!buttonArgs) return reply(`📢 Cara ubah tombol welcome:\n.setwelcome --button .intro|Card Intro, .tutor|Tutorial`);

    let buttons = buttonArgs.split(",").map(btn => {
      let [cmd, label] = btn.split("|").map(a => a.trim());
      return { buttonId: cmd, buttonText: { displayText: label } };
    });

    if (buttons.length < 2) return reply("⚠️ Minimal harus ada 2 tombol!");

    config[m.chat].buttons = buttons;
    saveConfig(config);
    return reply("✅ Button welcome berhasil diubah!");
  } 
  else if (text.includes("--on")) {
    config[m.chat].welcome = true;
    saveConfig(config);
    return reply("✅ Welcome diaktifkan untuk grup ini!");
  } 
  else if (text.includes("--off")) {
    config[m.chat].welcome = false;
    saveConfig(config);
    return reply("🚫 Welcome dimatikan untuk grup ini!");
  }

  return reply(`⚙️ *Pengaturan Welcome*\n\nGunakan perintah ini:\n
- *${prefix}setwelcome --on* ➝ Aktifkan welcome  
- *${prefix}setwelcome --off* ➝ Matikan welcome  
- *${prefix}setwelcome --msg [pesan]* ➝ Ubah pesan welcome  
  - Gunakan:  
    🔹 \`@user\` = Nama pengguna  
    🔹 \`@grup\` = Nama grup  
    🔹 \`@desk\` = Deskripsi grup  
  - Contoh:  
    \`.setwelcome --msg Selamat datang @user di @grup! @desk\`
- *${prefix}setwelcome --button [cmd|label, cmd|label]* ➝ Ubah tombol  
  - Contoh:  
    \`.setwelcome --button .intro|Card Intro, .tutor|Tutorial\`
  `);
}
break;
    
case 'add': {
if (!isGroup || !isBotAdmins || !isOwner) return

let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await falcon.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break

case 'kick': {
if (!isGroup || !isBotAdmins || !isOwner) return

let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await falcon.groupParticipantsUpdate(m.chat, [users], 'remove')
reply(`Sukses kick @${users.split('@')[0]}`)
}
break
case 'h':
case 'hidetag': {
if (!isGroup || !isOwner) return

 if (m.quoted) {
falcon.sendMessage(m.chat, {
forward: m.quoted.fakeObj,
mentions: participants.map(a => a.id)
})
} else {
falcon.sendMessage(m.chat, {
text: `@${m.chat} ${q ? q : ''}`, // Mention pakai ID grup biar sesuai request
contextInfo: {
mentionedJid: participants.map(a => a.id),
groupMentions: [
{
groupSubject: "Everyone",
groupJid: m.chat
}
]
}
}, { quoted: m })
}
}
break
case 'group':
			case 'grup': {
				if (!m.isGroup) return m.reply(mess.group);
				if (!isAdmins && !isGroupOwner && !isCreator) return m.reply(mess.admin);
				if (!isBotAdmins) return m.reply(mess.botAdmin);
				if (args[0] === 'close') {
					await falcon.groupSettingUpdate(m.chat, 'announcement')
						.then(() => m.reply('✅ Grup berhasil ditutup, hanya admin yang bisa mengirim pesan sekarang! 🔒'))
						.catch((err) => m.reply(`⚠️ Gagal menutup grup: ${err}`));
				} else if (args[0] === 'open') {
					await falcon.groupSettingUpdate(m.chat, 'not_announcement')
						.then(() => m.reply('✅ Grup berhasil dibuka, semua anggota bisa mengirim pesan sekarang! 🔓'))
						.catch((err) => m.reply(`⚠️ Gagal membuka grup: ${err}`));
				} else {
					m.reply(`⚙️ Penggunaan perintah:\n · *${prefix + command} open* → Buka grup\n · *${prefix + command} close* → Tutup grup`);
				}
			}
			break;
case 'tutup':
case 'close': {
    if (!isGroup || !isBotAdmins || !isAdmins) return reply("Fitur ini hanya untuk admin grup!");
    let duration = parseDuration(text);
    if (!duration) return reply("Gunakan format waktu yang benar! Contoh:\n- *!tutup 5m* (5 menit)\n- *!tutup 2h* (2 jam)");

    await falcon.groupSettingUpdate(m.chat, 'announcement'); // Tutup grup
    reply(`✅ Grup ditutup! Akan dibuka dalam ${text}.`);

    setTimeout(async () => {
        await falcon.groupSettingUpdate(m.chat, 'not_announcement'); // Buka grup kembali
        reply("🔓 Grup telah dibuka kembali.");
    }, duration);
}
break;

case 'buka':
case 'open': {
    if (!isGroup || !isBotAdmins || !isAdmins) return reply("Fitur ini hanya untuk admin grup!");
    let duration = parseDuration(text);
    if (!duration) return reply("Gunakan format waktu yang benar! Contoh:\n- *!buka 5m* (5 menit)\n- *!buka 2h* (2 jam)");

    await falcon.groupSettingUpdate(m.chat, 'not_announcement'); // Buka grup
    reply(`🔓 Grup dibuka! Akan ditutup dalam ${text}.`);

    setTimeout(async () => {
        await falcon.groupSettingUpdate(m.chat, 'announcement'); // Tutup grup kembali
        reply("🔒 Grup telah ditutup kembali.");
    }, duration);
}
break;
case 'totag': {
if (!isGroup || !isOwner) return

if (!m.quoted) return
delete m.quoted.chat
falcon.sendMessage(m.chat, {
forward: m.quoted.fakeObj,
mentions: participants.map(a => a.id)
})
}
break
case 'sholat': {
    let pesan = `🕌 *Pengaturan Jadwal Sholat*  
Gunakan perintah ini:  
- \`.setjadwal [nama kota]\` ➝ Aktifkan pengingat sholat  
  🔹 *Contoh:* \`.setjadwal Bogor\`  
- \`.matikanjadwal\` ➝ Matikan pengingat sholat  
- \`.listkota\` ➝ Lihat daftar kota yang tersedia  
- \`.cekjadwal\` ➝ Lihat Jadwal Sholat Di Kota yang tersedia

⚡ *Format Notifikasi Sholat:*  
📢 *Saat Waktu Sholat Tiba:*  
🌆 *Maghrib Telah Tiba*  
Pergi dan ambil air wudhu lalu sholatlah🕌  
📍 *Lokasi:* KAB. BOGOR, JAWA BARAT  

🌙 *Pengaturan Pengingat Puasa*  
Gunakan perintah ini:  
- \`.setpuasa on / off\` ➝ Aktifkan pengingat sahur & buka puasa  
  🔹 *Contoh:* \`.setpuasa on\`  

⚡ *Format Notifikasi Puasa:*  
📢 *Saat Sahur & Buka Puasa:*  
🌙 *Selamat Sahur! Jangan lupa niat ya!*  
📍 *Lokasi:* KOTA JAKARTA  

🌆 *Selamat Buka Puasa!* Semoga berkah!  
📍 *Lokasi:* KOTA JAKARTA  

🔒 *Tutup Grup Otomatis Saat Maghrib*  
- Grup akan *tertutup selama 10 menit* saat waktu Maghrib tiba  
- Setelah 10 menit, grup akan terbuka kembali secara otomatis  

📌 *Semua waktu dihitung berdasarkan kota yang telah diset!*  
📢 *Gunakan* \`.sholat\` *untuk melihat panduan ini kapan saja!*
🌐 *Rest-API Yang Di Gunakan Untuk Mengambil Data Jadwal Sholat*
> https://rest.cloudkuimages.com`;

return reply(pesan);
}
break;
case 'matikanjadwal':
case 'matikanpuasa': {
    if (!isGroup || !isAdmins) return reply("❌ Hanya admin yang bisa mematikan fitur ini!");

    let config = loadConfig();
    if (!config[m.chat]) ensureGroupConfig(m.chat);

    let fitur = command === 'matikanjadwal' ? 'jadwalSholat' : 'jadwalPuasa';
    if (!config[m.chat][fitur]?.aktif) return reply(`❌ ${command === 'matikanjadwal' ? "Jadwal sholat" : "Jadwal puasa"} sudah nonaktif!`);

    config[m.chat][fitur].aktif = false;
    saveConfig(config);

    return reply(`✅ ${command === 'matikanjadwal' ? "Jadwal sholat" : "Jadwal puasa"} telah dimatikan untuk grup ini!`);
}
break;    
case 'setjadwal': {
    if (!isAdmins) return reply("❌ *Hanya admin yang bisa mengubah pengaturan ini!*");
    if (!args[0]) return reply("📌 *Masukkan nama kota!*\n\nContoh: `.setjadwal Bogor` atau `.setjadwal off`");

    let config = loadConfig();
    if (!config[m.chat]) ensureGroupConfig(m.chat);

    // Matikan jadwal sholat
    if (['off', 'mati'].includes(args[0].toLowerCase())) {
        if (!config[m.chat].jadwalSholat || !config[m.chat].jadwalSholat.aktif)
            return reply("⚠️ *Jadwal sholat sudah nonaktif!*");

        config[m.chat].jadwalSholat.aktif = false;
        saveConfig(config);
        return reply("✅ *Jadwal sholat grup dimatikan!*");
    }

    // Proses pengaktifan jadwal sholat
    let daftarKota = await getListKota();
    if (!daftarKota) return reply("❌ *Gagal mengambil daftar kota!*");

    let kota = daftarKota.find(k => k.lokasi.toLowerCase().includes(args.join(" ").toLowerCase()));
    if (!kota) return reply("❌ *Kota tidak ditemukan!* Cek daftar kota dengan `.listkota`");

    let hasilJadwal = await getJadwalSholat(kota.id);
    if (!hasilJadwal) return reply("❌ *Gagal mengambil jadwal sholat kota tersebut!*");

    config[m.chat].jadwalSholat = {
        lokasi: hasilJadwal.lokasi,
        daerah: hasilJadwal.daerah,
        cityId: kota.id,
        aktif: true,
        jadwal: hasilJadwal.jadwal
    };
    saveConfig(config);

    reply(`✅ *Jadwal sholat grup diatur ke:* ${kota.lokasi}\nJadwal hari ini berhasil disimpan!`);
}
break;

case 'setpuasa': {
    if (!isAdmins) return reply("❌ *Hanya admin yang bisa mengubah pengaturan ini!*");
    if (!["on", "off"].includes(args[0])) return reply("📌 *Gunakan:*\n- `.setpuasa on` ➝ Aktifkan mode puasa\n- `.setpuasa off` ➝ Nonaktifkan mode puasa");

    let config = loadConfig();
    if (!config[m.chat]) ensureGroupConfig(m.chat);

    if (!config[m.chat].jadwalPuasa) {
        config[m.chat].jadwalPuasa = { aktif: false };
    }

    let status = args[0] === "on";
    config[m.chat].jadwalPuasa.aktif = status;
    saveConfig(config);

    reply(`✅ *Mode puasa telah ${status ? "diaktifkan" : "dimatikan"}!*`);
}
break;
    
   case 'listkota': {
    let daftarKota = await getListKota();
    if (!daftarKota) return reply("❌ Gagal mengambil daftar kota!");

    let page = parseInt(args[0]) || 1;
    let perPage = 20; 
    let totalPage = Math.ceil(daftarKota.length / perPage);

    if (page > totalPage || page < 1) return reply(`❌ Halaman tidak ditemukan! Total halaman: ${totalPage}`);

    let start = (page - 1) * perPage;
    let end = start + perPage;
    let data = daftarKota.slice(start, end);

    let pesan = `📍 *Daftar Kota (Halaman ${page}/${totalPage})*\n\n`;
    data.forEach(k => {
        pesan += `• ${k.lokasi} (ID: ${k.id})\n`;
    });

    pesan += `\n🔍 Gunakan: \`.listkota [halaman]\` untuk melihat kota lainnya!\nContoh: \`.listkota 2\``;

    return reply(pesan);
}
break;
case 'cekjadwal': {
    if (!args[0]) return reply("❌ *Masukkan nama kota!*\n\n📌 *Contoh:* `.cekjadwal Jakarta`");

    let daftarKota = await getListKota();
    if (!daftarKota) return reply("❌ *Gagal mengambil daftar kota!*");

    let kota = daftarKota.find(k => k.lokasi.toLowerCase().includes(args.join(" ").toLowerCase()));
    if (!kota) return reply("❌ *Kota tidak ditemukan!* Cek daftar kota dengan `.listkota`");

    let jadwal = await getJadwalSholat(kota.id);
    if (!jadwal) return reply("❌ *Gagal mengambil jadwal sholat untuk kota ini!*");

    let pesan = `📅 *Jadwal Sholat untuk ${jadwal.lokasi}, ${jadwal.daerah}*\n`;
    pesan += `🕌 *Subuh:* \`${jadwal.subuh}\`\n`;
    pesan += `☀️ *Dzuhur:* \`${jadwal.dzuhur}\`\n`;
    pesan += `🌤️ *Ashar:* \`${jadwal.ashar}\`\n`;
    pesan += `🌆 *Maghrib:* \`${jadwal.maghrib}\`\n`;
    pesan += `🌌 *Isya:* \`${jadwal.isya}\`\n`;

    reply(pesan);
}
break;    
// === Download Menu === //
case 'yta': {
    if (!text) return m.reply(`Gunakan: ${prefix + command} <url>`);

    let url = args[0];

    try {
        await falcon.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

        let result = await savetube.download(url, "mp3");
        if (!result.status) return m.reply('❌ Gagal mendapatkan audio.');

        let metadata = result.result;
        let captionInfo = `🎵 *${metadata.title}*\n⏱️ *Durasi:* ${metadata.duration}\n🔗 *Bitrate:* ${metadata.quality}kbps`;

        await falcon.sendMessage(m.chat, {
            image: { url: metadata.thumbnail || '' },
            caption: captionInfo
        }, { quoted: m });

        await falcon.sendMessage(m.chat, { react: { text: '📤', key: m.key } });

        let fileSize = await getFileSizeFromUrl(metadata.download);
        let isLarge = fileSize > 25 * 1024 * 1024; // 25MB

        await falcon.sendMessage(m.chat, { 
            [isLarge ? 'document' : 'audio']: { url: metadata.download },
            mimetype: 'audio/mp4',
            fileName: `${metadata.title}.mp3`
        }, { quoted: m });

        await falcon.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

    } catch (err) {
        console.error(err);
        m.reply('❌ Terjadi kesalahan.');
    }
}
break;
case 'ytv': {
    if (!text) return m.reply(`Gunakan: ${prefix + command} <url>,<resolusi>\n\nContoh:\n${prefix + command} https://youtu.be/abc123,720`);

    let [url, res] = text.split(',');
    res = res ? res.trim() : '360';

    const validRes = ['144', '240', '360', '480', '720', '1080', '1440', '2k', '3k', '4k', '5k', '8k'];
    if (!validRes.includes(res)) return m.reply(`❌ Resolusi tidak valid!\nGunakan: ${validRes.join(', ')}.`);

    try {
        await falcon.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

        let result = await savetube.download(url, res);
        if (!result.status) return m.reply('❌ Gagal mendapatkan video.');

        let metadata = result.result;
        let captionInfo = `📹 *${metadata.title}*\n⏱️ *Durasi:* ${metadata.duration}\n📡 *Resolusi:* ${metadata.quality}p`;

        await falcon.sendMessage(m.chat, {
            image: { url: metadata.thumbnail || '' },
            caption: captionInfo
        }, { quoted: m });

        await falcon.sendMessage(m.chat, { react: { text: '📤', key: m.key } });

        let fileSize = await getFileSizeFromUrl(metadata.download);
        let isLarge = fileSize > 25 * 1024 * 1024; // 25MB

        await falcon.sendMessage(m.chat, { 
            [isLarge ? 'document' : 'video']: { url: metadata.download },
            mimetype: 'video/mp4',
            fileName: `${metadata.title}.mp4`
        }, { quoted: m });

        await falcon.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

    } catch (err) {
        console.error(err);
        m.reply('❌ Terjadi kesalahan.');
    }
}
break;
case 'yt': {
    if (!text) return m.reply(`Gunakan: ${prefix + command} <url>,<format>\n\nContoh:\n${prefix + command} https://youtu.be/abc123,mp3\n${prefix + command} https://youtu.be/abc123,720`);

    let [url, format] = text.split(',');
    format = format ? format.trim() : '360';

    const validFormat = ['144', '240', '360', '480', '720', '1080', '1440', '2k', '3k', '4k', '5k', '8k', 'mp3', 'm4a', 'webm', 'aac', 'flac', 'opus', 'ogg', 'wav'];
    if (!validFormat.includes(format)) return m.reply(`❌ Format tidak valid!\nGunakan: ${validFormat.join(', ')}.`);

    try {
        await falcon.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

        let result = await savetube.download(url, format);
        if (!result.status) return m.reply('❌ Gagal mendapatkan media.');

        let metadata = result.result;
        let captionInfo = `🎬 *${metadata.title}*\n⏱️ *Durasi:* ${metadata.duration}\n📡 *Format:* ${metadata.quality}`;

        await falcon.sendMessage(m.chat, {
            image: { url: metadata.thumbnail || '' },
            caption: captionInfo
        }, { quoted: m });

        await falcon.sendMessage(m.chat, { react: { text: '📤', key: m.key } });

        let fileSize = await getFileSizeFromUrl(metadata.download);
        let isLarge = fileSize > 25 * 1024 * 1024; // 25MB

        await falcon.sendMessage(m.chat, { 
            [isLarge ? 'document' : (format === 'mp3' ? 'audio' : 'video')]: { url: metadata.download },
            mimetype: format === 'mp3' ? 'audio/mp4' : 'video/mp4',
            fileName: `${metadata.title}.${format}`
        }, { quoted: m });

        await falcon.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

    } catch (err) {
        console.error(err);
        m.reply('❌ Terjadi kesalahan.');
    }
}
break;
case 'xytmp3':   
case 'ytaudio':   
case 'ytmp3':{  
    if (!text) return m.reply(`Gunakan: ${prefix + command} <url>`);  

    let url = args[0];

    try {  
        await falcon.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });
        let response = await fetch(`https://api.hiuraa.my.id/downloader/savetube?url=${encodeURIComponent(url)}&format=mp3`);
        let result = await response.json();

        if (!result.status) return m.reply('❌ Gagal mendapatkan audio.');

        await falcon.sendMessage(m.chat, { react: { text: '📥', key: m.key } });

        let { result: metadata } = result;
        let captionInfo = `🎵 *${metadata.title}*\n⏱️ *Duration:* ${metadata.duration}\n🔗 *Bitrate:* ${metadata.quality}kbps`;

        await falcon.sendMessage(m.chat, {
            image: { url: metadata.thumbnail || '' },
            caption: captionInfo
        }, { quoted: m });

        await falcon.sendMessage(m.chat, { react: { text: '📤', key: m.key } });

        await falcon.sendMessage(m.chat, { 
            audio: { url: metadata.download },
            mimetype: 'audio/mp4',
            fileName: `${metadata.title}.mp3`
        }, { quoted: m });

        await falcon.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

    } catch (err) {  
        console.error(err);  
        m.reply('❌ Terjadi kesalahan.');  
    }  
}   
break;

case 'xytmp4':   
case 'ytmp4':   
case 'ytvideo':   
case 'ytv': {  
    if (!text) return m.reply(`Gunakan: ${prefix + command} <url>,<resolusi>\n\nContoh:\n${prefix + command} https://youtu.be/abc123,720`);  

    let [url, res] = text.split(',');
    res = res ? res.trim() : '360';

    const validRes = ['144', '240', '360', '480', '720', '1080'];
    if (!validRes.includes(res)) return m.reply(`❌ Resolusi tidak valid!\nGunakan: ${validRes.join(', ')}.`);

    try {  
        await falcon.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

        let response = await fetch(`https://api.hiuraa.my.id/downloader/savetube?url=${encodeURIComponent(url)}&format=${res}`);
        let result = await response.json();

        if (!result.status) return m.reply('❌ Gagal mendapatkan video.');

        await falcon.sendMessage(m.chat, { react: { text: '📥', key: m.key } });

        let { result: metadata } = result;
        let captionInfo = `📹 *${metadata.title}*\n⏱️ *Durasi:* ${metadata.durationr}\n📡 *Resolusi:* ${metadata.quality}p`;

        await falcon.sendMessage(m.chat, {
            image: { url: metadata.thumbnail || '' },
            caption: captionInfo
        }, { quoted: m });

        await falcon.sendMessage(m.chat, { react: { text: '📤', key: m.key } });

        await falcon.sendMessage(m.chat, { 
            video: { url: metadata.download_url },
            mimetype: 'video/mp4',
            fileName: `${metadata.title}.mp4`
        }, { quoted: m });

        await falcon.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

    } catch (err) {  
        console.error(err);  
        m.reply('❌ Terjadi kesalahan.');  
    }  
}   
break;
case 'douyin': {
    if (!text) return m.reply("🚨 Masukkan URL video Douyin!\n\nContoh: .douyin https://v.douyin.com/iP47QoU3/");
falcon.sendMessage(m.chat, { react: { text: '⏱️', key: m.key } });
    try {
        const axios = require('axios');

        async function calculateHash(url, salt) {
            return Buffer.from(url).toString('base64') + (url.length + 1000) + Buffer.from(salt).toString('base64');
        }

        async function SnapDouyin(url) {
            let { data } = await axios.get('https://snapdouyin.app/id');
            let token = data.split('<input id="token" type="hidden" name="token" value="')[1].split('"')[0];

            const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
            const body = new URLSearchParams();
            body.append('url', url);
            body.append('token', token);
            body.append('hash', await calculateHash(url, 'aio-dl'));

            let result = await axios.post('https://snapdouyin.app/wp-json/mx-downloader/video-data/', body.toString(), { headers });
            return result.data;
        }

        let result = await SnapDouyin(text);
        if (!result.medias || result.medias.length === 0) return m.reply("❌ Gagal mengambil media!");

        let media = result.medias.find(m => m.quality.includes("hd")) || result.medias[0];
        let caption = `🎬 *Douyin Video Downloaded!*\n\n📌 *Judul:* ${result.title}\n⏱️ *Durasi:* ${result.duration}\n🔗 *Sumber:* ${result.url}`;

        await falcon.sendMessage(m.chat, { react: { text: '📥', key: m.key } });

        await falcon.sendMessage(m.chat, { 
            video: { url: media.url }, 
            caption: caption
        }, { quoted: m });

        falcon.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
    } catch (err) {
        console.error(err);
        m.reply("❌ Terjadi kesalahan saat mengunduh video!");
    }
}
break;
case 'tiktok':
case 'ttdl':
case 'tt': {

if (!text) return reply(penggunaan("https://vt.tiktok.com/ZSYgBPSLD/"))
if (!(text.includes('http://') || text.includes('https://'))) return reply(`Link Invalid`)
if (!text.includes('tiktok.com')) return reply(`Link Invalid`)
try {
const {
isSlide,
result,
title,
author
} = await tiktok(text)
let no = 1
if (isSlide == true) {
if (isGroup) return reply('Terdeteksi url tiktok slide\nFoto dikirim ke chat pribadi')
let cap = `乂 *TIKTOK SLIDE*\n\n`
for (let img of result) {
falcon.sendMessage(sender, {
image: await fetchBuffer(img)
})
}
} else if (isSlide == false) {
falcon.sendMessage(m.chat, {
text: "Silahkan pilih sesuai keinginan Anda",
footer: `© ${global.nameonwer} - 2025`,,
buttons: [
{
buttonId: `${prefix}tiktokmp4 ${text}`,
buttonText: { 
displayText: 'Video 🎥' 
}
}, {
buttonId: `${prefix}tiktokmp3 ${text}`,
buttonText: {
displayText: "Audio 🎵"
}
}
],
viewOnce: true
}, {
quoted: m
})
}
} catch (error) {
reaction("❌")
}
}
break

case 'tiktokmp4':
case 'tiktokvideo': {

if (!text) return reply(penggunaan("https://vt.tiktok.com/ZSYgBPSLD/"))
if (!(text.includes('http://') || text.includes('https://'))) return reply(`Link Invalid`)
if (!text.includes('tiktok.com')) return reply(`Link Invalid`)
reaction("⏳")
const data = await fetchJson(`https://api.tiklydown.eu.org/api/download?url=${encodeURIComponent(text)}`)
const vidnya = data.video.noWatermark
const caption = `Download berhasil ✅
🆔 Id: ${data.id}
🎥 title: ${data.title}
🗓️ date: ${data.created_at}
♥️ Like: ${data.stats.likeCount}
💬 Comment: ${data.stats.commentCount}
🚀 Share: ${data.stats.shareCount}
▶️ Play: ${data.stats.playCount}
🔰 Save: ${data.stats.saveCount}

© ${global.nameonwer} - 2025
`
reaction("✅")
falcon.sendMessage(m.chat, {
caption: caption,
video: {
url: vidnya
}
}, {
quoted: m
})
}
break

case 'tiktokmp3':
case 'tiktokaudio': {

if (!text) return reply(penggunaan("https://vt.tiktok.com/ZSYgBPSLD/"))
if (!(text.includes('http://') || text.includes('https://'))) return reply(`Link Invalid`)
if (!text.includes('tiktok.com')) return reply(`Link Invalid`)
reaction("⏳")
require('./lib/general/tiktok').Tiktok(text).then( data => {
reaction("✅")
falcon.sendMessage(m.chat, {
audio: {
url: data.audio
},
mimetype: 'audio/mp4'
}, {
quoted: m
})
})
}
break
case 'nhentaidl': {
const PDFDocument = require('pdfkit')
function toPDF(images, opt = {}) {
	return new Promise(async (resolve, reject) => {
		if (!Array.isArray(images)) images = [images]
		let buffs = [], doc = new PDFDocument({ margin: 0, size: 'A4' })
		for (let x = 0; x < images.length; x++) {
			if (/.webp|.gif/.test(images[x])) continue
			let data = (await axios.get(images[x], { responseType: 'arraybuffer', ...opt })).data
			doc.image(data, 0, 0, { fit: [595.28, 841.89], align: 'center', valign: 'center' })
			if (images.length != x + 1) doc.addPage()
		}
		doc.on('data', (chunk) => buffs.push(chunk))
		doc.on('end', () => resolve(Buffer.concat(buffs)))
		doc.on('error', (err) => reject(err))
		doc.end()
	})
}
if (!text) return m.reply(`*Example*: ${ prefix + command } kodenya?`)
try {
await falcon.sendMessage(m.chat, { react: { text: "🍃", key: m.key } });
let data = await( await fetch(`https://rest.api-otakuwibu.my.id/api/nsfw/nhdetail?id=${text}&apikey=mysu`)).json()
let imagepdf = await toPDF(data.data.media)		
let txt = `${data.data.title}\n\n`
  txt += `> *Artists:* ${data.data.artists}\n`
  txt += `> *Pages:* ${data.data.pages}\n`
  txt += `> *Bahasa:* ${data.data.languages}\n`
    txt += `> *Tags:* _${data.data.tags}_`
await falcon.sendMessage(m.chat, { document: imagepdf, fileName: data.data.title + '.pdf', mimetype: 'application/pdf', caption: txt }, { quoted: m })
     } catch (e) {
     console.log(e)
     m.reply(eror)
  }
} 
break
case 'ig': {
    if (!text) return m.reply(`Gunakan: ${prefix + command} <url>,<format>\n\nContoh penggunaan:\n* For Video:\n${prefix + command} https://www.instagram.com/reel/abc123,720\n* For Audio:\n${prefix + command} https://www.instagram.com/reel/abc123,mp3`);

    let [url, format] = text.split(',');
    format = format ? format.trim() : '720'; 

    const validFormat = ['360', '480', '720', '1080', '4k', 'mp3'];
    if (!validFormat.includes(format)) return m.reply(`❌ Format tidak valid!\nGunakan: ${validFormat.join(', ')}.`);
    const instaDownloader = require("./igdl");
    try {
        await falcon.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

        let result = await instaDownloader.download(url, format);
        if (!result.status) return m.reply('❌ Gagal mendapatkan media.');

        let metadata = result.result;
        let captionInfo = `📷 *Instagram Downloader*\n📌 *Judul:* ${metadata.title}\n⏱️ *Durasi:* ${metadata.duration}\n📡 *Format:* ${metadata.quality}`;

        await falcon.sendMessage(m.chat, {
            image: { url: metadata.thumbnail || '' },
            caption: captionInfo
        }, { quoted: m });

        await falcon.sendMessage(m.chat, { react: { text: '📥', key: m.key } });

        let fileUrl = format === 'mp3' ? metadata.download.audio : metadata.download.video;
        let fileSize = await getFileSizeFromUrl(fileUrl);
        let isLarge = fileSize > 25 * 1024 * 1024;

        await falcon.sendMessage(m.chat, { 
            [isLarge ? 'document' : (format === 'mp3' ? 'audio' : 'video')]: { url: fileUrl },
            mimetype: format === 'mp3' ? 'audio/mp4' : 'video/mp4',
            fileName: `${metadata.title}.${format}`
        }, { quoted: m });

        await falcon.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

    } catch (err) {
        console.error(err);
        m.reply('❌ Terjadi kesalahan.');
    }
}
break;
case 'igmp4': {
    if (!text) return m.reply(`Gunakan: ${prefix + command} <url>\n\nContoh:\n${prefix + command} https://www.instagram.com/reel/abc123`);

    let url = text.trim();
    let format = '720';
   const instaDownloader = require("./igdl");
    try {
        await falcon.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

        let result = await instaDownloader.download(url, format);
        if (!result.status) return m.reply('❌ Gagal mendapatkan video.');

        let metadata = result.result;
        let captionInfo = `📷 *Instagram Video*\n📌 *Judul:* ${metadata.title}\n⏱️ *Durasi:* ${metadata.duration}\n📡 *Resolusi:* ${metadata.quality}p`;

        await falcon.sendMessage(m.chat, {
            image: { url: metadata.thumbnail || '' },
            caption: captionInfo
        }, { quoted: m });

        await falcon.sendMessage(m.chat, { react: { text: '📥', key: m.key } });

        let fileUrl = metadata.download.video;
        let fileSize = await getFileSizeFromUrl(fileUrl);
        let isLarge = fileSize > 25 * 1024 * 1024;

        await falcon.sendMessage(m.chat, { 
            [isLarge ? 'document' : 'video']: { url: fileUrl },
            mimetype: 'video/mp4',
            fileName: `${metadata.title}.mp4`
        }, { quoted: m });

        await falcon.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

    } catch (err) {
        console.error(err);
        m.reply('❌ Terjadi kesalahan.');
    }
}
break;
case 'igmp3': {
    if (!text) return m.reply(`Gunakan: ${prefix + command} <url>\n\nContoh:\n${prefix + command} https://www.instagram.com/reel/abc123`);

    let url = text.trim();
    let format = 'mp3'; 
  const instaDownloader = require("./igdl");
    try {
        await falcon.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

        let result = await instaDownloader.download(url, format);
        if (!result.status) return m.reply('❌ Gagal mendapatkan audio.');

        let metadata = result.result;
        let captionInfo = `🎵 *Instagram Audio*\n📌 *Judul:* ${metadata.title}\n⏱️ *Durasi:* ${metadata.duration}\n🔊 *Bitrate:* ${metadata.quality}kbps`;

        await falcon.sendMessage(m.chat, {
            image: { url: metadata.thumbnail || '' },
            caption: captionInfo
        }, { quoted: m });

        await falcon.sendMessage(m.chat, { react: { text: '📥', key: m.key } });

        let fileUrl = metadata.download.audio;
        let fileSize = await getFileSizeFromUrl(fileUrl);
        let isLarge = fileSize > 25 * 1024 * 1024;

        await falcon.sendMessage(m.chat, { 
            [isLarge ? 'document' : 'audio']: { url: fileUrl },
            mimetype: 'audio/mp4',
            fileName: `${metadata.title}.mp3`
        }, { quoted: m });

        await falcon.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

    } catch (err) {
        console.error(err);
        m.reply('❌ Terjadi kesalahan.');
    }
}
break;

case 'terabox': {
    if (!text) return m.reply(`Gunakan: ${prefix + command} <url>\n\nContoh: ${prefix + command} https://terabox.com/s/1B1nTfxPq9_Ib-rf_M_6oFg`);

    const axios = require("axios");

    async function teraboxdl(url) {
        try {
            const apiUrl = `https://teraboxdownloaderonline.com/api/download-m3u8?terabox_link=${encodeURIComponent(url)}`;
            const headers = {
                "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
                "Referer": `https://teraboxdownloaderonline.com/player?url=${encodeURIComponent(url)}`,
            };

            const response = await axios.get(apiUrl, { headers });

            const match = response.data.match(/#EXTINF:\d+,\s*(https[^\s]+)/);
            if (match && match[1]) {
                return { status: "success", video_url: match[1] };
            } else {
                return { status: "error", message: "❌ Video URL tidak ditemukan." };
            }
        } catch (error) {
            return { status: "error", message: "❌ Terjadi kesalahan saat mengambil data.", error: error.message };
        }
    }

    try {
        await falcon.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

        let result = await teraboxdl(text);
        if (result.status !== "success") return m.reply(result.message);

        await falcon.sendMessage(m.chat, { react: { text: '📥', key: m.key } });

        await falcon.sendMessage(m.chat, {
            video: { url: result.video_url },
            mimetype: 'video/mp4',
            caption: `✅ *Berhasil mengunduh dari Terabox!*`
        }, { quoted: m });

        await falcon.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

    } catch (err) {
        console.error(err);
        m.reply("❌ Terjadi kesalahan.");
    }
}
break;

case 'remini':
case 'hd':
case 'hdr': {

if (!quoted || !/image/.test(mime)) return reply(`BalasGambar Dengan Caption *${prefix + command}*`)
reaction("⏳")
let media = await quoted.download()
let proses = await remini(media, "enhance")
reaction("✅")
falcon.sendMessage(m.chat, {
image: proses
}, {
quoted: m
})
}
break
case 'pin':
case 'pinterest': {
    if (!text) return reply(`Format salah, contoh: \n${prefix + command} Anime`)

    reaction("⏳") // Biar ada indikator loading
    
    let anutrest = await pinterest(text) // Ambil hasil pencarian
    if (!anutrest || anutrest.length === 0) return reply("Error, Foto Tidak Ditemukan")

    // Ambil maksimal 10 gambar biar nggak terlalu panjang
    let selectedImages = anutrest.slice(0, 5);
    let anu = []

    for (let i = 0; i < selectedImages.length; i++) {
        let imgsc = await prepareWAMessageMedia(
            { image: { url: selectedImages[i].image } }, 
            { upload: falcon.waUploadToServer }
        )

        anu.push({
            header: proto.Message.InteractiveMessage.Header.fromObject({
                title: `Gambar ke *${i + 1}*`, 
                hasMediaAttachment: true,
                ...imgsc
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [{
                    name: "cta_url",
                    buttonParamsJson: JSON.stringify({
                        display_text: "Lihat di Pinterest",
                        url: selectedImages[i].source || selectedImages[i].image
                    })
                }]
            }), 
            footer: proto.Message.InteractiveMessage.Footer.create({
                text: `© ${global.nameonwer}`
            })
        })
    }

    // Buat format `carouselMessage`
    const msg = await generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `🔎 Berikut hasil pencarian gambar untuk *${text}*`
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards: anu
                    })
                })
            }
        }
    }, {
        userJid: sender,
        quoted: m
    })

    falcon.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
}
break

// === Music === //
case 'plays':
case 'play': 
case 'ytplay': {
if (!text) return m.reply(`Example: ${prefix + command} Lagu sad`);
try {		
let search = await yts(`${text}`);
if (!search || search.all.length === 0) return m.reply(`*Lagu tidak ditemukan!* ☹️`);
let { videoId, image, title, views, duration, author, ago, url, description } = search.all[0];
let caption = `「 *YOUTUBE PLAY* 」\n\n🆔 ID : ${videoId}\n💬 Title : ${title}\n📺 Views : ${views}\n⏰ Duration : ${duration.timestamp}\n▶️ Channel : ${author.name}\n📆 Upload : ${ago}\n🔗 URL Video : ${url}\n📝 Description : ${description}`;
falcon.sendMessage(m.chat,{
image: { url: image },
caption: caption,
footer: `${global.footer}`,
buttons: [
{
buttonId: `${prefix}xytmp3 ${url}`,
buttonText: {
displayText: "YouTube Music"
}
},
{
buttonId: `${prefix}xytmp4 ${url}`,
buttonText: {
displayText: "YouTube Video"
}
}
],
viewOnce: true,
}, {
quoted: m
});
} catch (err) {
console.error(err);
m.reply(`*Terjadi kesalahan!* 😭\n${err.message || err}`);
}
}
break;
case 'spotifydl': {
    if (!text) return m.reply(`Silahkan berikan link, Contoh: ${prefix + command} https://open.spotify.com/track/2ROE7pfI8Monc5n13T3Tmt`);

    const spotifyLink = text.trim();

    try {
        const metaResponse = await axios.get(`http://kinchan.sytes.net/spotify/meta?url=${encodeURIComponent(spotifyLink)}`);
        const metadata = metaResponse.data.data;

        if (!metadata.title || !metadata.artists) {
            return reply('❌ Gagal mengambil metadata, pastikan link benar');
        }

     m.reply(`*乂 SPOTIFY - DOWNLOADER*\n\n` +
            `🎶 *Judul:* ${metadata.title}\n` +
            `🎤 *Artis:* ${metadata.artists}\n` +
            `💿 *Album:* ${metadata.album}\n` +
            `⏳ *Duration:* ${Math.floor(metadata.duration / 60000)}:${((metadata.duration % 60000) / 1000).toFixed(0).padStart(2, '0')} menit\n` +
            `📅 *Release:* ${metadata.release_date}\n\n` +
            `> audio sedang di proses, silahkan tunggu sebentar...`);

        const downloadResponse = await axios.get(`http://kinchan.sytes.net/spotify/downloader?track=${encodeURIComponent(spotifyLink)}&title=${encodeURIComponent(metadata.title)}&artist=${encodeURIComponent(metadata.artists)}`);
        const downloader = downloadResponse.data;

        if (!downloader.downloadUrl || !downloader.downloadUrl.success || !downloader.downloadUrl.link) {
            return m.reply('❌ Gagal mendapatkan hasil download.');
        }

        await falcon.sendMessage(m.chat, {
            audio: { url: downloader.downloadUrl.link },
            mimetype: 'audio/mpeg',
            ptt: false,
            contextInfo: {
                externalAdReply: {
                    title: metadata.title,
                    body: `${metadata.artists} - ${metadata.album}`,
                    mediaType: 1,
                    thumbnailUrl: metadata.cover_url,
                    sourceUrl: metadata.link
                }
            }
        }, { quoted: m });

    } catch (error) {
        console.error(error);
        m.reply('❌ Terjadi kesalahan saat proses, silahkan coba lagi');
    }
}
break

case 'spotify': {
    if (!text) return m.reply(`Masukkan judul lagu yang ingin Anda cari, Contoh: ${prefix + command} gala bunga mataharia`);
    
    m.reply('tunggu sebentar..'); 
    
    try {
        let response = await axios.get(`http://kinchan.sytes.net/spotify?query=${encodeURIComponent(text)}`);
        let data = response.data;

        if (!data.status) return m.reply(`Error: ${data.msg}`);

        let { title, artist, duration, popularity, preview, thumbnail: thumbnailUrl, url } = data.result;
        let audioUrl = data.audio.url;

        const thumbnails = await axios.get(thumbnailUrl, { responseType: 'arraybuffer' });
        const thumbnail = Buffer.from(thumbnails.data, 'binary');

        await falcon.sendMessage(m.chat, {
            image: thumbnail,
            caption: `🎵 *${title}*\n👤 *Artist:* ${artist}\n⏳ *Duration:* ${duration}\n✨ *Rate Song:* ${popularity}\n📌 *Preview:* ${preview || "No preview available"}\n🔗 *Spotify Link:* ${url}`,
        }, { quoted: m });

        await falcon.sendMessage(m.chat, {
            audio: { url: audioUrl },
            mimetype: 'audio/mp4',
            fileName: `${title}.mp3`,
        }, { quoted: m });

    } catch (err) {
        console.error(err);
        m.reply("Terjadi kesalahan saat mengambil lagu dari spotify.");
    }
}
break

case 'spotifysearch': {
 if (!text) return reply(`Masukkan judul yang ingin di search, Contoh: ${prefix + command} suzume`);

 const searchQuery = text.trim();
 m.reply('🔍 Sedang mencari hasil, mohon tunggu sebentar...');

 try {
 const searchResponse = await axios.get(`http://kinchan.sytes.net/spotify/search?query=${encodeURIComponent(searchQuery)}`);
 const searching = searchResponse.data.data;

 if (!searching || !searching.tracks || searching.tracks.length === 0) {
 return m.reply('❌ Tidak ditemukan hasil untuk pencarian ini.');
 }

 let resultText = `🎵 *Hasil Pencarian Spotify untuk:* "${searchQuery}"\n\n`;
 searching.tracks.forEach((track, index) => {
 resultText += `*${index + 1}. ${track.title}*\n`;
 resultText += `🎤 *Artis:* ${track.artists}\n`;
 resultText += `💿 *Album:* ${track.album}\n`;
 resultText += `⏳ *Duration:* ${Math.floor(track.duration / 60000)}:${((track.duration % 60000) / 1000).toFixed(0).padStart(2, '0')} menit\n`;
 resultText += `📅 *Release:* ${track.release_date}\n`;
 resultText += `🔗 *Spotify Link:* ${track.link}\n`;
 resultText += `🆔 *ISRC:* ${track.isrc}\n`;
 resultText += `\n━━━━━━━━━━━━━━━━━━━━━━\n\n`;
 });

 await falcon.sendMessage(m.chat, {
 image: { url: searching.tracks[0].cover_url },
 caption: resultText.trim()
 }, { quoted: m });

 } catch (error) {
 console.error(error);
 m.reply('❌ Terjadi kesalahan saat mencari hasil, silahkan coba lagi.');
 }
}
break
case "yts": {
    if (!text) return m.reply(penggunaan('we dont talk'))
    await falcon.sendMessage(m.chat, { react: { text: '🔎', key: m.key } });

    let ytsSearch = await yts(text);
    const results = ytsSearch.all.slice(0, 7); // Ambil maksimal 7 hasil

    if (results.length === 0) return m.reply("❌ Tidak ditemukan hasil pencarian.");

    let slides = [];
    for (let video of results) {
        let { title, url, timestamp, ago, views, author, image } = video;
        
        // Buat thumbnail dan info video
        let media = await prepareWAMessageMedia({ image: { url: image } }, { upload: falcon.waUploadToServer });
        
        slides.push({
            header: proto.Message.InteractiveMessage.Header.fromObject({
                title: `🎬 ${title}`,
                hasMediaAttachment: true,
                ...media
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                    {
                        name: "cta_copy",
                        buttonParamsJson: `{
                            "display_text": "🔗 Link Video",
                            "copy_code": "${url}"
                        }`
                    }
                ]
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
                text: `📅 Rilis: ${ago} | 👀 Views: ${views} | 🎤 ${author.name || "Unknown"}`
            })
        });
    }

    // Kirim sebagai carousel slide
    const msg = await generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 },
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: `🔎 Hasil pencarian YouTube untuk *"${text}"*`
                    }),
                    carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards: slides
                    })
                })
            }
        }
    }, { userJid: sender, quoted: m });

    falcon.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
}
break;
// === Fun === //
case 'afk': {
if (!isGroup) return reply("Fitur khusus Grup")

if (!text) return reply(penggunaan("sholat"))
if (isAfkOn) return reply("Anda Sudah Afk Sebelumnya")
let reason = text
afk.addAfkUser(m.sender, Date.now(), reason, _afk)
reply(`@${sender.split("@")[0]} telah *AFK*\n\n*Alasan* : ${reason}`)
}
break
 case 'carigc': {
    if (!text) return reply("📌 *Cara Penggunaan:*\n.carigc [keyword]\n\nContoh:\n.carigc anime");

    let results = await cariGC(text);
    if (results.length === 0) return reply("❌ Tidak ditemukan grup dengan kata kunci tersebut!");

    let messages = `🔍 *Hasil Pencarian Grup WhatsApp:*\n\n`;
    results.slice(0, 5).forEach((gc, i) => {
        messages += `📌 *${gc.title}*\n🔗 ${gc.link}\n📖 ${gc.desc}\n\n`;
    });

    return reply(messages);
}
break;
case 'pixiv': {
  if (!text) return m.reply('Masukkan kata kunci!\nContoh: .pixivtopslide hutao')

  await falcon.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } })

  try {
    let hasil = await pixiv(text)
    if (!hasil || hasil.length === 0) return m.reply("Gambar tidak ditemukan!")

    let topImages = hasil.slice(0, 5) // Ambil 5 gambar pertama
    let slides = []

    for (let img of topImages) {
      let imgBuff = await getBuff(img.url)
      let imgsc = await prepareWAMessageMedia({ image: imgBuff }, { upload: falcon.waUploadToServer })

      slides.push({
        header: proto.Message.InteractiveMessage.Header.fromObject({
          title: `🔍 Pixiv ID: ${img.id}`,
          hasMediaAttachment: true,
          ...imgsc
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          buttons: [
            {
              name: "cta_url",
              buttonParamsJson: `{
                "display_text": "Buka di Pixiv",
                "url": "https://www.pixiv.net/en/artworks/${img.id}"
              }`
            }
          ]
        }),
        footer: proto.Message.InteractiveMessage.Footer.create({
          text: "Powered by Pixiv"
        })
      })
    }

    const msg = await generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            body: proto.Message.InteractiveMessage.Body.fromObject({
              text: `🔎 Berikut hasil dari *${text}*`
            }),
            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
              cards: slides
            })
          })
        }
      }
    }, {
      userJid: sender,
      quoted: m
    })

    falcon.relayMessage(m.chat, msg.message, { messageId: msg.key.id })

  } catch (err) {
    m.reply(`Terjadi kesalahan: ${err}`)
  }

  await falcon.sendMessage(m.chat, { react: { text: "✅", key: m.key } })
}
break
case "ping": {
    let os = require("os");
    let { execSync } = require("child_process");

    // Ambil info OS
    let platform = os.platform();
    let arch = os.arch();
    let versionNode = process.version;

    // Ambil info CPU
    let cpus = os.cpus();
    let cpuModel = cpus[0].model;
    let cpuSpeed = cpus[0].speed;
    let cpuLoad = (os.loadavg()[0] / os.cpus().length) * 100;

    // Ambil info RAM
    let totalRam = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
    let freeRam = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);
    let usedRam = (totalRam - freeRam).toFixed(2);

    // Ambil info penyimpanan
    let diskInfo;
    try {
        diskInfo = execSync("df -h / | tail -1").toString().split(/\s+/);
    } catch (err) {
        diskInfo = ["-", "-", "-", "-", "-", "-"];
    }
    let totalDisk = diskInfo[1];
    let usedDisk = diskInfo[2];
    let availableDisk = diskInfo[3];
    let diskUsage = diskInfo[4];

    // Cek ping
    let startTime = process.hrtime();
    let ping = process.hrtime(startTime);
    let latency = (ping[0] * 1e9 + ping[1]) / 1e9;

    // Format pesan
    let info = `*INFO SERVER*\n`
        + `• OS: ${platform} (${os.release()})\n`
        + `• Arsitektur: ${arch}\n`
        + `• Versi Node.js: ${versionNode}\n\n`
        + `*CPU SISTEM*\n`
        + `• Model: ${cpuModel}\n`
        + `• Kecepatan: ${cpuSpeed} MHz\n`
        + `• Beban CPU: ${cpuLoad.toFixed(2)}% (${cpus.length} Core)\n`
        + `• Load Average: ${os.loadavg().map(v => v.toFixed(2)).join(", ")}\n\n`
        + `*MEMORI (RAM)*\n`
        + `• Total: ${totalRam} GB\n`
        + `• Digunakan: ${usedRam} GB\n`
        + `• Tersedia: ${freeRam} GB\n\n`
        + `*PENYIMPANAN*\n`
        + `• Total: ${totalDisk}\n`
        + `• Digunakan: ${usedDisk} (${diskUsage})\n`
        + `• Tersedia: ${availableDisk}\n\n`
        + `*PING*\n`
        + `• Latensi: ${latency.toFixed(12)} detik`;

    await m.reply(info)
}
break;  
case "cekidch": case "idch": {
if (!text) return m.reply(penggunaan ("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await falcon.newsletterMetadata("invite", result)
let teks = `
* *ID :* ${res.id}
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}
`
return m.reply(teks)
}
break    
case "cekidgc": {
    if (!text) return m.reply("Masukin link grupnya!")
    let regex = /chat\.whatsapp\.com\/([\w\d]*)/i
    let match = text.match(regex)
    if (!match) return m.reply("Link grup gak valid!")

    let code = match[1]
    let info = await falcon.groupGetInviteInfo(code)
    
    let teks = ` 乂 Info Group\n\n`
    teks +=`* *Nama:* ${info.subject}\n`
    teks +=`* *ID:* ${info.id}\n`
    teks +=`* *Status:* ${info.announce == false ? "Terbuka" : "Hanya Admin"}\n`
    teks += `* *Pembuat:* ${info?.subjectOwner ? info.subjectOwner.split("@")[0] : "Sudah Keluar"}\n`
    
    return m.reply(teks)
}
break  
          // AI //
case "autoai": {
    if (!text) return reply(`*Contoh:* .autoai *[on/off/reset]*`);

    if (text === "on") {
        if (!sessions[sender]) sessions[sender] = {};
        sessions[sender].active = true;
        saveSession();
        return m.reply(`[ ✅ ] *Auto AI diaktifkan!* Sekarang bot akan merespon chat secara otomatis.`);
    } 
    
    if (text === "off") {
        if (sessions[sender]) sessions[sender].active = false;
        saveSession();
        return m.reply(`[ ❌ ] *Auto AI dimatikan!* Sekarang bot hanya merespon jika dipanggil.`);
    } 
    
    if (text === "reset") {
        if (!sessions[sender]) return m.reply("⚠️ *Tidak ada sesi yang perlu direset!*");
        sessions[sender].messages = [];
        saveSession();
        return m.reply("♻️ *Riwayat chat AI telah direset!*");
    }
}
break;
    case "setmodel": {
    let index = parseInt(text) - 1;

    if (isNaN(index) || index < 0 || index >= availableModels.length) {
        let modelList = availableModels.map((m, i) => `🔹 ${i + 1}. ${m}`).join("\n");
        return m.reply(`📜 *Daftar Model AI:*\n\n${modelList}\n\n🔧 *Gunakan:* .setmodel <nomor>\n📌 *Contoh:* .setmodel 2`);
    }

    sessions[m.sender] = { model: availableModels[index] };
    saveSession();

    return m.reply(`✅ *Model AI diubah ke:* ${availableModels[index]}`);
}
break;

   case "whatanime": {
    let mediaMessage = m.quoted ? m.quoted : m;
    if (!/image|video/.test(mediaMessage.mtype)) 
        return m.reply("Kirim atau reply gambar/video anime yang mau dicari!");

    let media = await falcon.downloadMediaMessage(mediaMessage);

    if (!media) return m.reply("❌ Gagal mengambil media!");

    await falcon.sendMessage(m.chat, { react: { text: "🔎", key: m.key } });

    try {
        let response = await fetch("https://api.trace.moe/search", {
            method: "POST",
            body: media,
            headers: { "Content-type": /image/.test(mediaMessage.mtype) ? "image/jpeg" : "video/mp4" },
        });

        let json = await response.json();

        if (!json.result.length) 
            return m.reply("❌ Gak ketemu anime-nya, coba gambar/video lain!");

        let { anilist, filename, episode, from, to, similarity, video, image } = json.result[0];
        let caption = `🎬 *Anime Ditemukan!*\n\n📌 *Judul:* ${filename}\n📺 *Episode:* ${episode || "?"}\n⏳ *Waktu:* ${from.toFixed(2)}s - ${to.toFixed(2)}s\n📊 *Kemiripan:* ${(similarity * 100).toFixed(2)}%\n📽 *Preview:* ${video}`;

        // Kirim gambar preview
        await falcon.sendMessage(m.chat, { image: { url: image }, caption }, { quoted: m });

    } catch (e) {
        console.error(e);
        m.reply("⚠️ Error saat mencari anime!");
    }
}
break;
    
          //cpanel menu server 1 //
case "cadmin": {
if (!isOwner
) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID User :* ${user.id}
* *Nama :* ${user.first_name}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Login :* ${global.domain}
`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Login Server Panel\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"${user.username}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: null}) 
await falcon.relayMessage(orang, msgii.message, { 
messageId: msgii.key.id 
})
global.panel = null
}
break
 case "buatpanel": case "cpanel": {
if (global.apikey.length < 1) return m.reply("Apikey Tidak Ditemukan!")
if (!args[0]) return m.reply(penggunaan("nama"))
global.panel = [text.toLowerCase()]
let teksnya = "Silahkan Pilih Ram Server Panel"
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ "title": "Pilih Ram Panel", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "highlight_label": \"⭐\", "rows": [{ "header": "Ram Unlimited", "title": "Ram Unlimited | CPU Unlimited", "id": ".unli ${teks}" }, 
{ "header": "Ram 1GB", "title": "Ram 1GB | CPU 40%", "id": ".1gb ${text}" }, 
{ "header": "Ram 2GB", "title": "Ram 2GB | CPU 60%", "id": ".2gb ${text}" }, 
{ "header": "Ram 3GB", "title": "Ram 3GB | CPU 80%", "id": ".3gb ${text}" }, 
{ "header": "Ram 4GB", "title": "Ram 4GB | CPU 100%", "id": ".4gb ${text}" }, 
{ "header": "Ram 5GB", "title": "Ram 5GB | CPU 120%", "id": ".5gb ${text}" }, 
{ "header": "Ram 6GB", "title": "Ram 6GB | CPU 140%", "id": ".6gb ${text}" }, 
{ "header": "Ram 7GB", "title": "Ram 7GB | CPU 160%", "id": ".7gb ${text}" }, 
{ "header": "Ram 8GB", "title": "Ram 8GB | CPU 180%", "id": ".8gb ${text}" }, 
{ "header": "Ram 9GB", "title": "Ram 9GB | CPU 200%", "id": ".9gb ${text}" },
{ "header": "Ram 10GB", "title": "Ram 10GB | CPU 250%", "id": ".10gb ${text}" }]}]}`
}]
})
})} 
}}, {userJid: m.sender, quoted: null}) 
await falcon.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": case "6gb": case "7gb": case "8gb": case "9gb": case "10gb": case "unli": {
if (!isOwner && !isPremium) return m.reply(mess.owner)
if (global.panel == null) return m.reply('Nama/Username Tidak Di Temukan')
var ram
var disknya
var cpu
if (command == "1gb") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gb") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gb") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gb") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gb") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gb") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gb") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gb") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gb") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel[0].toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = ''
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Akun Panel ✅*

* *ID Server :* ${server.id}
* *Nama :* ${name}
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domain}
* *Expired Server :* 1 Bulan
`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: global.foother
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Login Server Panel\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
}, 
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Username\",\"id\":\"123456789\",\"copy_code\":\"${user.username}\"}`
},
{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy Password\",\"id\":\"123456789\",\"copy_code\":\"${password.toString()}\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: null}) 
await falcon.relayMessage(orang, msgii.message, { 
messageId: msgii.key.id 
})
global.panel = null
}
break  
      case "deladmin": {
if (!isOwner) return m.reply(mess.owner)
if (!text) return m.reply(penggunaan("idnya"))
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("Akun admin panel tidak ditemukan!")
await m.reply(`Berhasil menghapus akun admin panel *${capital(getid)}*`)
}
break
case "delpanel": {
if (!isOwner && !isPremium) return m.reply(mess.owner)
if (!text) return m.reply(penggunaan("idnya"))
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return m.reply("Server panel tidak ditemukan!")
m.reply(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
}
break
// Islamic Menu
case 'surah': {
    if (!args[0]) return reply(`📖 *Gunakan:* ${prefix}surah [nomor/nama]\n\nContoh:\n- ${prefix}surah 2\n- ${prefix}surah al-fatihah`);

    let query = args.join(" ").toLowerCase();
    let { data } = await axios.get(`https://rest.cloudkuimages.com/api/muslim/surah`);
    
    if (!data.result) return reply("❌ Gagal mengambil data surat!");
    
    let surat = data.result.find(s => s.number == query || s.name_id.toLowerCase() == query || s.name_en.toLowerCase() == query);
    
    if (!surat) return reply("❌ Surat tidak ditemukan!");

    let pesan = `📖 *Surat ${surat.name_id} (${surat.name_en})*\n`;
    pesan += `- 🏷 Nama Arab: ${surat.name_short}\n`;
    pesan += `- 🔢 Nomor Surat: ${surat.number}\n`;
    pesan += `- 📖 Jumlah Ayat: ${surat.number_of_verses}\n`;
    pesan += `- 🏙️ Golongan: ${surat.revelation_id} (${surat.revelation_en})\n\n`;
    pesan += `📜 *Tafsir Singkat:*\n${surat.tafsir.substring(0, 500)}...\n\n`;
    pesan += `🎧 *Dengarkan:* ${prefix}playsurah ${surat.number}`;
    
    falcon.sendMessage(m.chat, { text: pesan }, { quoted: m });
}
break;

case 'playsurah': {
    if (!args[0]) return reply(`🎧 *Gunakan:* ${prefix}playsurah [nomor/nama]\n\nContoh:\n- ${prefix}playsurah 2\n- ${prefix}playsurah al-fatihah`);

    let query = args.join(" ").toLowerCase();
    let { data } = await axios.get(`https://rest.cloudkuimages.com/api/muslim/surah`);
    
    if (!data.result) return reply("❌ Gagal mengambil data surat!");

    let surat = data.result.find(s => s.number == query || s.name_id.toLowerCase() == query || s.name_en.toLowerCase() == query);

    if (!surat) return reply("❌ Surat tidak ditemukan!");

    let audioUrl = surat.audio_url;
    let fileSize = await getFileSizeFromUrl(audioUrl);

    if (fileSize > 15000000) {
        falcon.sendMessage(m.chat, {
            document: { url: audioUrl },
            fileName: `Surah_${surat.name_id}.mp3`,
            mimetype: 'audio/mpeg'
        }, { quoted: m });
    } else {
        falcon.sendMessage(m.chat, {
            audio: { url: audioUrl },
            mimetype: 'audio/mpeg',
            ptt: false
        }, { quoted: m });
    }
}
break;
case 'ayat': {
    if (!args[0]) return reply(`📖 *Gunakan:*\n- ${prefix}ayat [nomor surat]:[nomor ayat]\n- ${prefix}ayat [nomor ayat]\n\nContoh:\n- ${prefix}ayat 2:255\n- ${prefix}ayat 255`);

    let url;
    if (args[0].includes(':')) {
        let [surah, ayah] = args[0].split(':');
        url = `https://rest.cloudkuimages.com/api/muslim/ayat/${surah}/${ayah}`;
    } else {
        url = `https://rest.cloudkuimages.com/api/muslim/ayat/${args[0]}`;
    }

    let { data } = await axios.get(url);
    if (!data.result) return m.reply("❌ Ayat tidak ditemukan!");

    let ayat = Array.isArray(data.result) ? data.result[0] : data.result;

    let pesan = `📖 *QS. ${ayat.surah}:${ayat.ayah}*\n\n`;
    pesan += `📜 *Arab:*\n${ayat.arab}\n\n`;
    pesan += `🔤 *Latin:*\n_${ayat.latin}_\n\n`;
    pesan += `📝 *Terjemahan:*\n${ayat.text}\n\n`;
    pesan += `📌 *Juz:* ${ayat.juz} | 🕌 *Halaman:* ${ayat.page}\n`;
    pesan += `\n🎧 Sedang mengirim audio...`;

    falcon.sendMessage(m.chat, { text: pesan }, { quoted: m });

    falcon.sendMessage(m.chat, {
        audio: { url: ayat.audio },
        mimetype: 'audio/mpeg',
        ptt: false
    }, { quoted: m });
}
break;
// CAI
case "caisearch": {
    if (!text) return m.reply("⚡ *Contoh:* .caisearch Nahida");

    try {
        let { data } = await axios.get(`https://cai.neekoi.me/search?q=${encodeURIComponent(text)}`);
        if (!data.characters || data.characters.length === 0) return m.reply("⚠️ Karakter tidak ditemukan!");

        let char = data.characters[0]; // Ambil karakter pertama yang paling relevan
        let charID = char.external_id;
        let profile = `🔍 *Profil Karakter CAI:*
🟢 *Nama:* ${char.participant__name}
📜 *Judul:* ${char.title}
🎭 *Creator:* ${char.user__username}
💬 *Greeting:* ${char.greeting}
🔗 *ID:* ${charID}`;

        falcon.sendMessage(m.chat, {
            text: profile,
            footer: `© ${global.nameonwer} - 2025`,,
            buttons: [
                {
                    buttonId: `${prefix}setcai ${charID}`,
                    buttonText: { displayText: "Set Character AI" }
                }
            ],
            viewOnce: true,
            headerType: 1
        }, { quoted: m });

    } catch (err) {
        console.error(err);
        return m.reply("⚠️ Terjadi kesalahan saat mencari karakter!");
    }
}
break;

case "setcai": {
    if (!text) return m.reply("⚡ *Contoh:* .setcai PfwqGXduLsrsncRQt1G4nRyBcqLSxcLsnjR44rxJgRY");

    cai_users[sender] = { char_id: text, active: false };
    saveCaiDB();

    return m.reply(`✅ *Karakter berhasil disimpan!*\nGunakan \`.cai start\` untuk mulai ngobrol.`);
}
break;

case "cai": {
    if (!text) return m.reply("⚡ *Contoh:* .cai start / .cai reset / .cai off");

    if (text === "start") {
        if (!cai_users[sender]) return m.reply("⚠️ *Kamu belum memilih karakter!*\nGunakan `.setcai <id>` terlebih dahulu.");

        cai_users[sender].active = true;
        saveCaiDB();

        return m.reply(`✅ *AutoChat CAI diaktifkan!*\nSekarang bot akan ngobrol otomatis dengan karakter.`);
    }

    if (text === "reset") {
        if (!cai_users[sender]) return m.reply("⚠️ *Kamu belum memilih karakter!*");

        try {
            let { data } = await axios.get(`https://cai.neekoi.me/newchat?id=${cai_users[sender].char_id}`);
            if (!data.external_id) return m.reply("⚠️ Gagal mereset sesi!");

            cai_users[sender].chat_id = data.external_id;
            saveCaiDB();

            return m.reply(`♻️ *Sesi chat berhasil direset!*`);
        } catch (err) {
            console.error(err);
            return m.reply("⚠️ Terjadi kesalahan saat mereset sesi!");
        }
    }

    if (text === "off") {
        if (!cai_users[sender]) return m.reply("⚠️ *Kamu belum memilih karakter!*");

        cai_users[sender].active = false;
        saveCaiDB();

        return m.reply(`❌ *AutoChat CAI dimatikan!*`);
    }
}
break;
 //========================================// 
case "update": {
if (!isOwner) return m.reply("❌ Lu bukan owner!");
if (!args[0]) return m.reply("⚠️ Masukin link raw file yang mau diupdate!");
const fs = require("fs");
const fetch = require("node-fetch");
let updatedFiles = [];
const updateFile = async (url) => {
try {
let splitUrl = url.split("/main/"); 
if (splitUrl.length < 2) throw new Error("Format URL salah!");
let path = splitUrl[1];
if (!path) throw new Error("Path file tidak ditemukan!");
let res = await fetch(url);if (!res.ok) throw new Error("Gagal fetch file!");
let fileData = await res.text();
fs.writeFileSync(`./${path}`, fileData);
updatedFiles.push(`🗃️ Updated: ./${path}`);
} catch (err) {
updatedFiles.push(`❌ Error: ${err.message}`);
}
};

(async () => {
await Promise.all(args.map(updateFile));
m.reply(`🔄 **UPDATE SELESAI!**\n\n${updatedFiles.join("\n")}\n\n⏳ Restarting bot...`);

setTimeout(() => {
process.exit(1);
}, 3000);
})();
}
break;
//=================================================//

case "event":
    if (args.length < 1) return reply("Gunakan perintah: !event buat/join/acak/hapus");

    let event = loadEvent();

    if (args[0] === "buat") {
      if (!isOwner) return reply("Hanya owner yang bisa membuat event.");
      if (event.active) return reply(`Event *${event.name}* sedang berlangsung.`);
      
      let eventName = args.slice(1).join(" ");
      if (!eventName) return reply("Masukkan nama event: !event buat <nama_event>");

      event = { active: true, name: eventName, participants: [] };
      saveEvent(event);
      return reply(`✅ Event *${eventName}* berhasil dibuat!\nGunakan *!event join* untuk ikut.`);

    } else if (args[0] === "join") {
      if (!event.active) return reply("Tidak ada event yang sedang berlangsung.");
      if (event.participants.includes(sender)) return reply("Kamu sudah ikut event ini.");
      
      event.participants.push(sender);
      saveEvent(event);
      return reply(`✅ @${sender.split("@")[0]} berhasil bergabung di event *${event.name}*!`);

    } else if (args[0] === "acak") {
      if (!isOwner) return reply("Hanya owner yang bisa mengacak pemenang.");
      if (!event.active) return reply("Tidak ada event yang sedang berlangsung.");
      if (event.participants.length === 0) return reply("Belum ada peserta yang bergabung.");

      let jumlah = parseInt(args[1]) || 1;
      if (jumlah > event.participants.length) return reply("Jumlah peserta kurang dari yang diminta.");

      let pemenang = [];
      let pesertaCopy = [...event.participants];

      for (let i = 0; i < jumlah; i++) {
        let randIndex = Math.floor(Math.random() * pesertaCopy.length);
        pemenang.push(pesertaCopy.splice(randIndex, 1)[0]);
      }

      let pemenangMention = pemenang.map(p => `@${p.split("@")[0]}`).join("\n");
      reply(`🎉 *Pemenang Event ${event.name}* 🎉\n\n${pemenangMention}`);
      
    } else if (args[0] === "hapus") {
      if (!isOwner) return reply("Hanya owner yang bisa menghapus event.");
      if (!event.active) return reply("Tidak ada event yang sedang berlangsung.");

      saveEvent({ active: false, name: "", participants: [] });
      return reply(`✅ Event *${event.name}* telah dihapus.`);

    } else {
      reply("Gunakan perintah: !event buat/join/acak/hapus");
    }
    break;
//=================================================//
case "reset": {
    if (!isOwner) return m.reply("❌ Hanya owner yang bisa mereset bot!")

    m.reply("🔄 Mereset bot...")

    setTimeout(() => {
        process.exit(1) 
    }, 2000)
}
break

case 'bots':
case 'test': {
m.reply(`status: Online 💡
Runtime: ${runtime(process.uptime())}`)

}

break
case 'setpp': {
  if (!isOwner) return reply('❌ Lu bukan owner, gabisa pake perintah ini!');

  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';

  if (!/image/.test(mime)) return m.reply('❌ Kirim atau reply gambar buat dijadiin foto profil!');

  m.reply('⏳ Lagi update foto profil...');

  try {
    let media = await q.download();
    await falcon.updateProfilePicture(falcon.user.id, media);
    m.reply('✅ Berhasil update foto profil!');
  } catch (err) {
    console.error(err);
    m.reply('❌ Gagal update foto profil\n> error kali coba fix dah');
  }
}
break;

case 'mf':
case 'mediafire': {
    if (!text) return m.reply("🚨 Kirim link MediaFire yang valid!");
    if (!text.includes('mediafire.com')) return m.reply("🚨 Link tidak valid! Harus dari MediaFire.");

    try {
        const fetch = require('node-fetch');
        const cheerio = require('cheerio');

        async function mediaFire(url) {
            try {
                const response = await fetch('https://r.jina.ai/' + url, {
                    headers: { 'x-return-format': 'html' }
                });
                const text = await response.text();
                const $ = cheerio.load(text);
        
                // Cek apakah Time ditemukan atau tidak
                let Time = $('div.DLExtraInfo-uploadLocation div.DLExtraInfo-sectionDetails').text().match(/This file was uploaded from (.*?) on (.*?) at (.*?)\n/);
                let fileName = $('div.dl-btn-label').attr('title') || $('div.dl-btn-label').text().trim();
                let downloadUrl = $('a#downloadButton').attr('href');
                let fileSize = $('a#downloadButton').text().match(/(.*?)/);
                
                return {
                    title: fileName,
                    link: url,
                    filename: fileName,
                    url: downloadUrl,
                    size: fileSize ? fileSize[1] : "Unknown",
                    from: Time ? Time[1] : "Unknown",
                    date: Time ? Time[2] : "Unknown",
                    time: Time ? Time[3] : "Unknown",
                    repair: $('a.retry').attr('href') || "Tidak tersedia",
                };
            } catch (error) {
                return { error: error.message };
            }
        }

        let result = await mediaFire(text);
        if (result.error) return m.reply(`🚨 Gagal mengambil data! Error: ${result.error}`);

        let caption = `📂 *File MediaFire*\n\n🔖 *Judul:* ${result.title}\n📄 *Nama File:* ${result.filename}\n📦 *Ukuran:* ${result.size}\n📍 *Dari:* ${result.from}\n📅 *Tanggal:* ${result.date}\n🕰 *Waktu:* ${result.time}\n🔗 *Link:* ${result.link}\n⚙️ *Repair:* ${result.repair}\n\n📥 *Mengirim file...*`;

        await m.reply(caption);
        await falcon.sendMessage(m.chat, { document: { url: result.url }, mimetype: 'application/octet-stream', fileName: result.filename }, { quoted: m });

    } catch (e) {
        console.error(e);
        return m.reply("🚨 Terjadi kesalahan saat mengambil file!");
    }
}
break

case 'vidhentai': {
    if (!isPremium) return m.reply("🚨 Fitur ini hanya untuk pengguna *Premium*!");

    m.reply("🔞 Video akan dikirim via chat pribadi...");

    try {
        const axios = require('axios');
        const cheerio = require('cheerio');

        let page = Math.floor(Math.random() * 1153);
        let { data } = await axios.get(`https://sfmcompile.club/page/${page}`);
        const $ = cheerio.load(data);
        const hasil = [];

        $('#primary > div > div > ul > li > article').each((_, el) => {
            hasil.push({
                title: $(el).find('header > h2').text(),
                link: $(el).find('header > h2 > a').attr('href'),
                category: $(el).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
                share_count: $(el).find('header > div.entry-after-title > p > span.entry-shares').text(),
                views_count: $(el).find('header > div.entry-after-title > p > span.entry-views').text(),
                type: $(el).find('source').attr('type') || 'image/jpeg',
                video_1: $(el).find('source').attr('src') || $(el).find('img').attr('data-src'),
                video_2: $(el).find('video > a').attr('href') || ''
            });
        });

        if (hasil.length === 0) return m.reply("❌ Gagal mengambil video!");

        let tan = hasil[Math.floor(Math.random() * hasil.length)]; // Ambil random video
        let caption = `
🔞 *VidHentai*
⭔ *Title:* ${tan.title}
⭔ *Category:* ${tan.category}
⭔ *Mimetype:* ${tan.type}
⭔ *Views:* ${tan.views_count}
⭔ *Shares:* ${tan.share_count}
⭔ *Source:* ${tan.link}
⭔ *Media Url:* ${tan.video_1}
`;

        await falcon.sendMessage(m.sender, { react: { text: '🔞', key: m.key } });

        await falcon.sendMessage(m.sender, { 
            video: { url: tan.video_1 }, 
            caption 
        }, { quoted: m });

        m.reply("✅ Video berhasil dikirim ke *chat pribadi*!");
    } catch (err) {
        console.error(err);
        m.reply("❌ Terjadi kesalahan saat mengambil video!");
    }
}
break;
case 'aigen':
case 'aiimage': {
    if (!text) return m.reply(`🚨 Masukkan prompt gambar!\n\nContoh: .aigen anime girl with blue hair`);

    m.reply("🎨 Generating AI Image...");

    try {
        const axios = require("axios");

        async function generateImage(prompt) {
            const url = `https://1yjs1yldj7.execute-api.us-east-1.amazonaws.com/default/ai_image?prompt=${encodeURIComponent(prompt)}&aspect_ratio=1:1&link=writecream.com`;

            const headers = {
                "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
                "Referer": "https://www.writecream.com/ai-image-generator-free-no-sign-up/"
            };

            let { data } = await axios.get(url, { headers });
            if (data && data.image_link) return { success: true, imageUrl: data.image_link };
            return { success: false, message: "❌ Gagal mendapatkan gambar!" };
        }

        let result = await generateImage(text);
        if (!result.success) return m.reply(result.message);

        await falcon.sendMessage(m.chat, { react: { text: '🎨', key: m.key } });

        await falcon.sendMessage(m.chat, { 
            image: { url: result.imageUrl }, 
            caption: `🖼️ *AI Image Generator*\n\n🎨 *Prompt:* ${text}` 
        }, { quoted: m });

        m.reply("✅ Gambar berhasil dibuat!");
    } catch (err) {
        console.error(err);
        m.reply("❌ Terjadi kesalahan saat membuat gambar!");
    }
}
break;

case 'convert': {
    if (!text.includes('|')) return m.reply(`Gunakan format: ${prefix + command} <dari>|<ke>\nContoh: ${prefix + command} USD|IDR`);

    const axios = require('axios');
    const cheerio = require('cheerio');

    let [from, to] = text.split('|').map(v => v.trim().toUpperCase());

    async function convertCurrency(from, to) {
        const url = `https://www.xe.com/currencyconverter/convert/?Amount=1&From=${from}&To=${to}`;
        try {
            const { data } = await axios.get(url);
            const $ = cheerio.load(data);
            const conversionText = $('div[data-testid="conversion"]').find('p.hVDvqw').text().trim();
            const numberMatch = conversionText.match(/([\d,\.]+)/);

            if (numberMatch) {
                return parseFloat(numberMatch[0].replace(/,/g, ''));
            } else {
                throw new Error('Data konversi tidak ditemukan');
            }
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    await falcon.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

    try {
        let rate = await convertCurrency(from, to);
        m.reply(`💱 *Konversi Mata Uang*\n\n📌 1 ${from} = ${rate} ${to}\n🔗 *Sumber:* xe.com`);
        await falcon.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

    } catch (err) {
        console.error(err);
        m.reply("❌ Terjadi kesalahan saat mengambil data konversi.");
    }
}
break;
case 'qrread': {
    if (!m.quoted || !m.quoted.mimetype || !/image/.test(m.quoted.mimetype)) 
        return m.reply(`Balas gambar QR dengan perintah: *${prefix + command}*`);

    let img = await m.quoted.download();
    let form = new FormData();
    form.append('file', img, 'qrcode.png');

    let { data } = await axios.post('https://api.qrserver.com/v1/read-qr-code/', form, { headers: form.getHeaders() });

    if (data[0].symbol[0].data) {
        m.reply(`📥 *Isi QR Code:*\n\n${data[0].symbol[0].data}`);
    } else {
        m.reply("⚠️ QR Code tidak valid atau tidak terbaca.");
    }
}
break;
case 'qrmaker': {
    if (!text) return m.reply(`Gunakan: ${prefix + command} <teks/link>\nContoh: ${prefix + command} https://google.com`);

    const qr = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(text)}`;

    await falcon.sendMessage(m.chat, { 
        image: { url: qr }, 
        caption: `✅ *QR Code berhasil dibuat!*\n🔗 *Data:* ${text}`
    }, { quoted: m });
}
break;
case 'copilot': {
    if (!text) return m.reply('Mau tanya apa?');

    try {
        await falcon.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

        let { data } = await axios.get(`https://fgsi1-restapi.hf.space/api/ai/copilot?text=${encodeURIComponent(text)}`);

        let jawaban = data?.data?.answer || 'Tidak ada jawaban.';

        await falcon.sendMessage(m.chat, { text: `*Copilot Respon:*\n${jawaban}` }, { quoted: m });

        await falcon.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

    } catch (e) {
        console.error(e);
        m.reply('Terjadi kesalahan, coba lagi nanti.');
    }
}
break;

case "hytam": {
if (!isOwner) return m.reply(`*Penyakit penghitaman kumat 🥴
fitur ini hanya untuk owenr sekarang 😂`);
  if (!m.quoted) return m.reply(`Kirim/reply gambar dengan caption *${prefix + command}*`);
  const { GoogleGenerativeAI } = require ("@google/generative-ai");
  let mime = m.quoted.mimetype || "";
  let defaultPrompt = "Ubahlah Karakter Dari Gambar Tersebut Diubah Kulitnya Menjadi Hitam se hitam-hitam nya";

  if (!/image\/(jpe?g|png)/.test(mime)) return m.reply(`Format ${mime} tidak didukung! Hanya jpeg/jpg/png`);

  let promptText = text || defaultPrompt;
  m.reply("Otw Menghitam...");

  try {
    let imgData = await m.quoted.download();
    let genAI = new GoogleGenerativeAI("AIzaSyDdfNNmvphdPdHSbIvpO5UkHdzBwx7NVm0");

    const base64Image = imgData.toString("base64");

    const contents = [
      { text: promptText },
      {
        inlineData: {
          mimeType: mime,
          data: base64Image
        }
      }
    ];

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp-image-generation",
      generationConfig: {
        responseModalities: ["Text", "Image"]
      },
    });

    const response = await model.generateContent(contents);

    let resultImage;
    let resultText = "";

    for (const part of response.response.candidates[0].content.parts) {
      if (part.text) {
        resultText += part.text;
      } else if (part.inlineData) {
        const imageData = part.inlineData.data;
        resultImage = Buffer.from(imageData, "base64");
      }
    }

    if (resultImage) {
      const tempPath = `./tmp/gemini_${Date.now()}.png`;
      fs.writeFileSync(tempPath, resultImage);

      await falcon.sendMessage(m.chat, { 
        image: { url: tempPath },
        caption: `*berhasil menghitamkan*`
      }, { quoted: m });

      setTimeout(() => {
        try {
          fs.unlinkSync(tempPath);
        } catch {}
      }, 30000);
    } else {
      m.reply("Gagal Menghitamkan.");
    }
  } catch (error) {
    console.error(error);
    m.reply(`Error: ${error.message}`);
  }
}
break;
case "ai": {
    if (!text && !m.quoted) return m.reply("❓ Masukkan pertanyaan atau reply media.");

    let currentModel = sessions[m.sender]?.model || "@custom/hoshinoo-ba-idn.lang";
    let requestData = { content: text || "", user: m.sender, model: currentModel };

    // **Cek jika ada media yang di-reply**
    if (m.quoted && m.quoted.mimetype?.startsWith("image/")) {
        let imgBuffer = await m.quoted.download();
        requestData.file = imgBuffer;
    } else if (m.quoted && m.quoted.mimetype?.startsWith("video/")) {
        let vidBuffer = await m.quoted.download();
        requestData.file = vidBuffer;
    }

    try {
        let response = (await axios.post("https://mind.hydrooo.web.id/v1/chat", requestData)).data.result;
        return falcon.sendMessage(m.chat, { text: response }, { quoted: m });
    } catch (err) {
        console.error(err);
        return m.reply("⚠️ *Terjadi kesalahan, coba lagi nanti!*");
    }
}
break;
case 'gemini': {
    if (!text && !m.quoted) return m.reply("• *Contoh:* .gemini selamat pagi");
    const { uploadFile } = require('cloudku-uploader');
    const { Buffer } = require('buffer');
    const { GoogleGenerativeAI } = require ("@google/generative-ai");
    const genAI = new GoogleGenerativeAI("AIzaSyDdfNNmvphdPdHSbIvpO5UkHdzBwx7NVm0");
    const geminiProModel = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
    const geminiFlashModel = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || "";
    let prompt = text || (m.quoted && m.quoted.text) || "";

    try {
        let responseText, imageUrl;

        if (mime) {
            // Proses upload gambar ke CloudkuImages
            let fileBuffer = await q.download();
            let ext = mime.split('/')[1] || 'bin';
            let fileName = `upload.${ext}`;

            let uploadResult = await uploadFile(fileBuffer, fileName);
            if (uploadResult.status !== "success") return m.reply("⚠️ Gagal mengunggah gambar!");

            imageUrl = uploadResult.url;

            // Proses AI dengan gambar
            const imageResp = await fetch(imageUrl).then(res => res.arrayBuffer());
            const imageBase64 = Buffer.from(imageResp).toString("base64");

            let imagePart = {
                inlineData: {
                    data: imageBase64,
                    mimeType: mime
                }
            };

            let result = await geminiProModel.generateContent([imagePart, prompt]);
            responseText = result.response.text();
        } else {
            // Proses teks biasa
            let result = await geminiFlashModel.generateContent(prompt);
            responseText = result.response.text();
        }

        if (!responseText) throw new Error("Response tidak valid dari API");

        falcon.sendMessage(m.chat, {
            text: responseText,
            contextInfo: {
                externalAdReply: {
                    title: 'GEMINI-PRO / VISION',
                    thumbnailUrl: imageUrl || 'https://telegra.ph/file/4bae3d5130aabcbe94588.jpg',
                    sourceUrl: 'https://gemini.google.com',
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m });

    } catch (e) {
        console.error(e);
        m.reply("⚠️ Terjadi kesalahan saat memproses permintaan.");
    }
}
break;

case "daftar": {
    if (!text) return m.reply(`⚠️ Format salah!\n\nContoh: .daftar FlowFalcon,17,Bogor`);

    let [nama, umur, asal] = text.split(",");
    if (!nama || !umur || !asal) return m.reply("⚠️ Semua data harus diisi (nama, umur, asal)");

    userDB[m.sender] = {
        nama: nama.trim(),
        umur: umur.trim(),
        asal: asal.trim()
    };
    saveUserDB();

    let teks = `╭━✦ *User Card* ✦━╮
┃ 💡 *Nama:* ${nama.trim()}
┃ 🎂 *Umur:* ${umur.trim()}
┃ 📍 *Asal:* ${asal.trim()}
╰━━━━━━━━━━━━━━━━━╯`;
    return m.reply(teks);
}
break;
case "prof":
case "profil": {
    let target = m.quoted ? m.quoted.sender : (mentionedJid[0] ? mentionedJid[0] : m.sender);

    if (!isRegistered(target)) return m.reply("⚠️ Pengguna belum terdaftar.");

    let data = userDB[target];
    let teks = `╭━✦ *User Card* ✦━╮
┃ 💡 *Nama:* ${data.nama}
┃ 🎂 *Umur:* ${data.umur}
┃ 📍 *Asal:* ${data.asal}
╰━━━━━━━━━━━━━━━━━╯`;
    return m.reply(teks);
}
break;
//===================================================//
default:
if (budy.startsWith('=>')) {
if (!isOwner) return

function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
reply(String(e))
}
}

if (budy.length > 10000) {
if (sender == botNumber) return
if (!isGroup) return falcon.updateBlockStatus(m.sender, 'block')
}
//==================================================//
if (budy.startsWith("#")) {
if (!isOwner) return

try {
let evaled = await eval(q)
if (typeof evaled !== "string") evaled = util.inspect(evaled)
} catch (e) {
console.log(e)
}
}
//=================================================//
if (cai_users[sender] && cai_users[sender].active) {
    if (m.isBaileys && m.fromMe) return;
    if (!m.text) return;
    if ([".", "#", "!", "/", "\\"].some(prefix => m.text.startsWith(prefix))) return;

    try {
        let { char_id } = cai_users[sender];
        let { data } = await axios.get(`https://cai.neekoi.me/cai?char=${char_id}&message=${encodeURIComponent(m.text)}`);

        if (!data.reply) return m.reply("⚠️ Karakter tidak memberikan balasan!");

        m.reply(data.reply);
    } catch (err) {
        console.error("Error fetching data:", err);
        return m.reply("⚠️ Maaf, terjadi kesalahan saat memproses permintaan.");
    }
}
//=================================================//
if (sessions[m.sender]?.active === true) {
    if (m.isBaileys && m.fromMe) return;
    if (!m.text && !m.quoted) return;
    if ([".", "#", "!", "/", "\\"].some(prefix => m.text?.startsWith(prefix))) return;

    let currentModel = sessions[m.sender].model || DEFAULT_MODEL;
    let requestData = { content: m.text || "", user: m.sender, model: currentModel };

    if (m.quoted && m.quoted.mimetype?.startsWith("image/")) {
        try {
            let imgBuffer = await m.quoted.download();
            requestData.file = imgBuffer;
        } catch (err) {
            console.error("⚠️ Gagal download gambar:", err);
            return m.reply("⚠️ Gagal mengambil gambar, coba lagi!");
        }
    }

    try {
        let response = (await axios.post('https://mind.hydrooo.web.id/v1/chat', requestData)).data.result;
        return falcon.sendMessage(m.chat, { text: response }, { quoted: m });
    } catch (err) {
        console.error("⚠️ Error AI:", err.response?.data || err.message);
        return m.reply("⚠️ *Terjadi kesalahan, coba lagi nanti!*");
    }
}
//==================================================//
if (budy.startsWith('_')) {
if (!isOwner) return

exec(budy.slice(2), (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) return reply(stdout)
})
}
}
} catch (err) {
console.log(chalk.red.bold(err))
}
}
//==================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
delete require.cache[file]
require(file)
})