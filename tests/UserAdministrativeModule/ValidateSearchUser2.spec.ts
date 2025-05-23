import { test, expect } from '@playwright/test';
import { LoginPage } from "../../PageObjects/Login/LoginPage";
import { HomePage } from "../../PageObjects/Home/HomePage";
import { AdministrativeModulePage } from "../../PageObjects/AdministrativeModule/AdministrativeModulePage";
import users from '../../data/credentials.json';

test.describe('Validate search user', () => {
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
        // Eliminar usuario
        await administrativeModulePage.inputConfirmationPassword('123');
        await administrativeModulePage.clickOnDeleteUserButton();
        await administrativeModulePage.clickConfirmCreationButton();
        await administrativeModulePage.validateSuccessfulUserDeletionMessage('usuario: ANONIMO02 eliminado exitosamente.');
        // Cerrar sesión
        await homePage.clickOnUsersTab();
        await homePage.clickOnLogoutButton();
        await expect(page).toHaveURL(LoginPage.LOGIN_URL);
    });

    test('User creates, searches and deletes a user', async ({ page }) => {
        await homePage.clickOnMaintenanceTab();
        await homePage.clickOnMaintenanceUsersTab();
        await homePage.clickOnAdministrativeModule();
        await expect(page).toHaveURL(AdministrativeModulePage.ADMINISTRATIVEMODULE_URL);

        // Crear usuario
        await administrativeModulePage.inputUserName('anonimo02');
        await administrativeModulePage.inputFirstname('Jesus');
        await administrativeModulePage.inputMiddlename('M.');
        await administrativeModulePage.inputLastname('Bautista');
        await administrativeModulePage.inputSecondLastname('D.');
        await administrativeModulePage.selectStatus('A:Activo');
        await administrativeModulePage.selectOperationalRole('Usuario');
        await administrativeModulePage.selectTransmitter('NOVOPAYMENT');
        await administrativeModulePage.inputCharge('Analista Senior QA');
        await administrativeModulePage.selectIdentificationType('CC');
        await administrativeModulePage.inputIdentificationNumber('2087654329');
        await administrativeModulePage.inputEmail('anonimo02@yopmail.com');
        await administrativeModulePage.inputPositionArea('QA');
        await administrativeModulePage.inputPhoneNumber('0987654321');
        await administrativeModulePage.inputConfirmationPassword('123');
        await administrativeModulePage.clickInsertButton();
        await administrativeModulePage.clickConfirmCreationButton();
        await administrativeModulePage.validateSuccessfulUserCreationMessage('tu transacci?n ha sido procesada exitosamente.');

        // Buscar usuario
        await administrativeModulePage.searchUser("anonimo02");
        await administrativeModulePage.clickOnSearchButton();

        await administrativeModulePage.validateTableRow([
            "ANONIMO02",
            "Jesus",
            "Bautista",
            "2087654329",
            "A",
            "U",
            "NOVOPAYMENT",
            "QA",
            "Analista Senior QA",
            "0987654321",
            "CC"
        ]);
    });
});