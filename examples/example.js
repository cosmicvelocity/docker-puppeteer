'use strict';

const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://www.yahoo.co.jp/');
    await page.screenshot({path: 'yahoo.png'});

    browser.close();
})();
