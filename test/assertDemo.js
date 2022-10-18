const { By,Key, Builder } = require('selenium-webdriver');
require("chromedriver");
const assert = require('assert').strict;

async function example() {
    let driver = await new Builder().forBrowser('chrome').build();

    await driver.get('https://lambdatest.github.io/sample-todo-app/');

    await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium",Key.RETURN);

    let todoText=await driver.findElement(By.xpath("//li[last()]")).getText().then(function(value){
        return value
    });
  
    try {
        assert.strictEqual(todoText,"Learn js Selenium");
        console.log("No Error Occurred");
    } catch(error) {
        console.log("Error: ", error)
    }

   //assert.strictEqual(todoText,"Learn Selenium")

    await driver.quit();
}

example()