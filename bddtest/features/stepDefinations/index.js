const { expect } = require("chai");
const { Given} = require("@cucumber/cucumber");
const { Builder, By, Key, until, sleep } = require("selenium-webdriver");
const { delay } = require("../utils/delay");

//Register
Given("Test Register functionality", { timeout: 30000 }, async function () {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/register");
    await driver.findElement(By.id("floatingInputFirst")).sendKeys("test");
    await driver.findElement(By.id("floatingInputLast")).sendKeys("test");
    await driver.findElement(By.id("floatingInput")).sendKeys("test@gmail.com");
    await driver.findElement(By.id("floatingPassword")).sendKeys("test1234");
    //await driver.findElement(By.id("floatingInputFirst")).sendKeys("test");
    await driver.sleep(delay);
    await driver.findElement(By.id("register-btn")).click();

    await driver.wait(until.elementLocated(By.id("RegForm")),3000);
    expect(await driver.wait(until.elementLocated(By.id("RegForm"))));
    // await driver.quit();

});

//Login
Given("Test Login functionality", { timeout: 30000 }, async function () {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/login");
    await driver.findElement(By.id("floatingInput")).sendKeys("test@gmail.com");
    await driver.findElement(By.id("floatingPassword")).sendKeys("test1234");
    //await driver.findElement(By.id("floatingInputFirst")).sendKeys("test");
    await driver.sleep(delay);
    await driver.findElement(By.id("login-btn")).click();

    await driver.wait(until.elementLocated(By.id("LoginForm")),3000);
    expect(await driver.wait(until.elementLocated(By.id("LoginForm"))));
    // await driver.quit();

});

//RequestProduct
Given("Test RequestProduct functionality", { timeout: 30000 }, async function () {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/user/product/request");
    await driver.findElement(By.id("floatingInputProduct")).sendKeys("test");
    await driver.findElement(By.id("floatingInputPLink")).sendKeys("test1234");
    //await driver.findElement(By.id("floatingInputFirst")).sendKeys("test");
    await driver.sleep(delay);
    await driver.findElement(By.id("btn_req_product")).click();

    await driver.wait(until.elementLocated(By.id("req_form")),3000);
    expect(await driver.wait(until.elementLocated(By.id("req_form"))));
    // await driver.quit();
});
//Checkout
Given("Test CheckOut functionality", { timeout: 30000 }, async function () {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/checkout");
    await driver.findElement(By.id("FirstName2")).sendKeys("test");
    await driver.findElement(By.id("LastName2")).sendKeys("tester");
    await driver.findElement(By.id("Phone2")).sendKeys("9861917833");
    await driver.findElement(By.id("Email2")).sendKeys("test@gmail.com");
    await driver.findElement(By.id("Address2")).sendKeys("Baneshwor");
    await driver.findElement(By.id("Zip2")).sendKeys("44600");
    //await driver.findElement(By.id("floatingInputFirst")).sendKeys("test");
    await driver.sleep(delay);
    await driver.findElement(By.id("btnCash")).click();

    await driver.wait(until.elementLocated(By.id("checkoutform")),3000);
    expect(await driver.wait(until.elementLocated(By.id("checkoutform"))));
    // await driver.quit();
});