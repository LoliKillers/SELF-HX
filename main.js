const {
    WAConnection,
    MessageType,
    Mimetype,
    MessageOptions
} = require('@adiwajshing/baileys');
const lk = require('lk-api');
const { getBuffer } = require('./lib/getbuffer');
const cError = require('console-error');
const cInfo = require('console-info');
const cWarn = require('console-warn');
const axios = require('axios');
const request = require('request');
const fs = require('fs');

module.exports = loli = async(loli, lol) => {
    try {
        if (!lol.hasNewMessage) return
        lol = lol.messages.all()[0]
        if (!lol.message) return
        if (lol.key && lol.key.remoteJid == 'status@broadcast') return
        global.blocked
        const from = lol.key.remoteJid
        const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
        const type = Object.keys(lol.message)[0]
        const cmd = (type === 'conversation' && lol.message.conversation) ? lol.message.conversation : (type == 'imageMessage') && lol.message.imageMessage.caption ? lol.message.imageMessage.caption : (type == 'videoMessage') && lol.message.videoMessage.caption ? lol.message.videoMessage.caption : (type == 'extendedTextMessage') && lol.message.extendedTextMessage.text ? lol.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[.#z;]/.test(cmd) ? cmd.match(/^[.#z;]/gi) : '-'
        bdy = (type === 'conversation' && lol.message.conversation.startsWith(prefix)) ? lol.message.conversation : (type == 'imageMessage') && lol.message.imageMessage.captions.startsWith(prefix) ? lol.message.imageMessage.caption : (type == 'videoMessage') && lol.message.videoMessage.caption.startsWith(prefix) ? lol.message.videoMessage.caption : (type == 'extendedTextMessage') && lol.message.extendedTextMessage.text.startsWith(prefix) ? lol.message.extendedTextMessage.text : ''
        _bdy = (type === 'conversation') ? lol.message.conversation : (type === 'extendedTextMessage') ? lol.message.extendedTextMessage.text : ''
        const command = bdy.slice(1).trim().split(/ +/).shift().toLowerCase()
        const _Group = from.endsWith('@g.us')
        const sender = _Group ? lol.participant : lol.key.remoteJid
        const _lk = lol.key.fromMe ? loli.user.jid : loli.contact[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = lol.key.fromMe ? loli.user.name : _lk.notify || _lk.vname || _lk.name || '-'
        const _msg = bdy.trim().split(/ +/).slice(1)
        const _Cmd = bdy.startsWith(prefix)
        const q = _msg.join(' ')
        const totalChat = await loli.chats.all()
        const groupMetadata = _Group ? await loli.groupMetadata(from) : ''
        const groupName = _Group ? groupMetadata.subject : ''
        const _Url = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
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
                let type = mime.split("/")[0] + "Message"
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
        
        msg = {
            wait: 'Wait a moment!',
            linkErr: 'The link is error, please check again'
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
            + `+> ${prefix}igstalk (username)_\n`
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
            + `\n*[+> VOKAL MENU*\n`
            + `+> _${prefix}halah (text)_\n`
            + `+> _${prefix}hilih (text)_\n`
            + `+> _${prefix}huluh (text)_\n`
            + `+> _${prefix}heleh (text)_\n`
            + `+> _${prefix}holoh (text)_\n`
            + `\n[+> INFO MENU*\n`
            + `+> _${prefix}httpheaders (domain)_\n`
            + `+> _${prefix}ip_\n`
            + `+> _${prefix}iplookup (domain)_\n`
            + `+> _${prefix}proxy_\n`
            reply(_tmnu)
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
            console.log(_)
            break
            case 'proxy':
            var _ = await lk.Proxy()
            console.log(_)
            var _x = `*Links* : ${_._links}`
            + `*Ip* : ${_.ip}\n`
            + `*Port* : ${_.port}\n`
            + `*Protocol* : ${_.protocol}\n`
            + `*Anonymity* : ${_.anonymity}\n`
            + `*Last Tasted* : ${_.lastTasted}\n`
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
            console.log(_)
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
            var _ip = await lk.Ip()
            console.log(_ip)
            reply(_ip)
            break
            case 'httpheaders':
            if (!q) return reply(`*Example* : ${prefix + command} api.lolhuman.xyz`)
            var _hdr = await lk.HttpHeaders(q)
            console.log(_hdr)
            var _x = _hdr.result
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
            console.log(_x)
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
            console.log(_holoh)
            var _hlh = _holoh.result
            reply(_hlh)
            break
            case 'heleh':
            if (!q) return reply(`*Example* : ${prefix + command} Loli Killers`)
            var _heleh = await lk.Heleh(q)
            console.log(_heleh)
            var _hlh = _heleh.result
            reply(_hlh)
            break
            case 'huluh':
            if (!q) return reply(`*Example* : ${prefix + command} Loli Killers`)
            var _huluh = await lk.Huluh(q)
            console.log(_huluh)
            var _hlh = _huluh.result
            reply(_hlh)
            break
            case 'hilih':
            if (!q) return reply(`*Example* : ${prefix + command} Loli Killers`)
            var _hilih = await lk.Hilih(q)
            console.log(_hilih)
            var _hlh = _hilih.result
            reply(_hlh)
            break
            case 'halah':
            if (!q) return reply(`*Example* : ${prefix + command} Loli Killers`)
            var _halah = await lk.Halah(q)
            console.log(_halah)
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
                console.log(result)
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
            console.log(_res)
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
                console.log(result)
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
                console.log(result)
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
                console.log(result)
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
            case 'ytplaymp4':
            if (!q) return reply(`*Example : ${prefix + command} https://youtu.be/Z3rpSoag3x8`)
            reply(msg.wait)
            lk.YtPlayMp4(q)
            .then(result => {
                console.log(result)
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
            if (!_Url(_msg[0]) && !_msg[0].includes('tiktok.com')) return reply(msg.linkErr)
            if (!q) return reply(`*Example : ${prefix + command} https://vt.tiktok.com/ZSedDaT3o/`)
            reply(msg.wait)
            lk.TiktokDl(`${_msg[0]}`)
            .then(result => {
                console.log(result)
                const { tiktok_no_wm } = result
                axios.get(`https://tinyurl.com/api-create.php?url=${tiktok_no_wm}`)
                .then(async (_x) => {
                    _capt = `*Link* : ${_x.data}`
                    loli.sendMessage(from, { url: `${tiktok_no_wm}`}, video, { mimetype: 'video/mp4', quoted: lol, caption: _capt})
                })
            })
            break
            case 'tiktokwm':
            if (!_Url(_msg[0]) && !_msg[0].includes('tiktok.com')) return reply(msg.linkErr)
            if (!q) return reply(`*Example : ${prefix + command} https://vt.tiktok.com/ZSedDaT3o/`)
            reply(msg.wait)
            lk.TiktokDl(`${_msg[0]}`)
            .then(result => {
                console.log(result)
                const { tiktok_wm } = result
                axios.get(`https://tinyurl.com/api-create.php?url=${tiktok_wm}`)
                .then(async (_x) => {
                    _capt = `*Link* : ${_x.data}`
                    loli.sendMessage(from, { url: `${tiktok_wm}`}, video, { mimetype: 'video/mp4', quoted: lol, caption: _capt})
                })
            })
            break
            case 'tiktokaudio':
            if (!_Url(_msg[0]) && !_msg[0].includes('tiktok.com')) return reply(msg.linkErr)
            if (!q) return reply(`*Example : ${prefix + command} https://vt.tiktok.com/ZSedDaT3o/`)
            reply(msg.wait)
            lk.TiktokDl(`${_msg[0]}`)
            .then(result => {
                const { tiktok_audio } = result
                sendMediaURL(from, tiktok_audio, "")
                console.log(result)
            })
            .catch(e => cError(e))
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
        e = String(e)
        if (!e.includes("this.isZero") && !e.includes("jid")) {
            cError(e)
        }
    }
}