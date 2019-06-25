import React from 'React';
import PropTypes from 'prop-types';
import './FormButton.scss';

const FormButton = ({ text, onBtnClick }) => {
    
    return (
        <button className="large" onClick={onBtnClick}>{ text }</button>
    );
}

FormButton.propTypes = {
    text: PropTypes.string.isRequired,
    onBtnClick: PropTypes.func.isRequired
};

export default FormButton;
