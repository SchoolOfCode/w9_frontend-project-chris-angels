import React from 'react'
import Hint from '../Hint';
import hintList from './hintList';

function Hints() {
    return (
        <div classname="hints">
            <ol>
                {hintList.map((hint, index) => {
                    return <Hint key={index} text={hint}></Hint>
                })}
            </ol>
        </div>
    )
}

export default Hints