import {createTreeConnector, valueTree} from 'redux-seeds';
import {connect} from 'react-redux';

const tree = valueTree({
    valueName: 'data',
    actorName: 'setGpsData',
    selectorName: 'gpsData'
});

export const { reducer, get, act } = tree;

export const treeConnect = createTreeConnector(tree)(connect);