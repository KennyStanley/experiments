export function loginReducer(state, action) {
    switch (action.type) {
        case 'field':
            return {
                ...state,
                [action.field]: action.value,
            };
        case 'login':
            return {
                ...state,
                isLoading: true,
                error: '',
            };
        case 'success':
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
                username: '',
                password: '',
                error: '',
            };
        case 'error':
            return {
                ...state,
                error: 'Incorrect username or password',
                isLoading: false,
            };
        case 'logout':
            return {
                ...state,
                isLoggedIn: false,
                username: '',
                password: '',
            };
        default:
            return state;
    }
}

export const initialState = {
    username: '',
    password: '',
    isLoading: false,
    error: '',
    isLoggedIn: false,
};

export default loginReducer