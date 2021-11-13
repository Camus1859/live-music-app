import { config } from 'dotenv';
config();
const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
import twilio from 'twilio';
const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
import getArtistIdStringService from './services/getArtistIdStringService.js'


const sendArtistAndTrackAPI = (cellNumber, artist, track, res, userData) => {
    client.messages.create({
        to: `1${cellNumber}`,
        from: '+12673968952',
        body: `${artist}'s top track: ${track.name}`,
    });
    getArtistIdStringService(artist, res, userData)
};

export default sendArtistAndTrackAPI