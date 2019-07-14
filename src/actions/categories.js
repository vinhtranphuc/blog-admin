import axios from '../axios/axios';

const _getCategories = (categories) => {
    console.log('actions/categories > _getCategories : '+categories);
    return ({
    type: 'GET_CATEGORIES',
    categories
})};

export const getCategories = () => {
    console.log('actions/categories > getCategories');
    return (dispatch) => {
        return axios.get('categories').then(result => {
            const categories = [];

            result.data.forEach(item => {
                categories.push(item);
            });

            dispatch(_getCategories(categories));
        });
    };
};

const _addCategory = (cagegory) => ({
    type: 'ADD_CATEGORY',
    cagegory
});

export const addCategory = (cagegory = {
    cagegory: ''
}) => {
    return (dispatch) => {
        const cagegory = {
            cagegory: cagegory
        };
        return axios.post('add-category', cagegory).then(result => {
            dispatch(_addCategory(result.data));
        });
    };
};