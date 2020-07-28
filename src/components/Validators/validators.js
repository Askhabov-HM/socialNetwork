import React from 'react';

export const requiredField = (requiredText) => value => {
    if (value) {
        return undefined;
    }
    else {
        switch (requiredText) {
            case 'dialog':{
                return `Please enter ${requiredText} name `
                }
            case 'message':{
                return `You're followers wait the post`
            }
            default: return 'requiredText type Error';
        }
    }
    
};

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Length is more than ${maxLength}`
    return undefined;
}