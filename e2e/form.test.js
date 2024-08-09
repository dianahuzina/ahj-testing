import puppeteer from 'puppeteer';

jest.setTimeout(30000);

describe('Card Form', () => {
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

  test('Form should render on page start', async () => {
    await page.goto('http://localhost:9000');

    await page.waitForSelector('.form');
  });

  test('Card number should be valid', async () => {
    await page.goto('http://localhost:9000');

    await page.waitForSelector('.form');

    const form = await page.$('.form');
    const input = await form.$('.form-input');
    const btn = await form.$('.btn');

    await input.type('371449635398431');
    await btn.click();

    await page.waitForSelector('.validForm');
  });

  test('Card number should be invalid', async () => {
    await page.goto('http://localhost:9000');

    await page.waitForSelector('.form');

    const form = await page.$('.form');
    const input = await form.$('.form-input');
    const btn = await form.$('.btn');

    await input.type('37144963539843');
    await btn.click();

    await page.waitForSelector('.invalidForm');
  });
  
  afterEach(async () => {
    await browser.close();
  });
});