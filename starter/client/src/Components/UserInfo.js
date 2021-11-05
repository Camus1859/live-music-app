import React, { useState } from 'react';
import UserMessages from './UserMessages';

const UserInfo = () => {
    const [artistNameAndUserCellNum, setArtistNameAndUserCellNum] = useState({
        artist: '',
        cellNumber: '',
    });

    const [showUserMsgs, SetShowUserMsgs] = useState([]);

    const formSubmitHandler = async (e) => {
        e.preventDefault();
        setArtistNameAndUserCellNum({
            artist: '',
            cellNumber: '',
        });

        try {
            const response = await fetch('/artistAndCellNumber', {
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

                if (clientResponse.error.length > 0) {
                    //show user validation errors
                    SetShowUserMsgs(clientResponse.error);
                    return;
                }

                if (clientResponse.success.length > 0) {
                    console.log('successssss');
                    //show user validation success
                    SetShowUserMsgs(clientResponse.success);
                    return;
                }
            } else {
                //some front end error response is not a 200
                const clientResponse = await response.json();
                SetShowUserMsgs(clientResponse.error);
            }
        } catch (e) {
            //show User Error(e) network error

            console.log(e);
        }
    };

    return (
        <>
            <UserMessages showUserMsgs={showUserMsgs} />

            <form onSubmit={formSubmitHandler}>
                <label>
                    Artist
                    <input
                        type='text'
                        name='artist'
                        value={artistNameAndUserCellNum.artist}
                        onChange={(e) =>
                            setArtistNameAndUserCellNum({
                                ...artistNameAndUserCellNum,
                                artist: e.target.value,
                            })
                        }
                        placeholder="Enter an artist's name"
                    />
                </label>

                <label>
                    Enter Your Cell Phone Number
                    <input
                        type='tel'
                        name='cellNumber'
                        value={artistNameAndUserCellNum.cellNumber}
                        onChange={(e) =>
                            setArtistNameAndUserCellNum({
                                ...artistNameAndUserCellNum,
                                cellNumber: e.target.value,
                            })
                        }
                        placeholder='123-456-7890'
                        pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                        required
                    />
                </label>
                <button type='submit'>Submit</button>
            </form>
        </>
    );
};

export default UserInfo;