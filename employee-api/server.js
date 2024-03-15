const app = require('./source/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('aplicação sendo executada na porta', port)
})