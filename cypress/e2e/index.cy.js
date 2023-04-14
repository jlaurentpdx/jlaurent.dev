describe('Home Page', () => {
  it('title and heading are correct', () => {
    const page = cy.visit('/')

    page.get('title').should('have.text', 'Jordan Laurent | Home')
    page.get('h1').should('have.text', "Howdy. I'm Jordan")
  })
})
