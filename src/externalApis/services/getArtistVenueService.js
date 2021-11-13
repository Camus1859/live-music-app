import useArtistIdToFindVenueAPI from '../ticketMasterVenueAPI.js';

const getArtistVenueService = async (artist, artistId, res, userData) => {
    useArtistIdToFindVenueAPI(artist, artistId, res, userData);
};

export default getArtistVenueService
