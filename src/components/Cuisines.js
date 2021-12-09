import { useState } from "react"


export const Cuisines = () => {
    const [cuisines, setCuisines] = useState(
        [
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
    
    )
    
    return (
        <>
            {cuisines.map((cuisine) => (
                <h3 key={cuisine.id}>{cuisine.text} | {cuisine.day} </h3>
            
    ))}
        </>        
    )
}
