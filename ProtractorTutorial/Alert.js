describe('Handle Alert ', function(){

    browser.waitForAngularEnabled(false);
    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });


    it ('alert Handle ', function() {
             

      browser.get('https://rahulshettyacademy.com/AutomationPractice/');
      browser.getTitle().then(function(text){

        console.log(text);
        browser.sleep(15000);


        })

        element(by.id('confirmbtn')).click();
        console.log("open alert");
        browser.sleep(10000);
        browser.switchTo().alert().accept();
        console.log("Alert is confirmed");
        
      


 })

})