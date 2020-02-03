import React, { Component } from 'react';
import './App.css';
import CardList from './CardList'; //gets all the cards for each user
import Searchbox from './Searchbox'
// import {robots} from './robots'; //must desrtucture as there is no default export


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: '',
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {this.setState({robots: users})})
        
    }

    onSearchChange = (event) =>{
        this.setState({ searchfield: event.target.value });
    }

    render(){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (this.state.robots.length === 0) {
            return <h1 className='tc'>Loading</h1>
        }else{
            return(
                <div className='tc'>
                    <h1 className='f1'>catFriends</h1>
                    <Searchbox searchChange={this.onSearchChange} />
                    {<CardList robots={filteredRobots} />}
                </div>
            )
        }        
    }
}

export default App;