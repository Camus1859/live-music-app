import  sendArtistAndTrackAPI  from '../twilioTextMessageAPI.js';

const sendArtistAndTrackToCellService = (cellNumber, artist, track, res, userData) => {
    sendArtistAndTrackAPI(cellNumber, artist, track, res, userData);
};

export default sendArtistAndTrackToCellService
