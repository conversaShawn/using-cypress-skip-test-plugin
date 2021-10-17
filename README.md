This branch is for testing the importing onlyOn and cy.onlyOn in the same test with the [cypress-skip-test plugin](https://github.com/cypress-io/cypress-skip-test)

### 2. Fork this repo

After forking this project in `Github`, run these commands:

```bash
## clone this repo to a local directory
git clone https://github.com/<your-username>/using-cypress-skip-test-plugin.git

## cd into the cloned repo
cd using-cypress-skip-test-plugin

## get onlyOn branch
git checkout -b onlyOn <name of remote>/onlyOn

## fetch remote branch
git fetch <name of remote>

## install the node_modules
npm install

## open cypress app
npx cypress open
```