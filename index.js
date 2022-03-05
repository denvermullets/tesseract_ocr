// const Tesseract = require("tesseract.js");
const { createWorker } = require("tesseract.js");
const gm = require("gm").subClass({ imageMagick: true });

function demo() {
  Tesseract.recognize(
    // 'https://i.imgur.com/ULlNBw2.png', // chris paul original
    // 'https://i.imgur.com/oT5IpQ2.png', // chris paul bw w/contrast
    // 'https://i.imgur.com/AJIx2S2.png', // chris paul cropped to just stats, bw w/contrast
    // 'https://i.imgur.com/qLuxipP.png', // chris paul cropped to just stats, bw w/contrast then inverted
    // 'https://i.imgur.com/1KxK1AY.png', // chris paul cropped to just stats, bw w/contrast then inverted just cropped out highlight bar
    // 'https://i.imgur.com/Omtuws7.jpg', // mtg cards, full color
    // 'https://i.imgur.com/sLsJNjc.jpg', // mtg card, full color
    "https://i.imgur.com/rlU8tOq.jpg", // mtg card, black and white
    // "https://i.imgur.com/p70Drmc.jpg", // mtg card, color, just name of card
    "eng",
    { logger: (m) => console.log(m) }
  ).then(({ data: { text } }) => {
    console.log("=====================================");
    const result = text
      .replace(/[^a-zA-Z,'-]/g, " ")
      .split(" ")
      .filter((word) => {
        if (word.length > 2) {
          return word;
        }
      });

    const trimmed = result.join(" ");
    console.log(trimmed);
    console.log(trimmed.includes("Prosper, Tome-Bound"));
    console.log("=====================================");
  });
}

async function demoBW() {
  const image = await gm("tess_images/02_prosper.jpg").monochrome();

  console.log(image);
  await Tesseract.recognize("tess_images/04_prosper.jpg", "eng", {
    logger: (m) => console.log(m),
  }).then(({ data: { text } }) => {
    console.log("=====================================");
    const result = text
      .replace(/[^a-zA-Z,'-]/g, " ")
      .split(" ")
      .filter((word) => {
        if (word.length > 2) {
          return word;
        }
      });

    const trimmed = result.join(" ");
    console.log(trimmed);
    console.log(trimmed.includes("Prosper, Tome-Bound"));
    console.log("=====================================");
  });
}

// demoBW();

// this is the good good
async function scanCard() {
  const image = async () => {
    // load normal single card image and resize so scan doesn't take forever
    // await gm("tess_images/01_prosper.jpg")
    await gm("tess_images/01_fever.jpg")
      .monochrome()
      .resize(563, 1000, "!")
      .toBuffer("jpg", (err, buffer) => {
        // send card to buffer so we don't have to save the file
        if (err) {
          console.error(err);
        } else {
          fireWorker(Buffer.from(buffer));
        }
      });
  };

  const worker = createWorker({
    logger: (m) => console.log(m),
  });

  const fireWorker = async (buffer) => {
    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
    const {
      data: { text },
    } = await worker.recognize(buffer);
    const result = text
      .replace(/[^a-zA-Z,'-]/g, " ")
      .split(" ")
      .filter((word) => {
        if (word.length > 2) {
          return word;
        }
      });
    console.log(result.join(" "));
    worker.terminate();
  };

  await image();
}

scanCard();
