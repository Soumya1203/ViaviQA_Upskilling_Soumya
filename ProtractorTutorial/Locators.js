describe( 'Protractor Locators Demo', function () {
    
 it ('Locators' , function(){
     browser.get ("https://juliemr.github.io/protractor-demo/");
    element(by.model('first')).sendKeys("3");
    element(by.model('second')).sendKeys("4");
    element(by.id('gobutton')).click();
    /*var loginButton =element(by.css("button[ng-click='doAddition()']"));
browser.wait(EC.elementToBeClickable(loginButton),15000);
loginButton.click();*/
       
    // assertions
    expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("8");

    element(by.css("h2[class='ng-binding']")).getText().then (function(text){

     console.log(text);
    

    })
        
 
    

 })
})  