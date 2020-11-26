const puppeteer = require("puppeteer");

const URL_LOGIN = "https://freebitco.in/?op=signup_page";

const userName = "15FRPbSGMFebMKubvxQ3R1praCLecXY6o1";
const passWord = "ntmuxFjQlJBM6nXc";

const loginBtn = ".login_menu_button";
const submitLoginBtn = "#login_button";

const emailInput = "#login_form_btc_address";
const passwordInput = "#login_form_password";

const cancleCooke = ".pushpad_deny_button";

const playWithoutCaptcha = "#play_without_captchas_button";

const free_play_form_button = "#free_play_form_button";

const freeBitcoin = {
  init: () => {
    freeBitcoin.getHomePage();

    setTimeout(() => freeBitcoin.init(), 1000 * 60 * 60);
  },
  getHomePage: async () => {
    console.log("Get bitcoin running ...");
    const browser = await puppeteer.launch();

    const page = await browser.newPage();

    await page.goto(URL_LOGIN);

    await page.waitFor(1000);
    await page.waitFor(cancleCooke);
    await page.$eval(cancleCooke, (elem) => elem.click());

    await page.waitFor(1000);
    await page.waitFor(loginBtn);
    await page.$eval(loginBtn, (elem) => elem.click());

    await page.waitFor(emailInput);
    await page.type(emailInput, userName);

    await page.waitFor(passwordInput);
    await page.type(passwordInput, passWord);

    await page.waitFor(submitLoginBtn);
    await page.$eval(submitLoginBtn, (elem) => elem.click());

    await page.waitFor(3000);
    await page.waitFor(playWithoutCaptcha);
    await page.$eval(playWithoutCaptcha, (elem) => elem.click());

    await page.waitFor(free_play_form_button);
    await page.$eval(free_play_form_button, (elem) => elem.click());

    await browser.close();
  },
};

module.exports = freeBitcoin;
