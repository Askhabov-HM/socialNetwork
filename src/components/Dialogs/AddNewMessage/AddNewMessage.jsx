import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { requiredField, maxLengthCreator } from '../../Validators/validators';
import { Textarea } from '../../commons/FormControls/FormsControl';

let maxLength100 = maxLengthCreator(100);
let required = requiredField('message');

const AddNewMessage = (props) => {
    return(
        <>
            <form onSubmit={props.handleSubmit} action="">
                <Field
                    component={Textarea} 
                    name='addNewMessage' 
                    palceholder='enter messages text'
                    validate={[required, maxLength100]}
                    /><br/>
                <button>Send Message</button>
            </form>
        </>
    )
}
export default reduxForm({form:'addNewMessage'})(AddNewMessage);

