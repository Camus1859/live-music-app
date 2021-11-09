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
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }


  const corsOptions = {
    origin: function (origin, callback) {
      console.log("** Origin of request " + origin)
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        console.log("Origin acceptable")
        callback(null, true)
      } else {
        console.log("Origin rejected")
        callback(new Error('Not allowed by CORS'))
      }
    }
  }
  app.use(cors(corsOptions))


  

app.listen(PORT, () => {
    console.log('server started on port 5000');
});
