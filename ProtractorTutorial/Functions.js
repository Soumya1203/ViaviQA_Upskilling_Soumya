describe ('All Demo',function (){

    //function Demo
    function Add(a,b){
        element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);
        element(by.id('gobutton')).click();

    }

    it('Open Angular Website', function (){
        //open website
        browser.get('https://juliemr.github.io/protractor-demo/');

     
        Add(3,6);
        Add(4,7);
        Add(1,2);
        Add(5,6);
        Add(4,8);
        Add(6,6);

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