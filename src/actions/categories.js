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

const _addCategory = (categories) => ({
    type: 'ADD_CATEGORY',
    categories
});

export const addCategory = (categoryObjPrm = {
    category: '',
    categoryType : ''
}) => {
    return (dispatch) => {
        
        const category = {
            category: categoryObjPrm.category,
            categoryType: categoryObjPrm.categoryType
        };
        return axios.post('add-category', category).then(result => {
            dispatch(_addCategory(result.data));
        });
    };
};


const _removeCategory = (categories) => ({
    type: 'REMOVE_CATEGORY',
    categories
});

export const removeCategory = (categoryIdPrm) => {
    debugger
    return (dispatch) => {
        return axios.delete('delete-category/'+categoryIdPrm).then(result => {
            dispatch(_removeCategory(result.data));
        });
    };
};