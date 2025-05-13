import { test, expect, Page, Browser, chromium } from '@playwright/test';

import {
  Given,
  When,
  Then,
} from "@cucumber/cucumber";

import { GoToPage } from '../task/GoToPage';
import { DoLogin } from '../task/DoLogin';
import { ValidateLogin } from '../questions/ValidateLogin';
import '../setupHook/setup';





Given('that customer wants to navigate to the saucemo page', async function () {
  const url = new GoToPage(this.page);
  await url.goto()
    

});


When('A user enters the username {string}, the password {string}, and clicks on the login button', async function (username: string, password: string) {
const login = new DoLogin(this.page,username,password);

 await login.intoData(username,password);
 await this.page.pause()
});


Then('you can see the main page with title {string}', async function (title: string) {
  //await expect(page.locator('//div[contains(text(),"Products")]')).toContainText(title);

  const validation = new ValidateLogin(this.page,title);
  await validation.validateField(title);


});

