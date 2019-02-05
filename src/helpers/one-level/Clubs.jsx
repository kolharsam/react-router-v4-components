import React from 'react';
import ClubsAPI from '../../api/api';
import { Link } from 'react-router-dom';

const Clubs = (props) => {
    let club = ClubsAPI.get(parseInt(props.match.params.position, 10));
    if (!club) {
        return (
            <React.Fragment>
                <p>Sorry, we don't feature that club currently.</p>
            </React.Fragment>
        );
    }
    return (
        <React.Fragment>
            <div>
                <h1>{club.name} (#{player.position})</h1>
                <h2>Current Wins: {player.curWins}</h2>
                <Link to="/teams">Back</Link>
            </div>
        </React.Fragment>
    );
}

export default Clubs;