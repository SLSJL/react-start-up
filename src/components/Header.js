import PropTypes from 'prop-types'

const Header = ({ title }) => {
    return (
        <header>
            {title}
        </header>
    )
}
Header.defaultProps = {
    title: "unset"
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header
