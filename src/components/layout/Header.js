import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Header = (props) => {
    
    const { branding } = props;
    return (
        // <div>
        //     <h1>{branding}</h1>            
        // </div>

        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
            <Link to="/" className="navbar-brand">
                {branding}
            </Link>
            <div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact/add" className="nav-link">Add Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/test" className="nav-link">Test</Link>
                    </li>
                </ul>
            </div>
            
        </nav>
        
    )
}

Header.defaultProps = {
    branding: 'My App'
}

Header.propTypes = {
    branding: PropTypes.string.isRequired
}

export default Header;
