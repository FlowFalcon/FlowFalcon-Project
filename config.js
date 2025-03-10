const fs = require('fs')
const chalk = require('chalk')
//=================================================//
// setting bot
global.namaowner = "FlowFalcon"
global.ownernumber = "6287740310396"
global.namabot = "Falcon"
global.packname = "dibuat oleh FlowFalcon"
global.author = "6287740310396"
global.idSaluran = "120363329290204598@newsletter"
global.anticall = false
global.autotyping = false
global.autoread = true
global.images = [
"https://img86.pixhost.to/images/588/564679523_media.jpg",
"https://img86.pixhost.to/images/588/564679589_media.jpg",
"https://img86.pixhost.to/images/588/564679622_media.jpg",
"https://img86.pixhost.to/images/588/564679679_media.jpg",
"https://img86.pixhost.to/images/588/564679710_media.jpg",
"https://img86.pixhost.to/images/588/564679716_media.jpg"
]
// Settings Api Panel Pterodactyl
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
// Settingan di atas sudah default dari semua jenis server
// hubungi admin jika ingin request yang berberda
// Server 1
global.domain = "https://"
global.apikey = "" //ptla 1
global.capikey = "" //ptlc 1
// Server 2
global.domain2 = "https://"
global.apikey2 = "" //ptla 2
global.capikey2 = "" //ptlc 2

// Message Command 
global.mess = {
	owner: "* *Akses Ditolak*\nFitur ini hanya untuk owner bot!",
	admin: "* *Akses Ditolak*\nFitur ini hanya untuk admin grup!",
	botAdmin: "* *Akses Ditolak*\nFitur ini hanya untuk ketika bot menjadi admin!",
	group: "* *Akses Ditolak*\nFitur ini hanya untuk dalam grup!",
	private: "* *Akses Ditolak*\nFitur ini hanya untuk dalam private chat!",
	prem: "* *Akses Ditolak*\nFitur ini hanya untuk user premium!",
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done'
}
//==================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.green.bold(`Update ${__filename}`))
delete require.cache[file]
require(file)
})