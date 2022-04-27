# e2e-tests Cypress

e2e-test for Step application with Cypress framework

## Setup

- Download and install Node.JS ( at least 16.X )
- Install the latest version of Visual Studio Code
- Clone and checkout the github project
- Go to the terminal and execute "npm install" inside the checked out folder
- Follow this documentation to install the Open-Source version of step application on-premise on your laptop (https://step.exense.ch/knowledgebase/3.18/getting-started/quick-setup/) and start it. Pay attention to downloaded archives step-controller-3.xx.x and step-agent-3.xx.x. They don't have specified batch files for starting MongoDB Server, so you have to do it manually by executing "net start MongoDB". As well as you should set JAVA_PATH in both files startController.bat and startAgent.bat

### How to run the tests on Windows

Open Cypress Test Runer by executing "node_modules/.bin/cypress open" in the project folder. Next you can simply choose necessary test from Cypress UI application. 

### Description

Project contains simple test that will perform a login to your local Step instance using the Cypress framework. The test extended with browsing the Step tabs (Plans, Keywords, Parameters, etc.) and making sure that the tab is loaded (lookup for an element on the page) before moving to the next one.

### Test structure

We work with the Page Object Pattern described in <https://docs.cypress.io/guides/migrating-to-cypress/protractor#Cypress-with-Page-Objects>. The main idea is to encapsulate logic into page classes and use the class methods in the spec files to build the tests. For instance we defined the LoginPage with class fields as elements locators and class methods as actions. This way allows to reduce the amount of duplicated code and reuse it in future.