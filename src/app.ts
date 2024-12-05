import express from "express";
import errorHandler from "./modules/Middlewares/errorHandler";
import routes from "./modules/Routes";

const app = express();

// parser
app.use(express.json());

app.use("/api/v1/", routes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(errorHandler);

export default app;
