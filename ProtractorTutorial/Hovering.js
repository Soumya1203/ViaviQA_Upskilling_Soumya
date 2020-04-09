//import {browser,element,by,ElementFinder} from 'protractor'
describe('Hovering Action Method Demo',function() { 

  beforeEach(function() {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
  });
  
  afterEach(function() {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });
  

   
    
    it('how to move mouse in angular website',function() {
     
      browser.get("https://ng-bootstrap.github.io/#/components/tooltip/examples");
      
      browser.sleep(3000);
      var button = element(by.css("button[ngbtooltip='Tooltip on top']"));
        console.log('button css works');
     // console.log(button);
         browser.actions().mouseMove(button).perform().then(function(){

           browser.sleep(10000);
          console.log('the hover works');
         })
     // browser.sleep(5000);
      

  
       
    
    //write your protractor raw code
    //Each it block will be called as a spec
   // it('close browswer', function() {
    //    closebrowser;
    // code to close browser
    })
  
  })

    