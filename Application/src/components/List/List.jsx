import PropTypes from 'prop-types'

function List({name, console}) {
    return(
        <li>
            {name} - {console}
        </li>
    )
}

List.propTypes = {
    name: PropTypes.string.isRequired,
    console: PropTypes.string
}

List.defaultProps = {
    name: 'N/A',
    console: 'N/A'
}

export default List