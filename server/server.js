require("dotenv").config({ path: "config/config.env" });
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const helmet = require("helmet");
const connectDatabase = require("./config/database");

process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "https://ngositereact.netlify.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
  })
);

connectDatabase();

const user = require("./routes/userRoute");
const child = require("./routes/childRoute");
const school = require("./routes/schoolRoute");
const scheme = require("./routes/schemeRoute");
const session = require("express-session");

app.use("/api/v1", user);
app.use("/api/v1", child);
app.use("/api/v1", school);
app.use("/api/v1", scheme);

app.listen(process.env.PORT, () => {
  console.log(
    `Server is working on http://localhost:${process.env.PORT || 5000}`
  );
});
