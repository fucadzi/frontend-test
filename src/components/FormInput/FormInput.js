import React from 'React';
import PropTypes from 'prop-types';
import './FormInput.scss';

const FormInput = ({ inputField, type, name, onInput }) => {
    
    return (
        <React.Fragment>
            {
                inputField==='textarea' ?
                (
                    <textarea className='textarea' name={name} onChange={e => onInput(name, e.target.value)} />
                ) : 
                (
                    <input className='input' type={type} name={name} onChange={e => onInput(name, e.target.value)} />
                )
            }
        </React.Fragment>
    );
}

FormInput.propTypes = {
    inputField: PropTypes.oneOf(['textarea', 'input']).isRequired,
    onInput: PropTypes.func.isRequired,
    type: PropTypes.string,
    name: PropTypes.string.isRequired
};

export default FormInput;