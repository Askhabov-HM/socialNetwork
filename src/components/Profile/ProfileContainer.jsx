import React from 'react';
import { connect } from 'react-redux';

import Profile from './Profile';
import { setProfilePhotoAC, setUserNameAC } from './../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import {setProfileDataAPI} from '../../api/api'

class ProfileContainer extends React.Component {
    
    componentDidMount() {
        
        let userId = this.props.match.params.userId;

        if(!userId){
            userId = 2;
        }

        setProfileDataAPI(userId)
        .then(
            data => {
                this.props.setPhoto(data);
                this.props.setUserName(data);
            }
        );
    }

    render() {
        return(
        <>
            <Profile {...this.props} photo={this.props.profilePhoto} profileUserName={this.props.profileUserName}/>
        </>)
    }
}



const mapStateToProps = (state) => {
    return {
        profilePhoto: state.profilePage.profilePhoto,
        profileUserName: state.profilePage.userName
    }
}

let withProfilePhoto = withRouter(ProfileContainer);

export default connect(mapStateToProps,{
    setPhoto: setProfilePhotoAC,
    setUserName: setUserNameAC,
})(withProfilePhoto);