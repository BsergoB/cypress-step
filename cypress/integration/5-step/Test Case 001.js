const loginPage = require("../../pageobjects/5-step/LoginPage");
const dashBoardPage = require("../../pageobjects/5-step/DashBoardPage");
// test suite name
describe("Test Suite", function () {
  // Test case
  it("Login to Step web-application", function () {
    loginPage.loginSite();
  }); 
  it("Checking element on Plans Tab", function () {
    loginPage.loginSite();
    dashBoardPage.checkPlansTab();
  });
  it("Checking element on Keywords Tab", function () {
    loginPage.loginSite();
    dashBoardPage.clickKeywordsTab();
    dashBoardPage.checkKeywordsTab();
  });
  it("Checking element on Parameters Tab", function () {
    loginPage.loginSite();
    dashBoardPage.clickParametersTab();
    dashBoardPage.checkParametersTab();
  });
  it("Checking element on Execution Tab", function () {
    loginPage.loginSite();
    dashBoardPage.clickExecutionsTab();
    dashBoardPage.checkExecutionTab();
  });
  it("Checking element on Scheduler Tab", function () {
    loginPage.loginSite();
    dashBoardPage.clickSchedulerTab();
    dashBoardPage.checkSchedulerTab();
  });
  it("Checking element on Grid Tab", function () {
    loginPage.loginSite();
    dashBoardPage.clickGridTab();
    dashBoardPage.checkGridTab();
  });
  it("Checking element on Admin Tab", function () {
    loginPage.loginSite();
    dashBoardPage.clickAdminTab();
    dashBoardPage.checkAdminTab();
  });
});
