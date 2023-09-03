import { Express } from "express";

const useRouter = (app: Express) => {
  app.use("/api", require("./routes"));
};

module.exports = useRouter;
