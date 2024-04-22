
import express from 'express';
import { summaryFun } from '../controllers/summary.controller.js';
const router = express.Router();
// // Enable CORS for all routes
// router.use(cors());

router.post('/summary', summaryFun)
   
export default router;