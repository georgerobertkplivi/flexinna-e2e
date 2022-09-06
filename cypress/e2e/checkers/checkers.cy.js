/// <reference types="cypress" />


describe('example to-do app', () => {
    beforeEach(() => {
      // This opens the website before Each it runs each test
      cy.visit('https://www.gamesforthebrain.com/game/checkers/')
    })
  
    it('move checkers', () => {
        cy.log('Checking for Page Title')
        cy.get("div[class='page'] h1").should('have.text', 'Checkers')

        // Verifying that there are 12 yellow checkers for Player 1
        cy.get("img[src*='you1.gif']").should('have.length', 12)

        //Playing 2moves against computer
        cy.get("img[name='space22']").click()
        cy.get("img[name='space13']").click()
        cy.wait(3000)
        cy.get("img[name='space42']").click()
        cy.get("img[name='space33']").click()
        cy.wait(3000)

        //Verifying that there 11 yellow checkers left for Player 1 after computer wins a checker
        cy.get("img[src*='you1.gif']").should('have.length', 11)

        // Click Restart Button
        cy.get("a[href='./']").click()


    })
  
  })
  