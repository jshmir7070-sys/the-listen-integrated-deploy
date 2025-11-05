// 🚀 The Listen Cloudtype Node.js 서버
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// public 폴더 안의 정적 파일(index.html)을 연결
app.use(express.static(path.join(__dirname, "public")));

// 기본 경로("/")로 접근 시 index.html 반환
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`✅ The Listen Cloudtype Node.js 서버가 포트 ${PORT}에서 작동 중입니다!`);
});
