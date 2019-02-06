import React from "react";
import ClubsAPI from "../../api/api";
import { Link } from "react-router-dom";

const ClubInformation = () => (
    <div>
        <ul>
            {
                ClubsAPI.getAll().map(club => (
                    <li key={club.name + club.position} style={{listStyleType: 'decimal', padding: '10px'}}>
                        <Link to={`/teams/${club.position}`}>{club.name}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
)

export default ClubInformation;