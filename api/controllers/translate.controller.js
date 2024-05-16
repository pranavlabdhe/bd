// import OpenAI from "openai";
// import { storage } from "../storage.js";
// import dotenv from 'dotenv';
// dotenv.config();
// const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY});

// export const textToSpeechFun = async (req, res, next) => {
//     try {
        
//         const { text } = req.body;

//         // Generate speech using the ChatGPT API
//         const mp3 = await openai.audio.speech.create({
//             model: 'tts-1',
//             voice: 'onyx',
//             input: text,
//         });

//         console.log(mp3);

//         // Check if the response contains the audio content
//         if (!mp3) {
//             throw new Error('Audio content not found in the response');
//         }

//         // Convert audio content to a Buffer
//         // const audioBuffer = Buffer.from(response.audioContent, 'base64');
//         const buffer = Buffer.from(await mp3.arrayBuffer());

//         // Define the path to save the audio file in Firebase Storage
//         const fileName = `${Date.now()}_speech.mp3`;
//         const file = storage.file(fileName);

//         // Upload the audio file to Firebase Storage
//         await file.save(buffer, {
//             metadata: {
//                 contentType: 'audio/mpeg',
//             },
//         });

//         // Get the download URL of the uploaded audio file
//         const [url] = await file.getSignedUrl({
//             action: 'read',
//             expires: '03-01-2500', // Optional expiration date for the URL
//         });

//         console.log('Audio file uploaded to Firebase Storage:', url);

//         // Send the download URL back to the client
//         res.json({ audioUrl: url });
//     } catch (error) {
//         console.error('Text-to-speech error:', error);
//         res.status(500).json({ error: 'An error occurred during text-to-speech conversion' });
//     }
// };

  
// import fetch from 'node-fetch'; // Import fetch for making HTTP requests
// import dotenv from 'dotenv'; // Import dotenv for environment variable management
// dotenv.config();

// export const textToSpeechFun = async (req, res, next) => {
//     try {
//         const { text } = req.body;

//         const url = 'https://api.play.ht/api/v2/tts'; // PlayHT API endpoint
//         const options = {
//             method: 'POST',
//             headers: {
//                 'accept': 'text/event-stream',
//                 'content-type': 'application/json',
//                 'AUTHORIZATION': 'a09d9506e102456998451d4510dcc4b2', // Use your PlayHT API key here
//                 'X-USER-ID': 'df710HqT5sdlmx97Pj5sPrAXodw2', // Use your PlayHT User ID here
//             },
//             body: JSON.stringify({
//                 text: text,
//                 voice: 's3://voice-cloning-zero-shot/d9ff78ba-d016-47f6-b0ef-dd630f59414e/female-cs/manifest.json',
//                 output_format: 'mp3',
//                 voice_engine: 'PlayHT2.0'
//             })
//         };

//         // Make the request to PlayHT API
//         const response = await fetch(url, options);
        
//         // Check if the request was successful
//         if (!response.ok) {
//             throw new Error('Failed to convert text to speech');
//         }

//         // Log the response body before parsing it as JSON
//         const responseBody = await response.text();
//         console.log('Response from PlayHT API:', responseBody);

//         // Parse the response JSON
//         const json = JSON.parse(responseBody);

//         // Check if the response contains the audio URL
//         if (!json || !json.audio_url) {
//             throw new Error('Audio URL not found in the response');
//         }

//         // Send the audio URL back to the client
//         res.json({ audioUrl: json.audio_url, event: 'completed' });
//     } catch (error) {
//         console.error('Text-to-speech error:', error);
//         res.status(500).json({ error: 'An error occurred during text-to-speech conversion' });
//     }
// };

// const fetch = require('node-fetch')
// export const textToSpeechFun = async (req, res, next) => {
//     try {
//         const { text } = req.body;

//         const url = 'https://api.play.ht/api/v2/tts'; // PlayHT API endpoint
//         const options = {
//             method: 'POST',
//             headers: {
//                 'accept': 'text/event-stream',
//                 'content-type': 'application/json',
//                 'AUTHORIZATION': 'a09d9506e102456998451d4510dcc4b2', // Use your PlayHT API key here
//                 'X-USER-ID': 'df710HqT5sdlmx97Pj5sPrAXodw2', // Use your PlayHT User ID here
//             },
//             body: JSON.stringify({
//                 text: text,
//                 voice: 's3://voice-cloning-zero-shot/d9ff78ba-d016-47f6-b0ef-dd630f59414e/female-cs/manifest.json',
//                 output_format: 'mp3',
//                 voice_engine: 'PlayHT2.0'
//             })
//         };

//         // Make the request to PlayHT API
//         const response = await fetch(url, options);
        
//         // Check if the request was successful
//         if (!response.ok) {
//             throw new Error('Failed to convert text to speech');
//         }

//         // Process the response as a stream of events
//         const reader = response.body.getReader();
//         let buffer = '';
//         while (true) {
//             const { done, value } = await reader.read();
//             if (done) break;
//             buffer += new TextDecoder('utf-8').decode(value);
//             const parts = buffer.split('\n\n'); // Split events by double newline
//             for (const part of parts.slice(0, -1)) {
//                 const lines = part.split('\n');
//                 for (const line of lines) {
//                     if (line.startsWith('data:')) {
//                         const eventData = line.substring(6).trim();
//                         try {
//                             const json = JSON.parse(eventData);
//                             console.log('JSON response:', json);
//                             console.log('JSON response:', buffer);

