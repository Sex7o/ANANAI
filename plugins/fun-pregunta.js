import fetch from 'node-fetch'
let handler = async (m, {conn, command, usedPrefix, text }) => { 
if (!text) throw `${lenguajeGB['smsAvisoMG']()}ðððūððð―ðž ðð ððððððððž ððžððž ððð ðððððððŋððŋðž\nððððððð\n*${usedPrefix + command} Hoy va llover?*\n\nððððð ðððð ðððððððð ðð ð―ð ðžðððððððŋ\nðððžðððð\n*${usedPrefix + command} Hoy va llover?*`   
let res = await fetch(`https://api.simsimi.net/v2/?text=${text}&lc=es`)
let json = await res.json()
if (json.success)
  
m.reply(`â­âã ððððððððž | ðððððððð ãââŽĢ  
âïļ ððððððððž: 
ð ${text}
âââââââââââââââ
â ðððððððððž | ðððððððð
ðž : ${json.success.replace('simsimi', 'simsimi').replace('Simsimi', 'Simsimi').replace('sim simi', 'sim simi')}`) 

//conn.sendHydrated(m.chat, pre, wm, null, md, 'ðððĐðð―ðĪðĐ-ððŋ', null, null, [
//['ððĐð§ð ðŦððŊ | ðžððððĢ ðŪ', `${usedPrefix + command} ${text}`],
//['ððĪðĄðŦðð§ ððĄ ðððĢðŠĖ | ð―ððð  ðĐðĪ ðððĢðŠ âïļ', '/menu']
//], m, null, m.mentionedJid ? {
//mentions: m.mentionedJid } : {}) 
}
  
handler.help = ['pregunta <texto>?']
handler.tags = ['kerang']
handler.command = /^pregunta|preguntas|apakah$/i  
export default handler
