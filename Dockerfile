# specify base image
FROM node:8

# set working directory 
WORKDIR /app

# copy files and install dependencies
COPY package.json package-lock.json /app/
RUN npm install
COPY . /app/

# build
RUN npm run build

# install serve to run the app
RUN npm install -g serve

# start server
CMD serve -s build -p 8000

# specify which port to expose
EXPOSE 8000