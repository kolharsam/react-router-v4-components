import React, {Component} from 'react';
import TopAppBar, {TopAppBarFixedAdjust} from '@material/react-top-app-bar';
import Drawer, {DrawerAppContent, DrawerContent, DrawerHeader, DrawerTitle} from '@material/react-drawer';
import MaterialIcon from '@material/react-material-icon';
import IconButton from '@material/react-icon-button'
import {BrowserRouter} from 'react-router-dom'

import PageContent from './helpers/PageContent'
import DrawerList from './helpers/DrawerList'

// included all imports for drawer, list, material icon and top app bar styles in here
import './App.css';
// has the styles required for the drawer and top app bar as mentioned in the docs.
import './index.css';

class ReactRouterv4MDC extends Component {
  constructor(props) {
      super(props)
      this.state = {
          open: false
      }
  }

  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <React.Fragment>
            <Drawer
              dismissible
              open={!this.state.open}
            >
            <DrawerHeader>
                <DrawerTitle tag='h6'>
                    Premier League Clubs
                </DrawerTitle>
            </DrawerHeader>
          
            <DrawerContent>
                  <DrawerList />
            </DrawerContent>
        </Drawer>
        <DrawerAppContent className='drawer-app-content'>
            <TopAppBar
                title='Premier League Clubs'
                style = {{backgroundColor: '#00ff85', color: '#e90052'}}
                navigationIcon={<IconButton onClick={() => this.setState({open: !this.state.open})}>
                    <MaterialIcon icon="menu" style={{color: '#e90052'}} />
                </IconButton>}
            />

              <TopAppBarFixedAdjust>
                <div style={{margin: '20px'}}>
                  <PageContent />
                </div>
              </TopAppBarFixedAdjust>
          
        </DrawerAppContent>
        </React.Fragment>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default ReactRouterv4MDC;