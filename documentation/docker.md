# Docker

The project uses Docker in the staging environment and also in the production.


## Phases of Docker setup

The project has a Dockerhub account, which has images for both frontend and backend.
These images were created using seperate Dockerfiles for both frontend and [backend](https://github.com/TKT-ohjaajarekisteri/TKT-ohjaajarekisteri-back/blob/login/Dockerfile) that can be found in the root folders.

Most of the command will require sudo, and you need to have docker and docker-compose installed. Instructions for [installation](https://docker-hy.github.io/part0/).

## Transfering the images to Docker Hub

These commands can be used to push images to Dockerhub manually. This is example with backend. For login you should use the Dockerhub account you want to push the images into.

    sudo docker login 
    sudo docker build --rm -t tktohjaajarek/ohjaajarekisteriback:<tag> .
    sudo docker push tktohjaajarek/ohjaajarekisteriback:<tag>

Example of a tag is `v0.1.0`


## Test your docker locally

1. Create file docker-compose.yml
2. copy content from docker-compose.yml file. 
	- The file for this project can be acquired from the project group Slack.
3. Make sure docker and docker-compose are installed
4. run docker-compose up in the same directory where you placed the docker-compose.yml file.


### How to use Postgresql with Docker in development mode

1. Save a docker-compose.yml -file for example to the folder where you have the repositories for the back and front. Comment away the rows for the front and back so, that only rows for the database remain. 
2. In the same folder, run command docker-compose up -d.
3. Some changes in the back end code are needed:
4. In the .env -file: 

	- Change the dev-database-url (the user, password and db should be same as in the docker-compose.yml- file):

			DEV_DATABASE_URL= postgres://POSTGRES_USER:POSTGRES_PASSWORD@db:5432/POSTGRES_DB

5. (If you were using SSL before) sequelize.js: in the development part comment out the rows for ssl:

		'ssl': true,
		'dialectOptions': {
		'ssl': true
		}

6. Next you should define on your local computer where the db can be found. Open a file:

		nano /etc/hosts

Add a row to the first row of the file `hosts`: 

	127.0.0.1       db

7. Now when the back end is started in the development mode (npm run watch), you are using a local Postgres with Docker.


## Accessing database

Check the name of the database container:from

	docker ps

Make sure the database container is running. Open new terminal or use detached mode when starting all containers.

	docker-compose -d up

This lets you run commands inside a container

	docker exec -it containername /bin/bash 

Run a command inside container and you should be able to do sql queries:

	psql -U <username>

- Show all tables in the database: `\dt` 
- To browse Course table: `SELECT * FROM "Courses";`


## Hard reset local postgres db manually

The db name is by default the same as `<username>`.

check the `container name`:

	docker ps
	docker exec -it <containername> bash
	
Logging in with <username> into default `postgrest` database
	
	psql -U <username> postgres
	DROP DATABASE <username>;
	CREATE DATABASE <username>;
	\q
	exit


## Other userful commands

List containers

	docker ps

Stop a container

	docker stop <container name>
