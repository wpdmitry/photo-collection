import {ADD_COLLECTION} from '../actions';

export const collections = (state = [], action) => {
    switch(action.type) {
        case ADD_COLLECTION:
            return Array.isArray(action.payload) ? [...state, ...action.payload] : [...state, action.payload];
        
        default:
            return state;
    }
};
