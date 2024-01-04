import objectPage from "./samplePageModel.js"

context('Assertions', () => {
  beforeEach(() => {
    cy.visit('https://demo.applitools.com/')
  })

  it('Login to website', () => {
    objectPage.clickLoginFields()
    objectPage.assertHeader()
  })

  it('Login to website', () => {
    objectPage.clickLoginFields()
})


// describe('empty spec', () => {
//   it('passes', () => {
//     cy.visit('https://demo.applitools.com/')

//     objectPage.clickLoginFields()
//   })
})
