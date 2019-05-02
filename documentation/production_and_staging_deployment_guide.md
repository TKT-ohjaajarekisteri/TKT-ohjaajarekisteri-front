# How to set up and update the staging / production environment

- Log in to the staging environment. Navigate to the home folder of the project user.
- Run the deployment scpript with `./deploy.sh` This will:
  - Pull latest images from DockerHub
  - Make sure db is up
  - Stop frontend and backend so we can restart with new images
  - Run possible migrations
  - Bring services back up
- And we're done!
