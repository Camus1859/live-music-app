import React, { useState } from 'react';
import UserMessages from './UserMessages';
import ArtistInfo from './ArtistInfo';
import ArtistHeadShot from './ArtistHeadShot';
import UpcomingConcerts from './UpcomingConcerts';
import InputForm from './ArtistInputForm';
// import userInfoStyles from '../styles/UserInfoStyles.module.css'

const UserInfo = () => {
    const [artistNameAndUserCellNum, setArtistNameAndUserCellNum] = useState({
        artist: '',
        cellNumber: '',
    });

    const [showUserMsgs, setShowUserMsgs] = useState('');
    const [artistData, setArtistData] = useState(undefined);

    const formSubmitHandler = async (e) => {
        e.preventDefault();
        setArtistNameAndUserCellNum({
            artist: '',
            cellNumber: '',
        });

        try {
            const response = await fetch('/getArtistSendToCell', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    credentials: 'include',
                },
                body: JSON.stringify(artistNameAndUserCellNum),
            });

            if (response.ok) {
                const clientResponse = await response.json();

                console.log(clientResponse);

                setShowUserMsgs(clientResponse.sms.message);
                setArtistData(clientResponse);
            } else {
                //some front end error response is not a 200
                const clientResponse = await response.json();
                setShowUserMsgs(clientResponse.sms.message);
            }
        } catch (e) {
            //show User network error ?
            console.log(e);
        }
    };

    return (
        <>
            <UserMessages msg={showUserMsgs} />
            <InputForm
                formSubmitHandler={formSubmitHandler}
                setArtistNameAndUserCellNum={setArtistNameAndUserCellNum}
                artistNameAndUserCellNum={artistNameAndUserCellNum}
            />

            {artistData && (
                <>
                    {' '}
                    <ArtistHeadShot artistHeadShot={artistData.artistInfo} />
                    <ArtistInfo artistData={artistData} />{' '}
                    <UpcomingConcerts concertData={artistData} />
                </>
            )}
        </>
    );
};

export default UserInfo;
