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
            <div className="dash">
                <div>
                    <input placeholder='Search by Title' value={this.state.search}/>
                    <button>Search</button>
                    <button>Reset</button>
                </div>
            </div>
        )
    }
}

export default Dashboard;