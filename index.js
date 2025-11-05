const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// 정적 파일
app.use(express.static(path.join(__dirname, "public")));

// 라우팅
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/main", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "main.html"));
});

app.get("/map", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "map.html"));
});

app.listen(PORT, () => {
  console.log(`🚀 The Listen 서버가 포트 ${PORT}에서 실행 중입니다.`);
});
