// establishes a connection with the game server
const net = require("net")
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });

  conn.write("Name: MyS");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

   conn.on("data", () => {
     console.log("Name: MYS");
   });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;