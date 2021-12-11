

export const Cuisines = ({cuisines}) => {
    
    return (
        <>
            {cuisines.map((cuisine) => (
                <h3 key={cuisine.id}>{cuisine.text} | {cuisine.day} </h3>      
    ))}
        </>        
    )
}
