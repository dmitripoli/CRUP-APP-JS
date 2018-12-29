# FROM node:8
# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app  
# COPY package.json .  
# RUN npm install  
# COPY index.js .  
# COPY . .
# EXPOSE 8080  
# CMD [ "node", "index.js" ]  

# specifing which image from Docker Hub we want to build from
FROM node:latest
# RUN - execudes a command -> creating new directory
RUN mkdir -p /usr/src/app
# WORKDIR sets this newly created directory as the working directory for any COPY, RUN and CMD instructions that follow in the Dockerfile.
WORKDIR /usr/src/app
# COPY is pretty straightforward and lets us copy files or a whole directory from a source to a destination. We are going to COPY the package.json file over to our working directory.
COPY package.json /usr/src/app/
# RUN lets us execute the npm install command which will download all the dependencies defined in package.json.
RUN npm install
# COPY lets us copy our entire local directory into our working directory to bundle our application source code.
COPY . /usr/src/app
EXPOSE 3000
CMD [ node, index.js ]