const categoriesReducerDefaultState = [];

export default (state = categoriesReducerDefaultState, action) => {
    debugger
    console.log('reducers/categories.js > '+action.type);
    switch (action.type) {
        case 'GET_CATEGORIES':
            return action.categories;
        default:
            return state;
    };
};