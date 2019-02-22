import { call, put, takeEvery } from 'redux-saga/effects';

import { PeopleService } from '../../services';

import {
    FETCH_PEOPLE
} from './types';

function* fetchPeople(action) {
    try {
        const response = yield call(PeopleService.getPeople, action.page);

        if (response.status === 200) {
            yield put({ type: FETCH_PEOPLE.SUCCESS, people: response });
        }
    } catch (e) {
        yield put({ type: FETCH_PEOPLE.FAILURE, peopleError: e.message ? e.message : 'Não foi possível carregar o endpoint /people' });
    }
}

export const peopleSagas = [
    takeEvery(FETCH_PEOPLE.REQUEST, fetchPeople),
];