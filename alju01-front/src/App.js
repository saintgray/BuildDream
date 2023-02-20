import React from 'react';
import Router from './Router';
import {Provider} from 'mobx-react';

class App extends React.Component {

    render() {
        return (
            <Provider>
                <Router/>
            </Provider>
        );
    }
}

export default App;
