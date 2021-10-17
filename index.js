const {
    WAConnection,
} = require('@adiwajshing/baileys');
const fs = require('fs');
const banner = require('./lib/banner.js');
const cInfo = require('console-info');
const cWarn = require('console-warn');
const cError = require('console-error');

const starts = async (loli = new WAConnection()) => {
    loli.logger.level = 'warn'
    loli.version = [2, 2123, 8]
    loli.browserDescription = ['Killers', 'Chrome', '3.0']
    console.log(banner.string)
    loli.on('qr', () => {
        cWarn('Scan qrnya bang!')
    })
    
    fs.existsSync('./session.json') && loli.loadAuthInfo('./session.json')
    loli.on('connecting', () => {
        cWarn('Connecting.....')
    })
    
    loli.on('open', () => {
        cInfo('Connected.....')
    })
    
    await loli.connect({timeoutMs: 30*1000})
    fs.writeFileSync('./session.json', JSON.stringify(loli.base64EncodedAuthInfo(), null, '\t'))
    
    loli.on('chat-update', async (message) => {
        require('./main.js')(loli, message)
    })
}

starts()