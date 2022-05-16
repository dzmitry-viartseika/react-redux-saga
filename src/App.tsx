import React from 'react'
import './assets/scss/style.scss'
import {useDispatch, useSelector} from "react-redux";

function App() {
    const store = useSelector(store => store);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch({
            type: 'LOAD_DATA'
        })
    }
    return (
        <>
            <h1>Redux Saga</h1>
            <button onClick={handleClick}>SET PEOPLE TO REDUX</button>
        </>
    );
}

export default App;
