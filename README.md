## HapiJS + Juggling ORM (mongoDB)

Elementary MVC structure based on HapiJS Framework + Juggling ORM for mongoDB

This example just shows raw users datas. Only `READ`, no `CREATE`, `UPDATE` or `DELETE`
To check mysql connection go to `config/connections.js` and follow instructions

#### Prerequisites

- Node 8.9
- HapiJS 17.2.2
- Jugglingdb 2.0.0-rc8

#### How do I start?

1. Clone this repository
2. `npm install`
3. Create mongoDB database called `juggling_orm` and user
4. Set user and password to connect with your mongoDB database in the following file `config/connections.js`
5. Run mongo_db_utils.js file `node mongo_db_utils.js` to create users collection and insert some users
6. `npm start`
7. Browse to http://localhost:8000/users (or whatever your port is)
