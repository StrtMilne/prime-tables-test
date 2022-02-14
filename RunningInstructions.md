# Running Instruction for Prime Tables test

## Set-up

This application requires NodeJS to run. If you d not have Node on you machine please download it. For more information and to do so please visit: https://nodejs.org/en/download/.

Please clone this repository to your machine from GitHub.

In the terminal navigate to the folder you have cloned the repository to and run:

`npm i`

...to download relevant dependencies.

## To run the application

While in your route directory for the application, in the terminal, run:

`npm start`

This should open a browser window with the application running.

If it does not, please visit: [http://localhost:3000/].

You will be able to enter a positive integer

## Tests

To run unit tests, while in your route directory for the application and, in the terminal, run:

`npm run mocha-tests`

To run end-to-end tests while in your route directory for the application and, in the terminal, run:

`npm run cypress-tests`

# What I am pleased with and what I could improve/extend on

## Pleased

- TDD ensured that any logic errors in code could be found and rectified in a timely manner
- Code structured with single responsibility in mind so algorithms could be changed.
- Code structured so that it is readable without excessive commenting
- Fairly broad testing bases for unit and end-to-end testing
- Neat logic for producing matrix for table to display

## To improve

- Further unit and end-to-end testing to ensure code operates as intended in all cases
- More efficient means of calculating primes - probably using mathematical sieves
- Set up pipeline for CI/CD
- Improved styling with greater time
