const http = require("http");
const getUsers = require("./modules/users");

// const url = new URL(request.url, 'http://127.0.0.1');
// console.log(url);
// console.log(url.searchParams);

// const hostname = '127.0.0.1';
// const port = 3000;
const server = http.createServer((request, response) => {
    if (request.url === "/users") {
        response.status = 200;
        response.statusMessage = "OK";
        response.header = "Content-type: application/json";
        response.write(getUsers());
        response.end();
    
        return;
      };
      
  if (request.url === "/hello=name") {
    response.status = 200;
    response.statusMessage = "OK";
    response.header = "Content-type: text/plain";
    response.write("Hello, .");
    response.end();
  }

  if (request.url === "/hello") {
    response.status = 400;
    response.statusMessage = "OK";
    response.header = "Content-type: text/plain";
    response.write("Enter a name");
    response.end();
  }

  if (request.url === "/") {
    response.status = 500;
    response.statusMessage = "OK";
    response.header = "Content-type: text/plain";
    response.write("");
    response.end();
  } else {
  response.status = 200;
  response.statusMessage = "OK";
  response.header = "Content-type: text/plain";
  response.write("Hello, World!");
  response.end();
  };
});

server.listen(3003, () => {
  // console.log("Сервер запущен по адресу http://${hostname}:${port}/")
  console.log("Сервер запущен по адресу http://127.0.0.1:3003");
});
