# Docker

The project uses Docker in the staging environment and also in the production.


## Phases of Docker setup

The project has a Dockerhub account, which has images for both frontend and backend.
These images were created using seperate Dockerfiles for both frontend and [backend](https://github.com/TKT-ohjaajarekisteri/TKT-ohjaajarekisteri-back/blob/login/Dockerfile) that can be found in the root folders.

Most of the command will require sudo, and you need to have docker and docker-compose installed. Instructions for [installation](https://docker-hy.github.io/part0/).

### Transfering the images to Docker Hub

These commands can be used to push images to Dockerhub manually. This is example with backend. For login you should use the Dockerhub account you want to push the images into.

    sudo docker login 
    sudo docker build --rm -t tktohjaajarek/ohjaajarekisteriback:<tag> .
    sudo docker push tktohjaajarek/ohjaajarekisteriback:<tag>

Example of a tag is `v0.1.0`


### Test your docker locally

Create file docker-compose.yml and copy content from docker-compose.yml file. The file for this project can be acquired from the project group slack.
Make sure docker and docker-compose are installed, and run docker-compose up in the same directory where you placed the docker-compose.yml file.


### Other userful commands

List containers

    docker ps

Stop a container

    docker stop <container name>


### Accessing database

Check the name of the database container:

	docker ps

Make sure the database container is running. Open new terminal or use detached mode when starting all containers.

	docker-compose -d up

This lets you run commands inside a container

	docker exec -it containername /bin/bash 

Run a command inside container and you should be able to do sql queries:

	psql -U <username>

To show all tables in the database:
	
	\dt 
