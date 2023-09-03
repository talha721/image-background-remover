// ** Express
import express, { Express } from "express";

const app: Express = express();

// ** Router
const useRouter = require("./apis");

const port: number = 3000;

useRouter(app);

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
