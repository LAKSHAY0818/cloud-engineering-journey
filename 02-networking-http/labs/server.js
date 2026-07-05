const http = require("http");

const server = http.createServer((req, res) => {
  console.log("A request arrived!");
  console.log("Method:", req.method);
  console.log("URL:", req.url);

  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to Home Page");
  } else if (req.url === "/users") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Users: Lakshay, Harsh, Rahul");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is my first cloud learning API");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});