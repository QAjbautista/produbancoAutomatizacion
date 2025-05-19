import { type Locator, type Page, expect } from "@playwright/test";

export class AdministrativeModulePage {
    readonly page: Page;
    static ADMINISTRATIVEMODULE_URL = 'https://tomcat-t-ecuador-server.novopayment.net/admnovoWebProd/admusuario.do'
    readonly searchUsername: Locator;
    readonly searchFirstnameAndLastname: Locator;
    readonly emitter: Locator;
    readonly searchButton: Locator;
    readonly cleanSearchButton: Locator;
    readonly username: Locator;
    readonly firstname: Locator;
    readonly middlename: Locator;
    readonly lastname: Locator;
    readonly secondLastname: Locator;
    readonly status: Locator;
    readonly operationalRole: Locator;
    readonly transmitter: Locator;
    readonly charge: Locator;
    readonly identificationType: Locator;
    readonly identificationNumber: Locator;
    readonly email: Locator;
    readonly phoneNumber: Locator;
    readonly positionArea: Locator;
    readonly confirmationPassword: Locator;
    readonly insertButton: Locator;
    readonly confirmCreationButton: Locator;
    readonly updateButton: Locator;
    readonly cleanCreationButton: Locator;
    readonly editUserButton: Locator;
    readonly deleteUserButton: Locator;
    readonly resetPasswordUserButton: Locator;
    readonly successfulUserCreationMessage: Locator;
    readonly sucessfulUserDeletionMessage: Locator;



    constructor(page: Page) {
        this.page = page;
        this.searchUsername = page.locator('#id_Usuario')
        this.searchFirstnameAndLastname = page.locator('input[name="nombreUser"]')
        this.emitter = page.locator('select[name="ubicacion"]')
        this.searchButton = page.getByRole('button', { name: 'Buscar' })
        this.cleanSearchButton = page.getByRole('button', { name: 'Limpiar' }).first()
        this.username = page.getByRole('textbox', { name: 'Codigo de Usuario' })
        this.firstname = page.locator('input[name="nombre1"]')
        this.middlename = page.locator('input[name="nombre2"]')
        this.lastname = page.locator('input[name="apellido1"]')
        this.secondLastname = page.locator('input[name="apellido2"]')
        this.status = page.locator('select[name="eestatus"]')
        this.operationalRole = page.locator('select[name="etipo"]')
        this.transmitter = page.locator('select[name="eubicacion"]')
        this.charge = page.locator('input[name="cargo"]')
        this.identificationType = page.locator('select[name="tipo_identificacion"]')
        this.identificationNumber = page.getByRole('textbox', { name: 'Número de identificación' })
        this.email = page.getByRole('textbox', { name: 'Direccion de Correo' })
        this.phoneNumber = page.locator('input[name="telefono"]')
        this.positionArea = page.getByRole('textbox', { name: 'Area' })
        this.confirmationPassword = page.getByRole('textbox', { name: 'Clave de confirmacion' })
        this.insertButton = page.getByRole('button', { name: 'Insertar' })
        this.confirmCreationButton = page.getByRole('button', { name: 'SI' })
        this.updateButton = page.getByRole('button', { name: 'Actualizar' })
        this.cleanCreationButton = page.getByRole('button', { name: 'Limpiar' }).nth(1)
        this.editUserButton = page.locator("input[type = 'button'][value = 'M']")
        this.deleteUserButton = page.locator("input[type = 'button'][value = 'E']")
        this.resetPasswordUserButton = page.locator("input[type = 'button'][value = 'R']")
        this.successfulUserCreationMessage = page.getByText('tu transacci?n ha sido') //tu transacci?n ha sido procesada exitosamente.
        this.sucessfulUserDeletionMessage = page.getByText('usuario: ANONIMO02 eliminado exitosamente.')
    }

    async searchUser(username: string) {
        await this.searchUsername.fill(username)
    }

    async clickOnSearchButton() {
        await this.searchButton.click()
    }

    async inputUserName(username: string) {
        await this.username.fill(username);
    }

    async inputFirstname(name: string) {
        await this.firstname.fill(name);
    }

    async inputMiddlename(middleName: string) {
        await this.middlename.fill(middleName);
    }

    async inputLastname(lastName: string) {
        await this.lastname.fill(lastName);
    }

    async inputSecondLastname(secondLastName: string) {
        await this.secondLastname.fill(secondLastName);
    }

    async selectStatus(status: string) {
        await this.status.selectOption(status);
    }

    async selectOperationalRole(role: string) {
        await this.operationalRole.selectOption(role);
    }

    async selectTransmitter(transmitter: string) {
        await this.transmitter.selectOption(transmitter);
    }

    async inputCharge(charge: string) {
        await this.charge.fill(charge);
    }

    async selectIdentificationType(type: string) {
        await this.identificationType.selectOption(type);
    }

    async inputIdentificationNumber(identificationNumber: string) {
        await this.identificationNumber.fill(identificationNumber);
    }

    async inputEmail(email: string) {
        await this.email.fill(email);
    }

    async inputPositionArea(positionArea: string) {
        await this.positionArea.fill(positionArea);
    }

    async inputPhoneNumber(phoneNumber: string) {
        await this.phoneNumber.fill(phoneNumber);
    }

    async inputConfirmationPassword(confirmationPassword: string) {
        await this.confirmationPassword.fill(confirmationPassword);
    }

    async clickInsertButton() {
        await this.insertButton.click();
    }

    async clickConfirmCreationButton() {
        await this.confirmCreationButton.click();
    }

    async validateSuccessfulUserCreationMessage(message: string) {
        await expect(this.successfulUserCreationMessage).toHaveText(message);
    }

    async clickOnDeleteUserButton() {
        await this.deleteUserButton.click();
    }

    async validateSuccessfulUserDeletionMessage(message: string) {
        await expect(this.sucessfulUserDeletionMessage).toHaveText(message);
    }














}



