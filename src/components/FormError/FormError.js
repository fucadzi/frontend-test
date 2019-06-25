import React from 'React';
import PropTypes from 'prop-types';
import './FormError.scss';

const FormError = ({ errorArray }) => {
    
    return (
        <div className="error">{ 
            errorArray.map(item => (
                <p>{ item }</p>
            ))
         }</div>
    );
}

FormError.propTypes = {
    errorArray: PropTypes.array
};

export default FormError;
