describe('User can search for trail', () => {
  it('successfully', () => {
    cy.route({
      method: 'GET',
      url: 'https://c-wander-api.herokuapp.com/v1/trails/?search=Bollmora',
      response: 'fixture:successful_search.json',
      status: 200
    })
    cy.get('#navbar')
    .within(() => {
      cy.get('#nav-search')
        .within(() => {
          cy.get('#search-input').type('Bollmora')
          cy.get('#search-submit').click()
        })
    })
    cy.get('#search-results').should('contain', 'Found adventures')
    cy.get('#trail-list')
    .within(() => {
      cy.get('#trail_1')
        .within(() => {
          cy.get('#title_1').should('contain', 'Bollmora speed trail')
          cy.get('#description_1').should('contain', 'A fast trail ')
          cy.get('#city_1').should('contain', 'Bollmora')
          cy.get('#country_1').should('contain', 'Sweden')
          cy.get('#continent_1').should('contain', 'Europe')
          cy.get('#intensity_1').should('contain', '5')
        })
        cy.get('#trail_5')
        .within(() => {
          cy.get('#title_5').should('contain', 'Tyresö Flaten to Gammelström')
          cy.get('#description_5').should('contain', 'A short')
          cy.get('#city_5').should('contain', 'Bollmora')
          cy.get('#country_5').should('contain', 'Sweden')
          cy.get('#continent_5').should('contain', 'Europe')
          cy.get('#intensity_5').should('contain', '2')
        })
    })
  })

  it('unsuccessfull', () => {
    cy.get('#navbar')
    .within(() => {
      cy.get('#nav-search')
        .within(() => {
          cy.get('#search-input').type('Bo')
          cy.get('#search-submit').click()
        })
      cy.get('#search-error').should('contain', 'Please input more than 2 characters.')    
    })
  })
})