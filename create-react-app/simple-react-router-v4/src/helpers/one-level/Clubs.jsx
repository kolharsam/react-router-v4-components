import React from 'react';
import ClubsAPI from '../../api/api';
import { Link } from 'react-router-dom';

const Clubs = (props) => {
    let club = ClubsAPI.get(parseInt(props.match.params.position, 10));
    if (!club) {
                return(<p>Sorry, we don't feature that club currently.</p>)
    }
    return (
            <div>
                <h1>{club.name} (#{club.position})</h1>
                <h2>Current Wins: {club.curWins}</h2>
                <Link to="/teams">Back</Link>
            </div>
    );
}

export default Clubs;
