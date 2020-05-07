import React from 'react';
import PropTypes from 'prop-types'
import classnames from 'classnames'


const TextInputgroup = (
    {label, 
    name, 
    value,
    placeholder,
    type,
    onChange,
    error }
) => {

    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input 
                value={value} 
                id={name} 
                type={type} 
                name={name} 
                placeholder={placeholder}
                className={ classnames(
                    'form-control form-control-lg',
                    {
                        'is-invalid': error
                    }
                    ) } //"is-invalid form-control form-control-lg" 
                onChange={onChange} />
                { error && <div className="invalid-feedback">{error}</div>}
            
        </div>
    )
}

TextInputgroup.defaultProps = {
    type: 'text'
}

TextInputgroup.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
}

export default TextInputgroup;