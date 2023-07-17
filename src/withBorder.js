import React, { useState } from 'react'


const withBorder = (WarappedComponent) => {
    return function(){
        const [border, setBorder] = useState('1px solid #000')

        const addBorder =()=>{
            setBorder((prevState) => (prevState === '1px solid #000'? '2px solid blue' : '1px solid #000'))

        }
        return(
            <div style={{border: border}}>
                <WarappedComponent addBorder={addBorder}/>
            </div>
        )
    }
}

export default withBorder