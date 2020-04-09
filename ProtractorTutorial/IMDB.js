//import {browser,element,by,ElementFinder} from 'protractor'
describe(' Action Method Demo',function() { 

   
    
    it('how to Search in IMDB website',function() {
     
      browser.get("https://www.imdb.com");
      
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

    