import React from 'react'

const HelloWorld = ({ handleColorChange}) =>{
    return (
        <div>
            <h1>Hellow world</h1>
            <button onClick={handleColorChange}> change color </button>
        </div>
    )
}

export default HelloWorld;