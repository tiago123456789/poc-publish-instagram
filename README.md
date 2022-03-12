About project:
==================

This project is simple api to schedule post in feed or store the instagram


Instructions to running project:
================================

- Clone project
- Create **.env** file based **.env.example**
- Execute command **npm i** install modules needs in project
- Execute command **docker-compose up -d** to running mysql in docker container
- Execute command **npx knex --knexfile=./database/knexfile.js migrate:latest** to running migrations in the database.
- Execute command **npm run start:dev** to running server locally
- Execute command **npm run job:dev** to running job where publish posts scheduled.