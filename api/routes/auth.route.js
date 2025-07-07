import express from 'express';
import { google, signin, signup, microsoft } from '../controllers/auth.controller.js';

const router = express.Router();


router.post('/signup', signup);
router.post('/signin', signin);
router.post('/google', google);
router.post('/microsoft', microsoft);

export default router;