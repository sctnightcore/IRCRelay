const rc = require('rc')
const config = rc('bridge', {
  irc: {
    host: 'irc.freenode.net',
    nick: 'kRO_room_',
    channels: [openkore]
  },
  discord: {
    token: 'MzgxNTQyODI5Mjk1NjY1MTUz.DRTXqw.vkAEIJnHWPG4pAtHWMXraK2L-yg',
    guilds: [openkore KRO:ZERO],
    channels: ['irc'],
    webhook: ''
  }
})

module.exports = config
