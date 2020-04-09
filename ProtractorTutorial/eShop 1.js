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


  //  var a=  element.all(by.tagName('tr')).count().then(function(Text){
       //         console.log(Text);})

            // Increment Quantity
    element(by.css('tr')).
           element(by.xpath('/html/body/app-root/app-shop/div/div/div/table/tbody/tr[1]/td[4]')).
           getText().then(function(text){
           console.log(text);
           })

      element(by.css('tr')).
           element(by.xpath('/html/body/app-root/app-shop/div/div/div/table/tbody/tr[2]/td[4]')).
          getText().then(function(text){
          console.log(text);
          })

  element(by.css('tr')).
          element(by.xpath('/html/body/app-root/app-shop/div/div/div/table/tbody/tr[3]/td[4]')).
         getText().then(function(text){
         console.log(text);
         })

      var d = element(by.css('tr')).
         element(by.xpath('/html/body/app-root/app-shop/div/div/div/table/tbody/tr[4]/td[4]')).
        getText().then(function(text){
        console.log(text);
        })

       


      





        

    })})

    
