import { take, takeEvery, takeLatest, takeLeading, put, call, fork  } from 'redux-saga/effects';
import axios from 'axios';

const wait = (t: number) => new Promise((resolve) => {
    setTimeout(resolve, t);
});

export function* loadPeople(): any {
    const people = yield call(swapiGet, 'people');

    yield put({
        type: 'SET_PEOPLE',
        payload: people.results,
    });
}

export function* loadPlanets(): any {
    const planets = yield call(swapiGet, 'planets');
    console.log('planets', planets.results);

    yield put({
        type: 'SET_PLANETS',
        payload: planets.results,
    })
}

async function swapiGet(pattern: string) {
    try {
        let result = null;
        await axios.get<any>(`https://swapi.dev/api/${pattern}`)
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
    yield fork(loadPeople);
    yield fork(loadPlanets);
    // yield wait(2000);
    // console.log('click from saga');
}

export function* watchLoadDataSaga() {
    yield takeEvery('LOAD_DATA', workerSaga);
    // yield takeLatest('CLICK', workerSaga);
}

export default function* rootSaga () {
    yield fork(watchLoadDataSaga);
}
