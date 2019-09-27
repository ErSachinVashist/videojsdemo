import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import configureAppStore from './store';
import App from './App'
const store = configureAppStore();

const returnApp=App=>{
    return ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.querySelector('#root')
    );
}

if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./App',()=>{
        const NextApp = require('./App').default;
        returnApp(NextApp);
    })
}

serviceWorker.register();
returnApp(App);
