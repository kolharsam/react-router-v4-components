import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'


const Head = () => (
    <React.Fragment>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/teams'>Teams</Link></li>
                <li><Link to='/history'>History</Link></li>
            </ul>
        </nav>
    </React.Fragment>
)

export default Head;