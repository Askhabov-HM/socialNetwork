import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';

import Profile from './Profile';
import { setProfilePhotoAC, setUserNameAC } from './../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';


class ProfileContainer extends React.Component {
    
    componentDidMount() {
        
        let userId = this.props.match.params.userId;

        if(!userId){
            userId = 2;
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        .then(
            response => {
                this.props.setPhoto(response.data);
                this.props.setUserName(response.data);
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