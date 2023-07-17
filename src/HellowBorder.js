import React from 'react'

const HelloBorder = ({ addBorder}) =>{
    return (
        <div>
            <h1>Hellow border</h1>
            <button onClick={addBorder}> change border </button>
        </div>
    )
}

export default HelloBorder;