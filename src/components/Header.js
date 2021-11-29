import { Button } from "./Button"

export const Header = ({title}) => {
    return (
        <header className='header'>
           <h1>{title}</h1>
        <Button color='green' text='Hello' />
        </header>
    )
}
    // Header.defaultProps = {
    //     title: "Fatboy's Paradise",
    //     countries: 15
    // }

    // in line styleing with code extracted to variable double vs curly braces
    // let headingStyle = {
    //     color: 'yellow', backgroundColor: 'blue'
    // }
    
