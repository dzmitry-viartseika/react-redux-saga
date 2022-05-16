const initialState = {
    people: [],
};

export default function reducer(state: any = initialState, action: any) {
    switch (action.type) {
        case 'SET_PEOPLE': {
            return {
                ...state,
                people: [
                    ...state.people,
                    ...action.payload,
                ]
            }
        }
    }
    return state;
}
