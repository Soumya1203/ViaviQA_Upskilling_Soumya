describe ('PractiseExecise',function(){

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

    var a = "Success! The Form has been submitted successfully!."

    it('Open Angular ecommerce website',function(){

        browser.driver.manage().window().maximize();
        
        browser.get("https://qaclickacademy.github.io/protocommerce/");
        browser.sleep(10000);
        element(by.name('name')).sendKeys('S');
        element(by.css("input[name='email']")).sendKeys('');
        element(by.id('exampleInputPassword1')).sendKeys('password');
        element(by.css("input[type='checkbox']")).click();
        element(by.cssContainingText("[id='exampleFormControlSelect1'] option" ,"male")).click();
        element.all(by.name('inlineRadioOptions')).last().click();
        element(by.css("input[type='submit']")).click();
        browser.sleep(15000);
        element(by.css("div[class*='success']")).getText().then(function(text){


            console.log(text);
        })
 /*        element(by.name('name')).clear();
         element(by.name('name')).sendKeys('S');
    
        element(by.css("[class='alert alert-danger']")).getText().then(function(error){
            
                console.log(error);



        })*/

        element.all(by.css("[class='alert alert-danger']")).count().then (function(count){

            console.log(count);
        })


              

           
         
         
         

        

       // expect(element(by.css("div[class*='success']")).getText()).toBe(a);

      
      
        
          





        






    })




















})