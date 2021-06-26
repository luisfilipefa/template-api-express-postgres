# API Template Express | Postgresql | TypeORM | JWT Auth | Docker

## **How to use**

- Click use template/Clone the repo/Fork the repo;
- Install the project dependencies with `yarn`;
- Create a copy of `.env.example` as `.env` containing the variable `JWT_SECRET` with your own secret;

## **Dependencies**

- Node: >14.17;
- Docker: >20.10.7;
- Docker-compose: >1.29.2;

If you dont want to download and install Node, you can set it up using a custom docker image and build it in the docker-compose file.

**OBS**: If you decide to run the server as a docker container too, you can run into a few problems with folders permissions when using TypeORM cli.

## **How to setup**

### TypeORM

TypeORM config file can be found on the project root as `ormconfig.ts`. You can update this file with your own db info. By default it uses the docker setup (docker-compose).

### Docker

There is a docker-compose file in the root of the project with the basics settings for a database using Postgresql, you can update it to suit your needs.

## **Scripts**

- Development mode: `yarn dev`;
- Production mode: `yarn start`;
- Build: `yarn build`;
- TypeORM CLI: `yarn typeorm`;
