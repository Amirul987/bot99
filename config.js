/*
    Created & Base By ArxzyDev
    Jual Sc? Neraka Paling Bawah
    My Contact https://wa.me/6289513081052
    
   Notes:
   Jika Ingin Recode Silakan Tapi Ingat Creditnya
   Sc Adrian-MD Akan Terus Di Update.
   Jika Ingin Beli Apikey Chat Owner Lolhuman
   
*/

const fs = require('fs')
const chalk = require('chalk')

global.apikey = 'nobitaxd' // LOLHUMAN
global.ibeng = 'tamvan' // FREE APIKEY IBENG
global.rosekey = 'cba86fac49e37d63f9bd4561' // ROSE
global.keyai = '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' // https://platform.openai.com/account/api-keys
global.domain = 'https://mypanel.nobita404.xyz' // Isi Domain Lu
global.apikeyplta = 'ptla_QycSI5MvW7dBlhLk0fG0Pr1uyXCkz9aGvn9KAQhKtyG' // Isi Apikey Plta Lu
global.capikey = 'ptlc_ULIZ8uRrz6c1aL0zxFHtw9wK5g5FhLL7APSdisOeqhY' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location

//—————「 Set Nama Bot & Own 」—————//
global.namabot = 'ɴᴏʙɪᴛᴀ-ᴍᴅ'
global.namaowner = 'ɴᴏʙɪᴛᴀ'
global.wagc = "https://chat.whatsapp.com/D8idyjswgHtHeABcXPsUyk"

//—————「 Setting Owner 」—————//
global.owner = ['6285749037935']
global.nomerowner = '6285749037935'
global.premium = ['6285749037935']

//—————「 Set Wm 」—————//
global.packname = 'ɴᴏʙɪᴛᴀ-ᴍᴅ'
global.author = 'Bot: +62 857-4903-7935\nYouTube: nobita404\nInstagram: nobita7.io'
global.prefa = ['', '.']
global.sp = '•'

//—————「 Set Message 」—————//
global.mess = {
    success: '🤗Done, Oke Desu~',
    admin: '❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !',
    botAdmin: '❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: '❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: '❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !',
    private: '❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !',
    bot: '🤖 Fitur Khusus Pengguna Nomor Bot !',
    wait: '⏳ Sedang Di Proses !',
    endLimit: '🕊️ Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12 !\n\n🎯 *Premium Cuma 10k Permanen* 😋',
    error: '🚫 Fitur Sedang Error !',
    prem: '🚫 Fitur Khusus Premium!\n\n♨️ Buy Premium Cuma 5k Permanen',
}

//—————「 Set Limit 」—————//
global.limitawal = {
    premium: "Infinity",
    free: 100
}

//—————「 Set Image 」—————//
global.imageurl = 'https://telegra.ph/file/b785a8ced63a0e5c766f8.jpg'
global.link = 'https://youtu.be/nobita404'
global.thumb = fs.readFileSync('./media/koneko.jpg')
global.logo = fs.readFileSync('./media/logo.jpg')

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
