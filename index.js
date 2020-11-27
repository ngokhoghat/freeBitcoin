require("dotenv").config();
const freeBitcoin = require("./src/freeBitcoin");

(async () => {
  console.log("Starting .....");
  freeBitcoin.init();
})();
