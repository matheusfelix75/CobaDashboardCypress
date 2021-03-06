describe('TEST5', function() {
    it('TEST5--', function() {
    cy.visit('https://demoqa.com/automation-practice-form')
    cy.get('#firstName').type('FelixTheCAT')
    cy.get('#lastName').type('OREN')
    cy.get('#userEmail').type('KucingOren@gmail.com')
    cy.get('#genterWrapper > .col-md-9 > :nth-child(3)').click()
    cy.get('#userNumber').type('999666777')
    cy.get('#dateOfBirthInput' , {force : true})
    .click().type('{selectall}' , '{backspace}').type('15 May 1995').type('{enter}')
    //cy.get('#dateOfBirthInput').invoke('val','15 December 1995')
    cy.get('.subjects-auto-complete__value-container').type('MATHS{enter}')
    cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click()
    cy.get('#uploadPicture').attachFile('kucing.jpg').should('be.visible')
    cy.get('#currentAddress').type('Jl. Jend. Sudirman No.Kav. 21, RT.10/RW.1, Kuningan, Karet, Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12920')
    //cy.get('#stateCity-wrapper > :nth-child(3)').should('be.disabled')
    cy.get('#state > .css-yk16xz-control').type('NCR{enter}')
    cy.get('#stateCity-wrapper > :nth-child(3)').type('Delhi{enter}')
    cy.get('#submit').click()
    cy.wait(1000)

    cy.get('#example-modal-sizes-title-lg').should('exist')
    cy.get('tbody > :nth-child(1) > :nth-child(2)').should('have.text','FelixTheCAT OREN')
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('have.text','KucingOren@gmail.com')
    cy.get('tbody > :nth-child(3) > :nth-child(2)').should('have.text','Other')
    cy.get('tbody > :nth-child(4) > :nth-child(2)').should('have.text','999666777')
    cy.get('tbody > :nth-child(5) > :nth-child(2)').should('have.text','15 May,1995')
    cy.get('tbody > :nth-child(6) > :nth-child(2)').should('have.text','Maths')
    cy.get('tbody > :nth-child(7) > :nth-child(2)').should('have.text','Sports')
    cy.get('tbody > :nth-child(8) > :nth-child(2)').should('have.text','kucing.jpg')
    cy.get('tbody > :nth-child(9) > :nth-child(2)').should('have.text','Jl. Jend. Sudirman No.Kav. 21, RT.10/RW.1, Kuningan, Karet, Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12920')
    cy.get('tbody > :nth-child(10) > :nth-child(2)').should('have.text','NCR Delhi')
    cy.get('#closeLargeModal').click()
    })
})  