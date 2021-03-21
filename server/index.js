const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./db");
const articleRouter = require("./routes/article-router");
const userRouter = require("./routes/user-router");

const app = express();
const apiPort = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/api", articleRouter);
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));

// app.use(express.static(__dirname));
// var session = require("express-session");

// const MongoStore = require("connect-mongo")(session);
// const sessionStore = new MongoStore({
//   mongooseConnection: db,
//   collections: "sessions",
// });

// app.use(
//   session({
//     secret: "secretKey",
//     cookie: { maxAge: 24 * 60 * 60 * 1000 },
//     resave: false,
//     store: sessionStore,
//     saveUninitialized: true,
//     cookie: { secure: true },
//   })
// );
