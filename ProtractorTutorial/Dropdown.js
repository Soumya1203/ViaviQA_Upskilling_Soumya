describe ('All Demo',function (){

    //function Demo
    function Calc(a,b,c){
        element(by.model('first')).sendKeys(a);
        element.all(by.tagName('option')).each(function(item){
            item.getAttribute('value').then (function(values){

    if(values==c){

       item.click();
    }       

    })

})
 element(by.model('second')).sendKeys(b);
 element(by.id('gobutton')).click();

    }
       it('Open Angular Website', function (){
        //open website
        browser.get('https://juliemr.github.io/protractor-demo/');

      Calc(4,7,'ADDITION');
      Calc(10,2,'DIVISION');
      Calc(4,4,'MULTIPLICATION');
      Calc(15,4,'MODULO');
      Calc(10,5,'SUBTRACTION');
       

     element.all(by.repeater('result in memory')).each (function(item){

        item.element(by.css("td:nth-child(3)")).
        getText().then (function(text){
        console.log(text);

    })
})


        

        //all method demo
        
       

    })
})
        



