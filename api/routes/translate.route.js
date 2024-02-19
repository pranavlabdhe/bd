
import express from 'express';
import { textToSpeechFun } from '../controllers/translate.controller.js';
const router = express.Router();
// // Enable CORS for all routes
// router.use(cors());
// const openaiClient = new openai.OpenAI({apiKey:'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'});
router.post('/textToSpeech', textToSpeechFun)
   
export default router;