import test, { type Locator, type Page, expect } from "@playwright/test";

export class OnlineCompaniesPage {
    readonly page: Page;
    static create(page: Page) {
        return new OnlineCompaniesPage(page);
    }

    static ONLINECOMPANIES_URL = 'https://tomcat-t-ecuador-server.novopayment.net/admnovoWebProd/usuarioEmpresa.do';

    readonly username: Locator;
    readonly phoneNumber: Locator;
    readonly identificationType: Locator;
    readonly identificationNumber: Locator;
    readonly firstName: Locator;
    readonly middlename: Locator;
    readonly lastname: Locator;
    readonly secondLastname: Locator;
    readonly charge: Locator;
    readonly positionArea: Locator;
    readonly email: Locator;
    readonly status: Locator;
    readonly signatureGroup: Locator;
    readonly signatureOrder: Locator;
    readonly confirmationPassword: Locator;

    readonly insertButton: Locator;
    readonly updateButton: Locator;
    readonly cleanButton: Locator;

    readonly searchName: Locator;
    readonly searchLastName: Locator;
    readonly searchIdentificationNumber: Locator;
    readonly searchUsername: Locator;
    readonly selectCompanies: Locator;

    readonly searchButton: Locator;
    readonly cleanSearchButton: Locator;

    readonly selectProfile: Locator;
    readonly selectModule: Locator;
    readonly selectFunction: Locator;
    readonly createProfileButton: Locator;
    readonly deleteProfileButton: Locator;
    readonly editUserButton: Locator;
    readonly addCompanyButton: Locator;

    readonly confirmCreationButton: Locator;
    readonly confirmCreationMessage: Locator;

    constructor(page: Page) {
        //Formulario de creacion de usuario
        //Campos
        this.page = page;
        this.username = page.getByRole('textbox', { name: 'Usuario' });
        this.phoneNumber = page.getByRole('textbox', { name: 'Número telefónico' });
        this.identificationType = page.locator('#tipo_identificacion'); //Seleccione CC PP
        this.identificationNumber = page.getByRole('textbox', { name: 'NÚMERO IDENTIFICACIÓN' });
        this.firstName = page.getByRole('textbox', { name: 'Primer nombre' });
        this.middlename = page.getByRole('textbox', { name: 'Segundo nombre' });
        this.lastname = page.getByRole('textbox', { name: 'Primer apellido' });
        this.secondLastname = page.getByRole('textbox', { name: 'Segundo apellido' });
        this.charge = page.getByRole('textbox', { name: 'Cargo' });
        this.positionArea = page.getByRole('textbox', { name: 'Área' });
        this.email = page.getByRole('textbox', { name: 'Correo electrónico' });
        this.status = page.locator('select[name="ecsstatus"]'); //Seleccione ACTIVO SUSPENDIDO
        this.signatureGroup = page.locator('select[name="eaccodgrupo"]'); //Seleccione GRUPO 1 FIRMA GRUPO 2 FIRMAS
        this.signatureOrder = page.locator('#orden'); //DEFAULT PRIMERA SEGUNDA
        this.confirmationPassword = page.locator('#pass');

        //Botones
        this.insertButton = page.getByRole('button', { name: 'Insertar' });
        this.updateButton = page.getByRole('button', { name: 'Actualizar' });
        this.cleanButton = page.getByRole('button', { name: 'Limpiar' }).first();

        //Formulario de busqueda de usuario
        //Campos
        this.searchName = page.locator('input[name="acnom1usuario"]');
        this.searchLastName = page.locator('input[name="acape1usuario"]');
        this.searchIdentificationNumber = page.locator('input[name="acidusuario"]');
        this.searchUsername = page.getByRole('row', { name: 'Identificación: Usuario:', exact: true }).locator('input[name="accodusuario"]');
        this.selectCompanies = page.locator('#B_rif');

        //Botones
        this.searchButton = page.getByRole('button', { name: 'Buscar' });
        this.cleanSearchButton = page.getByRole('button', { name: 'Limpiar' }).nth(1);

        //Tabla de resultados
        this.selectProfile = page.locator('#cod_perfil'); //selecciona perfil
        this.selectModule = page.locator('#cod_modulo'); //selecciona modulo
        this.selectFunction = page.locator('#funciones'); //selecciona funciones
        this.createProfileButton = page.locator("input[value='Crear Perfil']"); //Boton crear perfil
        this.deleteProfileButton = page.locator("input[onclick='eliminar(this.form,this)'][type=button][value='E']"); //Boton eliminar perfil
        this.editUserButton = page.locator("input[type=button][value='M']"); //Boton registro usuario
        this.addCompanyButton = page.locator("input[type=button][value='A']"); //Boton agregar empresa

        this.confirmCreationButton = page.getByRole('button', { name: 'SI' });
        this.confirmCreationMessage = page.getByText('tu transaccion ha sido');
    }

