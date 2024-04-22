import OpenAI from "openai";
import { storage } from "../storage.js";
import dotenv from 'dotenv';
dotenv.config();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY});

export const summaryFun = async (req, res, next) => {
    try {
        const { content } = req.body;
        const prompt = `Summarise the following article:${content}`
        const response = await openai.chat.completions.create({
            messages: [
                {
                    role: 'user',
                    content: prompt,
                    
                }
            ],
            model: 'gpt-3.5-turbo',
        });
        const summary = response.choices[0].message.content;
        console.log(summary);
        res.status(200).json({ summary });


    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to summarize content' });
    }
};
  