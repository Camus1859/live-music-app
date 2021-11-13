import React from 'react';
import artistHeadShotStyles from '../styles/ArtistHeadShotStyles.module.css';

const ArtistHeadShot = ({ artistHeadShot }) => {
    const { name, imgUrl } = artistHeadShot;
    return (
        <section className={artistHeadShotStyles.imgContainer}>
             <img className={artistHeadShotStyles.img} src={imgUrl} alt={name} />

        </section>

    );
};
export default ArtistHeadShot;
