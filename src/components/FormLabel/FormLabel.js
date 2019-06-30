import React from 'React';
import PropTypes from 'prop-types';
import './FormLabel.scss';

const FormLabel = ({ text, required }) => {
    
    return (
        <label className='label'>
            { text }: {required && (<span className='asterisk'>*</span>)}
        </label>
    );
}

FormLabel.propTypes = {
    text: PropTypes.string.isRequired,
    required: PropTypes.bool
};

export default FormLabel;