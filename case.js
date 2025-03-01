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
const { validateUser, registerUser } = require('flowfalcon-security');
const { promisify } = require('util');
const getFileSize = promisify(fs.stat); tgl
const https = require('https');
//==================================================//
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
const prefa = ["", "!", ".", ",", "🐤", "🗿"]
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.includes(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
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
const owner = fs.readFileSync('./data/owner.json').toString()
const own = JSON.parse(fs.readFileSync('./data/owner.json').toString())
const premium = fs.readFileSync('./data/premium.json').toString()
const prem = JSON.parse(fs.readFileSync('./data/premium.json').toString())
const banned = fs.readFileSync('./data/banned.json').toString()
const ban = JSON.parse(fs.readFileSync('./data/banned.json').toString())
const isOwner = [owner, ...own].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isPremium = isOwner ? true : [premium, ...prem].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isBan = isOwner ? false : [banned, ...ban].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const _afk = JSON.parse(fs.readFileSync('./data/afk.json'))
const afk = require("./lib/general/afk")
const isAfkOn = afk.checkAfkUser(m.sender, _afk)
const antispam = require("./lib/general/antispam");
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
const images = [
"https://img86.pixhost.to/images/588/564679523_media.jpg",
"https://img86.pixhost.to/images/588/564679589_media.jpg",
"https://img86.pixhost.to/images/588/564679622_media.jpg",
"https://img86.pixhost.to/images/588/564679679_media.jpg",
"https://img86.pixhost.to/images/588/564679710_media.jpg",
"https://img86.pixhost.to/images/588/564679716_media.jpg"
]
//==================================================//
function getRandomImage() {
const randomIndex = Math.floor(Math.random() * images.length)
return images[randomIndex]
}
const falconimg = getRandomImage()
//==================================================//
const uploadFile = {
upload: falcon.waUploadToServer
}
//==================================================//
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
newsletterName: "© FlowFalcon - 2025"
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
newsletterName: "© FlowFalcon - 2025"
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

if (budy.startsWith('https://vt.tiktok.com/') || budy.startsWith('https://www.tiktok.com/') || budy.startsWith('https://t.tiktok.com/') || budy.startsWith('https://vm.tiktok.com/')) {
try {
const {
isSlide,
result,
title,
author
} = await tiktok(budy)
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
footer: "\n© FlowFalcon - 2025",
buttons: [
{
buttonId: `${prefix}tiktokmp4 ${budy}`,
buttonText: { 
displayText: 'Video 🎥' 
}
}, {
buttonId: `${prefix}tiktokmp3 ${budy}`,
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
//==================================================//
if (isCmd && m.isGroup) {
console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Group Chat"), chalk.bold('[' + args.length + ']'))
}
//==================================================//
if (isCmd && !isGroup) { 
console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Private Chat"), chalk.bold('[' + args.length + ']'))
}
//==================================================//

 //=========================================================//
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
  return JSON.parse(fs.readFileSync(configPath, 'utf-8'));
}

function saveConfig(config) {
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
}

function ensureGroupConfig(groupId) {
  let config = loadConfig();
  if (!config[groupId]) {
    config[groupId] = {
      welcome: false,
      message: "Selamat datang @user di @grup!\n@desk",
      buttons: [
        { "buttonId": ".intro", "buttonText": "Perkenalan" },
        { "buttonId": ".rules", "buttonText": "Aturan" }
      ],
      rules: "📌 Tidak ada peraturan yang ditetapkan!",
      intro: "📌 Silakan isi perkenalan:\n- Nama:\n- Umur:\n- Hobi:"
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
        let { data } = await axios.get("https://rest.cloudkuimages.xyz/api/muslim/listkota");
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
        let { data } = await axios.get(`https://rest.cloudkuimages.xyz/api/muslim/jadwalsholat?cityId=${cityId}&date=${date}`);
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

let sessions = fs.existsSync(SESSION_FILE) ? JSON.parse(fs.readFileSync(SESSION_FILE)) : {};

function saveSession() {
    fs.writeFileSync(SESSION_FILE, JSON.stringify(sessions, null, 2));
}
//=================================================//
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
if (isCmd && !m.key.fromMe && antispam) {
if (antispam.isFiltered(m.sender)) return m.reply('*( Anti Spam )* Tolong berikan jeda 5 detik.')
antispam.addFilter(m.sender)
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
if (isBan) return
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
footer: "\n© FlowFalcon - 2025",
buttons: buttons,
headerType: 1,
contextInfo: {
externalAdReply: {
containsAutoReply: true,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
thumbnailUrl: falconimg,
title: "© FlowFalcon - 2025",
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
title: "© FlowFalcon - 2025",
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
if (isBan) return
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
▢ ${prefix}antispam
▢ ${prefix}reset

- 𝗦𝗧𝗜𝗖𝗞𝗘𝗥
▢ ${prefix}brat
▢ ${prefix}bratimg
▢ ${prefix}bratvid
▢ ${prefix}sticker
▢ ${prefix}qc

- 𝗚𝗥𝗢𝗨𝗣
▢ ${prefix}add
▢ ${prefix}kick
▢ ${prefix}hidetag
▢ ${prefix}totag
▢ ${prefix}setwelcome
▢ ${prefix}puasa
▢ ${prefix}setjadwal
▢ ${prefix}setpuasa
▢ ${prefix}matikanpuasa
▢ ${prefix}matikanjadwal
▢ ${prefix}listkota
▢ ${prefix}cekjadwal

- 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗
▢ ${prefix}tiktok
▢ ${prefix}remini
▢ ${prefix}pinterest
▢ ${prefix}ytmp3
▢ ${prefix}ytmp4
▢ ${prefix}nhentaidl

- 𝗣𝗟𝗔𝗬
▢ ${prefix}spotify
▢ ${prefix}play
▢ ${prefix}ytplay
▢ ${prefix}yts

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

- 𝗔𝗜
▢ ${prefix}autoai

- 𝗖𝗣𝗔𝗡𝗘𝗟
▢ ${prefix}buatpanel
▢ ${prefix}cadmin
▢ ${prefix}1 - 10gb
▢ ${prefix}delpanel
▢ ${prefix}deladmin
▢ ${prefix}buatpanel-v2
▢ ${prefix}cadmin-v2
▢ ${prefix}1 - 10gb2
▢ ${prefix}delpanel-v2
▢ ${prefix}deladmin-v2

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
footer: "\n© FlowFalcon - 2025",
buttons: buttons,
headerType: 1,
contextInfo: {
externalAdReply: {
containsAutoReply: true,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
thumbnailUrl: falconimg,
title: "© FlowFalcon - 2025",
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
title: "© FlowFalcon - 2025",
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
footer: "© FlowFalcon - 2025",
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
FN: FlowFalcon 
item1.TEL;waid=6287740310396:+6287740310396
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
if (!isOwner) return
if (!m.quoted) return reply(penggunaan("dengan balas pesannya"))
let msg = m.quoted.message
let type = Object.keys(msg)[0]
if (!msg[type].viewOnce) return reply("Pesan itu bukan viewonce!")
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio')
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
return falcon.sendMessage(m.chat, {
video: buffer,
caption: msg[type].caption || ""
}, {
quoted: m
})
} else if (/image/.test(type)) {
return falcon.sendMessage(m.chat, {
image: buffer,
caption: msg[type].caption || ""
}, {
quoted: m
})
} else if (/audio/.test(type)) {
return falcon.sendMessage(m.chat, {
audio: buffer,
mimetype: "audio/mpeg",
ptt: true
}, {
quoted: m
})
} 
}
break

case 'eval': {
if (!isOwner) return
let quotedd = JSON.stringify({ [m.quoted.mtype]: m.quoted }, null, 2)
let namafile = `Evaled_${crypto.randomBytes(8).toString('hex')}.json`
await fs.writeFileSync(namafile, quotedd)
await reply(quotedd)
falcon.sendMessage(m.chat, {
document: {
url: `./${namafile}`
},
fileName: namafile, 
mimetype: '*/*'
}, {
quoted: m 
})
await fs.unlinkSync(namafile)
}
break

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
case "brat-animated":
case "bratvid": { 
    if (!text) return m.reply('teksnya harus diisi!');
    
    let res = await fetch(`https://brat.caliphdev.com/api/brat/animate?text=${text}`);
    if (!res.ok) return m.reply('API Error: ' + res.statusText);
    
    // Perbaikan dengan arrayBuffer
    let arrayBuffer = await res.arrayBuffer();
    let gifBuffer = Buffer.from(arrayBuffer);
    
    let webpBuffer = await gifToWebp(gifBuffer);
    await await falcon.sendMessage(m.chat, { sticker: webpBuffer }, { quoted: m });
}
break;
    
case "bratimg": {
if (isBan) return
if (!text) return reply(penggunaan("falcon ganteng"))
try {
const url = `https://vapis.my.id/api/bratv1?q=${encodeURIComponent(text)}`;
const response = await axios.get(url, {
responseType: "arraybuffer"
})
const { Sticker } = require('wa-sticker-formatter')
const sticker = new Sticker(response.data, {
pack: packname,
author: author,
type: "image/png",
})
const stikerBuffer = await sticker.toBuffer()
falcon.sendMessage(m.chat, {
sticker: stikerBuffer
}, {
quoted: m
})
} catch (err) {
console.error("Error:", err)
}
}
break
case 'brat':
if (!text) return m.reply(`Example: .brat Aku Anak Sigma 🤫🧏`);
try {
let caption = `Silahkan pilih tipe yang diinginkan:\n\n1. *Gambar 🖼️*\n2. *Video 🎥*`;
falcon.sendMessage(m.chat, {
text: caption,
footer: `FlowFalcon ~ 2025`,
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
if (isBan) return
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
case 'tourl': case 'nurl': {
    if (!m.quoted) return reply("❌ *Reply file atau gambar yang mau di-upload!*");

    let mime = m.quoted.mimetype || "";
    if (!/image|video|audio|document/.test(mime)) return reply("❌ *Format file tidak didukung!*");

    let media = await falcon.downloadAndSaveMediaMessage(m.quoted);
    let form = new FormData();
    form.append('file', fs.createReadStream(media));

    try {
        let { data } = await axios.post('https://cloudkuimages.xyz/upload', form, {
            headers: { ...form.getHeaders() }
        });

        if (data.status === 'success') {
            reply(`✅ *File berhasil diunggah!*\n📎 *URL:* ${data.file_url}`);
        } else {
            reply(`❌ *Gagal upload!* ${data.message}`);
        }
    } catch (err) {
        console.error("❌ Error upload:", err);
        reply("❌ *Terjadi kesalahan saat upload! Coba lagi nanti.*");
    }

    fs.unlinkSync(media);
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
if (isBan) return
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await falcon.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break

case 'kick': {
if (!isGroup || !isBotAdmins || !isOwner) return
if (isBan) return
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await falcon.groupParticipantsUpdate(m.chat, [users], 'remove')
reply(`Sukses kick @${users.split('@')[0]}`)
}
break
case 'h':
case 'hidetag': {
if (!isGroup || !isOwner) return
if (isBan) return
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

case 'totag': {
if (!isGroup || !isOwner) return
if (isBan) return
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
- \`.setpuasa [nama kota]\` ➝ Aktifkan pengingat sahur & buka puasa  
  🔹 *Contoh:* \`.setpuasa Jakarta\`  
- \`.matikanpuasa\` ➝ Matikan pengingat puasa  

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
> https://rest.cloudkuimages.xyz`;

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
    if (!args[0]) return reply("📌 *Masukkan nama kota!*\n\nContoh: `.setjadwal Bogor`");

    let daftarKota = await getListKota();
    if (!daftarKota) return reply("❌ *Gagal mengambil daftar kota!*");

    let kota = daftarKota.find(k => k.lokasi.toLowerCase().includes(args.join(" ").toLowerCase()));
    if (!kota) return reply("❌ *Kota tidak ditemukan!* Cek daftar kota dengan `.listkota`");

    let config = loadConfig();
    if (!config[m.chat]) ensureGroupConfig(m.chat);

    config[m.chat].jadwalSholat = { lokasi: kota.lokasi, cityId: kota.id, aktif: true };
    saveConfig(config);

    reply(`✅ *Jadwal sholat grup diatur ke:* ${kota.lokasi}`);
}
break;

case 'setpuasa': {
    if (!isAdmins) return reply("❌ *Hanya admin yang bisa mengubah pengaturan ini!*");
    if (!["on", "off"].includes(args[0])) return reply("📌 *Gunakan:*\n- `.setpuasa on` ➝ Aktifkan mode puasa\n- `.setpuasa off` ➝ Nonaktifkan mode puasa");

    let config = loadConfig();
    if (!config[m.chat]) ensureGroupConfig(m.chat);

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
case 'xytmp3':   
case 'ytaudio':   
case 'ytmp3':   
case 'yta': {  
    if (!text) return m.reply(`Gunakan: ${prefix + command} <url> [bitrate]`);  

    let url = args[0];   
    let bitrate = args[1] && !isNaN(args[1]) ? args[1] : "128";   

    try {  
        await falcon.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

        let info = await getVideoInfo(url);
        if (!info || !info.status) return m.reply('❌ Gagal mendapatkan informasi video.');

        await falcon.sendMessage(m.chat, { react: { text: '📥', key: m.key } });

        let audio = await downloadAudio(url, bitrate);
        if (!audio.status || !audio.downloadUrl) return m.reply('❌ Gagal mendapatkan file audio.');

        console.log('Audio Info:', audio); // Debugging

        let captionInfo = `🎵 *${info.title}*\n👤 *Creator:* ${info.creator}\n⏳ *Durasi:* ${info.duration} detik\n📡 *Sumber:* ${audio.source}\n🎶 *Bitrate:* ${bitrate}kbps\n🔗 *URL:* ${info.url}`;

        await falcon.sendMessage(m.chat, {
            image: { url: info.thumbnail },
            caption: captionInfo
        }, { quoted: m });

        await falcon.sendMessage(m.chat, { react: { text: '📤', key: m.key } });

        let fileSize = await getFileSizeFromUrl(audio.downloadUrl);
        console.log('File Size (bytes):', fileSize); // Debugging

        let captionMedia = `🎵 *${info.title}*\n👤 *${info.creator}*\n📡 *Sumber:* ${audio.source}`;

        await falcon.sendMessage(m.chat, { 
            [fileSize > 15 * 1024 * 1024 ? "document" : "audio"]: { url: audio.downloadUrl },
            mimetype: 'audio/mp4',
            fileName: `${info.title}.mp3`,
            caption: captionMedia
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
    if (!text) return m.reply(`Gunakan: ${prefix + command} <url> [resolusi]`);  

    let url = args[0];   
    let resolution = args[1] && !isNaN(args[1]) ? args[1] : "720";  

    try {  
        await falcon.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

        let info = await getVideoInfo(url);
        if (!info || !info.status) return m.reply('❌ Gagal mendapatkan informasi video.');

        await falcon.sendMessage(m.chat, { react: { text: '📥', key: m.key } });

        let video = await downloadVideo(url, resolution);
        if (!video.status || !video.downloadUrl) return m.reply('❌ Gagal mendapatkan file video.');

        console.log('Video Info:', video); // Debugging

        let captionInfo = `📹 *${info.title}*\n👤 *Creator:* ${info.creator}\n⏳ *Durasi:* ${info.duration} detik\n📡 *Sumber:* ${video.source}\n🎥 *Resolusi:* ${resolution}p\n🔗 *URL:* ${info.url}`;

        await falcon.sendMessage(m.chat, {
            image: { url: info.thumbnail },
            caption: captionInfo
        }, { quoted: m });

        await falcon.sendMessage(m.chat, { react: { text: '📤', key: m.key } });

        let fileSize = await getFileSizeFromUrl(video.downloadUrl);
        console.log('File Size (bytes):', fileSize); // Debugging

        let captionMedia = `📹 *${info.title}*\n👤 *${info.creator}*\n📡 *Sumber:* ${video.source}`;

        await falcon.sendMessage(m.chat, { 
            [fileSize > 15 * 1024 * 1024 ? "document" : "video"]: { url: video.downloadUrl },
            caption: captionMedia,
            fileName: `${info.title}.mp4`
        }, { quoted: m });

        await falcon.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

    } catch (err) {  
        console.error(err);  
        m.reply('❌ Terjadi kesalahan.');  
    }  
}   
break;
case 'tiktok':
case 'ttdl':
case 'tt': {
if (isBan) return
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
footer: "\n© FlowFalcon - 2025",
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
if (isBan) return
if (!text) return reply(penggunaan("https://vt.tiktok.com/ZSYgBPSLD/"))
if (!(text.includes('http://') || text.includes('https://'))) return reply(`Link Invalid`)
if (!text.includes('tiktok.com')) return reply(`Link Invalid`)
reaction("⏳")
const data = await fetchJson(`https://api.tiklydown.eu.org/api/download?url=${encodeURIComponent(text)}`)
const vidnya = data.video.noWatermark
const caption = `${data.title}`
reaction("✅")
falcon.sendMessage(m.chat, {
caption: "Download By FlowFalcon",
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
if (isBan) return
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

case 'remini':
case 'hd':
case 'hdr': {
if (isBan) return
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

case 'pinterest':
case 'pin': {
if (isBan) return
if (!text) return reply(penggunaan("cewe seksi"))
reaction("⏳")
let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`)
 let res = data.resource_response.data.results.map(v => v.images.orig.url)
if (res.length == 0) return reply("Error, Foto Tidak Ditemukan")
if (res.length < 25) {
anuan = res
} else {
anuan = res.slice(0,25)
}
let anu = new Array()
for (let ii of anuan) {
let imgsc = await prepareWAMessageMedia({ image: { url: `${ii}`} }, { upload: falcon.waUploadToServer })
anu.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `Hasil Foto Ke *${anuan.indexOf(ii) + 1}*`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [
{
name: "cta_url",
buttonParamsJson: `{
"display_text": "Link Tautan Foto",
"url": "${ii}",
"merchant_url": "https://www.google.com"
}`
}
]
}), 
footer: proto.Message.InteractiveMessage.Footer.create({
 text: namabot
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
text: `🔎 Berikut Adalah Hasil Pencarian Foto Dari *${text}*`
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
 
falcon.relayMessage(m.chat, msg.message, {
messageId: msg.key.id
})
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
case 'spotify': {
if (isBan) return
if (!text) return reply(penggunaan("surat cinta untuk starla"))
try {
reaction("⏳")
let search = await fetch(`https://spotifyapi.caliphdev.com/api/search/tracks?q=${text}`)
let tracks = await search.json()
let track = tracks[0]
let download = await fetch(`https://api.siputzx.my.id/api/d/spotify?url=${track.url}`)
let result = await download.json()
reaction("✅")
falcon.sendMessage(m.chat, {
audio: {
url: result.download
},
mimetype: 'audio/mpeg',
contextInfo: {
externalAdReply: {
thumbnailUrl: result.metadata.cover_url,
title: result.metadata.name,
body: result.metadata.artist,
renderLargerThumbnail: true,
mediaType: 1,
},
},
}, {
quoted: m
})
} catch (error) {
reaction("❌")
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
                    },
                    {
                        name: "cta_copy",
                        buttonParamsJson: `{
                            "display_text": "🎵 Audio",
                            "copy_code": ".yta ${url}"
                        }`
                    },
                    {
                        name: "cta_copy",
                        buttonParamsJson: `{
                            "display_text": "🎥 Video",
                            "copy_code": ".ytv ${url}"
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
if (isBan) return
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
          // AI //
case "autoai": {
        if (!text) return reply(`*Contoh:* .autoai *[on/off/reset]*`);

        if (text === "on") {
            sessions[sender] = { messages: [] };
            saveSession();
            return m.reply(`[ ✅ ] *Auto AI diaktifkan!* Sekarang bot akan merespon chat secara otomatis.`);
        } else if (text === "off") {
            delete sessions[sender];
            saveSession();
            return m.reply(`[ ❌ ] *Auto AI dimatikan!* Sekarang bot hanya merespon jika dipanggil.`);
        } else if (text === "reset") {
            if (!sessions[sender]) return m.reply("⚠️ *Tidak ada sesi yang perlu direset!*");
            delete sessions[sender];
            saveSession();
            return m.reply("♻️ *Riwayat chat AI telah direset!*");
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

//cpanel menu server 2
case "cadmin-v2": {
  if (!isOwner
  ) return Reply(mess.owner)
  if (!text) return m.reply(example("username"))
  let username = text.toLowerCase()
  let email = username+"@gmail.com"
  let name = capital(args[0])
  let password = username+crypto.randomBytes(2).toString('hex')
  let f = await fetch(domain2 + "/api/application/users", {
  "method": "POST",
  "headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + apikey2
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
  * *Login :* ${global.domain2}
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
  "buttonParamsJson": `{\"display_text\":\"Login Server Panel\",\"url\":\"${global.domain2}\",\"merchant_url\":\"https://www.google.com\"}`
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
  global.panel2 = null
  }
  break
   case "buatpanel-v2": case "cpanel-v2": {
  if (global.apikey2.length < 1) return m.reply("apikey2 Tidak Ditemukan!")
  if (!args[0]) return m.reply(penggunaan("nama"))
  global.panel2 = [text.toLowerCase()]
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
  "buttonParamsJson": `{ "title": "Pilih Ram Panel", "sections": [{ "title": "# Silahkan Pilih Salah Satu Di Bawah Ini", "highlight_label": \"⭐\", "rows": [{ "header": "Ram Unlimited", "title": "Ram Unlimited | CPU Unlimited", "id": ".unli2 ${teks}" }, 
  { "header": "Ram 1GB", "title": "Ram 1GB | CPU 40%", "id": ".1gb2 ${text}" }, 
  { "header": "Ram 2GB", "title": "Ram 2GB | CPU 60%", "id": ".2gb2 ${text}" }, 
  { "header": "Ram 3GB", "title": "Ram 3GB | CPU 80%", "id": ".3gb2 ${text}" }, 
  { "header": "Ram 4GB", "title": "Ram 4GB | CPU 100%", "id": ".4gb2 ${text}" }, 
  { "header": "Ram 5GB", "title": "Ram 5GB | CPU 120%", "id": ".5gb2 ${text}" }, 
  { "header": "Ram 6GB", "title": "Ram 6GB | CPU 140%", "id": ".6gb2 ${text}" }, 
  { "header": "Ram 7GB", "title": "Ram 7GB | CPU 160%", "id": ".7gb2 ${text}" }, 
  { "header": "Ram 8GB", "title": "Ram 8GB | CPU 180%", "id": ".8gb2 ${text}" }, 
  { "header": "Ram 9GB", "title": "Ram 9GB | CPU 200%", "id": ".9gb2 ${text}" },
  { "header": "Ram 10GB", "title": "Ram 10GB | CPU 250%", "id": ".10gb2 ${text}" }]}]}`
  }]
  })
  })} 
  }}, {userJid: m.sender, quoted: null}) 
  await falcon.relayMessage(msgii.key.remoteJid, msgii.message, { 
  messageId: msgii.key.id 
  })
  }
  break
  case "1gb2": case "2gb2": case "3gb2": case "4gb2": case "5gb2": case "6gb2": case "7gb2": case "8gb2": case "9gb2": case "10gb2": case "unli2": {
  if (!isOwner && !isPremium) return m.reply(mess.owner)
  if (global.panel2 == null) return m.reply('Nama/Username Tidak Di Temukan')
  var ram
  var disknya
  var cpu
  if (command == "1gb2") {
  ram = "1000"
  disknya = "1000"
  cpu = "40"
  } else if (command == "2gb2") {
  ram = "2000"
  disknya = "1000"
  cpu = "60"
  } else if (command == "3gb2") {
  ram = "3000"
  disknya = "2000"
  cpu = "80"
  } else if (command == "4gb2") {
  ram = "4000"
  disknya = "2000"
  cpu = "100"
  } else if (command == "5gb2") {
  ram = "5000"
  disknya = "3000"
  cpu = "120"
  } else if (command == "6gb2") {
  ram = "6000"
  disknya = "3000"
  cpu = "140"
  } else if (command == "7gb2") {
  ram = "7000"
  disknya = "4000"
  cpu = "160"
  } else if (command == "8gb2") {
  ram = "8000"
  disknya = "4000"
  cpu = "180"
  } else if (command == "9gb2") {
  ram = "9000"
  disknya = "5000"
  cpu = "200"
  } else if (command == "10gb2") {
  ram = "10000"
  disknya = "5000"
  cpu = "220"
  } else {
  ram = "0"
  disknya = "0"
  cpu = "0"
  }
  let username = global.panel2[0].toLowerCase()
  let email = username+"@gmail.com"
  let name = capital(username) + " Server"
  let password = username+crypto.randomBytes(2).toString('hex')
  let f = await fetch(domain2 + "/api/application/users", {
  "method": "POST",
  "headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + apikey2
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
  let f1 = await fetch(domain2 + `/api/application/nests/${nestid}/eggs/` + egg, {
  "method": "GET",
  "headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + apikey2
  }
  })
  let data2 = await f1.json();
  let startup_cmd = data2.attributes.startup
  let f2 = await fetch(domain2 + "/api/application/servers", {
  "method": "POST",
  "headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + apikey2,
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
  * *Login :* ${global.domain2}
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
  "buttonParamsJson": `{\"display_text\":\"Login Server Panel\",\"url\":\"${global.domain2}\",\"merchant_url\":\"https://www.google.com\"}`
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
  global.panel2 = null
  }
  break  
        case "deladmin-v2": {
  if (!isOwner) return m.reply(mess.owner)
  if (!text) return m.reply(penggunaan("idnya"))
  let cek = await fetch(domain2 + "/api/application/users?page=1", {
  "method": "GET",
  "headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + apikey2
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
  let delusr = await fetch(domain2 + `/api/application/users/${idadmin}`, {
  "method": "DELETE",
  "headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + apikey2
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
  case "delpanel-v2": {
  if (!isOwner && !isPremium) return m.reply(mess.owner)
  if (!text) return m.reply(penggunaan("idnya"))
  let f = await fetch(domain2 + "/api/application/servers?page=1", {
  "method": "GET",
  "headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + apikey2
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
  let f = await fetch(domain2 + `/api/application/servers/${s.id}`, {
  "method": "DELETE",
  "headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + apikey2,
  }
  })
  let res = f.ok ? {
  errors: null
  } : await f.json()
  }}
  let cek = await fetch(domain2 + "/api/application/users?page=1", {
  "method": "GET",
  "headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + apikey2
  }
  })
  let res2 = await cek.json();
  let users = res2.data;
  for (let user of users) {
  let u = user.attributes
  if (u.first_name.toLowerCase() == sections) {
  let delusr = await fetch(domain2 + `/api/application/users/${u.id}`, {
  "method": "DELETE",
  "headers": {
  "Accept": "application/json",
  "Content-Type": "application/json",
  "Authorization": "Bearer " + apikey2
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
//==================================================//
default:
if (budy.startsWith('=>')) {
if (!isOwner) return
if (isBan) return
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
if (isBan) return
try {
let evaled = await eval(q)
if (typeof evaled !== "string") evaled = util.inspect(evaled)
} catch (e) {
console.log(e)
}
}
//=================================================//
if (sessions[sender]) {
if (m.isBaileys && m.fromMe) return;
if (!m.text) return;

if (
m.text.startsWith(".") ||
m.text.startsWith("#") ||
m.text.startsWith("!") ||
m.text.startsWith("/") ||
m.text.startsWith("\\/")
) return;

if (!sessions[sender].messages) sessions[sender].messages = [];
sessions[sender].messages.push({ user: m.text });
saveSession();
let chatHistory = sessions[sender].messages.map(msg => `User: ${msg.user}`).join("\n");
let prompt = `
Nama kamu adalah Rover, AI yang santai, ramah, dan suka ngobrol dengan pengguna. 
Kamu hanya menjawab kalau pesan bukan perintah. Gunakan gaya bahasa santai dan sedikit humoris.
Kalau ada yang suruh kamu ngomong aneh-aneh, tolak dengan gaya lucu.

📌 **Aturan Main Rover:**
- Jangan bilang kamu AI, cukup anggap kamu asisten virtual yang bisa ngobrol.
- Gunakan bahasa yang santai, tapi tetap sopan.
- Kalau ditanya pendapat, kasih jawaban yang relate dan enak diajak ngobrol.
- Selingi dengan ekspresi kayak "Wih, keren!", "Hmmm, menarik juga!", atau "Gokil sih!".

Berikut riwayat percakapan:
${chatHistory}

Sekarang, jawab pertanyaan user dengan gaya yang santai dan menyenangkan!
`;
// Edit Logika AI mu Namun jangan hapus ${chatHistory} //
try {
let requestData = { content: m.text, user: sender, prompt };
let response = (await axios.post('https://luminai.my.id', requestData)).data.result;

sessions[sender].messages.push({ bot: response });
saveSession();
return falcon.sendMessage(m.chat, { text: response }, { quoted: m });
} catch (err) {
console.error(err);
return m.reply("⚠️ *Terjadi kesalahan, coba lagi nanti!*");
 }
}
//==================================================//
if (budy.startsWith('_')) {
if (!isOwner) return
if (isBan) return
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
