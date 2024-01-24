import puppeteer from 'puppeteer';
import fs from 'fs';

// Set the DEBUG environment variable to an empty string
process.env.DEBUG = '';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  console.log("Browsing...");

  // Navigate to the page
  await page.goto('https://web.javainstitute.org/web-portal/login/student.jsp');

  console.log("Loggin in...");
  console.log("");

  // Enter login credentials
  await page.type('input[name="username"]', '200507301249');
  await page.type('input[name="password"]', 'maleesha2005');
  await page.click('button[type="submit"]');
  await page.waitForNavigation();

  // Use page.$eval to directly get the inner text of the element with the specified class
  const username = await page.$eval('.username.username-hide-on-mobile', element => element.innerText);

  console.log("Logged in as " + username);
  console.log("");

  // Extract information from columns with background color "#d3f6ef"
  const columns = await page.$$('.mt-element-ribbon.tt-height[style*="background-color:#d3f6ef;"]');

  for (const column of columns) {
    const date = await column.$eval('.ribbon-color-success', element => element.textContent.trim());
    const subject = await column.$eval('.bg-grey-cararra', element => element.textContent.trim());
    const time = await column.$eval('.col-md-12.bg-grey.bold', element => element.textContent.trim());
    const joinLink = await column.$eval('a[target="_blank"]', element => element.getAttribute('href'));

    console.log('Date:', date);
    console.log('Subject:', subject);
    console.log('Time:', time);
    console.log('Join Link:', joinLink);
    console.log('---');
  }

  // Close the browser
  await browser.close();

  // Pause and wait for user input before exiting
  console.log("");
  console.log('Press any key to exit...');
  process.stdin.once('data', process.exit);
})();