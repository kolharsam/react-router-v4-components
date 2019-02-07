import React, {Component} from 'react';
import TopAppBar, {TopAppBarFixedAdjust} from '@material/react-top-app-bar';
import Drawer, {DrawerAppContent, DrawerContent, DrawerHeader, DrawerTitle} from '@material/react-drawer';
import MaterialIcon from '@material/react-material-icon';
import IconButton from '@material/react-icon-button'
import List, {ListItem, ListItemGraphic, ListItemText} from '@material/react-list';

// include imports for drawer, list, material icon and top app bar styles
import '@material/react-top-app-bar/dist/top-app-bar.css';
import "@material/react-drawer/dist/drawer.css";
import '@material/react-material-icon/dist/material-icon.css';
import '@material/react-list/dist/list.css';
import '@material/react-icon-button/dist/icon-button.css';
import './App.css';

class App extends Component {
  constructor(props) {
      super(props)
      this.state = {
          open: false
      }
  }

  render() {
    return (
      <div>
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
             <List singleSelection selectedIndex={this.state.selectedIndex}>
              <ListItem>
                <ListItemGraphic graphic={<MaterialIcon icon='folder'/>} />
                <ListItemText primaryText='Mail' />
              </ListItem>
            </List>
         </DrawerContent>

        </Drawer>
        <DrawerAppContent className='drawer-app-content'>
            
            

        <TopAppBar
            title='Premier League Clubs'
            style = {
                {
                    backgroundColor: '#00ff85',
                    color: '#e90052'
                }
            }
            navigationIcon={<IconButton onClick={() => this.setState({open: !this.state.open})}>
                <MaterialIcon icon="menu" style={{color: '#e90052'}} />
            </IconButton>}
        />

          <TopAppBarFixedAdjust>
            <div style={{margin: '20px'}}>
                <p>This is some content for the page</p>
            </div>
          </TopAppBarFixedAdjust>

        </DrawerAppContent>
      </div>
    );
  }
}

export default App;