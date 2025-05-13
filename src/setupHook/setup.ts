import { Before, After } from "@cucumber/cucumber";
import { Page, Browser, chromium } from "playwright";

let browser: Browser;
let page: Page;

Before(async function () {
    console.log("Configurando el navegador antes de los escenarios...");
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    this.page = page; // Guarda la página en el contexto del escenario
});

After(async function () {
    console.log("Cerrando el navegador después de los escenarios...");
    await browser.close();
});
