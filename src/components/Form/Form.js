import React from 'React';
import FormRow from '../FormRow';
import FormLabel from '../FormLabel';
import FormInput from '../FormInput';
import FormButton from '../FormButton';
import FormError from '../FormError';
import './Form.scss';
import FormHeader from '../FormHeader';

export class Form extends React.Component {
    constructor () {
        super();
        this.state = {
            'full-name':'',
            'phone-num':'',
            'address':'',
            'message':'',
            'errors': []
        };
    }

    handleInput = (name, value) => {
        this.setState({
            [name]: value
        });
    }

    handleValidation = () => {
        let currErrors = [];
        let firstPart = 'Lauks ';
        let lastPart = ' ir jānorāda obligāti';

        if(this.state['full-name'] === ''){
            currErrors.push(`${firstPart}'Vārds, Uzvārds'${lastPart}`);
        }
        if(this.state['phone-num'] === ''){
            currErrors.push(`${firstPart}'Telefona numurs'${lastPart}`);
        }
        if(this.state['message'] === ''){
            currErrors.push(`${firstPart}'Ziņojums'${lastPart}`);
        }

        this.setState({
            errors: currErrors
        });

    }

    handleBtnClick = e => {
        e.preventDefault();
        this.handleValidation();
        console.log(' click!');
    }

  render() {
    return (
        <React.Fragment>
            <div id="page-wrapper">
                <FormHeader text="Kontaktforma" />
                <FormError errorArray={this.state.errors} />
                <form>
                    <FormRow>
                        <FormLabel text="Vārds, Uzvārds" required />
                        <FormInput type="text" inputField="input" name="full-name" onInput={this.handleInput} />
                    </FormRow>
                    <FormRow>
                        <FormLabel text="Telefons numurs" required />
                        <FormInput type="text" inputField="input" name="phone-num" onInput={this.handleInput} />
                    </FormRow>
                    <FormRow>
                        <FormLabel text="Adrese" />
                        <FormInput type="text" inputField="input" name="address" onInput={this.handleInput}/>
                    </FormRow>
                    <FormRow>
                        <FormLabel text="Ziņojums" required />
                        <FormInput inputField="textarea" name="message" onInput={this.handleInput}/>
                    </FormRow>
                    <FormRow>
                        <FormButton text="Sūtīt &rarr;" onBtnClick={this.handleBtnClick} /> 
                    </FormRow>
                </form>
            </div>
        </React.Fragment>
    );
  }
}

export default Form;
