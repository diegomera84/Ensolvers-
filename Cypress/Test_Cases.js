describe('Scenario: authentication', () => {
    it('Scenario: authentication', function () {
       
        cy.visit('https://qa-challenge.ensolvers.com')
    
        cy.get('#username').type('user')
    
        
        cy.get('#password').type(`user{enter}`)
    })
    it('Scenario: open Folder Manager', function () {
       
        cy.visit('https://qa-challenge.ensolvers.com')
    
        cy.get('#username').type('user')
    
        
        cy.get('#password').type(`user{enter}`)
    
        cy.get('.col-md-6:nth-child(2) > .mr-2').click()
    })
    it('Scenario: new Folder', function () {
       
        cy.visit('https://qa-challenge.ensolvers.com')
    
        cy.get('.col-md-6:nth-child(2) > .mr-2').click()    
        
        cy.get('#jh-create-entity').click()
    })
    it('Scenario: edit Folder', function () {
       
        cy.visit('https://qa-challenge.ensolvers.com')
    
        cy.get('.col-md-6:nth-child(2) > .mr-2').click()    
        
        cy.get('tr:nth-child(1) .btn-primary > .svg-inline--fa').click()
    })
    it('Scenario: open To-Do Items Manager', function () {
       
        cy.visit('https://qa-challenge.ensolvers.com')
    
        cy.get('.col-md-6:nth-child(1) > .mr-2').click()
    })
    it('Scenario: new To-Do Item', function () {
       
        cy.visit('https://qa-challenge.ensolvers.com')
    
        cy.get('.col-md-6:nth-child(1) > .mr-2').click()    
        
        cy.get('#jh-create-entity').click()
    })
    it('Scenario: edit To-Do Item', function () {
       
        cy.visit('https://qa-challenge.ensolvers.com')
    
        cy.get('.col-md-6:nth-child(1) > .mr-2').click()    
        
        cy.get('tr:nth-child(1) .btn-primary > .svg-inline--fa').click()
    })
})
