import practiceFormPage from "./objectPractice.js"

describe('Practice test', () => {
  beforeEach(() => {
    cy.visit('https://www.techlistic.com/p/selenium-practice-form.html');
  });

  it('Should fill out form as a male who is an automation QA engineer', () => {
    practiceFormPage.clickLoginFields()
    practiceFormPage.selectMaleGender()
    practiceFormPage.selectYearsOfExperience(2)
    practiceFormPage.selectDate('1/1/1111')
    practiceFormPage.selectProfession('Automation Tester')
    practiceFormPage.selectAutomationTool('Selenium Webdriver')
    practiceFormPage.selectContinent('Europe')
    practiceFormPage.selectSeleniumCommands('Browser Commands')
    practiceFormPage.uploadFile('image.jpg', 'image/jpg');
  })

  it('Fill out form as a female who is a manual QA engineer', () => {
    practiceFormPage.clickLoginFields()
    practiceFormPage.selectFemaleGender()
    practiceFormPage.selectYearsOfExperience(3)
    practiceFormPage.selectDate('12/12/1212')
    practiceFormPage.selectProfession('Manual Tester')
    practiceFormPage.selectAutomationTool('Selenium Webdriver')
    practiceFormPage.selectContinent('North America')
    practiceFormPage.selectSeleniumCommands('WebElement Commands')
    practiceFormPage.uploadFile('mbappe.gif', 'image/gif');
  })

})
