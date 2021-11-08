import React, {Fragment} from 'react';
import ConcertsList from './ConcertList'


const UpcomingConcerts = ({ concertData }) => {
    const { concerts } = concertData

    return (
      <Fragment>
        <h1>
          Upcoming Concerts <span>({concerts.length})</span>
        </h1>
        <ConcertsList concerts={concerts} />
      </Fragment>
    )
  }

  export default UpcomingConcerts