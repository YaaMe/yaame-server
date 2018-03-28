import * as React from 'react';
import './App.css';

import { Provider } from 'react-redux';

import { store } from 'store';

import { Seal } from 'containers';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Seal/>
            </Provider>
        )
    }
}

