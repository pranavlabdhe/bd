import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { create, deletepost, getposts, updatepost,getpostsOfUser, allPost } from '../controllers/post.controller.js';

const router = express.Router();

router.post('/create', verifyToken, create)
router.get('/getposts', getposts)
router.get('/adminposts', allPost)
router.get('/posts/:userId', getpostsOfUser)


router.delete('/deletepost/:postId/:userId', verifyToken, deletepost)
router.put('/updatepost/:postId/:userId', verifyToken, updatepost)


export default router;