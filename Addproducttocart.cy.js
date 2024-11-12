it('add product to cart',  () => {
    //visit website
    cy.visit('https://automationexercise.com/')
    
    // click on product to view details
    cy.get("a[href='/product_details/1']"). click()

    // Click the 'Add to Cart' button
    cy.get(':nth-child(5) > .btn').click()

    // Verify the success message or go to the cart to confirm the product is added
    cy.contains('Your product has been added to cart').should('be.visible')
    
    // Click on 'View Cart' to check the cart items
    cy.get('.modal-body > :nth-child(2)').contains('View Cart').click()

    // Assert that the product is in the cart
    cy.get("a[href='/product_details/1']").should('contain.text', 'Blue Top')





})