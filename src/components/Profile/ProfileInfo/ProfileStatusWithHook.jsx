import React, { useState, useEffect  } from 'react';

const ProfileStatus = ({status, updateStatus, ...restProps}) => {
    let [editMode, setEditMode] = useState(false);
    let [statusUseState, setStatus] = useState(status);

    useEffect( ()=> {
        setStatus(status);

    }, [status]);

    const activateEditMode = () => {
        setEditMode(true);            
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        updateStatus(statusUseState)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <>
            { !editMode ?
                <div>
                    <span onDoubleClick={activateEditMode} >{status ? status : 'userStatusIsNull'}</span>
                </div>
            :
                <div>
                    <input  onChange={onStatusChange} 
                            onBlur={deactivateEditMode}
                            value={statusUseState}
                            autoFocus={true}
                            type="text"/>
                </div>
            }
        </>
    )
}

export default ProfileStatus;