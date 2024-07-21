This is a base node js project template,which anyone can use as it has been prepared,by keeping some of the most important code priciples and project management recommendations.Feel free to change anything

---'src' -> Inside the src folder all the actual src source code regarding the project will reside,this will not include any kind of tests.(You might want to make seperate tests folder)


lets take a look inside the 'src' folder

--- 'config' -> In this folder anything and everything regarding any configurations ar setup of a library or module will be done. For Example:setting the 'dotenv' 


_________________________________________________________________________________________________________________________
Sequelize CLI [Node: 10.21.0, CLI: 6.0.0, ORM: 6.1.0]                                                                    |

sequelize <command>

Commands:
  sequelize db:migrate                        Run pending migrations
  sequelize db:migrate:schema:timestamps:add  Update migration table to have timestamps
  sequelize db:migrate:status                 List the status of all migrations
  sequelize db:migrate:undo                   Reverts a migration
  sequelize db:migrate:undo:all               Revert all migrations ran
  sequelize db:seed                           Run specified seeder
  sequelize db:seed:undo                      Deletes data from the database
  sequelize db:seed:all                       Run every seeder
  sequelize db:seed:undo:all                  Deletes data from the database
  sequelize db:create                         Create database specified by configuration
  sequelize db:drop                           Drop database specified by configuration
  sequelize init                              Initializes project
  sequelize init:config                       Initializes configuration
  sequelize init:migrations                   Initializes migrations
  sequelize init:models                       Initializes models
  sequelize init:seeders                      Initializes seeders
  sequelize migration:generate                Generates a new migration file      [aliases: migration:create]
  sequelize model:generate                    Generates a model and its migration [aliases: model:create]
  sequelize seed:generate                     Generates a new seed file           [aliases: seed:create]

Options:
  --version  Show version number                                                  [boolean]
  --help     Show help                                                            [boolean]

Please specify a command
__________________________________________________________________________________________________________________________

Inside the src/config folder create a file named as `config.json` and the following code:


{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}


if you are setting up your development environment,write the name of ur username and password of db and in dialect mention whatever ur db ur using ex: myslq/mongodb...
if you re setting up ur test environment put accodring to it....