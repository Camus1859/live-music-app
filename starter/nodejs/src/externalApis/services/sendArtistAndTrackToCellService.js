import  sendArtistAndTrackAPI  from '../twilioTextMessageAPI.js';

const sendArtistAndTrackToCellService = (artist, track, res, userData) => {
    sendArtistAndTrackAPI(artist, track, res, userData);
};

export default sendArtistAndTrackToCellService
