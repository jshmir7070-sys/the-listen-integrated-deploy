// 🚀 The Listen Cloudtype 서버 구동 코드
const express = require('express');
const app = express();

// Cloudtype이 자동으로 할당하는 포트 사용 (없으면 3000번)
const PORT = process.env.PORT || 3000;

// 기본 페이지 테스트용
app.get('/', (req, res) => {
  res.send('✅ The Listen Cloudtype Node.js 서버가 정상 작동 중입니다!');
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
