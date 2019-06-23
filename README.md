# Simple double number API

This API simply double a given number : 
[Live Demo](https://aws.nicolasmercier.io/api/v1/numbers/4).
This API was build using NodeJQS and ExpressJS. 

## Documentation

- This API was developed using NodeJS & ExpressJS 
- You can find the documentation generated with Swagger here here : 
[Online Documentation](http://aws.nicolasmercier.io/documentation) or directly online on [swagger](https://app.swaggerhub.com/apis/NicolasMrc/aws-assigment/1.0.0) 

## Installation & Run

To install and run this project run : 

```
npm install
npm run start
```

The API will be deployed on `http://localhost:3000/`

## Static Code Analysis

This Project use StandardJS, to run static code analysis simply run the following command :

```
npm run lint
```

## Unit Tests

This Project uses Mocha and Chai for unit testing, to run the tests simply run the following command :

```
npm run test:unit
```

## Integration Tests

This project uses Mocha and Supertest to run integration tests against the application : 

```
npm run test:integration
```

## CI / CD

- I used CodePipeline to manage the CI / CD.
- When a merge is done on master branch of the GitHub Repository, CodeBuild will run both unit and integration tests. 
- Then The project will be deployed on AWS Elastic Beanstalk.
- Beanstalk allow both blue/green deployment (thanks to the swap url option).
- The Beanstalk is set on High Availability setting so it will auto scale depending on Network metrics.
- When a new version of the application is deployed it will be rolled on different instances by batch of 30% and will proceed when health check are back to normal.
  
