import express from 'express';
import {
  deleteUser,
  getUser,
  getUsers,
  signout,
  test,
  updateUser,
} from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/test', test);
router.put('/update/:userId', verifyToken, updateUser);
router.delete('/delete/:userId', verifyToken, deleteUser);
router.post('/signout', signout);
router.get('/getusers', verifyToken, getUsers);
router.get('/:userId', getUser);

export default router;
// const openaiClient = new openai.OpenAI({apiKey:'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'});
// export const translateFun = async (req, res, next) => {
//     try {
//         const { text, source_language, target_language } = req.body;
    
//         // Perform translation using the OpenAI API
//         const translation = await openaiClient.translation({
//           engine: 'text-davinci-002',
//           source_language,
//           target_language,
//           text,
//         });
    
//         res.json({ translated_text: translation.data.translations[0].translated_text });
//       } catch (error) {
//         console.error('Translation error:', error);
//         res.status(500).json({ error: 'An error occurred during translation' });
//       }
//     }