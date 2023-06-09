import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";


const initialState = {
    users: [{id : 121, name : "Mila"}]
};

function reducer(state = initialState, action){
    switch (action.type) {
        case "SET_USERS":
            return { ...state, users: action.users }
        default:
            return state;
    }
}

const store = createStore (reducer, applyMiddleware(thunk));
export default store;