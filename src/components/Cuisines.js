import Cuisine from "./Cuisine"

export const Cuisines = ({cuisines}) => {
    
    return (
        <>
            {cuisines.map((cuisine) => (
                <Cuisine key={cuisine.id} cuisine={cuisine} />
    ))}
        </>        
    )
}