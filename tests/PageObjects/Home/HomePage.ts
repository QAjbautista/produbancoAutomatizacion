import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage {
    //Nombre de los locators

    readonly page: Page;
    readonly usersTab: Locator;
    readonly logOut: Locator;
    readonly changePassword: Locator;

    constructor(page: Page) {
        //Webelements de la pagina
        this.page = page;
        this.usersTab = page.getByRole('link', { name: 'Usuarios' }).nth(2)
        this.logOut = page.getByRole('link', { name: 'Salir del Módulo' })
        this.changePassword = page.getByRole('link', { name: 'Cambio de Clave' });

    }

    //funciones de los elementos
    async clickOnUsersTab() {
        await this.usersTab.click();
    }

    async clickOnLogoutButton() {
        await this.logOut.click();
    }

    async clickOnChangePassword() {
        await this.changePassword.click();
    }
}

