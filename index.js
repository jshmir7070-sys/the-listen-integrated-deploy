import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <h2>🚀 The Listen Cloudtype 서버 정상 실행 중</h2>
    <p>Kakao / Supabase 키 정상 등록됨</p>
  `);
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
