var SpotifyWebApi = require('spotify-web-api-node');
var twilio = require('twilio');
require('dotenv').config();


var spotifyApi = new SpotifyWebApi({
  clientId: `${SPOTIFY_API_ID}`,
  clientSecret: `${SPOTIFY_API_SECRET}`
});

var twilioClient = new twilio(`${TWILIO_API_ONE}`, `${TWILIO_API_TWO}`);

var textTrack = function(client, artist, track) {
  var body = `${artist.name}'s top track: ${track.name}`;

  client.api.account.messages.create({
    from: '+18574454093',
    to: '8889157768',
    body: body
  });

  console.log('Texted 8889157768');
};

spotifyApi.clientCredentialsGrant()
  .then(function(data) {
    spotifyApi.setAccessToken(data.body['access_token']);

    spotifyApi.searchArtists('Justin Bieber')
      .then(function(data) {
        var artist = data.body.artists.items[0];

        spotifyApi.getArtistTopTracks(artist.id, 'US')
          .then(function(data) {
            textTrack(twilioClient, artist, data.body.tracks[0]);
          }, function(err) {
            console.error(err);
          });
      }, function(err){
        console.error(err);
      });

  }, function(err) {
    console.error(err);
  });
