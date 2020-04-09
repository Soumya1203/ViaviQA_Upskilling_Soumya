describe('Handle Window ', function(){

    browser.waitForAngularEnabled(false);
    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });


    it ('Window Handle ', function() {
             

      browser.get('https://rahulshettyacademy.com/AutomationPractice/');
      browser.getTitle().then(function(text){

        console.log(text);
        browser.sleep(15000);


        })

        element(by.id('openwindow')).click();
        console.log("New tab Opens");
        browser.sleep(10000);
        browser.getAllWindowHandles().then(function(Handles)
        {

        


            console.log(Handles);
            browser.switchTo().window (Handles[1]);
        })
          
             browser.getTitle().then(function(title){
                 console.log(title);
                 browser.sleep(10000);

             })




 })

})