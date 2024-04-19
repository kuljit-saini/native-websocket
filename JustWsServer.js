//ws module
// Note: This module does not work in the browser.
const http = require("http");
//3rd party module
const websocket = require("ws");

const server = http.createServer((req, res) => {
  res.end("I am connected");
});

//create a websocket server
const wss = new websocket.Server({ server }); //server which want to listen to
//the websocket is listening to the trafic on the server cerated at the port 8000
wss.on("headers", (Headers, req) => {
  console.log(Headers);
});
//this on event will show the headers in the array it is emitted before the responses are sent to the socketc

server.listen(8000);
