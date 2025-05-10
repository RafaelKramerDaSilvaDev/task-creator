import puppeteer from "puppeteer";
import { env } from "../utils/env";

export const login = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  await page.goto(env.M8_TASKS_URL);

  await page.setViewport({ width: 1080, height: 1024 });

  const loginInput = page.locator("#input-login");
  const passwordInput = page.locator("#input-senha");

  await loginInput.fill(env.LOGIN);
  await passwordInput.fill(env.PASSWORD);

  const buttonLoginSelector =
    "body > div.--nf-login-v3-container.--nf-prod-erp > main > aside > div > section > form.login-form > div.--nfgo > button";
  const buttonLogin = page.locator(buttonLoginSelector);

  await buttonLogin.click();

  return { page };
};
