import React, {Component} from 'react';
import TopAppBar, {TopAppBarFixedAdjust} from '@material/react-top-app-bar';
import Drawer, {DrawerAppContent, DrawerContent, DrawerHeader, DrawerTitle} from '@material/react-drawer';
import MaterialIcon from '@material/react-material-icon';
import IconButton from '@material/react-icon-button'
import List, {ListItem, ListItemGraphic, ListItemText} from '@material/react-list';


// included all imports for drawer, list, material icon and top app bar styles in here
import './App.css';
import './index.css';

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
                <ListItemGraphic graphic={<MaterialIcon icon='security'/>} />
                <ListItemText primaryText='Liverpool' />
              </ListItem>
              <ListItem>
                <ListItemGraphic graphic={<MaterialIcon icon='star'/>} />
                <ListItemText primaryText='Manchester City' />
              </ListItem>
              <ListItem>
                <ListItemGraphic graphic={<MaterialIcon icon='star_border'/>} />
                <ListItemText primaryText='Tottenham Hotspur' />
              </ListItem>
              <ListItem>
                <ListItemGraphic graphic={<MaterialIcon icon='sentiment_satisfied'/>} />
                <ListItemText primaryText='Chelsea' />
              </ListItem>
              <ListItem>
                <ListItemGraphic graphic={<MaterialIcon icon='thumb_up_alt'/>} />
                <ListItemText primaryText='Manchester United' />
              </ListItem>
              <ListItem>
                <ListItemGraphic graphic={<MaterialIcon icon='thumb_down_alt'/>} />
                <ListItemText primaryText='Arsenal' />
              </ListItem>
            </List>
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
                <p>This is some content for the page</p>
            </div>
          </TopAppBarFixedAdjust>

        </DrawerAppContent>
      </div>
    );
  }
}

export default App;