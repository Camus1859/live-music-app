#! /usr/bin/python

import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
from twilio.rest import Client

def send_sms_with_top_justin_bieber_track():

    client_credentials_manager = SpotifyClientCredentials(client_id="787fe734ba184da08b4c78ff6504c965",
                                                          client_secret="79051fe89b2a479bbff0f494300b3e9b")
    spotify = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

    artist_name = 'Justin Bieber'
    artist_results = spotify.search(q='artist:{}'.format(artist_name), type='artist', limit=1)
    artist = artist_results['artists']['items'][0]
    top_track_results = spotify.artist_top_tracks(artist['id'], country='US')
    top_track = top_track_results['tracks'][0]

    body = "{}'s top track: {}".format(artist['name'], top_track['name'])

    # TODO: Get secrets out of source!
    account_sid = 'ACbb8840b48cc93d4b05e987d82f7a281a'
    auth_token = '2f76fe031153c1251a93bcafa64a4980'

    client = Client(account_sid, auth_token)

    from_ = "+18574454093"
    to = "+12025550158"
    message = client.messages.create(body=body,
                                     to=to,
                                     from_=from_)

    return message.sid

if __name__ == "__main__":
    send_sms_with_top_justin_bieber_track()