//                             // Check if the response contains the audio URL
//                             if (json && json.url) {
//                                 // Send the audio URL back to the client
//                                 return res.json({ audioUrl: json.url });
//                             }
//                         } catch (error) {
//                             console.error('Error parsing JSON:', error);
//                         }
//                     }
//                 }
//             }
//             buffer = parts.slice(-1)[0];
//         }

//         // If no audio URL was found in the response
//         throw new Error('Audio URL not found in the response');
//     } catch (error) {
//         console.error('Text-to-speech error:', error);
//         res.status(500).json({ error: 'An error occurred during text-to-speech conversion' });
//     }
// };

// import fetch from 'node-fetch';

// export const textToSpeechFun = async (req, res, next) => {
//     try {
//         const { text } = req.body;

//         const url = 'https://api.play.ht/api/v2/tts'; // PlayHT API endpoint
//         const options = {
//             method: 'POST',
//             headers: {
//                 'accept': 'text/event-stream',
//                 'content-type': 'application/json',
//                 'AUTHORIZATION': 'oUF4bXqLEwXGffN6CkNVgl6Uqoc2', // Use your PlayHT API key here
//                 'X-USER-ID': 'oUF4bXqLEwXGffN6CkNVgl6Uqoc2', // Use your PlayHT User ID here
//             },
//             body: JSON.stringify({
//                 text: text,
//                 voice: 's3://voice-cloning-zero-shot/d9ff78ba-d016-47f6-b0ef-dd630f59414e/female-cs/manifest.json',
//                 output_format: 'mp3',
//                 voice_engine: 'PlayHT2.0'
//             })
//         };

//         // Make the request to PlayHT API
//         const response = await fetch(url, options);
        
//         // Check if the request was successful
//         if (!response.ok) {
//             throw new Error('Failed to convert text to speech');
//         }

//         // Read the response text
//         const responseBody = await response.text();
//         console.log('Response from PlayHT API:', responseBody);

//         // Parse the response as JSON
//         const lines = responseBody.split('\n');
//         for (const line of lines) {
//             if (line.startsWith('data:')) {
//                 const eventData = line.substring(6).trim();
//                 try {
//                     const json = JSON.parse(eventData);
//                     console.log('JSON response:', json); // Log the JSON response
//                     // Check if the response contains the audio URL
//                     if (json && json.url) {
//                         // Send the audio URL back to the client
//                         return res.json({ audioUrl: json.url });
//                     }
//                 } catch (error) {
//                     console.error('Error parsing JSON:', error);
//                 }
//             }
//         }

//         // If no audio URL was found in the response
//         throw new Error('Audio URL not found in the response');
//     } catch (error) {
//         console.error('Text-to-speech error:', error);
//         res.status(500).json({ error: 'An error occurred during text-to-speech conversion' });
//     }
// };

import fetch from 'node-fetch';

export const textToSpeechFun = async (req, res, next) => {
    try {
        const { text } = req.body;

        const url = 'https://api.play.ht/api/v2/tts'; // PlayHT API endpoint
        const options = {
            method: 'POST',
            headers: {
                'accept': 'text/event-stream',
                'content-type': 'application/json',
                // 
                'AUTHORIZATION': 'a6e169867ee5447a8a1c4f6bf58ec237', // Use your PlayHT API key here
                'X-USER-ID': 'oUF4bXqLEwXGffN6CkNVgl6Uqoc2', // Use your PlayHT User ID here
            },
            body: JSON.stringify({
                text: text,
                voice: 's3://voice-cloning-zero-shot/d9ff78ba-d016-47f6-b0ef-dd630f59414e/female-cs/manifest.json',
                output_format: 'mp3',
                voice_engine: 'PlayHT2.0'
            })
        };

        // Make the request to PlayHT API
        const response = await fetch(url, options);
        console.log(response)
        // Check if the request was successful  
        if (!response.ok) {
            throw new Error('Failed to convert text to speech');
        }

        // Read the response text
        const responseBody = await response.text();
        console.log('Response from PlayHT API:', responseBody);

        // Parse the response as JSON
        const lines = responseBody.split('\n');
        for (const line of lines) {
            if (line.startsWith('data:')) {
                const eventData = line.substring(6).trim();
                try {
                    const json = JSON.parse(eventData);
                    console.log('JSON response:', json); // Log the JSON response
                    // Check if the response contains the audio URL
                    if (json && json.url) {
                        // Send the audio URL back to the client
                        return res.json({ audioUrl: json.url });
                    }
                } catch (error) {
                    console.error('Error parsing JSON:', error);
                }
            }
        }

        // If no audio URL was found in the response
        throw new Error('Audio URL not found in the response');
    } catch (error) {
        console.error('Text-to-speech error:', error);
        res.status(500).json({ error: 'An error occurred during text-to-speech conversion' });
    }
};
