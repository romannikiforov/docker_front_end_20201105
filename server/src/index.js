const path = require("path");
const express = require("express");

const port = 4000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello there");
});

app.listen(port, () => {
  console.log(`Listening ${port}`);
});



/*
const port = process.env.PORT;
const mongoUrl = process.env.DB_CONNECTION;

mongodb.MongoClient.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((client) => {
    const db = client.db(process.env.DB_NAME);

    app.set("db", db);

    app.get("/", (req, res) => {
      res.sendFile(path.join(__dirname, "index.html"));
    });
    app.get("/api/test", (req, res) => {
      res.json({ mes: "Hello from express" });
    });
    app.listen(port, () => console.log(`Running on localhost:${port}`));
  })
  .catch((err) => console.log("Error connect"));
*/