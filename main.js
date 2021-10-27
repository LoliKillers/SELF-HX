require('rootpath')()
const {
    WAConnection,
    MessageType,
    Mimetype,
    MessageOptions,
    waChatKey ,
    mentionedJid
} = require('@adiwajshing/baileys');
const lk = require('lk-api');
const { getBuffer } = require('lib/getbuffer');
const { getRandom } = require('lib/getrandom');
const cError = require('console-error');
const cInfo = require('console-info');
const cWarn = require('console-warn');
const axios = require('axios');
const request = require('request');
const {
    readFileSync: read,
    writeFileSync: write,
    createWriteStream: create,
    unlinkSync: unlink,
    existsSync: exists
}= require('fs');
const { exec } = require('child_process');
const moment = require('moment-timezone');
const ffmpeg = require('fluent-ffmpeg');
const speed = require('performance-now');
const phoneNum = require('awesome-phonenumber');
const { InfoIklim } = require('plugins/bmkg/infoiklim');

const tebakgambar = JSON.parse(read('./database/tebakgambar.json'));

var banChats = false
var simbol = "║❏"
const _listImg = ["1","2","3","4","5","6","7"]
const xyz = _listImg[Math.floor(Math.random() * _listImg.length)]

module.exports = loli = async (loli, lol) => {
	try {
        if (!lol.hasNewMessage) return
        lol = lol.messages.all()[0]
		if (!lol.message) return
		if (lol.key && lol.key.remoteJid == 'status@broadcast') return
		global.blocked
        lol.message = (Object.keys(lol.message)[0] === 'ephemeralMessage') ? lol.message.ephemeralMessage.message : lol.message
        const content = JSON.stringify(lol.message)
		const from = lol.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(lol.message)[0]        
        const cmd = (type === 'conversation' && lol.message.conversation) ? lol.message.conversation : (type == 'imageMessage') && lol.message.imageMessage.caption ? lol.message.imageMessage.caption : (type == 'videoMessage') && lol.message.videoMessage.caption ? lol.message.videoMessage.caption : (type == 'extendedTextMessage') && lol.message.extendedTextMessage.text ? lol.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[.#$!z]/.test(cmd) ? cmd.match(/^[.#$!z]/gi) : '-'          	
        bdy = (type === 'conversation' && lol.message.conversation.startsWith(prefix)) ? lol.message.conversation : (type == 'imageMessage') && lol.message.imageMessage.caption.startsWith(prefix) ? lol.message.imageMessage.caption : (type == 'videoMessage') && lol.message.videoMessage.caption.startsWith(prefix) ? lol.message.videoMessage.caption : (type == 'extendedTextMessage') && lol.message.extendedTextMessage.text.startsWith(prefix) ? lol.message.extendedTextMessage.text : ''
		_bdy = (type === 'conversation') ? lol.message.conversation : (type === 'extendedTextMessage') ? lol.message.extendedTextMessage.text : ''
		const command = bdy.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const _msg = bdy.trim().split(/ +/).slice(1)
		const _Cmd = bdy.startsWith(prefix)
		const q = _msg.join(' ')
		const _Group = from.endsWith('@g.us')
		const sender = _Group ? lol.participant : lol.key.remoteJid
		const allChats = await loli.chats.all()
		const groupMetadata = _Group ? await loli.groupMetadata(from) : ''
		const groupName = _Group ? groupMetadata.subject : ''
		const groupId = _Group ? groupMetadata.jid : ''
		const groupMembers = _Group ? groupMetadata.participants : ''
		const groupDesc = _Group ? groupMetadata.desc : ''
		const groupOwner = _Group ? groupMetadata.owner : ''
		const _Me = lol.key.fromMe
		const getGroupAdmins = (participants) => {
		    admin = []
		    for (var x of participants) {
		        x.isAdmin ? admin.push(x.jid) : ''
		    }
		    return admin
		}
		
		const botNumber = loli.user.jid
		const groupAdmins = _Group ? getGroupAdmins(groupMembers) : ''
		const _GroupAdmins = groupAdmins.includes(sender) || false
		const _BotGroupAdmins = groupAdmins.includes(botNumber) || false
		const _Admin = groupAdmins.includes(sender) || false
        //const _Vote = _Group ? voting.includes(from) : false
        const conts = lol.key.fromMe ? loli.user.jid : loli.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = lol.key.fromMe ? loli.user.name : conts.notify || conts.vname || conts.name || '-'

        
        const mentionByTag = type == "extendedTextMessage" && lol.message.extendedTextMessage.contextInfo != null ? lol.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == "extendedTextMessage" && lol.message.extendedTextMessage.contextInfo != null ? lol.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByReply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
        const mentioned = mention
        
		var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
        var date = new Date(dates);
        var tahun = date.getFullYear();
        var bulan = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        
        switch(hari) {
            case 0: hari = "Minggu"; break;
            case 1: hari = "Senin"; break;
            case 2: hari = "Selasa"; break;
            case 3: hari = "Rabu"; break;
            case 4: hari = "Kamis"; break;
            case 5: hari = "Jum`at"; break;
            case 6: hari = "Sabtu"; break;
        }
		switch(bulan) {
            case 0: bulan = "Januari"; break;
            case 1: bulan = "Februari"; break;
            case 2: bulan = "Maret"; break;
            case 3: bulan = "April"; break;
            case 4: bulan = "Mei"; break;
            case 5: bulan = "Juni"; break;
            case 6: bulan = "Juli"; break;
            case 7: bulan = "Agustus"; break;
            case 8: bulan = "September"; break;
            case 9: bulan = "Oktober"; break;
            case 10: bulan = "November"; break;
            case 11: bulan = "Desember"; break;
        }
        
        const Tanggal= "" + hari + ", " + tanggal + " " + bulan + " " + tahun;
        const Jam = moment.tz('Asia/Jakarta').format('HH:mm:ss z')
		const _thumbnail = read(`img/loli${xyz}.jpg`)

        const _Url = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        
        const sendImg = (img) => {
            loli.sendMessage(from, img, image, { quoted: lol })
        }

        const reply = (_txt) => {
            loli.sendMessage(from, _txt, text, { quoted: lol, thumbnail: _thumbnail, sendEphemeral: true })
        }
        
        const mentions = (teks, memberr, id) => {
            let ai = (id == null || id == undefined || id == false) ? loli.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : loli.sendMessage(from, teks.trim(), extendedText, { quoted: msg, contextInfo: { "mentionedJid": memberr } })
            return ai
        }
        
        const sendMediaURL = async(to, url, text="", mids=[]) => {
            await new Promise((r) => setTimeout(r, 1000));
            if (mids.length > 0) {
                text = normalizeMention(to, text, mids)
            }
            const fn = Date.now() / 10000;
            const filename = fn.toString()
            let mime = ""
            var download = function (uri, filename, callback) {
                request.head(uri, function (err, res, body) {
                    mime = res.headers['content-type']
                    request(uri).pipe(create(filename)).on('close', callback);
                });
            };
            download(url, filename, async function () {
                cInfo('Done ✓');
                let media = read(filename)
                let type = mime.split("/")[0]+"Message"
                if (mime === "image/gif") {
                    type = MessageType.video
                    mime = Mimetype.gif
                }
                if (mime.split("/")[0] === "audio") {
                    mime = Mimetype.mp4Audio
                }
                loli.sendMessage(to, media, type, { quoted: lol, mimetype: mime, caption: text, contextInfo: {"mentionedJid": mids}})
                unlink(filename)
            });
        }
        
        const sendStickerFromUrl = async(to, url) => {
            var _lkil = Date.now() / 10000;
            var download = function(uri, filename, callback) {
                request.head(uri, function (err, res, body) {
                    request(uri).pipe(create(filename)).on('close', callback);
                });
            };
            download(url, './stick' + _lkil + '.png', async function () {
                cInfo('Done ✓')
                var _file = './stick' + _lkil + '.png'
                var _stc = './stick' + _lkil + '.webp'
                exec(`ffmpeg -i ${_file} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${_stc}`, (err) => {
                    var _mdia = read(_stc)
                    loli.sendMessage(to, _mdia, MessageType.sticker, { quoted: lol })
                    unlink(_file)
                    unlink(_stc)
                });
            });
        };
        
        msg = {
            wait: 'Wait a moment!',
            error: 'Opsss, looks like something went wrong?',
            linkErr: 'The link is error, please check again',
            only: {
                owner: 'Owner bot only!',
                admin: 'Admin group only!'
            },
            sticker: {
                error: 'Opss, an error occurred, please try again later'
            }
        }
        
        function addMetadata(packname, author) {	
            if (!packname) packname = 'Self-LK'; if (!author) author = 'LoliKillers';	
            author = author.replace(/[^a-zA-Z0-9]/g, '');	
            let name = `${author}_${packname}`
            if (exists(`./stick/${name}.exif`)) return `./stick/${name}.exif`
            const json = {	
                "sticker-pack-name": packname,
                "sticker-pack-publisher": author,
            }
            const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
            const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

            let len = JSON.stringify(json).length	
            let last	

            if (len > 256) {	
                len = len - 256	
                bytes.unshift(0x01)	
            } else {	
                bytes.unshift(0x00)	
            }	

            if (len < 16) {	
                last = len.toString(16)	
                last = "0" + len	
            } else {	
                last = len.toString(16)	
            }	

            const buf2 = Buffer.from(last, "hex")	
            const buf3 = Buffer.from(bytes)	
            const buf4 = Buffer.from(JSON.stringify(json))	

            const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

            write(`./stick/${name}.exif`, buffer, (err) => {	
                return `./stick/${name}.exif`	
            })	
        }

        if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !_Cmd && _bdy.match(/[1-9]{1}/)) {
            _kuis = true
            _jwb = tebakgambar[sender.split('@')[0]]
            if (_bdy.toLowerCase() == _jwb) {
                reply("Jawaban Anda Benar!")
                delete tebakgambar[sender.split('@')[0]]
                write("database/tebakgambar.json", JSON.stringify(tebakgambar))
            } else {
                reply("Jawaban Anda Salah!")
            }
        }
        const sendPaymentMessage = {
            requestPaymentMessage: {
                    noteMessage: "Entahlah",
                        currencyCodeIso4217: "IDR",
                        amount1000: "100000",
                        requestFrom: `Wea Bot 🤖`,
                        expiryTimestamp: 1,
                        amount: `100000`,
                  }
        }
        function ActiveTime(seconds){
            function Mounting(s){
                return (s < 10 ? '0' : '') + s;
            }
            var hours = Math.floor(seconds / (60*60));
            var minutes = Math.floor(seconds % (60*60) / 60);
            var seconds = Math.floor(seconds % 60);

            return `${Mounting(hours)} Hours ${Mounting(minutes)} Minutes ${Mounting(seconds)} Seconds`
        }
        
        const _Media = (type === 'imageMessage' || type === 'videoMessage')
		const _QuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const _QuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const _QuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const _QuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

        if (_Cmd && _Group) cInfo('[ COMMAND ] +>', command, '+> ', pushname, '+> ', groupName)
        if (_Cmd && !_Group) cInfo('[ COMMAND ] +>', command, '+> ', pushname)
        if (!_Cmd && !_Group) cInfo('[ PRIVATE ] +>', pushname)
        if (!_Cmd && _Group) cInfo('[  GROUP  ] +>', pushname, '+> ', groupName)
        
        if (!lol.key.fromMe && banChats === true) return
        switch (command) {
            case 'tes':
            _txt = 'Oke ✓'
            loli.sendMessage(from, _txt, text, { quoted: lol, contextInfo: {
                text: "Wea Bot 🤖",
                forwardingScore: 500,
                isForwarded: true,
                sendEphemeral: true,
                externalAdReply: {
                    title: `Hallo ${pushname}`,
                    body: `${Tanggal}\n${Jam}`,
                    previewType: 1,
                    thumbnail: _thumbnail,
                    sourceUrl: "https://github.com/LoliKillers",
                },
                mentionedJid: sender
            }})
            break
            case 'help':
            case 'menu':
            var _date = Date()
            var uptime = process.uptime()
            var _tmnu = `<//>\n\n`
            + `*❏ INFO BOT <+]*\n\n`
            + `> *Name* : ${loli.user.name}\n`
            + `> *Nomor* : ${loli.user.jid}\n`
            + `> *Prefix* : [ ${prefix} ]\n`
            + `> *Runtime* : ${ActiveTime(uptime)}\n`
            + `\n\n*❏ STALKING*\n`
            + `${simbol} _${prefix}igstalk (username)_\n`
            + `${simbol} _${prefix}ghstalk (username)_\n`
            + `╙───+>\n\n`
            + `\n*❏ DOWNLOADER*\n`
            + `${simbol} _${prefix}igstory (username)_\n`
            + `${simbol} _${prefix}igdl (url)_\n`
            + `${simbol} _${prefix}pinterest (query)_\n`
            + `${simbol} _${prefix}tiktoknowm (url)_\n`
            + `${simbol} _${prefix}tiktokwm (url)_\n`
            + `${simbol} _${prefix}tiktokaudio (url)_\n`
            + `${simbol} _${prefix}ytdlmp3 (url)_\n`
            + `${simbol} _${prefix}ytdlmp4 (url)_\n`
            + `${simbol} _${prefix}ytplaymp3 (query)_\n`
            + `${simbol} _${prefix}ytplaymp4 (query)_\n`
            + `${simbol} _${prefix}chara (query)_\n`
            + `╙───+>\n\n`
            + `\n*❏ VOKAL*\n`
            + `${simbol} _${prefix}halah (text)_\n`
            + `${simbol} _${prefix}hilih (text)_\n`
            + `${simbol} _${prefix}huluh (text)_\n`
            + `${simbol} _${prefix}heleh (text)_\n`
            + `${simbol} _${prefix}holoh (text)_\n`
            + `╙───+>\n\n`
            + `\n*❏ INFO*\n`
            + `${simbol} _${prefix}httpheaders (domain)_\n`
            + `${simbol} _${prefix}ip_\n`
            + `${simbol} _${prefix}iplookup (domain)_\n`
            + `${simbol} _${prefix}proxy_\n`
            + `${simbol} _${prefix}servermc_\n`
            + `${simbol} _${prefix}kodepos_\n`
            + `╙───+>\n\n`
            + `\n*❏ ANIME*\n`
            + `${simbol} _${prefix}otaku (query)_\n`
            + `╙───+>\n\n`
            + `\n*❏ CONVERT*\n`
            + `${simbol} _${prefix}emoji (emoji)_\n`
            + `${simbol} _${prefix}sticker (reply)_\n`
            + `${simbol} _${prefix}stickergif (reply)_\n`
            + `╙───+>\n\n`
            + `\n*❏ SEARCH*\n`
            + `${simbol} _${prefix}ytsearch (query)_\n`
            + `${simbol} _${prefix}moddroid (query)_\n`
            + `${simbol} _${prefix}palingmurah (query)_\n`
            + `${simbol} _${prefix}apkmody (query)_\n`
            + `${simbol} _${prefix}jalantikus (query)_\n`
            + `${simbol} _${prefix}happymod (query)_\n`
            + `${simbol} _${prefix}searchrepo (query)_\n`
            + `╙───+>\n\n`
            + `\n*❏ PRIMBON*\n`
            + `${simbol} _${prefix}hoax_\n`
            + `╙───+>\n\n`
            + `\n*❏ GAME*\n`
            + `${simbol} _${prefix}tebakgambar_\n`
            + `╙───+>\n\n`
            + `\n*❏ DECRYPT & ENCRYPT*\n`
            + `${simbol} _${prefix}dec32 (text)_\n`
            + `${simbol} _${prefix}dec64 (text)_\n`
            + `${simbol} _${prefix}enc32 (text)_\n`
            + `${simbol} _${prefix}enc32 (text)_\n`
            + `╙───+>\n\n`
            + `\n*❏ SFW*\n`
            + `${simbol} _${prefix}neko_\n`
            + `${simbol} _${prefix}waifu_\n`
            + `${simbol} _${prefix}tickle_\n`
            + `${simbol} _${prefix}wallpaper_\n`
            + `${simbol} _${prefix}kiss_\n`
            + `${simbol} _${prefix}hug_\n`
            + `${simbol} _${prefix}kemonomimi_\n`
            + `${simbol} _${prefix}baka_\n`
            + `${simbol} _${prefix}eron_\n`
            + `${simbol} _${prefix}fox_girl_\n`
            + `${simbol} _${prefix}feed_\n`
            + `${simbol} _${prefix}poke_\n`
            + `${simbol} _${prefix}pat_\n`
            + `${simbol} _${prefix}slap_\n`
            + `${simbol} _${prefix}ngif_\n`
            + `${simbol} _${prefix}smug_\n`
            + `${simbol} _${prefix}cuddle_\n`
            + `${simbol} _${prefix}avatar_\n`
            + `╙───+>\n\n`
            + `\n*❏ NSFW*\n`
            + `${simbol} _${prefix}boobs_\n`
            + `${simbol} _${prefix}lewdk_\n`
            + `${simbol} _${prefix}futanari_\n`
            + `${simbol} _${prefix}futanari_\n`
            + `${simbol} _${prefix}anal_\n`
            + `${simbol} _${prefix}pussy_jpg_\n`
            + `${simbol} _${prefix}lewd_\n`
            + `${simbol} _${prefix}trap_\n`
            + `${simbol} _${prefix}ero_\n`
            + `${simbol} _${prefix}solog_\n`
            + `${simbol} _${prefix}lewdkemo_\n`
            + `${simbol} _${prefix}solo_\n`
            + `${simbol} _${prefix}cum_\n`
            + `${simbol} _${prefix}les_\n`
            + `${simbol} _${prefix}hololewd_\n`
            + `${simbol} _${prefix}holo_\n`
            + `${simbol} _${prefix}tits_\n`
            + `${simbol} _${prefix}nsfw_neko_gif_\n`
            + `${simbol} _${prefix}eroyuri_\n`
            + `${simbol} _${prefix}holoero_\n`
            + `${simbol} _${prefix}pussy_\n`
            + `${simbol} _${prefix}Random_hentai_gif_\n`
            + `${simbol} _${prefix}yuri_\n`
            + `${simbol} _${prefix}keta_\n`
            + `${simbol} _${prefix}hentai_\n`
            + `${simbol} _${prefix}erok_\n`
            + `${simbol} _${prefix}feetg_\n`
            + `${simbol} _${prefix}cum_jpg_\n`
            + `${simbol} _${prefix}nsfw_avatar_\n`
            + `${simbol} _${prefix}erofeet_\n`
            + `${simbol} _${prefix}blowjob_\n`
            + `${simbol} _${prefix}spank_\n`
            + `${simbol} _${prefix}kuni_\n`
            + `${simbol} _${prefix}classic_\n`
            + `${simbol} _${prefix}femdom_\n`
            + `${simbol} _${prefix}boobs_\n`
            + `╙───+>\n\n`
            + `\n*❏ TEXTPRO*\n`
            + `${simbol} _${prefix}thunder (text)_\n`
            + `${simbol} _${prefix}neonlight (text)_\n`
            + `${simbol} _${prefix}bluemetal2 (text)_\n`
            + `╙───+>\n\n`
            + `\n*❏ ISLAM*\n`
            + `${simbol} _${prefix}surah (nomor)_\n`
            + `${simbol} _${prefix}listsurah_\n`
            + `╙───+>\n\n`
            + `\n*❏ BMKG*\n`
            + `${simbol} _${prefix}cuacapenerbangan_\n`
            + `${simbol} _${prefix}potensikebakaran_\n`
            + `${simbol} _${prefix}arahangin_\n`
            + `${simbol} _${prefix}gelombang_\n`
            + `${simbol} _${prefix}citrasatelit_\n`
            + `${simbol} _${prefix}infoiklim_\n`
            + `${simbol} _${prefix}gempa_\n`
            + `╙───+>\n\n`
            + `\n*❏ OWNER SELF*\n`
            + `${simbol} _${prefix}self_\n`
            + `${simbol} _${prefix}public_\n`
            + `╙───+>\n\n`
            + `\n*❏ TAG*\n`
            + `${simbol} _${prefix}hidetag (text)_\n`
            + `${simbol} _${prefix}kontag (text)_\n`
            + `╙───+>\n\n`
            + `\n*❏ GROUP*\n`
            + `${simbol} _${prefix}demote_\n`
            + `${simbol} _${prefix}promote_\n`
            + `╙───+>\n\n`
            + `\n*❏ MORE*\n`
            + `${simbol} _${prefix}runtime_\n`
            + `╙───+>\n\n`
            var imgs = await loli.prepareMessage('0@c.us', _thumbnail, image, { thumbnail: _thumbnail })
            var imgCatalog = imgs.message.imageMessage
            var ctlg = await loli.prepareMessageFromContent(from, {
                "productMessage": {
                    "product": {
                        "productImage": imgCatalog,
                        "productId": "4457725420906655",
                        "title": `Wea Bot 🤖`,
                        "description": _tmnu,
                        "footerText": `© Loli Killers`,
                        "currencyCode": "IDR",
                        "priceAmount1000": "100000000",
                        "productImageCount": 1,
                        "firstImageId": 1,
                        "salePriceAmount1000": "35000000",
                        "retailerId": `${Tanggal}\n${Jam}`,
                        "url": "Love You All >_<"
                    },
                    "businessOwnerJid": "6285785445412@s.whatsapp.net",
                }
            }, { quoted: lol, mimetype: 'image/jpeg' })
            loli.relayWAMessage(ctlg)
            break
            case 'kontag':
            if (!_Me && _Admin) return reply(msg.only.admin)
            _split1 = q.split('|')[0]
            _split2 = q.split('|')[1]
            if (isNaN(_split1)) return reply('Invalid phone number!')
            _member = []
            for (var x of groupMembers) {
                _member.push(x.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${_split2}\n`
            + `TEL;type=CELL;type=VOICE;waid=${_split1}:${phoneNum('+' + _split1).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            loli.sendMessage(from, {displayName: `${_split2}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": _member}})
            break
            case 'hidetag':
            if (!_Me && !_Admin) return reply(msg.only.admin)
            if (!_Group) return reply(msg.only.group)
            var _gc = await loli.groupMetadata(from)
            var _member = _gc['participants']
            var _hdtg = []
            _member.map(async _admn => {
                _hdtg.push(_admn.id.replace('c.us', 's.whatsapp.net'))
            })
            var _hidetag = {
                text: q,
                contextInfo: { mentionedJid: _hdtg },
                quoted: lol
            }
            loli.sendMessage(from, _hidetag, text)
            break
            case 'runtime':
            uptime = process.uptime()
            var _run = speed()
            var _time = speed() - _run
            _ping = `*Speed* : ${_time.toFixed(4)} seconds\n`
            _run = `*Runtime* : `
            loli.sendMessage(from, `(>_<)`, text, { quoted: lol, contextInfo: {
                text: "Wea Bot 🤖",
                forwardingScore: 500,
                isForwarded: true,
                sendEphemeral: true,
                externalAdReply: {
                    title: `RUNTIME`,
                    body: `${ActiveTime(uptime)}`,
                    previewType: 1,
                    thumbnail: _thumbnail,
                    sourceUrl: "https://badai-api.herokuapp.com",
                },
                mentionedJid: sender
            }})
            break
		    case 's':
		    case 'stiker':
			case 'sticker':
			case 'stickergif':
			if ((_Media && !lol.message.videoMessage || _QuotedImage) && _msg.length == 0) {
				const _enc = _QuotedImage ? JSON.parse(JSON.stringify(lol).replace('quotedM','m')).message.extendedTextMessage.contextInfo : lol
				const _media = await loli.downloadAndSaveMediaMessage(_enc)
				_random = getRandom('.webp')
				await ffmpeg(`./${_media}`)
				.input(_media)
				.on('start', function (cmd) {
					cWarn(`Started : ${cmd}`)
				})
				.on('error', function (err) {
					cError(`Error : ${err}`)
					unlink(_media)
	    			reply(err)
				})
				.on('end', function () {
					cInfo('Convert successfully ✓')
					exec(`webpmux -set exif ${addMetadata('Self-LK', 'LoliKillers')} ${_random} -o ${_random}`, async (error) => {
					    if (error) return reply(msg.sticker.error)
						loli.sendMessage(from, read(_random), sticker, { quoted: lol })
					    unlink(_media)	
						unlink(_random)	
					})
					/*loli.sendMessage(from, fs.readFileSync(_random), sticker, { quoted: lol })
					fs.unlinkSync(_media)
			        fs.unlinkSync(_random)*/
				})
				.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
				.toFormat('webp')
				.save(_random)
			} else if ((_Media && lol.message.videoMessage.seconds < 11 || _QuotedVideo && lol.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && _msg.length == 0) {
				const _enc = _QuotedVideo ? JSON.parse(JSON.stringify(lol).replace('quotedM','m')).message.extendedTextMessage.contextInfo : lol
				const _media = await loli.downloadAndSaveMediaMessage(_enc)
				_random = getRandom('.webp')
				reply(msg.wait)
				await ffmpeg(`./${_media}`)
				.inputFormat(media.split('.')[1])
				.on('start', function (_cmd) {
					cWarn(`Started : ${_cmd}`)
				})
				.on('error', function (_err) {
					cError(`Error : ${_err}`)
					unlink(_media)
					tipe = _media.endsWith('.mp4') ? 'video' : 'gif'
					reply(`Failed to convert ${tipe} to sticker`)
				})
				.on('end', function () {
					cInfo('Convert successfully ✓')
					exec(`webpmux -set exif ${addMetadata('Self-LK', 'LoliKillers')} ${_random} -o ${_random}`, async (error) => {
						if (error) return reply(mess.error.stick)
						loli.sendMessage(from, read(_random), sticker, { quoted: lol })
						unl(_media)
						unlink(_random)
					})
					/*loli.sendMessage(from, fs.readFileSync(_random), sticker, { quoted: mek })
					fs.unlinkSync(media)
					fs.unlinkSync(ran)*/
				})
				.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
				.toFormat('webp')
				.save(ran)
			} else if ((_Media || _QuotedImage) && args[0] == 'nobg') {
				const _enc = isQuotedImage ? JSON.parse(JSON.stringify(lol).replace('quotedM','m')).message.extendedTextMessage.contextInfo : lol
				const _media = await loli.downloadAndSaveMediaMessage(_enc)
				_random_webp = getRandom('.webp')
				_random_png = getRandom('.png')
				reply(msg.wait)
				keyrmbg = 'Your-ApiKey'
				await removeBackgroundFromImageFile({ path: _media, apiKey: keyrmbg, size: 'auto', type: 'auto', _random_webp}).then(res => {
				    unlink(_media)
					let _buffer = Buffer.from(res.base64img, 'base64')
					write(ranp, buffer, (err) => {
						if (err) return reply('Opss, an error occurred, please try again later')
					})
					exec(`ffmpeg -i ${_random_png} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${_random_webp}`, (err) => {
						unlink(_random_png)
						if (err) return reply(msg.sticker.error)
						exec(`webpmux -set exif ${addMetadata('Self-LK', 'LoliKillers')} ${_random_png} -o ${_random_webp}`, async (error) => {
							if (error) return reply(msg.sticker.error)
							loli.sendMessage(from, read(_random_webp), sticker, {quoted: lol})
							unlink(_random_webp)
						})
						//loli.sendMessage(from, fs.readFileSync(_random_webp), sticker, {quoted: lol})
					})
				})
			} else {
				reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
			}
			break
            case 'public':
            if (!_Me) return reply(msg.only.owner)
            if (banChats === false) return
            banChats = false
            loli.sendMessage(from, '_*Ok ✓*_', text, { quoted: lol, contextInfo: {
                text: "Wea Bot 🤖",
                forwardingScore: 500,
                isForwarded: true,
                sendEphemeral: true,
                externalAdReply: {
                    title: `PUBLIC MODE`,
                    body: `${Tanggal}`,
                    previewType: 1,
                    thumbnail: _thumbnail,
                    sourceUrl: "https://badai-api.herokuapp.com",
                },
                mentionedJid: sender
            }})
            break
            case 'self':
            if (!_Me) return reply(msg.only.owner)
            if (banChats === true) return
            uptime = process.uptime()
            banChats = true
            loli.sendMessage(from, '_*Ok ✓*_', text, { quoted: lol, contextInfo: {
                text: "Wea Bot 🤖",
                forwardingScore: 500,
                isForwarded: true,
                sendEphemeral: true,
                externalAdReply: {
                    title: `SELF MODE`,
                    body: `${Tanggal}`,
                    previewType: 1,
                    thumbnail: _thumbnail,
                    sourceUrl: "https://badai-api.herokuapp.com",
                },
                mentionedJid: sender
            }})
            break
            case 'infoiklim':
            reply(msg.wait)
            InfoIklim()
            .then(result => {
                var _pic = result.result[0].thumb
                sendMediaURL(from, _pic)
            })
            .catch(error => {
                reply(msg.error)
            })
            break
            case 'citrasatelit':
            CitraSatelit()
            then(result => {
                var _pic = result.result[0].thumb
                sendMediaURL(from, _pic)
            })
            .catch(error => {
                reply(msg.error)
            })
            break
            case 'gelombang':
            var _ = await lk.PrakiraanGelombang()
            reply(msg.wait)
            var _pic = _.result[0].thumb
            sendMediaURL(from, _pic)
            break
            case 'arahangin':
            var _ = await lk.PrakiraanAngin()
            reply(msg.wait)
            var _pic = _.result[0].thumb
            sendMediaURL(from, _pic)
            break
            case 'potensikebakaran':
            var _ = await lk.PotensiKebakaran()
            reply(msg.wait)
            var _pic = _.result[0].thumb
            sendMediaURL(from, _pic)
            break
            case 'neonlight':
            if (!q) return reply(`*Example* : ${prefix + command} Loli Killers`)
            lk.TxtProNeonLight(q)
            .then(result => {
                var _pro = result.result.output
                sendMediaURL(from, _pro)
            })
            break
            case 'bluemetal2':
            if (!q) return reply(`*Example* : ${prefix + command} Loli Killers`)
            lk.TxtProBlueMetal2(q)
            .then(result => {
                var _pro = result.result.output
                sendMediaURL(from, _pro)
            })
            break
            case 'thunder':
            if (!q) return reply(`*Example* : ${prefix + command} Loli Killers`)
            lk.TxtProThunder(q)
            .then(result => {
                var _pro = result.result.output
                sendMediaURL(from, _pro)
            })
            break
            case 'kemonomimi':
            case 'neko':
            case 'waifu':
            case 'tickle':
            case 'wallpaper':
            case 'eron':
            case 'fox_girl':
            case 'kiss':
            case 'hug':
            case 'baka':
            case 'feed':
            case 'slap':
            case 'poke':
            case 'pat':
            case 'ngif':
            case 'smug':
            case 'cuddle':
            case 'avatar':
            reply(msg.wait)
            lk.Sfw(`${command}`)
            .then(async result => {
                sendMediaURL(from, result)
            })
            break
            case 'boobs':
            case 'femdom':
            case 'classic':
            case 'kuni':
            case 'spank':
            case 'blowjob':
            case 'erofeet':
            case 'nsfw_avatar':
            case 'feetg':
            case 'erok':
            case 'cum_jpg':
            case 'hentai':
            case 'keta':
            case 'yuri':
            case 'Random_hentai_gif':
            case 'pussy':
            case 'holoero':
            case 'eroyuri':
            case 'nsfw_neko_gif':
            case 'holo':
            case 'tits':
            case 'hololewd':
            case 'les':
            case 'cum':
            case 'solo':
            case 'lewdkemo':
            case 'solog':
            case 'trap':
            case 'ero':
            case 'lewd':
            case 'anal':
            case 'pussy_jpg':
            case 'futanari':
            case 'lewdk':
            reply(msg.wait)
            lk.Nsfw(`${command}`)
            .then(async result => {
                sendMediaURL(from, result)
            })
            break
            case 'searchrepo':
            if (!q) return reply(`*Example* : ${prefix + command} LoliKillers`)
            var _ = await lk.SearchRepo(q)
            reply(msg.wait)
            _capt = `\n*Total Count* : ${_.totalCount}\n\n`
            for (var x of _.items) {
                _capt += `*Id* : ${x.id}\n`
                + `*Node Id* : ${x.node_d}\n`
                + `*Name Repo* : ${x.name_repo}\n`
                + `*Full Name Repo* : ${x.full_name_repo}\n`
                + `*Url Repo* : ${x.url_repo}\n`
                + `*Description* : ${x.description}\n`
                + `*Git Url* : ${x.git_url}\n`
                + `*Ssh Url* : ${x.ssh_url}\n`
                + `*Clone Url* : ${x.clone_url}\n`
                + `*Clone Url* : ${x.clone_url}\n`
                + `*Svn Url* : ${x.svn_url}\n`
                + `*Homepage* : ${x.homepage}\n`
                + `*Star* : ${x.stargazers}\n`
                + `*Watch* : ${x.watchers}\n`
                + `*Forks* : ${x.forks}\n`
                + `*Branch* : ${x.default_branch}\n`
                + `*Language* : ${x.language}\n`
                + `*Is Private* : ${x.is_private}\n`
                + `*Is Forks* : ${x.is_fork}\n`
                + `*Created Date* : ${x.created_at}\n`
                + `*Last Update* : ${x.updated_at}\n`
                + `*Push Date* : ${x.pushed_at}\n`
                + `\n<+=========================+>\n\n`
            }
            reply(_capt)
            break
            case 'cuacapenerbangan':
            var _ = await lk.CuacaPenerbangan()
            reply(msg.wait)
            var _pic = _.result[0].thumb
            _capt = '\n'
            for (var x of _.result) {
                _capt += `*Daerah* : ${x.daerah}\n`
                + `*Cuaca* : ${x.cuaca}\n`
                + `*Thumbnail* : ${x.thumb}\n`
                + `*Arah Angin* : ${x.arah_angin}\n`
                + `*Jarak Pandang* : ${x.jarak_pandang}\n`
                + `*Suhu* : ${x.suhu}\n`
                + `*Embun* : ${x.embun}\n`
                + `*Tekanan* : ${x.tekanan}\n`
                + `*Waktu* : ${x.waktu}\n`
                + `\n<+=========================+>\n\n`
            }
            sendMediaURL(from, _pic, _capt)
            break
            case 'covidglobal':
            var _ = await lk.CovidGlobal()
            reply(msg.wait)
            _capt = '\n'
            for (var _x of _) {
                var x = _x.attributes
                _capt += `*Objectid* : ${x.OBJECTID}\n`
                + `*Country* : ${x.Country_Region}\n`
                + `*Last Update* : ${x.Last_Update}\n`
                + `*Lattitude* : ${x.Lat}\n`
                + `*Longtitude* : ${x.Long_}\n`
                + `*Confirmed* : ${x.Confirmed}\n`
                + `*Deaths* : ${x.Deaths}\n`
                + `*Recovered* : ${x.Recovered}\n`
                + `*Active* : ${x.Active}\n`
                + `\n<+=========================+>\n\n`
            }
            reply(_capt)
            break
            case 'covidindo':
            var _ = await lk.CovidId()
            _capt = `*Country* : ${_[0].name}\n`
            + `*Positif* : ${_[0].positif}\n`
            + `*Sembuh* : ${_[0].sembuh}\n`
            + `*Meninggal* : ${_[0].dirawat}\n`
            + `*Dirawat* : ${_[0].dirawat}\n`
            reply(_capt)
            break
            case 'dec64':
            if (!q) return reply(`*Example* : ${prefix + command} TG9saSBLaWxsZXJz`)
            var _ = await lk.Base('dec64', q)
            var _str = _.result[0].enc
            var _enc = _.result[0].encode
            _capt = `*+>* DECRYPT CODE BASE64\n`
            + `*Text* : ${_str}\n`
            + `*Decrypt* : ${_enc}`
            reply(_capt)
            break
            case 'enc64':
            if (!q) return reply(`*Example* : ${prefix + command} Loli Killers`)
            var _ = await lk.Base('enc64', q)
            var _str = _.result[0].string
            var _enc = _.result[0].encode
            _capt = `*+>* ENCRYPT CODE BASE64\n`
            + `*Text* : ${_str}\n`
            + `*Encrypt* : ${_enc}`
            reply(_capt)
            break
            case 'dec32':
            if (!q) return reply(`*Example* : ${prefix + command} 9hqpruabd5p6rtbjec`)
            var _ = await lk.Base('dec32', q)
            var _str = _.result[0].enc
            var _enc = _.result[0].encode
            _capt = `*+>* DECRYPT CODE BASE32\n`
            + `*Text* : ${_str}\n`
            + `*Decrypt* : ${_enc}`
            reply(_capt)
            break
            case 'enc32':
            if (!q) return reply(`*Example* : ${prefix + command} Loli Killers`)
            var _ = await lk.Base('enc32', q)
            var _str = _.result[0].string
            var _enc = _.result[0].encode
            _capt = `*+>* ENCRYPT CODE BASE32\n`
            + `*Text* : ${_str}\n`
            + `*Encrypt* : ${_enc}`
            reply(_capt)
            break
            /*case 'tebakgambar':
            if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesaikan permainan yang sebelumnya!")
            var _ = lk.TebakGambar()
            var _gmb = _.thumb
            var _jwb = _.jawaban
            var _bf = await getBuffer(_gmb)
            var _capt = 'Jawab kak, waktu 30 detik'
            await loli.sendMessage(from, _bf, image, { quoted: lol, caption: _capt }).then(() => {
            //await sendMediaURL(from, _bf, _capt).then(() => {
                tebakgambar[sender.split('@')[0]] = _jwb.toLowerCase()
                fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
            })
            await sleep(30000)
            if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
                reply("*Jawaban* : " + _jwb)
                delete tebakgambar[sender.split('@')[0]]
                fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
            }
            break*/
            case 'playstore':
            if (!q) return reply(`*Example* : ${prefix + command} whatsapp`)
            reply(msg.wait)
            var _ = await lk.PlayStore(q)
            _capt = ''
            for (var x of _) {
                _capt += `*Name* : ${x.name}\n`
                + `*Developer* : ${x.developer}\n`
                + `*Link* : ${x.link}\n`
                + `\n<+=========================+>\n\n`
            }
            reply(_capt)
            break
            case 'gempa':
            var _ = await lk.GempaTerkini()
            _capt = '\n'
            for (var x of _.result) {
                _capt += `*Waktu* : ${x.waktu}\n`
                + `*Magnitudo* : ${x.magnitudo}\n`
                + `*Kedalaman* : ${x.kedalaman}\n`
                + `*Lokasi* : ${x.lokasi}\n`
                + `\n<+=========================+>\n\n`
            }
            reply(_capt)
            break
            case 'surah':
            if (!q) return reply(`*Example* : ${prefix + command} 1`)
            reply(msg.wait)
            var _ = await lk.Surah(q)
            _capt = '\n'
            for (var x of _.result) {
                _capt += `*Ayat* : ${x.ayat}\n`
                + `*Arab* : ${x.arab}\n`
                + `*Arti* : ${x.arti}\n`
                + `\n<+=========================+>\n\n`
            }
            reply(_capt)
            break
            case 'kodepos':
            if (!q) return reply(`*Example* : ${prefix + command} magetan`)
            reply(msg.wait)
            var _ = await lk.KodePos(q)
            _capt = ''
            for (var x of _) {
                _capt += `*Province* : ${x.province}\n`
                + `*City* : ${x.city}\n`
                + `*Subdistrict* : ${x.subdistrict}\n`
                + `*Urban* : ${x.urban}\n`
                + `*Postal Code* : ${x.postalcode}\n`
                + `\n<+=========================+>\n\n`
            }
            reply(_capt)
            break
            case 'servermc':
            reply(msg.wait)
            var _ = await lk.ServerMc()
            _capt = ''
            for (var x of _) {
                _capt += `*Ip* : ${x.ip}\n`
                + `*Port* : ${x.port}\n`
                + `*Versi* : ${x.versi}\n`
                + `*Player* : ${x.player}\n`
                + `<+=========================+>\n\n`
            }
            reply(_capt)
            break
            case 'listsurah':
            reply(msg.wait)
            var _ = await lk.ListSurah()
            _capt = ''
            for (var x of _.result) {
                _capt += `*Nomor* : ${x.nomor}\n`
                + `*Nama* : ${x.nama}\n`
                + `*Asma* : ${x.asma}\n`
                + `*Arti* : ${x.arti}\n`
                + `<+=========================+>\n\n`
            }
            reply(_capt)
            break
            case 'happymod':
            if (!q) return reply(`*Example* : ${prefix + command} whatsapp`)
            reply(msg.wait)
            var _ = await lk.HappyMod(q)
            var _bf = _[0].icon
            _capt = ''
            for (var x of _) {
                _capt += `*Name* : ${x.name}\n`
                + `*Icon* : ${x.icon}\n`
                + `*Link* : ${x.link}\n`
                + `<+=========================+>\n\n`
            }
            sendMediaURL(from, _bf, _capt)
            break
            case 'hoax':
            reply(msg.wait)
            var _ = await lk.Hoax()
            var _bf = _[0].thumbnail
            _capt = ''
            for (var x of _) {
                _capt += `*Title* : ${x.title}\n`
                + `*Description* : ${x.desc}\n`
                + `*Date* : ${x.date}\n`
                + `*Image* : ${x.thumbnail}\n`
                + `*Link* : ${x.link}\n`
                + `<+=========================+>\n\n`
            }
            sendMediaURL(from, _bf, _capt)
            break
            case 'palingmurah':
            if (!q) return reply(`*Example* : ${prefix + command} rdp`)
            var _ = await lk.PalingMurah(q)
            var _bf = _[0].img
            _capt = ''
            for (var x of _) {
                _capt += `*Name* : ${x.name}\n`
                + `*Harga* : ${x.harga}\n`
                + `*Url* : ${x.link}\n`
                + `*Image* : ${x.img}\n`
                + `*Penjual* : ${x.usernamepenjual}\n`
                + `*Link Penjual* : ${x.linkpenjual}\n`
                + `*Icon Penjual* : ${x.iconpenjual}\n\n`
                + `<+=========================+>\n\n`
            }
            sendMediaURL(from, _bf, _capt)
            break
            /*case 'jalantikus':
            var _ = await lk.JalanTikus(q)
            _capt = ''
            for (var x of _) {
                _capt += `*Title* : ${x.title}\n`
                + `*Category* : ${x.category}\n`
                + `*Url* : ${x.link}\n`
                + `*Date* : ${x.date}\n`
                + `<+=========================+>\n\n`
            }
            reply(_capt)
            break*/
            case 'tribunnews':
            var _ = await lk.TribunNews()
            _capt = ''
            for (var x of _) {
                _capt += `*Title* : ${x.title}\n`
                + `*Description* : ${x.desc}\n`
                + `*Url* : ${x.link}\n`
                + `*Date* : ${x.date}\n`
                + `*Thumb* : ${x.thumb}\n\n`
                + `<+=========================+>\n\n`
            }
            reply(_capt)
            break
            case 'kompasnews':
            var _ = await lk.KompasNews()
            reply(msg.wait)
            _capt = ''
            for (var x of _) {
                _capt += `*Title* : ${x.title}\n`
                + `*Description* : ${x.desc}\n`
                + `*Url* : ${x.link}\n`
                + `*date* : ${x.date}\n\n`
                + `<+=========================+>\n\n`
            }
            reply(_capt)
            break
            case 'apkmody':
            if (!q) return reply(`*Example* : ${prefix + command} whatsapp`)
            reply(msg.wait)
            var _ = await lk.ApkMody(q)
            var _bf = _[0].img
            _capt = ''
            for (var x of _) {
                _capt += `*Name* : ${x.name}\n`
                + `*Description* : ${x.desc}\n`
                + `*Url* : ${x.link}\n`
                + `*Thumb* : ${x.img}\n\n`
                + `<+=========================+>\n\n`
            }
            sendMediaURL(from, _bf, _capt)
            break
            case 'moddroid':
            if (!q) return reply(`*Example* : ${prefix + command} whatsapp`)
            reply(msg.wait)
            var _ = await lk.ModDroid(q)
            var _bf = _[0].img
            _capt = ''
            for (var x of _) {
                _capt += `*Name* : ${x.name}\n`
                + `*Description* : ${x.desc}\n`
                + `*Url* : ${x.link}\n`
                + `*Thumb* : ${x.img}\n\n`
                + `<+=========================+>\n\n`
            }
            sendMediaURL(from, _bf, _capt)
            break
            case 'emoji':
            if (!q) return reply(`*Example* : ${prefix + command} 🙃`)
            reply(msg.wait)
            var emo = _msg.join(' ')
            lk.Emoji2Img(`${emo}`)
            .then(emoji => {
                _emoji = `${emoji.whatsapp}`
                sendStickerFromUrl(from, `${_emoji}`)
            })
            break
            case 'ghstalk':
            if (!q) return reply(`*Example* : ${prefix + command} LoliKillers`)
            reply(msg.wait)
            var _x = await lk.GhStalk(q)
            var _ = _x.result
            var _pp = _.avatar_url
            var _capt = `*Username* : ${_.login}\n`
            + `*Id* : ${_.id}\n`
            + `*Node Id* : ${_.node_id}\n`
            + `*Gravatar Id* : ${_.gravatar_id}\n`
            + `*Url* : ${_.url}\n`
            + `*Type* : ${_.type}\n`
            + `*Site Admin* : ${_.site_admin}\n`
            + `*Name* : ${_.name}\n`
            + `*Company* : ${_.company}\n`
            + `*Blog* : ${_.blog}\n`
            + `*Location* : ${_.location}\n`
            + `*Hireable* : ${_.hireable}\n`
            + `*Bio* : ${_.bio}\n`
            + `*Twitter Username* : ${_.twitter_username}\n`
            + `*Public Repo* : ${_.public_repos}\n`
            + `*Public Gists* : ${_.public_gists}\n`
            + `*Followers* : ${_.followers}\n`
            + `*Following* : ${_.following}\n`
            + `*Created At* : ${_.created_at}\n`
            + `*Last Update* : ${_.updated_at}`
            sendMediaURL(from, _pp, _capt)
            break
            case 'otaku':
            if (!q) return reply(`*Example* : ${prefix + command} jujutsu kaisen`)
            reply(msg.wait)
            var _ = await lk.Otaku(q)
            var _bf = _.img
            var _capt = `*Title* : ${_.title}\n`
            + `*Japan* : ${_.jepang}\n`
            + `*Rate* : ${_.rate}\n`
            + `*Producer* : ${_.produser}\n`
            + `*Type* : ${_.type}\n`
            + `*Status* : ${_.status}\n`
            + `*Episode* : ${_.episode}\n`
            + `*Duration* : ${_.durasi}\n`
            + `*Release* : ${_.rilis}\n`
            + `*Studio* : ${_.studio}\n`
            + `*Genre* : ${_.genre}\n`
            + `*Desc* : ${_.desc}\n`
            + `*Batch* : ${_.batch}\n`
            + `*Batch SD* : ${_.batchSD}\n`
            + `*Batch HD* : ${_.batchHD}\n`
            sendMediaURL(from, _bf, _capt)
            break
            case 'chara':
            if (!q) return reply(`*Example* : ${prefix + command} loli`)
            reply(msg.wait)
            var _ = await lk.Chara(q)
            var _random = _[Math.floor(Math.random() * _.length)]
            sendMediaURL(from, _random)
            break
            case 'ytsearch':
            if (!q) return reply(`*Example* : ${prefix + command} fungi look alive`)
            reply(msg.wait)
            var _ = await lk.YtSearch(q)
            var _buf = _[0].thumbnail
            var _capt = ""
            for (var x of _) {
                _capt += `*Title* : ${x.title}\n`
                + `*Video Id* : ${x.videoId}\n`
                + `*Description* : ${x.description}\n`
                + `*Duration* : ${x.timestamp}\n`
                + `*Upload* : ${x.ago}\n`
                + `*Channel* : ${x.author.name}\n`
                + `*Image* : ${x.thumbnail}\n`
                + `*Link* : ${x.url}\n\n`
                + `<+=========================+>\n\n`
            }
            sendMediaURL(from, _buf, _capt)
            break
            case 'proxy':
            var _ = await lk.Proxy()
            var _x = `*Ip* : ${_.ip}\n`
            + `*Port* : ${_.port}\n`
            + `*Protocol* : ${_.protocol}\n`
            + `*Anonymity* : ${_.anonymity}\n`
            + `*Last Tasted* : ${_.lastTested}\n`
            + `*Allows Referer Header* : ${_.allowsRefererHeader}\n`
            + `*Allows User Agent Header* : ${_.allowsUserAgentHeader}\n`
            + `*Allows Custom Headers* : ${_.allowsCustomHeaders}\n`
            + `*Allows Cookies* : ${_.allowsCookies}\n`
            + `*Allow Post* : ${_.allowPost}\n`
            + `*Allow Https* : ${_.allowHttps}\n`
            + `*Country* : ${_.country}\n`
            + `*Connect Time* : ${_.connectTime}\n`
            + `*Download Speed* : ${_.downloadSpeed}\n`
            + `*Uptime* : ${_.uptime}\n`
            + `*Seconds To First Byte* : ${_.secondsToFirstByte}\n`
            reply(_x)
            break
            case 'iplookup':
            if (!q) return reply(`*Example* : ${prefix + command} api.lolhuman.xyz`)
            var _ = await lk.IpLookup(q)
            var _x = `*Country* : ${_.country}\n`
            + `*Country Code* : ${_.country_code}\n`
            + `*Region* : ${_.region}\n`
            + `*Region Name* : ${_.region_name}\n`
            + `*City* : ${_.city}\n`
            + `*Zip* : ${_.zip}\n`
            + `*Lat* : ${_.lat}\n`
            + `*Lon* : ${_.lon}\n`
            + `*Time Zone* : ${_.timezone}\n`
            + `*Isp* : ${_.isp}\n`
            + `*Org* : ${_.org}\n`
            + `*As* : ${_.as}\n`
            + `*Ip* : ${_.ip}\n`
            + `*Maps* : ${_.maps}\n`
            reply(_x)
            break
            case 'ip':
            var _ = await lk.Ip()
            reply(_)
            break
            case 'httpheaders':
            if (!q) return reply(`*Example* : ${prefix + command} api.lolhuman.xyz`)
            var _ = await lk.HttpHeaders(q)
            var _x = _.result
            var _i = `*Date* : ${_x.date}\n`
            + `*Connection* : ${_x.connection}\n`
            + `*Expires* : ${_x.expires}\n`
            + `*Location* : ${_x.location}\n`
            + `*Nel* : ${_x.nel}\n`
            + `*Server* : ${_x.server}\n`
            reply(_i)
            break
            case 'igstalk':
            if (!q) return reply(`*Example* : ${prefix + command} LoliKillers`)
            var _x = await lk.IgStalk(q)
            var _buf = _x.profile_pic
            reply(msg.wait)
            _txt = `*</INSTAGRAM STALKING/>*\n\n`
            + `*Id* : ${_x.id}\n`
            + `*Username* : ${_x.username}\n`
            + `*Bio* : ${_x.bio}\n`
            + `*External Url* : ${_x.external_url}\n`
            + `*Followers* : ${_x.followers}\n`
            + `*Following* : ${_x.following}\n`
            + `*Fullname* : ${_x.fullname}\n`
            + `*Highlight Count* : ${_x.highlight_count}\n`
            + `*Bussines Account* : ${_x.is_business_account}\n`
            + `*Recent User* : ${_x.is_recent_user}\n`
            + `*Account Category* : ${_x.account_category}\n`
            + `*Facebook Page* : ${_x.facebook_page}\n`
            + `*Private* : ${_x.is_private}\n`
            + `*Verified* : ${_x.is_verified}\n`
            let _buff = await getBuffer(_buf)
            await loli.sendMessage(from, _buff, image, { quoted: lol, caption: _txt })
            break
            case 'holoh':
            if (!q) return reply(`*Example* : ${prefix + command} Loli Killers`)
            var _holoh = await lk.Holoh(q)
            var _hlh = _holoh.result
            reply(_hlh)
            break
            case 'heleh':
            if (!q) return reply(`*Example* : ${prefix + command} Loli Killers`)
            var _heleh = await lk.Heleh(q)
            var _hlh = _heleh.result
            reply(_hlh)
            break
            case 'huluh':
            if (!q) return reply(`*Example* : ${prefix + command} Loli Killers`)
            var _huluh = await lk.Huluh(q)
            var _hlh = _huluh.result
            reply(_hlh)
            break
            case 'hilih':
            if (!q) return reply(`*Example* : ${prefix + command} Loli Killers`)
            var _hilih = await lk.Hilih(q)
            var _hlh = _hilih.result
            reply(_hlh)
            break
            case 'halah':
            if (!q) return reply(`*Example* : ${prefix + command} Loli Killers`)
            var _halah = await lk.Halah(q)
            var _hlh = _halah.result
            reply(_hlh)
            break
            case 'igstory':
            if (!q) return reply(`*Example* : ${prefix + command} ariasu.xyz`)
            reply(msg.wait)
            lk.IgStory(q)
            .then(async result => {
                for (let _x of result) {
                    if (_x.url.includes('mp4')) {
                        let _vid = await getBuffer(_x.url)
                        let _capt = `*</INSTAGRAM STORY/>*\n\n`
                        + `*Type* : ${_x.type}`
                        loli.sendMessage(from, _vid, video, { quoted: lol, caption: _capt })
                    } else {
                        let _img = await getbuffer(_x.url)
                        let _capt = `*</INSTAGRAM STORY/>*\n\n`
                        + `*Type* : ${_x.type}`
                        loli.sendMessage(from, _img, image, { quoted: lol, caption: _capt })
                    }
                }
            })
            break
            case 'igdl':
            if (!_Url(_msg[0]) && !_msg[0].includes('instagram.com')) return reply(msg.linkErr)
            if (!q) return reply(`*Example* : ${prefix + command} https://www.instagram.com/p/CVDASuCp2zg/?utm_medium=copy_link`)
            reply(msg.wait)
            lk.IgDl(`${_msg[0]}`)
            .then(async result => {
                for (let _x of result) {
                    if (_x.url.includes('mp4')) {
                        let _vid = await getBuffer(_x.url)
                        let _capt = `*</INSTAGRAM DOWNLOADER/>*\n\n`
                        + `*Type* : ${_x.type}`
                        loli.sendMessage(from, _vid, video, { quoted: lol, caption: _capt })
                    } else {
                        let _img = await getBuffer(_x.url)
                        let _capt = `*</INSTAGRAM DOWNLOADER/>*\n\n`
                        + `*Type* : ${_x.type}`
                        loli.sendMessage(from, _img, image, { quoted: lol, caption: _capt })
                    }
                }
            })
            break
            case 'pinterest':
            reply(msg.wait)
            let _res = await lk.Pinterest(q)
            let _rdm = _res[Math.floor(Math.random() * _res.length)]
            let _img = await getBuffer(_rdm)
            await loli.sendMessage(from, _img, image, { quoted: lol })
            break
            case 'ytdlmp3':
            if (!_Url(_msg[0]) && !_msg[0].includes('youtube.com')) return reply(msg.linkErr)
            if (!q) return reply(`*Example : ${prefix + command} https://youtu.be/Z3rpSoag3x8`)
            reply(msg.wait)
            lk.YtdlMp3(`${_msg[0]}`)
            .then(result => {
                let _ = result
                var _thumb = _.thumb
                var _capt = `*Title* : ${_.title}\n`
                + `*Channel* : ${_.channel}\n`
                + `*Published* : ${_.published}\n`
                + `*Views* : ${_.views}\n`
                + `*Category* : ${_.category}\n`
                + `*Description* : ${_.description}\n\n`
                axios.get(`https://tinyurl.com/api-create.php?url=${_.url}`)
                .then((x) => {
                    var _capt1 = `${_capt}`
                    + `*Link Download* : ${x.data}\n\n`
                    + `_For a duration that exceeds the limit presented, it will be sent via the download link!_`
                    var _capt2 = `${_capt}`
                    + `_Audio is being sent, please wait a moment_`
                    if (Number(_.length_seconds) >= 600) return sendMediaURL(from, _thumb, _capt1)
                    sendMediaURL(from, _thumb, _capt2)
                    sendMediaURL(from, _.url)
                })
            })
            break
            case 'ytdlmp4':
            if (!_Url(_msg[0]) && !_msg[0].includes('youtube.com')) return reply(msg.linkErr)
            if (!q) return reply(`*Example : ${prefix + command} https://youtu.be/Z3rpSoag3x8`)
            reply(msg.wait)
            lk.YtdlMp4(`${_msg[0]}`)
            .then(result => {
                let _ = result
                var _thumb = _.thumb
                var _capt = `*Title* : ${_.title}\n`
                + `*Channel* : ${_.channel}\n`
                + `*Published* : ${_.published}\n`
                + `*Views* : ${_.views}\n`
                + `*Category* : ${_.category}\n`
                + `*Description* : ${_.description}\n\n`
                axios.get(`https://tinyurl.com/api-create.php?url=${_.url}`)
                .then((x) => {
                    var _capt1 = `${_capt}`
                    + `*Link Download* : ${x.data}\n\n`
                    + `_For a duration that exceeds the limit presented, it will be sent via the download link!_`
                    var _capt2 = `${_capt}`
                    + `_Video is being sent, please wait a moment_`
                    if (Number(_.length_seconds) >= 600) return sendMediaURL(from, _thumb, _capt1)
                    sendMediaURL(from, _thumb, _capt2)
                    sendMediaURL(from, _.url)
                })
            })
            break
            case 'ytplaymp3':
            if (!q) return reply(`*Example : ${prefix + command} https://youtu.be/Z3rpSoag3x8`)
            reply(msg.wait)
            lk.YtPlayMp3(q)
            .then(result => {
                let _ = result
                var _thumb = _.thumb
                var _capt = `*Title* : ${_.title}\n`
                + `*Channel* : ${_.channel}\n`
                + `*Published* : ${_.published}\n`
                + `*Views* : ${_.views}\n`
                + `*Category* : ${_.category}\n`
                + `*Description* : ${_.description}\n\n`
                axios.get(`https://tinyurl.com/api-create.php?url=${_.url}`)
                .then((x) => {
                    var _capt1 = `${_capt}`
                    + `*Link Download* : ${x.data}\n\n`
                    + `_For a duration that exceeds the limit presented, it will be sent via the download link!_`
                    var _capt2 = `${_capt}`
                    + `_Audio is being sent, please wait a moment_`
                    if (Number(_.length_seconds) >= 600) return sendMediaURL(from, _thumb, _capt1)
                    sendMediaURL(from, _thumb, _capt2)
                    sendMediaURL(from, _.url)
                })
            })
            break
            case 'ytplaymp4':
            if (!q) return reply(`*Example : ${prefix + command} https://youtu.be/Z3rpSoag3x8`)
            reply(msg.wait)
            lk.YtPlayMp4(q)
            .then(result => {
                let _ = result
                var _thumb = _.thumb
                var _capt = `*Title* : ${_.title}\n`
                + `*Channel* : ${_.channel}\n`
                + `*Published* : ${_.published}\n`
                + `*Views* : ${_.views}\n`
                + `*Category* : ${_.category}\n`
                + `*Description* : ${_.description}\n\n`
                axios.get(`https://tinyurl.com/api-create.php?url=${_.url}`)
                .then((x) => {
                    var _capt1 = `${_capt}`
                    + `*Link Download* : ${x.data}\n\n`
                    + `_For a duration that exceeds the limit presented, it will be sent via the download link!_`
                    var _capt2 = `${_capt}`
                    + `_Video is being sent, please wait a moment_`
                    if (Number(_.length_seconds) >= 600) return sendMediaURL(from, _thumb, _capt1)
                    sendMediaURL(from, _thumb, _capt2)
                    sendMediaURL(from, _.url)
                })
            })
            break
            case 'tiktoknowm':
            if (!q) return reply(`*Example* : ${prefix + command} https://vt.tiktok.com/ZSedDaT3o/`)
            if (!_Url(_msg[0]) && !_msg[0].includes('tiktok.com')) return reply(msg.linkErr)
            reply(msg.wait)
            lk.TiktokDl(`${_msg[0]}`)
            .then(result => {
                const { tiktok_no_wm } = result
                axios.get(`https://tinyurl.com/api-create.php?url=${tiktok_no_wm}`)
                .then(async (_x) => {
                    _capt = `*Link* : ${_x.data}`
                    loli.sendMessage(from, { url: `${tiktok_no_wm}`}, video, { mimetype: 'video/mp4', quoted: lol, caption: _capt})
                })
            })
            break
            case 'tiktokwm':
            if (!q) return reply(`*Example : ${prefix + command} https://vt.tiktok.com/ZSedDaT3o/`)
            if (!_Url(_msg[0]) && !_msg[0].includes('tiktok.com')) return reply(msg.linkErr)
            reply(msg.wait)
            lk.TiktokDl(`${_msg[0]}`)
            .then(result => {
                const { tiktok_wm } = result
                axios.get(`https://tinyurl.com/api-create.php?url=${tiktok_wm}`)
                .then(async (_x) => {
                    _capt = `*Link* : ${_x.data}`
                    loli.sendMessage(from, { url: `${tiktok_wm}`}, video, { mimetype: 'video/mp4', quoted: lol, caption: _capt})
                })
            })
            break
/*            case 'tiktokaudio':
            if (!q) return reply(`*Example : ${prefix + command} https://vt.tiktok.com/ZSedDaT3o/`)
            if (!_Url(_msg[0]) && !_msg[0].includes('tiktok.com')) return reply(msg.linkErr)
            reply(msg.wait)
            lk.TiktokDl(`${_msg[0]}`)
            .then(result => {
                const { tiktok_audio } = result
                sendMediaURL(from,tiktok_audio,'')
            })
            .catch(e => cError(e))
            break*/
            case 'promote':
            case 'pm':
                if (!_Group) return reply(msg.only.group)
                if (!_GroupAdmins && !_Me) return reply(msg.only.admin)
                if (!_BotGroupAdmins) return reply(msg.bot.admin)
                if (mentionByTag.length < 1) {
                    loli.groupMakeAdmin(from, mentionByTag)
                        .then((res) => reply('Sucess promote member'))
                        .catch((err) => reply('Opss, Error'))
                } else if (mentionUser) {
                    loli.groupMakeAdmin(from, mentionUser)
                        .then((res) => reply('Sucess promote member'))
                        .catch((err) => reply('Opss, Error'))
                } else {
                    reply(`Kirim perintah ${prefix + command} @tag atau nomor atau reply pesan member yang ingin di promote`)
                }
            break
            case 'dm':
            case 'demote':
                if (!_Group) return reply(msg.only.group)
                if (!_GroupAdmins && !_Me) return reply(msg.only.admin)
                if (!_BotGroupAdmins) return reply(msg.bot.admin)
                if (mentionByTag.length < 1) {
                    loli.groupDemoteAdmin(from, mentionByTag)
                        .then((res) => reply('Sucess demote admin'))
                        .catch((err) => reply('Opss, Error'))
                } else if (mentionUser) {
                    loli.groupDemoteAdmin(from, mentionUser)
                        .then((res) => reply('Sucess demote admin'))
                        .catch((err) => reply('Opss, Error'))
                } else {
                    reply(`Kirim perintah ${prefix + command} @tag atau nomor atau reply pesan member yang ingin di promote`)
                }
            break
            default:
            if (_bdy.startsWith('>')) {
                try {
                    return loli.sendMessage(from, JSON.stringify(eval(_bdy.slice(2)), null, '\t'), text, { quoted: lol })
                } catch (e) {
                    e = String(e)
                    reply(e)
                }
            }
        }
    } catch (e) {
    //    e = String(e)
 //       if (!e.includes("this.isZero") && !e.includes("jid")) {
            cError(e)
      //  }
    }
}
