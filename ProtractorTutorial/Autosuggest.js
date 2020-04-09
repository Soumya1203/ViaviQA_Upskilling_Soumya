describe ('AutiSuggesr',function(){

    browser.waitForAngularEnabled(false);

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

  
   it('Open non Angular website',function(){
    
           browser.get('https://www.google.com');
           browser.sleep(12000);
           element(by.css( "input[class='gLFyf gsfi']")).sendKeys('ca');
           browser.sleep(15000);
           element.all(by.css('.erkvQe li')).then(function(items){

           expect(items.length).toBe(10);
            expect(items[9].getText()).toBe('calendar 2020');
            items[9].click();
            browser.sleep(15000);
            






           })
  





   })

})

