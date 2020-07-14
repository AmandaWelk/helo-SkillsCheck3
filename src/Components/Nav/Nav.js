import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './nav.css';

function Nav(props) {
        return(
            <div className="nav">
                <div>
                    <div className="topNav">
                    {props.profile_picture}
                    {props.username}
                    <Link to={'/dashboard'}>
                    <button>Home</button>
                    </Link>
                    <Link to={'/new'}>
                    <button>New Post</button>
                    </Link>
                    </div>
                    <div className="logout">
                    <Link to={'/'}>
                    <button>Logout</button>
                    </Link>
                    </div>
                </div>
            </div>
        )
    }

function mapStateToProps(state) {
    return {
        username: state.username,
        profile_picture: state.profile_picture
    }
}

export default connect(mapStateToProps)(Nav);