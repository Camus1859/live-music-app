import React from 'react';
import ConcertTitle from './ConcertTitle';

const ConcertsList = ({ concerts }) => {
    const listItems = concerts.map((concert) => (
        <ConcertTitle concert={concert} key={concert.linkForTicket} />
    ));

    return <ul>{listItems}</ul>;
};

export default ConcertsList;
