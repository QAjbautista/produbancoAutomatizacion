import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage {
    //Nombre de los locators

    readonly page: Page;
    readonly usersTab: Locator;
    readonly logoutTab: Locator;
    readonly changePasswordTab: Locator;
    readonly administrativeModuleTab: Locator

    constructor(page: Page) {
        //Webelements de la pagina
        this.page = page;
        this.usersTab = page.getByRole('link', { name: 'Usuarios' }).nth(2)
        this.logoutTab = page.getByRole('link', { name: 'Salir del Módulo' })
        this.changePasswordTab = page.getByRole('link', { name: 'Cambio de Clave' });
        this.administrativeModuleTab = page.getByRole('link', { name: 'Módulos Administrativos»' })
    }

    //funciones de los elementos
    async clickOnUsersTab() {
        await this.usersTab.click();
    }

    async clickOnLogoutButton() {
        await this.logoutTab.click();
    }

    async clickOnChangePassword() {
        await this.changePasswordTab.click();
    }
}

