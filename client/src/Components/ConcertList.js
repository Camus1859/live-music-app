import React from 'react';
import ConcertTitle from './ConcertTitle';
import concertList from '../styles/ConcertTitleStyles.module.css';

const ConcertsList = ({ concerts }) => {
    const listItems = concerts.map((concert) => (
        <ConcertTitle concert={concert} key={concert.linkForTicket} />
    ));

    return <ul className={concertList.ul}>{listItems}</ul>;
};

export default ConcertsList;
