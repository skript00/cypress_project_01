/// <reference types="cypress" />

describe("Homework01", () => {
  beforeEach(() => {
    cy.visit("https://www.techglobal-training.com/frontend/project-1");
  });

  it("Test Case 01 - Validate the Contact Us information", () => {
    cy.get(".is-size-3").should('have.text', 'Contact Us');
    cy.get("#address").should('have.text', '2800 S River Rd Suite 310, Des Plaines, IL 60018');
    cy.get("#email").should('have.text', 'info@techglobalschool.com');
    cy.get("#phone-number").should('have.text', '(224) 580-2150');
  });

  it("Test Case 02 - Validate the Full name input box", () => {
    cy.get('.field > label').eq(0).should("have.text", "Full name *")
    cy.get('.control > .input').eq(0).should('be.visible')
    .and('have.attr', 'required')
    cy.get('.control > .input').eq(0).should("have.attr",'placeholder', "Enter your full name") 
  });

  const buttons = ['Male', 'Female', 'Prefer not to disclose']

  it.only("Test Case 03 - Validate the Gender radio button", () => {
    cy.get('.control > .label').should('have.text', 'Gender *')
    cy.get('.mr-1').should('have.attr', 'required');
    cy.get('.radio').each(($el, index) => {
      cy.wrap($el).should('have.text', buttons[index])
      .children().should('be.enabled').and('not.be.checked')
    })
    cy.get(".radio input").eq(0).click();
    cy.get(".radio").each(($el, index) => {
      if ($el.text() === "Male") cy.wrap($el).children().should("be.checked");
      else cy.wrap($el).children().should("not.be.checked");
    });
  });

  it("Test Case 04 - Validate the Address input box", () => {
    
  });

  it("Test Case 05 - Validate the Email input box", () => {
    
  });

  it("Test Case 06 - Validate the Phone input box", () => {
    
  });

  it("Test Case 07 - Validate the Message text area", () => {
    
  });

  it("Test Case 08 - Validate the Consent checkbox", () => {
    
  });

  it("Test Case 09 - Validate the SUBMIT button", () => {
    
  });

  it("Test Case 10 - Validate the form submission", () => {
    
  });

});