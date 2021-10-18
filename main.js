const {
    WAConnection,
    MessageType,
    Mimetype,
    MessageOptions,
    waChatKey ,
    mentionedJid
} = require('@adiwajshing/baileys');
const lk = require('lk-api');
const { getBuffer } = require('./lib/getbuffer');
const cError = require('console-error');
const cInfo = require('console-info');
const cWarn = require('console-warn');
const axios = require('axios');
const request = require('request');
const fs = require('fs');
const { exec } = require('child_process');
const moment = require('moment-timezone');

const tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))

var banChats = false

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
		let sender = _Group ? lol.participant : lol.key.remoteJid
		const allChats = await loli.chats.all()
		const groupMetadata = _Group ? await loli.groupMetadata(from) : ''
		const groupName = _Group ? groupMetadata.subject : ''
		const groupId = _Group ? groupMetadata.jid : ''
		const groupMembers = _Group ? groupMetadata.participants : ''
		const groupDesc = _Group ? groupMetadata.desc : ''
		const groupOwner = _Group ? groupMetadata.owner : ''
		//const groupAdmins = _Group ? getGroupAdmins(groupMembers) : ''
		//const _BotGroupAdmins = groupAdmins.includes(botNumber) || false
		//const _GroupAdmins = groupAdmins.includes(sender) || false
        //const _Vote = _Group ? voting.includes(from) : false
        const conts = lol.key.fromMe ? loli.user.jid : loli.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = lol.key.fromMe ? loli.user.name : conts.notify || conts.vname || conts.name || '-'

        const _Url = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        
        const sendImg = (img, text) => {
            loli.sendMessage(from, img, image, { quoted: lol, caption: text })
        }
        const reply = (_txt) => {
            loli.sendMessage(from, _txt, text, { quoted: lol })
        }
        
        const sendMediaURL = async(to, url, text="", mids=[]) => {
            if (mids.length > 0) {
                text = normalizeMention(to, text, mids)
            }
            const fn = Date.now() / 10000;
            const filename = fn.toString()
            let mime = ""
            var download = function (uri, filename, callback) {
                request.head(uri, function (err, res, body) {
                    mime = res.headers['content-type']
                    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
            };
            download(url, filename, async function () {
                cInfo('Done ✓');
                let media = fs.readFileSync(filename)
                let type = mime.split("/")[0]+"Message"
                if (mime === "image/gif") {
                    type = MessageType.video
                    mime = Mimetype.gif
                }
                if (mime.split("/")[0] === "audio") {
                    mime = Mimetype.mp4Audio
                }
                loli.sendMessage(to, media, type, { quoted: lol, mimetype: mime, caption: text, contextInfo: {"mentionedJid": mids}})
                fs.unlinkSync(filename)
            });
        }
        
        const sendStickerFromUrl = async(to, url) => {
            var _lkil = Date.now() / 10000;
            var download = function(uri, filename, callback) {
                request.head(uri, function (err, res, body) {
                    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                });
            };
            download(url, './stick' + _lkil + '.png', async function () {
                cInfo('Done ✓')
                var _file = './stick' + _lkil + '.png'
                var _stc = './stick' + _lkil + '.webp'
                exec(`ffmpeg -i ${_file} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${_stc}`, (err) => {
                    var _mdia = fs.readFileSync(_stc)
                    loli.sendMessage(to, _mdia, MessageType.sticker, { quoted: lol })
                    fs.unlinkSync(_file)
                    fs.unlinkSync(_stc)
                });
            });
        };
        
        msg = {
            wait: 'Wait a moment!',
            linkErr: 'The link is error, please check again'
        }
        
        if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !_Cmd && _bdy.match(/[1-9]{1}/)) {
            _kuis = true
            _jwb = tebakgambar[sender.split('@')[0]]
            if (_bdy.toLowerCase() == _jwb) {
                reply("Jawaban Anda Benar!")
                delete tebakgambar[sender.split('@')[0]]
                fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
            } else {
                reply("Jawaban Anda Salah!")
            }
        }
        
        if (_Cmd && _Group) cInfo('[ COMMAND ] +>', command, '+> ', pushname, '+> ', groupName)
        if (_Cmd && !_Group) cInfo('[ COMMAND ] +>', command, '+> ', pushname)
        if (!_Cmd && !_Group) cInfo('[ PRIVATE ] +>', pushname)
        if (!_Cmd && _Group) cInfo('[  GROUP  ] +>', pushname, '+> ', groupName)
        
        if (!lol.key.fromMe && banChats === true) return
        switch (command) {
            case 'tes':
            _txt = 'Mantap work ✓'
            reply(_txt)
            break
            case 'help':
            case 'menu':
            var _date = Date()
            _tmnu = `Nama : ${pushname}\n`
            + `Date : ${_date}`
            + `\n\n*[+> STALKING MENU*\n`
            + `+> _${prefix}igstalk (username)_\n`
            + `+> _${prefix}ghstalk (username)_\n`
            + `\n*[+> DOWNLOADER MENU*\n`
            + `+> _${prefix}igstory (username)_\n`
            + `+> _${prefix}igdl (url)_\n`
            + `+> _${prefix}pinterest (query)_\n`
            + `+> _${prefix}tiktoknowm (url)_\n`
            + `+> _${prefix}tiktokwm (url)_\n`
            + `+> _${prefix}tiktokaudio (url)_\n`
            + `+> _${prefix}ytdlmp3 (url)_\n`
            + `+> _${prefix}ytdlmp4 (url)_\n`
            + `+> _${prefix}ytplaymp3 (query)_\n`
            + `+> _${prefix}ytplaymp4 (query)_\n`
            + `+> _${prefix}chara (query)_\n`
            + `\n*[+> VOKAL MENU*\n`
            + `+> _${prefix}halah (text)_\n`
            + `+> _${prefix}hilih (text)_\n`
            + `+> _${prefix}huluh (text)_\n`
            + `+> _${prefix}heleh (text)_\n`
            + `+> _${prefix}holoh (text)_\n`
            + `\n*[+> INFO MENU*\n`
            + `+> _${prefix}httpheaders (domain)_\n`
            + `+> _${prefix}ip_\n`
            + `+> _${prefix}iplookup (domain)_\n`
            + `+> _${prefix}proxy_\n`
            + `+> _${prefix}servermc_\n`
            + `+> _${prefix}kodepos_\n`
            + `\n*[+> ANIME MENU*\n`
            + `+> _${prefix}otaku (query)_\n`
            + `\n*[+> CONVERT MENU*\n`
            + `+> _${prefix}emoji (emoji)_\n`
            + `\n*[+> SEARCH MENU*\n`
            + `+> _${prefix}ytsearch (query)_\n`
            + `+> _${prefix}moddroid (query)_\n`
            + `+> _${prefix}palingmurah (query)_\n`
            + `+> _${prefix}apkmody (query)_\n`
            + `+> _${prefix}jalantikus (query)_\n`
            + `+> _${prefix}happymod (query)_\n`
            + `\n*[+> PRIMBON MENU*\n`
            + `+> _${prefix}hoax_\n`
            + `\n*[+> GAME MENU*\n`
            + `+> _${prefix}tebakgambar_\n`
            + `\n*[+> DECRYPT & ENCRYPT*\n`
            + `+> _${prefix}dec32 (text)_\n`
            + `+> _${prefix}dec64 (text)_\n`
            + `+> _${prefix}enc32 (text)_\n`
            + `+> _${prefix}enc32 (text)_\n`
            reply(_tmnu)
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