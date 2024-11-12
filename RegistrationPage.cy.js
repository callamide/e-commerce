describe('Test Registration Page', () => {
    it('Registration', () => {

      // vist the website 
      cy.visit('https://automationexercise.com/')

      //click on the signp / login button
      cy.get ("a[href='/login']").click()

      // Enter email and password for registered user
      cy.get("input[data-qa='login-email']").type('callamide@gmail.com')
      cy.get("input[placeholder='Password']").type('Olayinka1')
      cy.get("button[data-qa='login-button']"). click()

      // Assert that the user is logged in successfully
      cy.contains('Logged in as callamide').should('be.visible')

      // Log out after login check
      cy.get("a[href='/logout']").click()
      });

      // register new user
      it('New User Registration', () => {
        // Visit the website
        cy.visit('https://automationexercise.com/')

       // Click on the signup/login button
       cy.get("a[href='/login']").click()

       // Enter new user details
       cy.get("input[placeholder='Name']").type('John.doe')
       cy.get("input[data-qa='signup-email']").type('newuseremail@gmail.com')
       cy.get("button[data-qa='signup-button']").click()

       // Assert that the registration form is displayed
       cy.contains('John.doe').should('be.visible')

       // Fill in account details (add additional fields as required)
       cy.get("input[id='id_gender1']").check()
       cy.get("input[placeholder='Password']").type('Olayinka1')
       cy.get("select[data-qa='days']").select('10')
       cy.get("select[data-qa='months']").select('May')
       cy.get("select[data-qa='years']").select('1990')
       cy.get("button[data-qa='create-account']").click()

       // Assert that the account was created successfully
       cy.contains('Account Created!').should('be.visible')

       // Click continue to proceed to the homepage
       cy.get("a[data-qa='continue-button']").click()

       // Assert user is logged in after registration
       cy.contains('Logged in as callamide').should('be.visible')
   })
})
   
   
    