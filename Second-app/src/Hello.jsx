import React from 'react'
// Dynamic Component
function Hello() {
    let myName = () => {
        return 'Agam Singh';
    }
    return (
        <>
            <h3 style={{ 'background-color': 'skyblue', maxWidth: '290px' }}>Hello This Is The Future Speaking</h3>
            <p>Hey I Had Developed This Website {myName()}</p>
        </>
    )
}

export default Hello