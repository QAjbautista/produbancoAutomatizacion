import test, { type Locator, type Page, expect } from "@playwright/test";

export class OnlineCompaniesPage {

    readonly page: Page;
    static create(page: Page) {
        return new OnlineCompaniesPage(page);
    }

    constructor(page: Page) {

        //Formulario de creacion de usuario
        //Campos
        this.page = page;
        this.aaaa = page.getByRole('textbox', { name: 'Usuario' })
        this.bbbb = page.getByRole('textbox', { name: 'Número telefónico' })
        this.ccc = page.locator('#tipo_identificacion') //Seleccione CC PP
        this.aaa = page.getByRole('textbox', { name: 'NÚMEROIDENTIFICACIÓN' })
        this.ddd = page.getByRole('textbox', { name: 'Primer nombre' })
        this.ddd = page.getByRole('textbox', { name: 'Segundo nombre' })
        this.sd = page.getByRole('textbox', { name: 'Primer apellido' })
        this.dd = page.getByRole('textbox', { name: 'Segundo apellido' })
        this.asdf = page.getByRole('textbox', { name: 'Cargo' })
        this.dfd = page.getByRole('textbox', { name: 'Área' })
        this.sdf = page.getByRole('textbox', { name: 'Correo electrónico' })
        this.sdfdf = page.locator('select[name="ecsstatus"]') //Seleccione ACTIVO SUSPENDIDO
        this.asdf = page.locator('select[name="eaccodgrupo"]') //Seleccione GRUPO 1 FIRMA GRUPO 2 FIRMAS
        this.asdf = page.locator('#orden') //DEFAULT PRIMERA SEGUNDA
        this.asdf = page.locator('#pass')

        //Botones
        this.sadf = page.getByRole('button', { name: 'Insertar' })
        this.asf = page.getByRole('button', { name: 'Actualizar' })
        this.asdf = page.getByRole('button', { name: 'Limpiar' }).first()

        //Formulario de busqueda de usuario
        //Campos
        this.asf = page.locator('input[name="acnom1usuario"]')
        this.asf = page.locator('input[name="acape1usuario"]')
        this.asd = page.locator('input[name="acidusuario"]')
        this.asd = page.getByRole('row', { name: 'Identificación: Usuario:', exact: true }).locator('input[name="accodusuario"]')
        this.sdf = page.locator('#B_rif')

        //Botones
        this.sdf = page.getByRole('button', { name: 'Buscar' })
        this.sdf = page.getByRole('button', { name: 'Limpiar' }).nth(1)

        //Tabla de resultados





    }



}

