var http = require("http");
// Create a server
http.createServer(function(request, response) {
  // Respond with the http code 200
  response.writeHead(200, {'Content-Type': 'text/plain'});
  // Send the string as the body of the response
  response.end('Hello World, my name is Avelina Kim');
}).listen(8001);