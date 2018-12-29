## RestfulNodeAPI

    - Basic crud operation projects
    client : angular app
    server : node.js - express , mongo - mongoose

     server :
        - base controller for crud operations
        - centralized logging mechanism
        - centralized error handling mechanism
        - security middleware
        - docker image file
    client :
        - material
        - divided into lazy loaded feature modules

    - @TODO :
        FE :
            - form validation
            - sort operation
        BE :
            - schema validation

## Prerequisites

- install
  - npm
  - node
  - mongo

## Installing

    cd server
    npm i
    cd client
    npm i

## Running project

server:

- dev mode :
  - npm start / nodemon
- debug mode :
  - npm run debug

client:

- ng build --watch

## Running the tests

## Deployment

@TODO : Add deployment instruction

## Versioning

## Logging

    -  require bunyan logger from ./src/logger/bunyan.logger
    # log functionality - works depend on .env LOG_LEVEL variable:
        options : "info,warn,error"
    # log usage :
    - error log : call logError(error.stack, error.description);
    - info log  : call logInfo(message)
    - warn log  : call logWarn(message)
    #log output :
    - error log : ./log/log.info
    - info log  :  ./log/log.info , stdout
    - warn log  : ./log/log.info

## Documentation

All APIs documentation is made by Swagger

- copy any of the .yaml file in the following link:https://editor.swagger.io/?_ga=2.203069910.697188945.1541622788-131277249.1541622788#

## Docker

    - go to /Projects/incredicloud/src/config/config.js
    - change mongodb://localhost:27017/incredi-cloud to mongodb://mongo:27017/incredi-cloud
    run :
        - docker-compose down
        - docker-compose build
        - docker-compose up -d mongo
        - docker-compose up app

## Authors

- **Dima Poleacov** - dmitripoleacov@gmail.com

## License

This project is licensed under @TODO add license

## Acknowledgments
