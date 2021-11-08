import { config } from 'dotenv';
config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
import twilio from 'twilio';
const client = twilio(accountSid, authToken);
import getArtistIdStringService from './services/getArtistIdStringService.js'


const sendArtistAndTrackAPI = (artist, track, res, userData) => {
    client.messages.create({
        to: `+1000000000`,
        from: '+12673968952',
        body: `${artist}'s top track: ${track.name}`,
    });
    getArtistIdStringService(artist, res, userData)
};

export default sendArtistAndTrackAPI