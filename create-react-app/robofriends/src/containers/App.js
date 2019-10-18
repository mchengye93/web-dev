import React from 'react';
import {robots} from '../robots';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots:[],
            searchField:''

        }
        this.handleSearch = this.handleSearch.bind(this);
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots:users}));

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
        if(this.state.robots.length === 0) {
            return (
                <div className='App tc'>
                <h1>RoboFriends</h1>
                <p>Loading....</p>
                </div>
            )
        } else {
            return (
                <div className='App tc'>
                <h1>RoboFriends</h1>
                <SearchBox handleSearch= {this.handleSearch}/>
                <Scroll>
                <CardList robots= {filteredRobots}/>
                </Scroll>
                </div>
            )

        }
       
    }
}

export default App;