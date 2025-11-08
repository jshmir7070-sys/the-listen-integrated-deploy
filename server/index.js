import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
const PORT = process.env.PORT || 4000;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// ✅ 기본 홈 테스트
app.get("/", (req, res) => {
  res.send("🚚 The Listen AI Logistics Server Running...");
});

// ✅ AI 챗봇
app.post("/api/ai/chat", async (req, res) => {
  try {
    const { message } = req.body;
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: message }],
    });
    res.json({ reply: completion.choices[0].message.content });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "AI 응답 실패" });
  }
});

// ✅ 화물추적 (샘플)
app.get("/api/tracking/:waybill", (req, res) => {
  const { waybill } = req.params;
  res.json({
    waybill,
    sender: "서울 풀필먼트센터",
    receiver: "시흥 조남동 고객",
    status: "배송중",
    estimatedArrival: "오늘 23:00",
  });
});

app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));

