import { test, expect, Page, Browser, chromium } from '@playwright/test';
import { ProductsPage } from '../userInterface/ProductsPage';


export class ValidateLogin {

readonly textValidate: string;
readonly page: Page;

constructor(page: Page, textValidate: string){

    this.page = page;
    this.textValidate =  textValidate;
}


async validateField(textValidate:string){
 
    await expect(this.page.locator(ProductsPage.locator_title)).toHaveText(textValidate);
  
}



}