describe('Handle Alert ', function(){

    browser.waitForAngularEnabled(false);
    //maximize browser

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });


    it ('Frame Handle ', function() {

      
          

      browser.get('https://rahulshettyacademy.com/AutomationPractice/');
      browser.driver.manage().window().maximize();
      browser.getTitle().then(function(text){

        console.log(text);
        browser.sleep(15000);


        })

        browser.switchTo().frame('courses-iframe')
        element(by.css("a[href*='sign_in]")).getText().then(function(text){
          console.log(text);


        })
      
        
      


 })

})