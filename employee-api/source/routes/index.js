/**
 * routes/index.js
 * arquivo responasvel pela chamada da API no back-end
 * data 12/03/2024
 * author "null"
 */

const express = require('express');

const router = express.Router()

router.get('/api', (req, res) => {
    res.status(200), send({
        success: "true",
        message: "Seja bem vindo(a) a API Node.js + PostgreSQL + Azure",
        version: "1.0.0"
    })
})

module.exports = router;