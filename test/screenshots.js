const {By,Builder}=require('selenium-webdriver');
require("chromedriver");

async function example(){
let driver = await new Builder().forBrowser('chrome').build();

await driver.get('https://lambdatest.github.io/sample-todo-app/');

await driver.findElement(By.name('li1')).click();
await driver.findElement(By.name('li2')).click();
await driver.findElement(By.id("sampletodotext")).sendKeys("New item");
await driver.findElement(By.id("addbutton")).click();

await driver.sleep(5000);

await driver.takeScreenshot().then(
    function (image) {
        require('fs').writeFileSync('captured_image_3.png', image, 'base64');
    }
);

await driver.quit();
}

example()