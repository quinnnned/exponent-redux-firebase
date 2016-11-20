import Exponent from 'exponent';
import React from 'react';
import { Provider } from 'react-redux';
import App from './App.js';
import {reducer, act } from '../state';
import {createStore} from 'redux';

const store = createStore(reducer);

Exponent.Permissions.askAsync(Exponent.Permissions.LOCATION)
    .then( ({status}) => {
        if (status !== 'granted') {
            alert('wtf, bro?');
        } else {
            Exponent.Location.watchPositionAsync({
                timeInterval: 5000
            }, (result) => store.dispatch(
                act.setGpsData({
                    data: `${result.coords.latitude}, ${result.coords.longitude}, ${result.coords.altitude}`
                })
            ));
        }
    });

Exponent.registerRootComponent( () => (
    <Provider store = {store} >
        <App />
    </Provider>
));