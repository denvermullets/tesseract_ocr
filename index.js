const Tesseract = require('tesseract.js');

function demo() {
  Tesseract.recognize(
    // 'https://i.imgur.com/ULlNBw2.png', // chris paul original
    // 'https://i.imgur.com/oT5IpQ2.png', // chris paul bw w/contrast
    // 'https://i.imgur.com/AJIx2S2.png', // chris paul cropped to just stats, bw w/contrast
    // 'https://i.imgur.com/qLuxipP.png', // chris paul cropped to just stats, bw w/contrast then inverted
    'https://i.imgur.com/1KxK1AY.png', // chris paul cropped to just stats, bw w/contrast then inverted just cropped out highlight bar
    'eng',
    { logger: m => console.log(m) }
  ).then(({ data: { text } }) => {
    console.log(text);
  })

}

demo()
