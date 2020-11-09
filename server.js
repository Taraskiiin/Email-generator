// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");
// const convert = require("cyrillic-to-latin");
// const dns = require("dns");
// const server = require("http").Server(app);
// app.use(express.json());

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.get("/", (req, res) => {
//     const result = req.params.filter(el => {
//     const domain = req.split("@")[1];
//     dns.resolve(domain, "MX", function (err, addresses) {
//     if (err) {
//       return false;
//     } else if (addresses && addresses.length > 0) {
//       return el
//     }});
//   });
//   res.send(result);
// });

// app.post("/", (req, res) => {
//   console.log(req.body);
// });
// server.listen(666, (err) => {
//   if (err) {
//     throw Error(err);
//   }
//   console.log("Server was started!");
// });

// const rooms = new Map();

// app.get("/", (req, res) => {
//   const { id: roomId } = req.params;
//   const obj = rooms.has(roomId)
//     ? {
//         users: [...rooms.get(roomId).get("users").values()],
//         messages: [...rooms.get(roomId).get("messages").values()],
//       }
//     : { users: [], messages: [] };
//   res.json(obj);
// });

// app.post("/rooms", (req, res) => {
//   const { roomId, userName } = req.body;
//   if (!rooms.has(roomId)) {
//     rooms.set(
//       roomId,
//       new Map([
//         ["users", new Map()],
//         ["messages", []],
//       ])
//     );
//   }
//   res.send();
// });

