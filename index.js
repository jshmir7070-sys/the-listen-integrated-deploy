const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// public 폴더 정적 경로 등록
app.use(express.static(path.join(__dirname, "public")));

// 기본 페이지 (로그인 화면)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// 로그인 처리 (임시 테스트용)
app.get("/login", (req, res) => {
  console.log("✅ 로그인 요청 도착");
  res.send(`<script>alert('로그인 성공! 다음 단계로 이동합니다.'); window.location.href='/main';</script>`);
});

// 메인 화면 경로
app.get("/main", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "main.html"));
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`🚀 The Listen 서버가 포트 ${PORT}에서 실행 중입니다.`);
});
