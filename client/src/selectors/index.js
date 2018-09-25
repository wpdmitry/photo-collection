import {createSelector} from 'reselect';

const selectPhotos = (state) => {
    let result = [];
    console.log('recomputing');
    state.forEach(({place, title, photos}) => {
      result = result.concat(photos.map(photo => ({
        title,
        place,
        ...photo,
      })))
    });
  
    return result;
};
  
export const photosSelector = createSelector(
    state => state,
    state => selectPhotos(state),
);
  