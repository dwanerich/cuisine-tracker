import PropType from 'prop-types'

export const Header = ({title}) => {
    return (
        <div>
           <h1>{title}</h1>
        </div>
    )
}
    Header.defaultProps = {
        title: "Cuisine Tracker",
        countries: 15
    }

    Header.PropType = {
        title: PropType.string
    }
