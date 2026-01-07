import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
config();

import path from 'path';
import getArtistSendToCell from './src/routes/getArtist.js';

const app = express();

const __dirname = path.resolve();

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

app.use(express.json({ extended: true }));

const PORT = process.env.PORT || 5001;

app.use('/getArtistSendToCell', getArtistSendToCell);

    app.use(express.static(path.join(__dirname , '/client/build/')));
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname + '/client/build/index.html'));
    });

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});
