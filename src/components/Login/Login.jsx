import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { Redirect } from 'react-router-dom';

import style from '../commons/FormControls/FormsControl.module.css';
import { requiredField } from '../Validators/validators';
import { Input } from '../commons/FormControls/FormsControl';

let required = requiredField('');

const LoginForm = (props)=> {
    return(
        <form action="" onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} component={Input}
                    validate={[required]}
                />
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={Input} 
                    type={'password'} validate={[required]}    
                />
            </div>
            <div>
                <Field type='checkbox' name={'rememberMe'} component={Input}/> remember me
            </div>
            {props.error && <div className={style.warnLogin}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

// ВЫНЕСТИ ФОРМУ В ОТДЕЛЬНЫЙ ФАЙЛ

const LoginReduxForm = reduxForm({form:'login'})(LoginForm);


const Login = (props)=> {
    let onSubmit = (formData) =>{
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth){
        return <Redirect to={'/profile'} />
    }

    return (
        <>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
        
    )
} 

export default Login;