# Best practices

## Before pull request remember first

1. Run lint:

`npm run lint`

2. Run tests:

`CI=true npm test`

3. AND TEST MANUALLY THAT API STILL WORKS FOR

* Old student
* New student 
* Admin

## Naming

### Routes

* req, res

## Userstories

The definitions should be more written out in more detail so that important features are not forgotten.
For example: On this page admin can see the details: phone number, email, ...

## Commits and branches

These should be kept small and easy to merge, as well as well named and commented

## Scheduling

Let's all reserve three hours for deadline Thursdays, so there's time to take care of last touches

## Before meeting the customer

The scrum master will send a remainder email to all that are coming to the meeting

## Migrations

Seeding creates and removes data from the database. This can be used in testing to remove or add specific data.

Migration commands are [here](https://github.com/TKT-ohjaajarekisteri/TKT-ohjaajarekisteri-back/blob/master/MIGRATION_INFO.md).

## Definition of done
* Features are planned in sprint planning
* Features documented and tested in appropriate detail
* Feature passes Jest tests and ESlint
* Branch is approved by another team member before merging to master
* Feature passes Travis CI Server
