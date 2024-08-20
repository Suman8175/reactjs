import React from 'react'
import { memo } from 'react'

function Child({ value, increment }) {
    console.log('Child component is rendered');
    return (
        <div>
            <h1>Counter Two: {value}</h1>
            <button onClick={increment}>Increment Counter Two</button>
        </div>
    );
}

export default memo(Child)