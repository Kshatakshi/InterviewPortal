// // import { FETCH_ALL, CREATE } from '../constants/actionTypes';
export default (list = [], action) => {
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...list, action.payload];
        default:
            return list;
    }
}