import { test, expect } from '@playwright/test';
import { LoginPage } from "../PageObjects/Login/LoginPage";
import { HomePage } from "../PageObjects/Home/HomePage";


test.describe('Validate Login Successfully', () => {
    test('User enters correct credentials and logs in to his account', async ({ page }) => {
        await test.step('I navigate to Produbanco´s administrative module page', async () => {
            await page.goto(LoginPage.LOGIN_URL);
        })
        await test.step('Enter valid username and password to log into the system.', async () => {
            const loginPage = new LoginPage(page);

            await loginPage.inputUsername('JBAU89');
            await loginPage.inputPassword('123');
            await loginPage.clickLoginButton();
        })

        await test.step('Valid that you have logged in to the portal in a satisfactory manner', async () => {
            await expect(page).toHaveURL(LoginPage.DASHBOARD_URL);
        });

        await test.step('Validate log out of the system', async () => {
            const homePage = new HomePage(page);
            await homePage.clickOnUsersTab();
            await homePage.clickOnLogoutButton();
            await expect(page).toHaveURL(LoginPage.LOGIN_URL);

        })
    })
});


