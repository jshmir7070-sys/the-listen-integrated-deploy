const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// 정적 파일(public 폴더)
app.use(express.static(path.join(__dirname, "public")));

// 루트 페이지 -> 로그인 화면
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// 로그인 처리 (간단히 구현)
app.get("/login", (req, res) => {
  res.redirect("/main.html"); // 로그인 후 메인화면 이동
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`🚀 The Listen 서버가 포트 ${PORT}에서 실행 중입니다.`);
});
