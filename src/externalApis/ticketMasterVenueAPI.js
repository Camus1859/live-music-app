import { config } from 'dotenv';
config();

import fetch from 'node-fetch';


const  translate = (date) => {
    var day = date.getDay();
    var month = date.getMonth();
    var dayOfMonth = date.getDate();
    var year = date.getFullYear();
    var dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var monthNames = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];
    return (
        dayOfWeek[day] +
        ', ' +
        monthNames[month] +
        ' ' +
        dayOfMonth +
        ', ' +
        year
    );
}


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

const addArtistDataToObj =  (events, artistData, artist) => {

    for (const event of events) {
        if (artistData.artistInfo.imgUrl === '') {
            const classification = event.classifications[0];

            artistData.artistInfo = {
                imgUrl: event.images[0].url,
                genre: `${classification.genre.name}/${classification.subGenre.name}`,
                name: artist,
            };
        }

        if (artistData.socialMediaLinks.twitter === '') {
            const { twitter, facebook, instagram } = {
                ...event._embedded.attractions[0].externalLinks,
            };

            artistData.socialMediaLinks = {
                twitter: !twitter ? '' : twitter[0].url,
                facebook: !facebook ? '' : facebook[0].url,
                instagram: !instagram ? '' : instagram[0].url,
            };
        }

        const venue = event._embedded.venues[0];

        artistData.concerts.push({
            venue: venue.name,
            city: venue.city.name,
            date: translate(new Date(event.dates.start.localDate)),
            linkForTicket: event.url,
            state: venue.state?.stateCode,
            country: venue.country?.countryCode,
        });
    }
    return artistData
}


const useArtistIdToFindVenueAPI = async (artist, artistID, res, userData)=>{

    const response = await fetch(
        `https://app.ticketmaster.com/discovery/v2/events.json?attractionId=${artistID}&sort=date,asc&apikey=${process.env.TICKET_MASTER_API}`,
        {
            method: 'GET',
            headers: {
                'Content-type': 'application/json;charset=UTF-8',
                Accept: 'application/json',
            },
        }
    );

    const venueObj = await response.json();

    let artistData = getArtistDataObj()

    const { events } = venueObj._embedded;

    artistData = addArtistDataToObj(events, artistData, artist)

    const result = { ...userData, ...artistData };
    res.status(200).send(result);

}

export default useArtistIdToFindVenueAPI