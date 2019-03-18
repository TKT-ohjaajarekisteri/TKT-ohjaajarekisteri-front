# How to configure a local test db

## Requirements

- SSL is off for test ENV
- Test db URL is in ENV
    - set `TEST_DATABASE_URL=postgres://USERNAME:PASSWORD@db:5432/test`
- postgres is running in a local docker container

### 1. Enter container bash

The db name is by default the same as `<username>`.

check the `container name`:

    docker ps
    docker exec -it <containername> bash

### 2. Log into default db 'postgres' and create test db

Logging in with <username> into default `postgres` database
	
    psql -U <username> postgres
    CREATE DATABASE test;
    \q
    exit

### 3. Run migrations for test db

Go to the backend directory and run command:

    npm run migrate-test
