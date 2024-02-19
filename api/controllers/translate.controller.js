import OpenAI from "openai";
import { storage } from "../storage.js";
import dotenv from 'dotenv';
dotenv.config();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY});

export const textToSpeechFun = async (req, res, next) => {
    try {
        const { text } = req.body;

        // Generate speech using the ChatGPT API
        const mp3 = await openai.audio.speech.create({
            model: 'tts-1',
            voice: 'onyx',
            input: text,
        });

        console.log(mp3);

        // Check if the response contains the audio content
        if (!mp3) {
            throw new Error('Audio content not found in the response');
        }

        // Convert audio content to a Buffer
        // const audioBuffer = Buffer.from(response.audioContent, 'base64');
        const buffer = Buffer.from(await mp3.arrayBuffer());

        // Define the path to save the audio file in Firebase Storage
        const fileName = `${Date.now()}_speech.mp3`;
        const file = storage.file(fileName);

        // Upload the audio file to Firebase Storage
        await file.save(buffer, {
            metadata: {
                contentType: 'audio/mpeg',
            },
        });

        // Get the download URL of the uploaded audio file
        const [url] = await file.getSignedUrl({
            action: 'read',
            expires: '03-01-2500', // Optional expiration date for the URL
        });

        console.log('Audio file uploaded to Firebase Storage:', url);

        // Send the download URL back to the client
        res.json({ audioUrl: url });
    } catch (error) {
        console.error('Text-to-speech error:', error);
        res.status(500).json({ error: 'An error occurred during text-to-speech conversion' });
    }
};

  