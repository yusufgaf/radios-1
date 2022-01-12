const tags = require('../tags'),
  langs = require('langs')

module.exports = () => {
  return {
    "name": "Urhitsradio",
    "aliases": ["Urhitsradio", "Uh", "UHR"],
    "logo": "https://uhrlive.uk/images/logo.png",
    "id": "f3540611-0f7c-4f99-a3ec-e6775d8d1991",
    "tagline": "Urhitsradio is an online licence Internet radio station that plays a huge variety of the freshest & best hits from across the many genres of music which are presented by our Radio DJ's in the UK & Worldwide. Our Fun and Energetic DJ's Are Here to Make Some Noise and Turn on the Beat.",
    "tags": [tags.pop, tags.community],
    "language": langs.where('1', 'en'),
    "website": "https://uhrlive.uk",
    "discord": "https://discord.gg/JWVupA3z5W",
    "sources": [{
      "name": "Urhitsradio",
      "url": "https://sc.uhrlive.uk/radio/8000/bot.mp3",
      "default": true
    }],
    "api": {
      "type": "azuracast",
      "endpoint": "https://sc.uhrlive.uk/api/nowplaying/1"
    }
  }
}
