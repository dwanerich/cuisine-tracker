import Cuisine from "./Cuisine"

export const Cuisines = ({cuisines}) => {
    
    return (
        <>
            {cuisines.map((cuisine) => (
                <h3 key={cuisine.id}>{cuisine.text}</h3>
    ))}
        </>        
    )
}
