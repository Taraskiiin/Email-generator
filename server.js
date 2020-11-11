const express = require("express");
const cors = require('cors');
const app = express();
const server = require("http").Server(app);
const emailExists = require("email-exists");

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send();
});
app.post("/", (req, res) => {
  const { emails = [] } = req.body;
  const uniqEmails = new Set(emails);
  const validEmails = [];
  const requests = [...uniqEmails].map(
    (el) =>
      new Promise((resolve, reject) => {
        emailExists({
          sender: "taraskravets95@gmail.com",
          recipient: el,
        }).then((data) => { 
          if (data === "NOT_FOUND") {
            validEmails.push(el);
          }
          return resolve();
        }).catch(resolve);
      })
  );
  Promise.all(requests).then(() => res.json({ emails: validEmails }));
});
server.listen(9000, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log("Server was started!");
});
