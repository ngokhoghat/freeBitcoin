const freeBitcoin = require("./src/freeBitcoin");

(async () => {
  setInterval(() => {
    freeBitcoin.init();
  }, 1000 * 5);
})();
