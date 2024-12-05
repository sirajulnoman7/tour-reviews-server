import mongoose from "mongoose";
import app from "./app";
import config from "./config";

const Server = async () => {
  try {
    await mongoose.connect(config.DB_URL as string);
    app.listen(config.PORT, () => {
      console.log(`tour server listening at port ${config.PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

Server();
