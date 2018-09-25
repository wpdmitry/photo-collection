import {takeEvery, call, put, all} from 'redux-saga/effects';
import {GET_PHOTOS, SEND_PHOTOS, addCollection} from '../actions';

function* getPhotos() {
    const collections = yield call(() => fetch('http://localhost:3000/api/photos')
        .then(response => response.json())
        .then(result => result.data)
    );

    yield put(addCollection(collections));
}

function* sendPhotos(action) {
    const response = yield call(() => fetch('http://localhost:3000/api/photos', {
        method: 'POST',
        body: action.payload,
    })
        .then(response => response.json())
        .then(console.log)
    );
}

export default function* () {
    yield takeEvery(SEND_PHOTOS, sendPhotos);
    yield takeEvery(GET_PHOTOS, getPhotos);
}
