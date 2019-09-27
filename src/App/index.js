import React, { Component } from 'react';
import {BrowserRouter,Switch} from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../helpers/theme'
import routes from './routes'
import Header from './header'
import './app.css'
import Footer from './footer'
class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <MuiThemeProvider theme={theme}>
                        <Header/>
                        <div className='main-wrapper'>
                            <Switch>
                                {routes}
                            </Switch>
                        </div>
                    </MuiThemeProvider>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
