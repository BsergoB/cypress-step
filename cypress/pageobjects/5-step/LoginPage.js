class LoginPage {
  goTo() {
    return cy.visit("http://127.0.0.1:8080/");
  }
  getLoginButton() {
    return cy.get(".btn");
  }
  clickLoginButton() {
    return cy.xpath("//button[text()='Login']").click();
  }
  loginSite() {
    this.goTo();
    this.clickLoginButton();
  }
}
module.exports = new LoginPage();
