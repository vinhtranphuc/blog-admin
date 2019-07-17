const categoriesReducerDefaultState = [];

export default (state = categoriesReducerDefaultState, action) => {
    switch (action.type) {
        case 'GET_CATEGORIES':
            return action.categories;
        case 'ADD_CATEGORY':
            return action.categories;
        case 'REMOVE_CATEGORY':
                return action.categories
        default:
            return state;
    };
};