import { test, expect } from '@playwright/test';
import { LoginPage } from "../../PageObjects/Login/LoginPage";
import { HomePage } from "../../PageObjects/Home/HomePage";
import { AdministrativeModulePage } from "../../PageObjects/AdministrativeModule/AdministrativeModulePage"

test.describe('Validate search user', () => {
    test.only('User enters correct credentials and logs in to his account', async ({ page }) => {
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

        await test.step('Enter in the user administrative module and create the user', async () => {
            const administrativeModulePage = new AdministrativeModulePage(page);
            const homePage = new HomePage(page)
            await homePage.clickOnMaintenanceTab();
            await homePage.clickOnMaintenanceUsersTab();
            await homePage.clickOnAdministrativeModule();
            await expect(page).toHaveURL(AdministrativeModulePage.ADMINISTRATIVEMODULE_URL);
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
            await administrativeModulePage.validateSuccessfulUserCreationMessage('tu transacci?n ha sido procesada exitosamente.')

        })

        await test.step('Validate search user and log out', async () => {
            const homePage = new HomePage(page);
            const administrativeModulePage = new AdministrativeModulePage(page);
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

            await administrativeModulePage.inputConfirmationPassword('123');
            await administrativeModulePage.clickOnDeleteUserButton();
            await administrativeModulePage.clickConfirmCreationButton();
            await administrativeModulePage.validateSuccessfulUserDeletionMessage('usuario: ANONIMO02 eliminado exitosamente.')
            await homePage.clickOnUsersTab();
            await homePage.clickOnLogoutButton();
            await expect(page).toHaveURL(LoginPage.LOGIN_URL);
        })
    });
});