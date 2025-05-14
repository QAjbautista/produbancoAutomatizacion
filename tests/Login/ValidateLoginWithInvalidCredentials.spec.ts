import { test, expect } from '@playwright/test';
import { LoginPage } from "../PageObjects/Login/LoginPage";


test.describe('Validate invalid credentials', () => {
    test('User enters incorrect credentials and logs in to his account', async ({ page }) => {
        await test.step('I navigate to Produbanco´s administrative module page', async () => {
            await page.goto(LoginPage.LOGIN_URL);
        })
        await test.step('Enter valid username and invalid password to log into the system.', async () => {
            const loginPage = new LoginPage(page);

            await loginPage.inputUsername('JBAU89');
            await loginPage.inputPassword('TEST');
            await loginPage.clickLoginButton();
        })

        await test.step('Validate error message', async () => {
            const loginPage = new LoginPage(page);
            await loginPage.validateErrorLoginMessage('Usuario o contraseña inválido.')
        });
    })
});


