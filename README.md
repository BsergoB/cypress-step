# cypress-step
-Follow this documentation to install the Open-Source version of step application on-premise on your laptop (https://step.exense.ch/knowledgebase/3.18/getting-started/quick-setup/) and start it.
- Run npm install in your project folder to install node modules.
- Project contains simple JUnit test that will perform a login to your local step instance using the Cypress framework. The test extended with browsing the step tabs (Plans, Keywords, Parameters, etc.) and making sure that the tab is loaded (lookup for an element on the page) before moving to the next one.
