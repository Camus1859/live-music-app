var SpotifyWebApi = require('spotify-web-api-node');
var twilio = require('twilio');

var spotifyApi = new SpotifyWebApi({
  clientId: '28d9eff5d0aa4471b7f4a9e8278c1043',
  clientSecret: '839540f0cdd74690b71beaa9bef9fb0b'
});

var twilioClient = new twilio('ACbb8840b48cc93d4b05e987d82f7a281a', '2f76fe031153c1251a93bcafa64a4980');

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
