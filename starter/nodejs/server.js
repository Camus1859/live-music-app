import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
config();
import getArtistSendToCell from './src/routes/getArtist.js';

const app = express();

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

app.use(express.json({ extended: true }));

const PORT = process.env.PORT || 5000;

app.use('/getArtistSendToCell', getArtistSendToCell);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    });
}

app.listen(PORT, () => {
    console.log('server started on port 5000');
});
