export default {
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "docker",
  "password": "docker",
  "database": "docker",
  "migrations": ["./src/config/database/migrations/*.ts"],
  "entities": ["./src/models/*.ts"],
  "cli": {
    "entitiesDir": "./src/models",
    "migrationsDir": "./src/config/database/migrations"
  }
}
