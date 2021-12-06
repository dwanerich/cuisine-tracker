import React from 'react'

const cuisines = [
    {
        id: 1,
        text: 'pasta',
        day: 'Dec 30th 12:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'sushi',
        day: 'Feb 9th 2:09am',
        reminder: false
    },
    {
        id: 3,
        text: 'jerk chicken',
        day: 'July 4th 7:40pm',
        reminder: true
    }
]

export const Cuisines = () => {


    return (
        <>
        {cuisines.map((cuisine) => {
            return <h3>{cuisine.text}</h3>

        })}
            
        </>
    )
}
