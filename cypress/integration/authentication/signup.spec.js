describe('Sign up', () => {

    it('Should show error mensage in name if its empty', () => {
        cy.visit('/signup');

        cy.get('[placeholder="Nome completo"]').type('Fulano de tal');

        cy.get('[placeholder="Nome completo"]').clear();

        cy.contains('Campo obrigatório');
    })

    it('Should show error mensage in email if its not from UFPE', () => {
        cy.visit('/signup');

        cy.get('[placeholder="E-mail"]').type('fulanodetal@gmail.com');

        cy.contains('É necessário ter uma conta UFPE');
    })

    it('Should show error mensage in number if the length is smaller than 11', () => {
        cy.visit('/signup');

        cy.get('[placeholder="Telefone"]').type('0000000000');

        cy.contains('Número de celular inválido');
    })

    it('Should show error mensage in password if the length is smaller than 6', () => {
        cy.visit('/signup');

        cy.get('[placeholder="Senha"]').type('12345');

        cy.contains('É necessário ter, no mínimo, 6 dígitos');
    })

    it('Should possible see password when click in the eye icon', () => {
        const password = '123456';

        cy.visit('/signup');

        cy.get('[placeholder="Senha"]').type(password);

        cy.get('[alt="See password"]').click();

        cy.get('[placeholder="Senha"]').should('have.attr', 'type', 'text');
    })

    it('Should button be not disabled if all data is valid', () => {
        cy.visit('/signup');

        cy.get('[placeholder="Nome completo"]').type('Fulano de tal');
        cy.get('[placeholder="E-mail"]').type('fulano@ufpe.br');
        cy.get('[placeholder="Telefone"]').type('00000000000');
        cy.get('[placeholder="Senha"]').type('123456');

        cy.get('[type="submit"]').should('have.prop', 'disabled', false);
    })

});