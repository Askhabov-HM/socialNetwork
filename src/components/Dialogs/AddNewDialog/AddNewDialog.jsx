import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { requiredField, maxLengthCreator } from '../../Validators/validators';
import { Textarea } from '../../commons/FormControls/FormsControl';

let maxLength20 = maxLengthCreator(20)
let requiredDialog = requiredField('dialog');


const AddNewDialog = (props) =>{
    return(
        <>
            <form onSubmit={props.handleSubmit} action="">
                <Field 
                    component={Textarea} 
                    name='addNewDialog' 
                    placeholder='enter youre text'
                    validate={[requiredDialog, maxLength20]}
                    />
                <button >Add Dialog</button>
            </form>
        </>
    )
}
export default reduxForm({form:'addNewDialog'})(AddNewDialog);

