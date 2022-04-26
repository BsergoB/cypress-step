class DashBoardPage {
  plansTab = "//li[contains(@ng-class, 'plans')]";
  newPlanButton = "//button[text()='New plan']";
  keywordsTab = "//li[contains(@ng-class, 'functions')]";
  newKeywordButton = "//button[text()='New keyword']";
  parametersTab = "//li[contains(@ng-class, 'parameters')]";
  newParameterButton = "//button[text()='New parameter']";
  executionsTab = "//li[contains(@ng-class, 'executions')]";
  executionsList = "//a[@ng-click='selectTab(tab.id)']";
  schedulerTab = "//li[contains(@ng-class, 'scheduler')]";
  newTaskButton = "//button[text()='New task']";
  gridTab = "//li[contains(@ng-class, 'grid')]";
  tokens = "//li[@heading='Tokens']";
  adminTab = "//li[contains(@ng-class, 'admin')]";
  addUserButton = "//button[text()='Add user']";;

  checkPlansTab() {
    cy.xpath(this.newPlanButton).should("be.visible");
    cy.log("Plans Tab is checked!");
  }

  clickKeywordsTab() {
    return cy.xpath(this.keywordsTab).click();
  }

  checkKeywordsTab() {
    cy.xpath(this.newKeywordButton).should("be.visible");
    cy.log("Keywords Tab is checked!");
  }
  clickParametersTab() {
    return cy.xpath(this.parametersTab).click();
  }
  checkParametersTab() {
    cy.xpath(this.newParameterButton).should("be.visible");
    cy.log("Parameters Tab is checked!");
  }

  clickExecutionsTab() {
    return cy.xpath(this.executionsTab).click();
  }

  checkExecutionTab() {
    cy.xpath(this.executionsList).should("be.visible");
    cy.log("Execution Tab is checked!");
  }

  clickSchedulerTab() {
    return cy.xpath(this.schedulerTab).click();
  }

  checkSchedulerTab() {
    cy.xpath(this.newTaskButton).should("be.visible");
    cy.log("Scheduler Tab is checked!");
  }

  clickGridTab() {
    return cy.xpath(this.gridTab).click();
  }

  checkGridTab() {
    cy.xpath(this.tokens).should("be.visible");
    cy.log("Grid Tab is checked!");
  }

  clickAdminTab() {
    return cy.xpath(this.adminTab).click();
  }

  checkAdminTab() {
    cy.xpath(this.addUserButton).should("be.visible");
    cy.log("Admin Tab is checked!");
  }
}
module.exports = new DashBoardPage();
