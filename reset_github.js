var webdriver = require('selenium-webdriver');
var By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    //.usingServer('http://192.168.1.41:4444/wd/hub')
    .build();
    driver.get('https://github.com/password_reset');
    
    driver.wait(function*(){
      var title = yield driver.getTitle();
      return 'Forgot your password? · GitHub' === title;
    },1000)

    driver.call(function* () {
      var email = yield driver.findElement(By.id('email_field'));
      email.sendKeys("imac.monochrome@gmail.com")
      var btn = yield driver.findElement(By.name('commit'));
      btn.click();
      return
    });
