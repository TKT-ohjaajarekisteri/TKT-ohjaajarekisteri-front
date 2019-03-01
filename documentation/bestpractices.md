# Best practices

## Before pull request remember first

1. Run lint:

`npm run lint`


2. Run tests:

`CI=true npm test`

3. AND TEST MANUALLY THAT API STILL WORKS FOR

-Old student

-New student 

-Admin


## Naming

### Routes

* req, res

## Scheduling

Let's all reserve three hours for deadline Thursdays, so there's time to take care of last touches

## Migrations

Seeding creates and removes data from the database. This can be used in testing to remove or add specific data.

Migration commands are [here](https://github.com/TKT-ohjaajarekisteri/TKT-ohjaajarekisteri-back/blob/master/MIGRATION_INFO.md).

## When you wanna test new user in front, nuking database 

Database can be emptied by undoing all migrations 
<br>or with code:
```
sequelize.sync({ force:true })

```
For example: Uncomment line 43 at [sequelize index](https://github.com/TKT-ohjaajarekisteri/TKT-ohjaajarekisteri-back/blob/master/models/index.js) and run backend.
