import express from "express";
import * as fs from "fs";
import moment from "moment-timezone";
import cors from "cors";

const app: express.Express = express();
let datas: any;

app.get("/", cors(), (req: express.Request, res: express.Response) => {
  return res.send("Communication successful!");
});

app.get(
  "/data",
  cors(),
  async (req: express.Request, res: express.Response) => {
    try {
      datas = await JSON.parse(fs.readFileSync("./json/profile.json", "utf-8"));
      datas.acquisition_time = moment()
        .tz("Asia/Tokyo")
        .format("YYYY-MM/DD hh:mm:ss");
    } catch (e) {
      datas = ["データ取得エラー！", e];
    }
    return res.send(JSON.stringify(datas));
  }
);

app.listen(3000);

console.log(`Server runnning -> http://127.0.0.1:3000`);

export default app;
