const initialState = {
    username: '',
    profile_picture: '',
    id: ''
};

const GET_USER = 'GET_USER';

export function getUser(username, id, profile_picture) {
    return {
        type: GET_USER,
        payload: {
            username: this.username.current.value,
            id: this.id.current.value,
            profile_picture: this.profile_picture.current.value
        }
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return {username: this.username.current.value, profile_picture: this.profile_picture.current.value, id: this.id.current.value}
        default:
            return state;    
    }
}