import express from "express";
import axios from "axios";

const app: express.Express = express();
let datas: object;

app.get("/", (req: express.Request, res: express.Response) => {
  return res.send("Communication successful!");
});

app.get("/data", async (req: express.Request, res: express.Response) => {
  try {
    const res = await axios.get("./../json/profile.json").then((response) => {
      datas = response.data;
    });
  } catch (e) {
    datas = ["データ取得エラー！", e];
  }
  return res.send(JSON.stringify(datas));
});

app.listen(3000);

console.log(`Server runnning -> http://127.0.0.1:3000`);

export default app;
