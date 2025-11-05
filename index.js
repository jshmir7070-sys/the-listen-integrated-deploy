const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// 정적 파일 제공
app.use(express.static(path.join(__dirname, "public")));

// 기본 페이지 (로그인)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// 로그인 후 메인 이동
app.get("/main", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "main.html"));
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`🚀 The Listen 서버가 포트 ${PORT}에서 실행 중입니다.`);
});
