import React from 'react';
import userInfoStyles from '../styles/UserInfoStyles.module.css';

const InputForm = ({
    formSubmitHandler,
    setArtistNameAndUserCellNum,
    artistNameAndUserCellNum,
}) => {
    return (
        <form className={userInfoStyles.form} onSubmit={formSubmitHandler}>
            <span className={userInfoStyles.title}>
                Are you ready for LIVE music ?
            </span>

            <section className={userInfoStyles.inputSection}>
                <label>
                    <input
                        className={userInfoStyles.input}
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
                    <input
                        className={userInfoStyles.input}
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
                <button className={userInfoStyles.btn} type='submit'>
                    Submit
                </button>
            </section>
        </form>
    );
};

export default InputForm;
