import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('test karo', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.co');

  await page.locator('//*[@id="cb1-edit"]').fill('Iphone')
  await page.keyboard.press('Enter')
  await expect(page.locator('//ol[contains(@class,"ui-search-layout")]')).toBeVisible()

  const titles = await page.locator('//ol[contains(@class,"ui-search-layout")]//li//h3').allInnerTexts()

  console.log('total of titles is: ', titles.length) 

  for(let title of titles){
    console.log('the title is:', title)
  }

  await page.getByRole('link',{name: 'Mis compras'}).click()

  //ol[contains(@class,"ui-search-layout")]/li

  //await page.pause()


});