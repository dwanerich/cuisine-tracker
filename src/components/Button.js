import React from 'react'

export const Button = ({color, text}) => {

    const onClick = (e) => {
        console.log(`the color of this button is ${e.target.style.backgroundColor}`)
    }

    return (
        <button onClick={onClick} className='btn' style={{backgroundColor: color}}>{text}</button>
    )
}
