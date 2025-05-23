import { test } from '@playwright/test';
import { LoginPage } from "../../PageObjects/Login/LoginPage";
import users from '../../data/credentials.json';

test.describe('Validate response when clearing the data entered in the form', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = LoginPage.create(page);
        await page.goto('/admnovoWebProd/loginSetup.do?trnid=login&opcion=3');
        await loginPage.inputUsername(users.admin1.username);
        await loginPage.inputPassword(users.admin1.password);
        await loginPage.clickCancelButton();

    });

    test('Create the user and edit it', async () => {
        await loginPage.validateEmptyUsernameField();
        await loginPage.validateEmptyPasswordField();
    });
});