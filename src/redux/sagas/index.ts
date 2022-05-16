import { take, takeEvery, takeLatest, takeLeading, put, call  } from 'redux-saga/effects';
import axios from 'axios';

const wait = (t: number) => new Promise((resolve) => {
    setTimeout(resolve, t);
})

async function getUsers() {
    try {
        let result = null;
        await axios.get<any>(`https://swapi.dev/api/people`)
            .then((response) => {
                console.log('response', response.data);
                result = response.data;
            })
        return result;
    } catch (e) {
        console.error(e);
    }
}

export function* workerSaga(): any {
    const data = yield call(getUsers);
    console.log('results', data.results);
    yield put({
        type: 'SET_PEOPLE',
        payload: data.results,
    })
    // yield wait(2000);
    // console.log('click from saga');
}

export function* watchClickSage() {
    yield takeEvery('LOAD_DATA', workerSaga);
    // yield takeLatest('CLICK', workerSaga);
}

export default function* rootSaga () {
    yield watchClickSage();
}
