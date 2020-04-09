describe("Action Demo",function(){

    browser.waitForAngularEnabled(false);
    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
      });
      
      afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
      });



      it('Mouse Action',function(){
              //open website
              browser.get('https://chercher.tech/practice/practice-pop-ups-selenium-webdriver');
              

              //01 double click

               var doubleCLick= element(by.id('double-click'));
           /*    browser.actions().doubleClick(doubleCLick).perform();
               browser.switchTo().alert().accept().then(function(){
            
                console.log('Pop Up is accepted ');

               })*/
               
            //mouseAction

               browser.actions().mouseMove(element(by.id('sub-menu'))).perform().then(function(){
               element(by.id("link2")).click();
               browser.sleep(15000);

             console.log('mouse hover works');
               })
               


               //keyActions
             /*  browser.actions().keyUp().perform().then(function(){
            
                console.log('Key up Action works');
               })
               browser.sleep(20000);*/



   })
      


















})