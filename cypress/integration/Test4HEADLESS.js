describe('KUMPULAN-1', function() {
    it('TEST1-BELI', function() {
    cy.visit('https://www.demoblaze.com/index.html')
//LOGIN
    cy.get('#login2').click()
    cy.wait(1000)
    cy.get('#loginusername').type('FELIXTHECAT20')
    cy.get('#loginpassword').type('test123')
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.get('#nameofuser',{force:true}).should('have.text','Welcome FELIXTHECAT20')
    
//ADD CART
    cy.get(':nth-child(7) > .card > .card-block > .card-title > .hrefch').should('have.text','HTC One M9')
    .click()
    cy.get('.name').should('have.text','HTC One M9')
    cy.get('.col-sm-12 > .btn').click()
    cy.get('.active > .nav-link').click()
    cy.get('#nameofuser').should('have.text','Welcome FELIXTHECAT20')

    cy.wait(1000)
    cy.get('#next2',{force:true}).click()
    cy.get(':nth-child(3) > .card > .card-block > .card-title > .hrefch').should('have.text','Dell i7 8gb').click()
    cy.get('.name').should('have.text','Dell i7 8gb')
    cy.get('.col-sm-12 > .btn').click()
    cy.get('.active > .nav-link').click()
    cy.get('#nameofuser').should('have.text','Welcome FELIXTHECAT20')
    cy.wait(1000)
    cy.get('#next2').click()
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').should('have.text','Apple monitor 24').click()
    cy.get('.name').should('have.text','Apple monitor 24')
    cy.get('.col-sm-12 > .btn').click()

//BAYAR
    cy.get('#cartur').click()
    cy.get('#nameofuser').should('have.text','Welcome FELIXTHECAT20')
    cy.get('#totalp').should('have.text','1800')
    cy.get('.col-lg-1 > .btn').click()
    cy.get('#name',{force:true}).type('FELIXTHECAT')
    cy.get('#country').type('INDIA')
    cy.get('#city').type('MUMBAI')
    cy.get('#card').type('123456')
    cy.get('#month').type('JUNE')
    cy.get('#year').type('2012')
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.wait(2000)
    cy.get('.sweet-alert > h2').should('have.text','Thank you for your purchase!')
    cy.get('.lead').should('be.visible')
    cy.get('.confirm').click()
    cy.wait(2000)
    cy.get('#nameofuser').should('have.text','Welcome FELIXTHECAT20')
    })
})


//command RUN PS D:\DOJOBOX\SPRINT 9.1 Cypress Terminal\Practice CYPRESS TERMINAL> npx cypress run --spec "cypress/integration/Test4HEADLESS.js"