    async inputUsername(username: string) {
        await this.username.fill(username);
    }

    async inputPhoneNumber(phone: string) {
        await this.phoneNumber.fill(phone);
    }

    async selectIdentificationType(option: string) {
        await this.identificationType.selectOption(option);
    }

    async inputIdentificationNumber(identification: string) {
        await this.identificationNumber.fill(identification);
    }

    async inputFirstName(firstName: string) {
        await this.firstName.fill(firstName);
    }

    async inputMiddlename(middlename: string) {
        await this.middlename.fill(middlename);
    }

    async inputLastname(lastname: string) {
        await this.lastname.fill(lastname);
    }

    async inputSecondLastname(secondLastname: string) {
        await this.secondLastname.fill(secondLastname);
    }

    async inputCharge(charge: string) {
        await this.charge.fill(charge);
    }

    async inputPositionArea(positionArea: string) {
        await this.positionArea.fill(positionArea);
    }

    async inputEmail(email: string) {
        await this.email.fill(email);
    }

    async selectStatus(option: string) {
        await this.status.selectOption(option);
    }

    async selectSignatureGroup(option: string) {
        await this.signatureGroup.selectOption(option);
    }

    async selectSignatureOrder(option: string) {
        await this.signatureOrder.selectOption(option);
    }

    async inputConfirmationPassword(confirmationPassword: string) {
        await this.confirmationPassword.fill(confirmationPassword);
    }

    async clickInsertButton() {
        await this.insertButton.click();
    }

    async clickUpdateButton() {
        await this.updateButton.click();
    }

    async clickCleanButton() {
        await this.cleanButton.click();
    }

    async inputSearchName(name: string) {
        await this.searchName.fill(name);
    }

    async inputSearchLastName(lastName: string) {
        await this.searchLastName.fill(lastName);
    }

    async inputSearchIdentificationNumber(identificationNumber: string) {
        await this.searchIdentificationNumber.fill(identificationNumber);
    }

    async inputSearchUsername(username: string) {
        await this.searchUsername.fill(username);
    }

    async selectCompanie(option: string) {
        await this.selectCompanies.selectOption(option);
    }

    async clickSearchButton() {
        await this.searchButton.click();
    }

    async clickCleanSearchButton() {
        await this.cleanSearchButton.click();
    }

    async selectProfileOption(option: string) {
        await this.selectProfile.selectOption(option);
    }

    async selectModuleOption(option: string) {
        await this.selectModule.selectOption(option);
    }
    async selectFunctionOption(option: string) {
        await this.selectFunction.selectOption(option);
    }

    async clickCreateProfileButton() {
        await this.createProfileButton.click();
    }

    async clickDeleteProfileButton() {
        await this.deleteProfileButton.click();
    }

    async clickEditUserButton() {
        await this.editUserButton.click();
    }

    async clickAddCompanyButton() {
        await this.addCompanyButton.click();
    }

    async clickConfirmCreationButton() {
        await this.confirmCreationButton.click();
    }

    async validateConfirmCreationMessage(message: string) {
        await expect(this.confirmCreationMessage).toHaveText(message);
    }

    async validateTableRow(user: string, fullName: string, email: string, status: string) {
        await expect(this.page.getByRole('cell', { name: user, exact: true })).toBeVisible();
        await expect(this.page.getByRole('cell', { name: fullName, exact: true })).toBeVisible();
        await expect(this.page.getByRole('cell', { name: email, exact: true })).toBeVisible();
        await expect(this.page.getByRole('cell', { name: status, exact: true })).toBeVisible();
    }
}

