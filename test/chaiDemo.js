const { By,Key, Builder } = require('selenium-webdriver');
require("chromedriver");

var should = require('chai').should();

async function example() {
    let driver = await new Builder().forBrowser('chrome').build();

    await driver.get('https://lambdatest.github.io/sample-todo-app/');

    await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium",Key.RETURN);

    let todoText=await driver.findElement(By.xpath("//li[last()]")).getText().then(function(value){
        return value
    });
  
    try {
        todoText.should.equal("Learn Selenium");
        console.log("No Error Occurred");
    } catch(error) {
        console.log("Error: ", error)
    }
    await driver.quit();
}

example()