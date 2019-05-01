const webdriver = require('selenium-webdriver');
const By = webdriver.By ;

const myTest = async () => {
        try{

            var driver = new webdriver.Builder().forBrowser('chrome').build();
      
            await driver.get('http://localhost:3000/');
      
            await driver.getTitle().then(function(title) {
                    console.log("The title is: " + title);
                });

            await driver.findElement(By.css('.plus')).getText().then(function(text){
                    console.log("The text is: " + text);
                }); 

          for ( let i = 0 ; i < 5 ; i++ ) {
            await setTimeout(function(){
                    driver.findElement(By.css('.plus')).click();
                  },2000);
          };

            await driver.sleep(2000) ;

            await driver.findElement(By.css('.moins')).getText().then(function(text){
                    console.log("The text is: " + text);
                }); 

          for ( let i = 0 ; i < 10 ; i++ ) {
            await setTimeout(function(){
                     driver.findElement(By.css('.moins')).click();
                  },2000);
          };     

          await driver.sleep(2000) ;


            await setTimeout(function(){
                    driver.quit();
                },3000);

        }catch(err){

              handleFailure(err, driver);

        }
};
   
    myTest();