import { test, expect, Page, Browser, chromium } from '@playwright/test';
import { LoginPage } from '../userInterface/LoginPage.js';



export class GoToPage {




  readonly page: Page;

  constructor(page: Page) {

    this.page = page;


  }

  async goto() {
    // this.browser = await chromium.launch({ headless: false });
    // this.page = await thisbrowser.newPage();
    await this.page.goto('https://www.saucedemo.com/v1/');
  }



}
