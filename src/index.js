import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './index.css';       //index style sheet
import CardList from './CardList';
import 'tachyons'   //for styling
import {robots} from './robots'; //must desrtucture as there is no default export

ReactDOM.render(<CardList robots={robots} /> , document.getElementById('root')); 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
