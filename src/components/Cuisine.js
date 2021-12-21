
export default function Cuisine({ cuisine }) {
    return (
        <div className='cuisine'>
            <h3>{cuisine.text}</h3>
            <p>{cuisine.day}</p>
        </div>
    )
}
