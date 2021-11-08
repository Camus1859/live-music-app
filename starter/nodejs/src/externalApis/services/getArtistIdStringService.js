import useArtistToFindArtistIdAPI from '../ticketMasterArtistStringAPI.js'

const getArtistIdStringService = (artist, res, userData) => {
    useArtistToFindArtistIdAPI(artist, res, userData)
}

export default getArtistIdStringService