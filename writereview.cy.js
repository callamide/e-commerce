it('add product to cart',  () => {
    //visit website
    cy.visit('https://automationexercise.com/')
    
    // click on product to view details
    cy.get("a[href='/product_details/1']"). click()


    // write a review about the product been purchase
    cy.get('#name').type('John Kay')
    cy.get('#email').type('Johnkay@gmail.com')
    cy.get("#review").type('Product well recevied, 100% matched the description')
    cy.get('#button-review').click()

})