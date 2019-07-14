const categoriesReducerDefaultState = [];

export default (state = categoriesReducerDefaultState, action) => {
    debugger
    console.log('reducers/categories.js > ' + action.type);
    switch (action.type) {
        case 'GET_CATEGORIES':
            return action.categories;
        case 'ADD_CATEGORIES':
            console.log('reducers > categories > ADD_CATEGORIES');
            return [
                ...state,
                action.category
            ];
        default:
            return state;
    };
};