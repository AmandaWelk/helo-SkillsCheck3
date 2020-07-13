import React, {Component} from 'react';
import {connect} from 'react-redux';
import routes from '../../routes';
import {Link} from 'react-router-dom';

function Nav(props) {
        return(
            <div className="navBody">
                <Link to={'/dashboard'}>
                <button>Home</button>
                </Link>
                <Link to={'/new'}>
                <button>New Post</button>
                </Link>
                <Link to={'/'}>
                <button>Logout</button>
                </Link>
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