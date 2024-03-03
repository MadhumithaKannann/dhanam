import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

const url="https://www.webdriveruniversity.com/";

Given (`i validate the webdriveruniversity homepage`, ()=>{
  cy.visit(url);
})

When(`I click on the contact us button`, ()=>{
   cy.get("#contact-us").invoke("removeAttr","target").click();
  })

  When(`I type a first name`,()=>{
    cy.get('[name="first_name"]').type('madhu');
  });

  When(`I type a last name`,()=>{
    cy.get('[name="last_name"]').type('k');
  });

  When(`I type an mail address`,()=>{
    cy.get('[name="email"]').type('madhumitha@gmail.com');
  });


    When(`I type a comment`,()=>{
        cy.get('textarea.feedback-input').type('hey hi');
  });

When(`I click on the submit button`,()=>{
    cy.get('[type="submit"]').click();
  });

  Then(`U should be submitted with a successful contact us submission form`,()=>{
    cy.get('h1').should('have.text','Thank You for your Message!')
  });

  Then(`U should be submitted with a unsuccessful contact us submission form`, ()=>{
    cy.get('body').should("contain", 'Error: Invalid email address')
  })

  When(`I type a specific first name {string}`,(firstname:string)=>{
     cy.log(firstname);
     cy.get('[name="first_name"]').type(firstname);
  })

  When(`I type a specific last name {string}`,(lastname:string)=>{
    cy.log(lastname);
    cy.get('[name="last_name"]').type(lastname);
  })

  When(`I type a specific email address {string}`,(emailaddress:string)=>{
    cy.log(emailaddress)
    cy.get('[name="email"]').type(emailaddress);
  })

  When(`I type a specific word {string} and number {int} within the comment input field`,(comment:string, value:number)=>{
    cy.log(comment);
    cy.log(`${value}`);
    cy.get('textarea.feedback-input').type(`${comment} and the number is ${value}`);
  })


When(`I type a {string} and a last name {string}`,(firstName:string, lastName:string)=>{
cy.log(`${firstName} ${lastName}`)
cy.get('[name="first_name"]').type(firstName);
cy.get('[name="last_name"]').type(lastName);
})

When(`I type a email {string} and a comment {string}`,(emailAddress:string, comment:string)=>{
    cy.get('[name="email"]').type(emailAddress);
    cy.get('textarea.feedback-input').type(`${comment}`);
})

Then(`I should be presented with header test {string}`,(message:string)=>{
    cy.get('h1').should('have.text',message)
})

