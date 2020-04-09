describe ('PractiseExecise',function(){

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

    function selectItems(Product){

            element.all(by.tagName('app-card')).each(function(item){

                item.element(by.css("h4 a")).getText().then(function(Text){
                    if(Text==Product)
                {
    
                    item.element(by.css("button[class='btn btn-info']")).click();
                }
            })
        })
    }
     

 
            it('Open eshop',function(){

        

        browser.driver.manage().window().maximize();
    //    var EC = protractor.ExpectedConditions;
        
        browser.get("https://qaclickacademy.github.io/protocommerce/");
         element(by.linkText ("Shop")).click();

         selectItems('Blackberry');
         selectItems('Nokia Edge');
        selectItems('Samsung Note 8');
        selectItems('iphone X');
        selectItems('iphone X');

  element(by.partialLinkText('Checkout')).getText().then (function(Text){

              
        var res= Text.split("(");
           expect((res[1].trim()).charAt(0)).toBe('5');
      //     console.log ("this Test is Passed")
      element(by.css("[class='nav-link btn btn-primary']")).click();

          
            })


          var a=  element.all(by.tagName('tr')).count().then(function(Text){
            console.log(Text);
        })

            
            
            var beforeText ='/html/body/app-root/app-shop/div/div/div/table/tbody/tr[';
            var afterText = ']/td[4]/strong';
           
           var sum=0;
            
          
            
           
         for(var i=1;i<5;i++)
        {
            
            var actualPath = beforeText+i+afterText;
            element(by.tagName('tr')).element(by.xpath(actualPath)).getText().then(function(text){

                console.log(text)
            

               
                 var price = text.split(".");
                 var c = (price[1].trim()) ;
                 console.log(c);

                
               
             sum = sum + Number(c);

             console.log('the sum is'+ sum);
            
      
      })
 }
 element(by.css('.text-right h3')).getText().
 then(function(text){

  
        var Price1 = text.split(".");
            var c1 = (Price1[1].trim()) ;
            console.log('Actual sum'+(c1));
            
             console.log(sum);

         expect(String(sum)).toBe((c1));
         console.log("Total Amount is equal to sum");

 })

        
            
        
     

    

    

       

})
    })