import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { requiredField, maxLengthCreator } from '../../Validators/validators';
import { Textarea } from '../../commons/FormControls/FormsControl';

let required = requiredField('dialog');
let maxLength = maxLengthCreator(30);

const AddNewPostForm = ({handleSubmit, ...restProps}) => {
    return (
        <>
            <form onSubmit={handleSubmit} action="">
                <Field
                    component={Textarea}
                    name='addNewPost'
                    placeholder='add post text'
                    validate={
                        [required, maxLength]
                    }
                />
                <button>Add New Post</button>
            </form>
        </>
    )
}

export default reduxForm({form:'addNewPost'})(AddNewPostForm);