const mysql = require('mysql');
const faker = require('faker');
const { promisify } = require('util');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Tetris99!',
    database: 'joinus_data'
});

const promisifedQuery = promisify(connection.query).bind(connection);

const runQuery = async() => {
    try {
        let data = await promisifedQuery('SELECT * FROM users');
        return data;
    } catch (error) {
        
}
    connection.end();
};

const addEmail = async email => {
    try {
        const queryStringAdd = `INSERT INTO users(email) VALUES ('${email}')`;
        let data = await promisifedQuery(queryStringAdd);
    } catch (error) {
    }
};

// const bulkadd = () => {
//     let people = [];
//     for (i =0; i < 500; i++) {
//         people.push([faker.internet.email(), faker.date.past()])
//     }
//     return people;
// }
addEmail();

module.exports = {
    runQuery,
    addEmail
};