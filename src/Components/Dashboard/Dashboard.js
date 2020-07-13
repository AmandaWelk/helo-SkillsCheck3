import React, {Component} from 'react';

class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            posts: [],
            search: '',
            userPosts: true
        }
    }



    render() {
        return(
            <div>
                <input placeholder='Search by Title'/>
                <button>Search</button>
                <button>Reset</button>
            </div>
        )
    }
}

export default Dashboard;