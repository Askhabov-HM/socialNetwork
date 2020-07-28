import React from 'react';
import {compose} from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'; 

import Profile from './Profile';
import { setProfilePhotoAC, setUserNameAC, getProfilePhotoAC, getUserStatusThunk,updateUserStatusThunk } from './../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
    
    componentDidMount() {
        
        let userId = this.props.match.params.userId;

        if(!userId){
            userId = 2;
        }

        this.props.getProfilePhotoAC(userId);
        this.props.getUserStatusThunk(userId);

        // usersAPI.setProfileDataAPI(userId)
        // .then(
        //     data => {
        //         this.props.setPhoto(data);
        //         this.props.setUserName(data);
        //     }
        // );
    }

    render() {
        return(
        <>
            <Profile {...this.props}
                photo={this.props.profilePhoto}
                profileUserName={this.props.profileUserName}
                status={this.props.status}
                updateStatus={this.props.updateUserStatusThunk}
                />
        </>)
    }
}
const mapStateToProps = (state) => {
    return {
        profilePhoto: state.profilePage.profilePhoto,
        profileUserName: state.profilePage.userName,
        status: state.profilePage.status,
    }
}

export default compose(
    connect(mapStateToProps,{
        setPhoto: setProfilePhotoAC,
        setUserName: setUserNameAC,
        getProfilePhotoAC,
        getUserStatusThunk,
        updateUserStatusThunk

    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);



// let withProfilePhoto = withRouter(AuthRedirectComponent);

// export default connect(mapStateToProps,{
//     setPhoto: setProfilePhotoAC,
//     setUserName: setUserNameAC,
//     getProfilePhotoAC,
// })(withProfilePhoto);