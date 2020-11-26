const freeBitcoin = require("./src/freeBitcoin");

(async () => {
  console.log("Starting .....");
  const loop = 1;
  setInterval(() => {
    console.log(`loop ${loop}`);
    freeBitcoin.init();
    loop++;
  }, 1000 * 60 * 60);
})();
