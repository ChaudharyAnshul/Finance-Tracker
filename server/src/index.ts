import express, { Express }  from "express";
import mongoose from "mongoose";
import * as dotenv from 'dotenv';
import financialRecordRouter from "./routes/financial-records";

dotenv.config({ path: '.env.local' });

const app: Express = express();
const port = process.env.PORT || 3001;
const dbPass = process.env.MONGO_URI || "";

app.use(express.json());

const mongoURI: string = dbPass;

mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected To MongoDB!"))
  .catch((err) => console.error("Failed to Connect to MongoDB!", err))

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`);
  });