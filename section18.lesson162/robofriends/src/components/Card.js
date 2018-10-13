import React from 'react';
import './Card.css';

const Card = ({name, email, id, username}) => {

    return (
        <div className='card tc dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${username}`} alt={username} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
        );
}

export default Card;