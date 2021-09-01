describe('UPLOAD-FILE', function() {
    it('TEST1-UPLOAD', function() {
    cy.visit('https://admin.pkh.dojobox.id')
    cy.get('#input-email').type('e@dojobox.id')
    cy.get('#input-password').type('admin')
    cy.get('#btn-login').click()
    cy.wait(1000)
    cy.get('.mr-2 > b').should('have.text','Super Admin')
    cy.get('#accordionSidebar > :nth-child(1) > .nav-link').click()
    cy.get('.mr-2 > b').should('have.text','Super Admin')
    cy.get('.d-flex > .btn').click()
    cy.get('input[type="file"]').attachFile('kucing.jpg')
    cy.get('#img-prev').should('be.visible')
    
    })
})  