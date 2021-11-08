import React from 'react';

const UserMessages = ({ msg }) => {
    return <>{!msg.length ? '' :  <ul>{msg}</ul>}</>;
};

export default UserMessages;
