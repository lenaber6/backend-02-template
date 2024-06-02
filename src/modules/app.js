const http = require('http');

const server = http.createServer((request, response) => {


});

server.listen(3003, () => {
    console.log("Сервер запущен по адресу http://127.0.0.1:3003");
})
