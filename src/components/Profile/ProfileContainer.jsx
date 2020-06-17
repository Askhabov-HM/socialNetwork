import React from 'react';
import {compose} from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'; 

import Profile from './Profile';
import { setProfilePhotoAC, setUserNameAC, getProfilePhotoAC } from './../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
    
    componentDidMount() {
        
        let userId = this.props.match.params.userId;

        if(!userId){
            userId = 2;
        }

        this.props.getProfilePhotoAC(userId);

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
            <Profile {...this.props} photo={this.props.profilePhoto} profileUserName={this.props.profileUserName}/>
        </>)
    }
}
const mapStateToProps = (state) => {
    return {
        profilePhoto: state.profilePage.profilePhoto,
        profileUserName: state.profilePage.userName,
    }
}

export default compose(
    connect(mapStateToProps,{
        setPhoto: setProfilePhotoAC,
        setUserName: setUserNameAC,
        getProfilePhotoAC,
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