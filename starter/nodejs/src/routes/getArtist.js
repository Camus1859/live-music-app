import { config } from 'dotenv';
config();

import express from 'express';
const router = new express.Router();

import { getArtist } from '../controller/artistController.js';

router.post('/', getArtist);

export default router;
