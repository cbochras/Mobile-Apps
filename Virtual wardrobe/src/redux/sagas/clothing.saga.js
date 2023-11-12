import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addClothingSaga( action ) {
    yield axios({
        method: 'POST',
        url: '/api/clothing',
        data: action.payload
    })
    yield put({
        type: 'FETCH_CLOTHING',
    })
}

function* deleteClothingSaga( action ) {
    yield axios({
        method: 'DELETE',
        url: `/api/clothing/${ action.payload }`,
        data: action.payload
    })
    yield put({
        type: 'FETCH_CLOTHING',
    })
}

function* editClothingSaga( action ) {
    yield axios({
        method: 'PUT',
        url: `/api/clothing/${action.payload.id}`,
        data: action.payload
    })
    yield put({
        type: 'FETCH_CLOTHING',
    })
}

function* getClothingSaga( action ) {
    let response = yield axios ({
        method: 'GET',
        url: '/api/clothing'
    })
    console.log('getClothingSaga response:', response.data);
    yield put({
        type: 'SET_CLOTHING',
        payload: response.data
    })
}

function* clothingSaga() {
    yield takeLatest( 'ADD_ITEM', addClothingSaga )
    yield takeLatest( 'DELETE_ITEM', deleteClothingSaga )
    yield takeEvery( 'FETCH_CLOTHING', getClothingSaga )
    yield takeLatest( 'UPDATE_ITEM', editClothingSaga )
}

export default clothingSaga;