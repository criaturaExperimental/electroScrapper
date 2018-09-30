const puppeteer = require('puppeteer');

module.exports = {
  getStuff: async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://lucasdegomez.com');
    // await page.screenshot({path: '.tmp/example.png'});
    const headline = await page.$('h1');
    const html = await page.evaluate(body => body.innerHTML, headline);
    console.log(html);
    await headline.dispose();

    await browser.close();

    return html;
  }
}


// async function getStuff() {
//   const browser = await puppeteer.launch({ headless: false, slowMo: 250 });
//   const page = await browser.newPage();
//   await page.goto('http://lucasdegomez.com');
//   await page.setViewport({ width: 1200, height: 800 });
//   await page.screenshot({ path: 'test.png' });

//   await browser.close();
// }