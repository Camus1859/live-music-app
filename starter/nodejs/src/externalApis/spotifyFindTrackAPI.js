import SpotifyWebApi from 'spotify-web-api-node';
import sendArtistAndTrackToCellService from './services/sendArtistAndTrackToCellService.js';

var spotifyApi = new SpotifyWebApi({
    clientId: `${process.env.SPOTIFY_API_ID}`,
    clientSecret: `${process.env.SPOTIFY_API_SECRET}`,
});

function useArtistToFindTrackAPI(artist, cellNumber, res, userData) {
    spotifyApi.clientCredentialsGrant().then(
        function (data) {
            spotifyApi.setAccessToken(data.body['access_token']);

            spotifyApi.searchArtists(artist).then(
                function (data) {
                    var artist = data.body.artists.items[0];
                    const artistImg =
                        data.body.artists.items[0]?.images[1]?.url;

                    console.log(artistImg);

                    if (typeof artist === 'undefined') {
                        userData.sms.message =
                            "We can't seem to find this artist, try again or try someone else?";

                        const artistData = {
                            artistInfo: {
                                name: '',
                                imgUrl: '',
                                genre: '',
                            },
                            concerts: [],
                            socialMediaLinks: {
                                twitter: '',
                                facebook: '',
                                instagram: '',
                            },
                        };

                        res.status(200).send({ ...userData, ...artistData });
                        console.log('Artist does not exist');
                        return;
                    }

                    spotifyApi.getArtistTopTracks(artist.id, 'US').then(
                        function (data) {
                            sendArtistAndTrackToCellService(
                                artist.name,
                                data.body.tracks[0],
                                res,
                                userData
                            );

                            userData.sms.message = `You have successfully sent ${data.body.tracks[0].name} to ${cellNumber}`;
                        },
                        function (err) {
                            console.error(err);
                        }
                    );
                },
                function (err) {
                    console.error(err);
                }
            );
        },
        function (err) {
            console.error(err);
        }
    );
}

export default useArtistToFindTrackAPI;
