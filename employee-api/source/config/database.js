

const { Poll } = require('pg');

const dotenv = require('dotenv');

dotenv.config();

// => conexão com a base de dados
const poll = new Poll({
    conn
})