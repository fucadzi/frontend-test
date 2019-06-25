import React from 'React';
import PropTypes from 'prop-types';
import './FormRow.scss';

const FormRow = ({ children }) => {
    
    return (
        <React.Fragment>
            <div className='row'>{ children }</div>
            <div className="clearfloat"></div>
        </React.Fragment>
    );
}

FormRow.propTypes = {
    children: PropTypes.element.isRequired
}

export default FormRow;
