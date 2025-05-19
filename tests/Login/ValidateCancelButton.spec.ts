import { test, expect } from '@playwright/test';
import { LoginPage } from "../../PageObjects/Login/LoginPage";


test.describe('Validate cancel button credentials', () => {
    test('User enters data in the fields and want clear the fields', async ({ page }) => {
        await test.step('I navigate to Produbanco´s administrative module page', async () => {
            await page.goto(LoginPage.LOGIN_URL);
        })
        await test.step('Enter valid username and password to log into the system.', async () => {
            const loginPage = new LoginPage(page);

            await loginPage.inputUsername('JBAU89');
            await loginPage.inputPassword('TEST');
            await loginPage.clickCancelButton();
        })

        await test.step('Validate empty fields', async () => {
            const loginPage = new LoginPage(page);
            await loginPage.validateEmptyUsernameField();
            await loginPage.validateEmptyPasswordField();
        });
    })
});


