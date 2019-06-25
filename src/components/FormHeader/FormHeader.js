import React from 'React';
import PropTypes from 'prop-types';
import './FormHeader.scss';

const FormHeader = ({ text }) => {
    
    return (
        <h1 className="heading">{ text }</h1>
    );
}

FormHeader.propTypes = {
    text: PropTypes.string
};

export default FormHeader;
