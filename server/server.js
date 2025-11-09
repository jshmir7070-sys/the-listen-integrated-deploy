// server/server.js
import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const dataPath = path.join(process.cwd(), "data.json");

// 데이터 초기화
if (!fs.existsSync(dataPath)) fs.writeFileSync(dataPath, JSON.stringify({ partners: [], drivers: [] }, null, 2));

// 모든 데이터 불러오기
app.get("/api/data", (req, res) => {
  const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));
  res.json(data);
});

// 파트너 등록
app.post("/api/partners", (req, res) => {
  const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));
  data.partners.push(req.body);
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
  res.json({ ok: true });
});

// 기사 등록
app.post("/api/drivers", (req, res) => {
  const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));
  data.drivers.push(req.body);
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
  res.json({ ok: true });
});

app.listen(PORT, () => console.log(`🚀 서버 실행 중: http://localhost:${PORT}`));
