import { test, expect } from '@playwright/test';
import { LoginPage } from "../../PageObjects/Login/LoginPage";
import { HomePage } from "../../PageObjects/Home/HomePage";
import { AdministrativeModulePage } from "../../PageObjects/AdministrativeModule/AdministrativeModulePage";
import users from '../../data/credentials.json';

test.describe('Validate create new administrative user', () => {
    let loginPage: LoginPage;
    let homePage: HomePage;
    let administrativeModulePage: AdministrativeModulePage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        homePage = new HomePage(page);
        administrativeModulePage = new AdministrativeModulePage(page);

        await page.goto('/admnovoWebProd/loginSetup.do?trnid=login&opcion=3');
        await loginPage.inputUsername(users.admin1.username);
        await loginPage.inputPassword(users.admin1.password);
        await loginPage.clickLoginButton();
        await expect(page).toHaveURL(LoginPage.DASHBOARD_URL);
    });

    test.afterEach(async ({ page }) => {
        // Cerrar sesión
        await homePage.clickOnUsersTab();
        await homePage.clickOnLogoutButton();
        await expect(page).toHaveURL(LoginPage.LOGIN_URL);
    });

    test('User creates and deletes a new administrative user', async ({ page }) => {
        await homePage.clickOnMaintenanceTab();
        await homePage.clickOnMaintenanceUsersTab();
        await homePage.clickOnAdministrativeModule();
        await expect(page).toHaveURL(AdministrativeModulePage.ADMINISTRATIVEMODULE_URL);

        await administrativeModulePage.clickInsertButton();
        await administrativeModulePage.validateEmptyFieldsValidationMessage('El campo Usuario está vacío. Campo Primer nombre está vacío. Campo Primer apellido está vacío. El campo Rol operativo está vacío. El campo Tipo identificación está vacío. El campo Estatus está vacío. El campo Número identificación está vacío. Campo Email está vacío. El campo Número telefónico está vacío.')
        await administrativeModulePage.clickOnCorrectButton();

    });
});