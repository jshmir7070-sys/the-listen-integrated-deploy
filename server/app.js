import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { router as waybillRouter } from './routes/waybill.js';
import { router as deliveryRouter } from './routes/delivery.js';
import { router as aiRouter } from './routes/ai.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 라우트 연결
app.use('/api/waybill', waybillRouter);
app.use('/api/delivery', deliveryRouter);
app.use('/api/ai', aiRouter);

// 서버 시작
app.listen(4000, () => console.log('🚀 The Listen Server running on port 4000'));

