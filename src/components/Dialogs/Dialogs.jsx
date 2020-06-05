import React, { Component } from 'react';
import DialogsItem from './DialogsItem/DialogsItem.jsx';
import Message from './Messages/Messages.jsx'

import CSS from './Dialogs.module.css';


const Dialogs = (props) => {
    
    let dialogsGenerate = props.dialogsData.map(d => <DialogsItem key={d.id} name={d.name} pathNumber={d.id} />);

    let messagesGenerate = props.messagesData.map(m => <Message key={m.id} messageText={m.text} sender={m.sender} />)

    let sendMassageBtnRef = React.createRef();

    let addDialogBtnRef = React.createRef();

    let sendMessageBtn = () => {
        let messageText = sendMassageBtnRef.current.value;
        props.sendMessage(messageText);
    }

    let sendMessageChange = (e) => {
        let newMessage = e.target.value;
        props.updateMessage(newMessage);
    }

    let addDialogBtn = () => {
        let dialogTitle = addDialogBtnRef.current.value;
        props.addDialog(dialogTitle);
    }

    return (
        <div className={CSS.dialogsPage}>
            <div className={CSS.dialogsList}>
                {dialogsGenerate}
                <textarea  name="" id="" cols="20" rows="5" ref={addDialogBtnRef} ></textarea><br/>
                <button onClick={addDialogBtn}>Add Dialog</button>
            </div>
            <div className={CSS.userMessages}>
                {messagesGenerate}
                <textarea value={props.newMessageText} name="" id="" cols="30" rows="5" ref={sendMassageBtnRef} onChange={sendMessageChange}></textarea><br/>
                <button onClick={sendMessageBtn}>Send Message</button>
            </div>
        </div>
    )
}

export default Dialogs;
