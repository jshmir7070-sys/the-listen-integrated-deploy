import express from 'express';
import OpenAI from 'openai';
export const router = express.Router();

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY///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 });

router.post('/chat', async (req, res) => {
  const { message } = req.body;
  const completion = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: message }]
  });
  res.json({ reply: completion.choices[0].message.content });
});

