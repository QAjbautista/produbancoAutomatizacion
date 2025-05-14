import { Page, Locator } from '@playwright/test';

export class UsersAdministrativeModulePage {
    readonly page: Page;
    readonly userTable: Locator;
    readonly addUserButton: Locator;
    readonly searchInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userTable = page.locator('table#users'); // Ajusta el selector según tu HTML
        this.addUserButton = page.locator('button#addUser');
        this.searchInput = page.locator('input#searchUser');
    }

    async navigate() {
        await this.page.goto('/admin/users');
    }

    async clickAddUser() {
        await this.addUserButton.click();
    }

    async searchUser(username: string) {
        await this.searchInput.fill(username);
        await this.searchInput.press('Enter');
    }

    async getUserRow(username: string) {
        return this.userTable.locator(`tr:has(td:text("${username}"))`);
    }
}