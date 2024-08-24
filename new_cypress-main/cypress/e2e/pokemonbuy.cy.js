describe('Покупка нового аватара ', function () {

    it('Покупку нового аватара для своего тренера', function () {
        cy.visit('https://pokemonbattle.ru/');
        cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');
        cy.get('#password').type('USER_PASSWORD');
        cy.get('.auth__button').click ();
        cy.wait(3000);        
        cy.get('.header__container > .header__id').click({ force: true });
        cy.get('[href="/shop"]').click ();
        cy.wait(3000); 
        cy.get('.available > button').first().click({ force: true });        
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Name');
        cy.get('.pay-btn').click ();
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.contains('Покупка прошла успешно').should('be.visible');
    })
 })