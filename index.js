import puppeteer from 'puppeteer';
import fs from 'fs';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate to the page
  await page.goto('https://us02web.zoom.us/meeting/register/tZYqfuGprDojEtVerECZcjyjNgIAGxLRpjQw');

  // Enter login credentials
  await page.type('input[id="question_first_name"]', 'Maleesha');
  await page.type('input[id="question_last_name"]', 'Pramud');
  await page.type('input[id="question_email"]', 'maleeshapramud2005@gamil.com');
  await page.type('input[id="question_NIC"]', '200507301249');
  await page.type('input[id="question_ContactNumber"]', '0701549092');
  await page.click('button[type="button"]');
  await page.waitForNavigation();

  const element = await page.$('h1[data-v-75530ca1].mgb-lg');

  if (element) {
    console.log('Success');
  } else {
    console.log('Try Again');
  }

  await browser.close();

  // Pause and wait for user input before exiting
  console.log('Press any key to exit...');
  process.stdin.once('data', process.exit);
})();