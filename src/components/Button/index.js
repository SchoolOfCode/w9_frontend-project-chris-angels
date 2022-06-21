import React from 'react'

export function panic() {
    alert("Panic!!!!!!!!!")
}


function Button({onClick, src}) {
    return (
        <div className='Panic'>
            <img alt="PanicButton" onClick={onClick} src={src}></img>
        </div>
    )
}

export default Button