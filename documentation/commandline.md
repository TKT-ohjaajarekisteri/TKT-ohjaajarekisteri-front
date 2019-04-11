# Usage

## Command line scripts for Front

You can run these commands in the project directory

```
npm start
```
Runs the application in the development mode. 
You can use the application in a browser by opening http://localhost:3000 
The page will reloaded when the code is edited.

```
npm build
```
Builds the application for production

```
npm test
```
Runs tests for the application

```
npm run test-coverage
```
Runs the tests and a report for test coverage

```
npm run lint
```
Checks the code for style deviations

## Command line scripts for Back

```
npm run watch
```
Runs the application in the development mode.
Uses a local development PostGresql database. 

```
npm start
```
Runs the application in the production mode.

```
npm test
```
Runs tests for the application

```
npm run test-simple
```
Runs tests in a less verbose mode

```
npm run migrate
```
Runs the migrate UP function for the database

```
npm run migrate-undo
```
Runs the DOWN function for the database

```
npm run migrate-test
```
Runs the UP function for the local test database

```
npm run migrate-test-undo
```
Runs the DOWN function for the local test database

```
npm run seed
```
Inserts data to the database based on seed files

```
npm run seed-undo
```
Deletes the seeded data

```
npm run reset-dev
```
Runs these for the dev database: migrate DOWN, migrate UP, inserts data based on seed files


## [More information about migration](https://github.com/TKT-ohjaajarekisteri/TKT-ohjaajarekisteri-back/blob/master/MIGRATION_INFO.md)
