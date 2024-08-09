import puppeteer from 'puppeteer';

jest.setTimeout(20000);


describe('Page start', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test('test', async () => {
    await page.goto('http://localhost:9000');

    await page.waitForSelector('body');
  });

  afterEach(async () => {
    await browser.close();
  });
});