import React, { useState, useRef, useEffect } from 'react';

const UserMessages = ({ showUserMsgs }) => {
    const userMsgs = showUserMsgs.map((msg, index) => (
        <li key={index}>{msg}</li>
    ));

    return <>{showUserMsgs.length > 0 ? <ul>{userMsgs}</ul> : ''}</>;
};

export default UserMessages;
