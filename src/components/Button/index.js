import React from 'react'

export function panic() {
    alert("Panic!!!!!!!!!")
}


function Button({onClick}) {
    return (
        <button className="button" onClick={onClick}></button>
    )
}

export default Button