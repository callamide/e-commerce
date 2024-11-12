it('search', () => {

    //visit the website
    cy.visit('https://automationexercise.com/')

    // locate and click on the search button
    cy.get("a[href='/products']"). click()

    // let's search for the product Jeans 
    cy.get('#search_product').type('Jeans')
    cy.get('#submit_search').click()

    // Assert that the search results contain 'Jeans'
    // cy.contains('Jeans').should('be.visible')

    // let's search for any kids wear using the keyword KIDS
    cy.get('#search_product').clear().type('Kids')
    cy.get('#submit_search').click()

    // Assert that the search results contain 'Kids'
    cy.contains('Kids').should('be.visible')

    //now let's expole the women clothing catergory
    cy.get(':nth-child(1) > .panel-heading > .panel-title > a > .badge > .fa'). click()

    // Click on 'Tops' under women's clothing (corrected selector)
    cy.contains('Tops').click()
    
    // Assert that the 'Tops' category is displayed
    cy.get('.title').should('contain.text', 'Women - Tops Products')   

})



