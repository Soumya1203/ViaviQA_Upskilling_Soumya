describe ('All Demo',function (){

    it('Open Angular Website', function (){
        //open website
        browser.get('https://juliemr.github.io/protractor-demo/');

     
        element(by.model('first')).sendKeys("4");
        element(by.model('second')).sendKeys("4");
        element(by.id('gobutton')).click();

        element(by.model('first')).sendKeys("3");
        element(by.model('second')).sendKeys("7");
        element(by.id('gobutton')).click();

        element(by.model('first')).sendKeys("4");
        element(by.model('second')).sendKeys("8");
        element(by.id('gobutton')).click();

        //all method demo
        
        element.all(by.repeater('result in memory')).count().then(function(text){


            console.log(text);
        })

        element.all(by.repeater('result in memory')).each (function(item){

            item.element(by.css("td:nth-child(3)")).
            getText().then (function(text){
            console.log(text);

        })
        })

        })

})