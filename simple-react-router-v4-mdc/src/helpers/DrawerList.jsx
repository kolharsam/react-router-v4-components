import React from 'react'
import List, { ListItem, ListItemGraphic, ListItemText } from '@material/react-list';
import MaterialIcon from '@material/react-material-icon';
import {Link} from 'react-router-dom'

import '../App.css';
import '../index.css';

class DrawerList extends React.Component {
    render () {
        return (
            <React.Fragment>
                <List singleSelection>
                
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <ListItem>
                            <ListItemGraphic graphic={<MaterialIcon icon='home' />} />
                            <ListItemText primaryText='Home' />
                        </ListItem>
                    </Link>
                    
                    <Link to='/teams' style={{ textDecoration: 'none' }}>
                        <ListItem>
                            <ListItemGraphic graphic={<MaterialIcon icon='star' />} />
                            <ListItemText primaryText='Teams' />
                        </ListItem>
                    </Link>

                    <Link to='/history' style={{ textDecoration: 'none' }}>
                        <ListItem>
                            <ListItemGraphic graphic={<MaterialIcon icon='star_border' />} />
                            <ListItemText primaryText='History' />
                        </ListItem>
                    </Link>

                </List>
            </React.Fragment>
        );
    }
}

export default DrawerList;