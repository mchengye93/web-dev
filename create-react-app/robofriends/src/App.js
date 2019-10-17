import React from 'react';
import {robots} from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots:robots,
            searchField:''

        }
        this.handleSearch = this.handleSearch.bind(this);
    }
    handleSearch(e) {
        console.log(e.target.value);
        this.setState({
            searchField: e.target.value
        });


    }
    render() {
        let filteredRobots = this.state.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLocaleLowerCase());
        })
        return (
            <div className='App tc'>
            <h1>RoboFriends</h1>
            <SearchBox handleSearch= {this.handleSearch}/>
            <CardList robots= {filteredRobots}/>
            </div>
        )
    }
}

export default App;