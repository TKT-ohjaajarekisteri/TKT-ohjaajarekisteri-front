# Best practices

## Before pull request remember first

Run lint:

`npm run lint`


Run tests:

`CI=true npm test`


## Naming

### Routes

* req, res

## Scheduling

Let's all reserve three hours for deadline Thursdays, so there's time to take care of last touches

## Migrations

Seeding creates and removes data from the database. This can be used in testing to remove or add specific data.

Migration commands are [here](https://github.com/TKT-ohjaajarekisteri/TKT-ohjaajarekisteri-back/blob/master/MIGRATION_INFO.md).

## Nuking database

Database can be emptied by undoing all migrations 
<br>or with code:
```
sequelize.sync({ force:true })

```
For example: Uncomment line 43 at [sequelize index](https://github.com/TKT-ohjaajarekisteri/TKT-ohjaajarekisteri-back/blob/master/models/index.js) and run backend.
