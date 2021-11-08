import React, { Fragment } from 'react';
import concertTitleStyles from '../styles/ConcertTitleStyles.module.css';

const ConcertTitle = ({ concert }) => {
    const [dayOfTheWeek, monthDay, year] = concert.date.split(',');

    return (
        <li>
            <a
                target='_blank'
                rel='noopener noreferrer'
                href={concert.linkForTicket}
            >
                <section>
                    <h4>{dayOfTheWeek}</h4>
                    <h4>{monthDay}</h4>
                    <h4>{year}</h4>
                </section>

                <section>
                    <span>
                        <h4>{concert.venue}</h4>
                        <h4>
                            {concert.city}, {concert.state}, {concert.country}
                        </h4>
                    </span>
                </section>
            </a>
        </li>
    );
};

export default ConcertTitle;
