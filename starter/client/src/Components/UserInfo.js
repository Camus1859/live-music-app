import React, { useState } from 'react';

const UserInfo = () => {

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
};

export default UserInfo;