import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Main from './helpers/main'

class ReactRouterv4Usage extends React.Component {
    render () {
        return(
                <BrowserRouter>
                    <Main />
                </BrowserRouter>
        );
    }
}

export default ReactRouterv4Usage;
