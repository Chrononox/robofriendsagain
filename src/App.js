import React from 'react';
import CardList from './CardList'; //gets all the cards for each user
import Searchbox from './Searchbox'
import {robots} from './robots'; //must desrtucture as there is no default export

const App = () => {
    return(
        <div className='tc'>
            <h1>catFriends</h1>
            <Searchbox />
            {<CardList robots={robots} />}
        </div>
    )
}

export default App;