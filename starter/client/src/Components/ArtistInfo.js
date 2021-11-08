import React, { Fragment } from 'react';
import SocialLink from './SocialLink';
import artistInfoStyles from '../styles/ArtistInfoStyles.module.css';

const ArtistInfo = ({ artistData }) => {
    const { artistInfo, concerts, socialMediaLinks } = artistData;
    const { twitter, facebook, instagram } = socialMediaLinks;

    const { name, genre } = artistInfo;

    return (
        <Fragment>
            <section className={artistInfoStyles.info}>
                <section>
                    <h1 className={artistInfoStyles.artistInfo}>
                        {`${!name ? 'Try Again' : name + ' Tour Dates'}`}
                    </h1>
                    <SocialLink title='Facebook' href={facebook} />
                    <SocialLink title='Twitter' href={twitter} />
                    <SocialLink title='Instagram' href={instagram} />
                    <h3 className={artistInfoStyles.artistInfo}>
                        On Tour {concerts.length ? 'Yes' : 'No'}
                    </h3>
                    <h3 className={artistInfoStyles.artistInfo}>
                        Category {genre} Music
                    </h3>
                </section>
            </section>
        </Fragment>
    );
};

export default ArtistInfo;
