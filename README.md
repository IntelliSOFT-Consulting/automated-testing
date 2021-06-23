### Automated Testing

### Installing and Setting up Cypress
Prerequisites:
node.js and npm/ yarn.

1. Create a new folder for our project.
2. Run npm init in the project folder.
3. Install Cypress.

        mkdir your-project-folder
        cd your-project-folder
        run npm init
        npm install cypress --save-dev
4. Add npm scripts

        "scripts": {
            "cypress:open": "cypress open"
            }
        }
5. Run the Cypress app

        npm run cypress:open
        CYPRESS_password=secret npm run cypress:open


