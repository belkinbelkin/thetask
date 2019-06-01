import { SET_USER_LIST, SET_USER_TO_EDIT } from "../actions/types"


const initialState = { 
    userList: [],
    userToEdit: null,
} 

const userReducer = (state = initialState, action) => { 
    switch(action.type) { 
        case SET_USER_LIST:
            return {
                ...state,
                userList: action.payload,
            }
        case SET_USER_TO_EDIT: 
            return {
                ...state,
                userToEdit: action.payload,
            }    
        default: return state;
    }
}

export default userReducer;