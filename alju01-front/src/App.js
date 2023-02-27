import React from 'react';
import Router from './Router';
import store from "./Store";
import {Provider} from 'mobx-react';

class App extends React.Component {

    render() {
        return (
            <Provider {...store}>
                <Router/>
            </Provider>
        );
    }
}

export default App;
