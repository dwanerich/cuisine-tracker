
export const Header = ({title, aka}) => {
    return (
        <div>
           <h1 style={headingStyle}>{title}</h1>
           <h2>{aka}</h2>
        </div>
    )
}
    // Header.defaultProps = {
    //     title: "Fatboy's Paradise",
    //     countries: 15
    // }

    let headingStyle = {
        color: 'yellow', backgroundColor: 'blue'
    }
    
