import React, { useState, useEffect  } from 'react';


const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( ()=> {
        setStatus(props.status);

    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true);            
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
        // this.setState({
        //     status: e.currentTarget.value,
        // });
    }

    return (
        <>
            { !editMode ?
                <div>
                    <span onDoubleClick={activateEditMode} >{props.status ? props.status : 'userStatusIsNull'}</span>
                </div>
            :
                <div>
                    <input  onChange={onStatusChange} 
                            onBlur={deactivateEditMode}
                            value={status}
                            autoFocus={true}
                            type="text"/>
                </div>
            }
        </>
    )
}

// class ProfileStatus extends React.Component  {
//     state={
//         editMode: false,
//         status: this.props.status,
//     }

//     activateEditMode() {
//         this.setState({
//             editMode: true
//         })
//     }

//     deactivateEditMode() {
//         this.setState({
//             editMode: false,
//         });
//         this.props.updateStatus(this.state.status)
//     }

//     onStatusChange = (e) => {
//         this.setState({
//             status: e.currentTarget.value,
//         });
//     }

//     componentDidUpdate(prevProps, prevState) {
//         if( prevProps.status !== this.props.status){
//             this.setState({
//                 status: this.props.status
//             });
//         }
//     }

//     render() {
//         return true
//     }
// }

export default ProfileStatus;