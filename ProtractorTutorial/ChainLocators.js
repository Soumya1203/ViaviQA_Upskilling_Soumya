describe ('Chain Loactor Demo',function (){

    it('Open Angular Website', function (){
        //open website
        browser.get('https://juliemr.github.io/protractor-demo/');

     
        element(by.model('first')).sendKeys("4");
        element(by.model('second')).sendKeys("4");
        element(by.id('gobutton')).click();

      element(by.css("td:nth-child(3)")).getText().then (function(text){
            console.log(text);

        })
        
 
   //repeaters,css,chain locators
        element(by.repeat('result in memory')).element(by.css("td:nth-child(3)")).
        getText().then (function(text){
            console.log(text);

        })
         

        })

})