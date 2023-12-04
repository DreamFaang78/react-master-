import React from 'react'

function RandomNumber() {
    let number = Math.floor(Math.random() * 100);
    return (
        <div>Random Number is = {number}</div>
    )
}

export default RandomNumber