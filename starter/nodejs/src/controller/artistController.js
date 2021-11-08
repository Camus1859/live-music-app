import useArtistToFindTrackAPI from '../externalApis/spotifyFindTrackAPI.js'

import { config } from 'dotenv';
config();


const getArtist = async (req, res) => {

    const userData = {
        sms: { message: '' },
    };

    const { artist, cellNumber } = req.body;

    useArtistToFindTrackAPI(artist, cellNumber, res, userData);
};

export { getArtist};
