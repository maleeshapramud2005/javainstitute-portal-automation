# Java Institute Student Portal Automation

## Overview

This automation system simplifies the process of retrieving lecture information from the Java Institute's student portal. Built with Puppeteer, it enhances user experience by providing a seamless and efficient way to access relevant details.

## Features

- **Simplified Retrieval:** Easily obtain lecture information.
- **User-Friendly:** Streamlined interface for a better user experience.

## Getting Started

### Prerequisites

- Node.js installed
- Puppeteer library

### Installation

1. Clone the repository.
   ```bash
   git clone https://github.com/maleeshapramud2005/javainstitute-portal-automation.git
2. cd java-institute-portal-automation
3. npm install
4. npm start

## Setting Up Login Credentials

To use this automation script, you need to provide your login credentials for the Java Institute's student portal. Follow these steps:

1. Open the `console.js` file in the project directory.

2. Locate the section in `console.js` where login credentials are entered:

    ```javascript
    // Enter login credentials
    await page.type('input[name="username"]', 'Enter your username (or NIC that you use to login)');
    await page.type('input[name="password"]', 'Enter your password');
    await page.click('button[type="submit"]');
    await page.waitForNavigation();
    ```

3. Replace the placeholder text with your actual login information:

    ```javascript
    // Enter login credentials
    await page.type('input[name="username"]', 'your-username-or-nic');
    await page.type('input[name="password"]', 'your-password');
    await page.click('button[type="submit"]');
    await page.waitForNavigation();
    ```

   Make sure to replace `'your-username-or-nic'` with your actual username or NIC and `'your-password'` with your actual password.

4. Save the `console.js` file.

Now, when you run the automation script, it will use the login credentials you provided.

**Important Note:** Ensure that users understand the security implications of storing login credentials directly in code. It's generally not recommended to store sensitive information in code or public repositories. Consider providing instructions on how users can securely manage their credentials, such as using environment variables or a configuration file that is excluded from version control. Additionally, remind users to keep their credentials private and not share them publicly.

## Acknowledgements

Thanks to the Java Institute for providing the opportunity to enhance the student portal experience.
Special thanks to the Puppeteer community for their valuable resources.

## Contact

For issues and support, please contact maleeshapramud9@gmail.com.
