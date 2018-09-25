export const ADD_COLLECTION = 'ADD_COLLECTION';
export const GET_PHOTOS = 'GET_PHOTOS';
export const SEND_PHOTOS = 'SEND_PHOTOS';

export const addCollection = (collection) => ({
    type: ADD_COLLECTION,
    payload: collection,
});

export const getPhotos = () => ({
    type: GET_PHOTOS,
});

export const sendPhotos = collection => ({
    type: SEND_PHOTOS,
    payload: collection,
});