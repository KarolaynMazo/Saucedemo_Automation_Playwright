import { test, expect, Page, Browser, chromium } from '@playwright/test';

import {
  Given,
  When,
  Then,
} from "@cucumber/cucumber";

import { GoToPage } from '../task/GoToPage';
import { DoLogin } from '../task/DoLogin';
import { ValidateLogin } from '../questions/ValidateLogin';



let browser: Browser;
let page: Page;





Given('that customer wants to navigate to the saucemo page', async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();

  const url = new GoToPage(page);
  await url.goto()
    

});


When('A user enters the username {string}, the password {string}, and clicks on the login button', async function (username: string, password: string) {
const login = new DoLogin(page,username,password);

 await login.intoData(username,password);
 await page.pause()
});


Then('you can see the main page with title {string}', async function (title: string) {
  //await expect(page.locator('//div[contains(text(),"Products")]')).toContainText(title);

  const validation = new ValidateLogin(page,title);
  await validation.validateField(title);
await browser.close();

});

