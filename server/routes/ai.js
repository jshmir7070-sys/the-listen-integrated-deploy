import express from 'express';
import OpenAI from 'openai';
export const router = express.Router();

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.post('/chat', async (req, res) => {
  const { message } = req.body;
  const completion = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: message }]
  });
  res.json({ reply: completion.choices[0].message.content });
});

