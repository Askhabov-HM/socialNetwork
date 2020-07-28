import React from 'react';
import styles from './FormControls.module.css';

export const  Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div>
            <div className={hasError && styles.warnFormColor}>
                <textarea {...input} {...props}></textarea>
            </div>
            {hasError && <span className={styles.warnRedSpan}>{meta.error}</span>}
        </div>
        
    )
}


export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div>
            <div className={hasError && styles.warnFormColor}>
                <input {...input} {...props}></input>
            </div>
            {hasError && <span className={styles.warnRedSpan}>{meta.error}</span>}
        </div>
    )
}



// ИЗБАВИТЬСЯ ОТ ПОВТОРА КОДА