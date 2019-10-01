import { createStore } from 'redux'

function project(state = { users: [] }, action) {
    switch (action.type) {
        case "add":
            state = { users: [...state.users, action.payload] }
            return state
        case "delete":
            state = { users: action.payload }
            return state
        case "update":
            state = { users: action.payload }
            return state
        default:
            return state
    }
}

let store = createStore(project)

export default store;