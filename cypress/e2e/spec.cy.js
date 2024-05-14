describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

/*

cy.visit(‘foobar.com’)
cy.reload()
cy.go(‘back’) or cy.go(-1) 
cy.go(‘forward’) or cy.go(1)
cy.title().should(‘eq’, ’Techglobal Training | Home’)
cy.url().should(‘eq’, ‘foobar.com’)
expect(true).to.equal(true)
cy.get(#logo)
.click()
.should('be.visible')

div > a (immediate child)
div a (any grandchild)
a + a (immediate adjacent sibling at same hierarchy)
p, span (groups multiple selectors)

:nth-child(1)
:not()
:checked
:disabled or :enabled
:empty
:required and :optional

cy.get('#user_email').eq(1)
cy.get('.locator')contains('element', 'content')
cy.get('parentElement').find('childElement')

cy.next() or cy.prev() (traverse immediate sibling)
cy.get('childElement').parent('parentElement') (parent must be chained)

.click()
.type()
.clear()
.check()
.uncheck()
.select() (select value in dropdown)
.trigger() (manually trigger DOM event)

//implicit assertion
.should('have.attr', 'placeholder', 'random placeholder')
.and('have.class', 'active')

//explicit assertion
cy.get('#element').invoke('text').then((text) => {
  expect(text).to.equal('Text to match')
})

cy.get('#element').invoke('attr', 'attribute-name').then((attributeValue) => {
  expect(attributeValue).to.equal('attribute-value')
})

cy.get('[for="email"]').then(($txt) => {
  const actualText = $txt.text()   
      //this is using jQuery's .text() method to extract text content of element
      //now it's an actual text value
      //and we can use JS methods on it
  console.log(actualText.trim())
  console.log(actualText.length)
})


cy.get('.list-items').each(($item, index) => {
  const itemText = $item.text()
  console.log(`${index}: ${itemText.trim()}`)
    //this creates a loop to extract .each() item using jQuery method
    //similar to .then()
})

cy.get('#element').then(($el) => {
  cy.wrap($el).should('be.visible').click()
    //^^wrapping DOM element to chain w/ cypress commands
})

cy.get('element').invoke('text').then((text) => {
    //here, .invoke() extracts text content from web element
    //now it's a plain JS string and not chainable
    //because it became a regular JS object
    //in order to perform cypress commands, wrap it
  cy.wrap(text).should('equal', 'Expected Text')
})

*/