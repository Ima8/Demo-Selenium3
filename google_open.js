var webdriver = require('selenium-webdriver');
var By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    //.usingServer('http://192.168.1.41:4444/wd/hub')
    .build();
var keyword="SIT KMUTT"
    driver.get('http://www.google.com/ncr');
    driver.call(function* () {
      var query = yield driver.findElement(By.name('q'));
      query.sendKeys(keyword);

      var submit = yield driver.findElement(By.name('btnG'));
      submit.click();
    });

    driver.wait(function* () {
      var title = yield driver.getTitle();
      return keyword+' - Google Search' === title;
    }, 1000);

    driver.call(function* () {
      var btn_picture = yield driver.findElement(By.className('q qs'));
      btn_picture.click();
      return
    });

     //driver.quit();
