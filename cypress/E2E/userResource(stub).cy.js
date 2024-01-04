describe('My Test Suite', () => {
    beforeEach(() => {
      cy.fixture('google-homepage-image.jpg').then((image) => {
        cy.intercept('GET', 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png', (req) => {
          console.log('Intercepted Request:', req);
          req.reply({ // Simulate successful response
            statusCode: 200,
            body: image,
            headers: { 'content-type': 'image/jpg' }
          });
        }).as('getImage');
      });
    });
  
    it('My Test Case', () => {
      cy.visit('https://www.google.com'); // Visit the Google homepage
  
      cy.get('/Users/wt/Desktop/Professional_Dev/project1/cypress/fixtures/image.jpg').then(($img) => {
        const imageUrl = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'; // Update the URL here
  
        // Create a promise that resolves when the image finishes loading
        const imageLoadingPromise = new Promise((resolve) => {
          $img.one('load', resolve);
        });
  
        // Set the src attribute of the img tag to the Google homepage image URL
        $img.attr('src', imageUrl);
  
        // Wait for both the interception and the image to finish loading
        cy.wait('@getImage');
        imageLoadingPromise.then(() => {
          cy.wait('@getImage').then(({ response }) => {
            const statusCode = response.statusCode;
            const contentLength = Number(response.headers['content-length']);
            const responseBody = response.body;
  
            // Perform assertions on the intercepted response
            expect(statusCode).to.equal(200);
            expect(contentLength).to.be.a('number'); // Ensure contentLength is a number or NaN
            expect(responseBody).to.have.length(contentLength || 0); // Use || operator to handle NaN case
            // Additional assertions as needed
          });
        });
      });
    });
  });
  