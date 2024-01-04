import 'cypress-file-upload'

class practiceFormPage {
    elements = {
      firstname: () => cy.get('input[name="firstname"]'),
      lastname: () => cy.get('input[name="lastname"]'),
      maleSelection: () => cy.get('#sex-0'),
      femaleSelection: () => cy.get('#sex-1'),
      yearsOfExperience: (option) => cy.get(`#exp-${option}`),
      datePicker: () => cy.get('#datepicker'),
      profession: (option) => cy.get(`input[value="${option}"]`),
      automationTool: (option) => cy.get(`input[value="${option}"]`),
      continents: () => cy.get('#continents'),
      seleniumCommands: () => cy.get('#selenium_commands'),
      fileInputSelector: () => cy.get('#photo')
    }
  
    clickLoginFields() {
      this.elements.firstname().click().type("standard_user");
      this.elements.lastname().click().type("secret_sauce");
    }
  
    selectMaleGender() {
      this.elements.maleSelection().click();
    }
    
    selectFemaleGender() {
      this.elements.femaleSelection().click();
    }

    selectYearsOfExperience(years) {
      this.elements.yearsOfExperience(years).click();
    }

    selectDate(date) {
      this.elements.datePicker().click().type(date);
    }

    selectProfession(profession) {
      this.elements.profession(profession).click();
    }

    selectAutomationTool(tool) {
      this.elements.automationTool(tool).click();
    }

    selectContinent(continent) {
      this.elements.continents().select(continent);
    }

    selectSeleniumCommands(command) {
      this.elements.seleniumCommands().select(command);
    }

    uploadFile(fileName, fileType = '') {
        this.elements.fileInputSelector().attachFile({
            filePath: fileName,
            encoding: 'base64',
            mimeType: fileType,
        }, {
            uploadType: 'input',
        });
      }
  }
  export default new practiceFormPage();
  