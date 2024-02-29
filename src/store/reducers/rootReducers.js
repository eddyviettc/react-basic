const initState = {
    users: [
        { id: 1, name: 'reverie' },
        { id: 2, name: 'moc' },
        { id: 3, name: 'huepeoi' }

    ],
    post: []
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            console.log('check user delete', action)
            let users = state.users
            users = users.filter(item => item.id !== action.payload.id)

            return { ...state, users }
        case 'CREATE_USER':
            let id = Math.floor(Math.random() * 10)
            let user = {
                id: id,
                name: `random - ${id}`
            }
            return {
                ...state, users: [...state.users, user]
            }
        case 's':
            break;
        default:
            return state
    }
}

export default rootReducer;