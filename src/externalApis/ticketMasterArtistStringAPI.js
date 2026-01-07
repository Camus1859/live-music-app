
import { config } from 'dotenv';
config();

import getArtistVenueService from './services/getArtistVenueService.js'
import fetch from 'node-fetch';




const getArtistDataObj = () => {
    const artistData = {
        artistInfo: {
            name: '',
            imgUrl: '',
            genre: '',
        },
        concerts: [],
        socialMediaLinks: { twitter: '', facebook: '', instagram: '' },
    };

    return artistData;
};

const useArtistToFindArtistIdAPI = async (artist, res, userData) => {
    const url = `https://app.ticketmaster.com/discovery/v2/attractions.json?keyword=${encodeURIComponent(artist)}&apikey=${process.env.TICKET_MASTER_API}`;

    const response = await fetch(url);

    const artistObj = await response.json();

    const artistData = getArtistDataObj()

    if (!artistObj._embedded || !artistObj._embedded.attractions || artistObj._embedded.attractions.length === 0) {
        userData.sms.message = "No concert info found for this artist on Ticketmaster.";
        const result = { ...userData, ...artistData };
        res.status(200).send(result);
        return;
    }

    if (artistObj._embedded.attractions[0].upcomingEvents._total === 0) {
        artistData.artistInfo.name =
            artistObj._embedded.attractions[0].name;
        artistData.artistInfo.imgUrl =
            artistObj._embedded.attractions[0].images[1].url;
        artistData.artistInfo.genre =
            artistObj._embedded.attractions[3]?.classifications[0].genre.name;
        // userData.tourInfo.isNotTouring.push(artistData.artistInfo);
        const result = { ...userData, ...artistData };
        res.status(200).send(result);
        return;
    }

    const artistId = artistObj._embedded.attractions[0].id;


    getArtistVenueService(artist, artistId, res, userData)
};

export default useArtistToFindArtistIdAPI