import puppeteer from "puppeteer";
import { loginCredentials, m8TasksUrl } from "./../constants";

export const login = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  await page.goto(m8TasksUrl);

  await page.setViewport({ width: 1080, height: 1024 });

  const userInput = page.locator("#input-login");
  const passwordInput = page.locator("#input-senha");

  await userInput.fill(loginCredentials.user);
  await passwordInput.fill(loginCredentials.password);

  const buttonLoginSelector =
    "body > div.--nf-login-v3-container.--nf-prod-erp > main > aside > div > section > form.login-form > div.--nfgo > button";
  const buttonLogin = page.locator(buttonLoginSelector);

  await buttonLogin.click();

  return { page };
};
