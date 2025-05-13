import { test, expect, Page, Browser, chromium } from '@playwright/test';
import { LoginPage } from '../userInterface/LoginPage';



export class DoLogin {


 readonly username: string;
 readonly password: string;
 readonly page: Page;
 



  constructor(page: Page,username: string, password: string) {


    this.username = username;
    this.password = password;
    this.page = page;

  }




  async intoData(username: string, password: string) {

    await this.page.locator(LoginPage.locator_username).fill(username);
    await this.page.locator(LoginPage.locator_password).fill(password);
    await this.page.locator(LoginPage.button_login).click();

    await this.page.pause()
  }

}
