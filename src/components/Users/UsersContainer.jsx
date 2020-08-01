import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getUsers, getPageSize, getTotalCount, getCurrentPage, loading, followingInProgress} from '../../redux/selectors/users-selectors'
 
import Users from './Users.jsx';
import Loader from './../Loader/Loader.jsx';
import {withAuthRedirect} from '../../hoc/withAuthRedirect'

import {followAC, unFollowAC, setStateAC, setCurrentPageAC, setTotalCountAC, loadingAC, toggleFollowingAC,setUsersThunk,addFollowingThunk, deleteFolowingThunk} from './../../redux/users-reducer';


class UsersContainer extends React.Component  {

    componentDidMount(){
        this.props.loadingFunc(!this.props.itsLoad);
        this.props.setUsersThunk(this.props.currentPage, this.props.pageSize);
        
    }

    onPageChange = (pageNumber) => {
        this.props.loadingFunc(!this.props.itsLoad);
        this.props.setPage(pageNumber);
        this.props.setUsersThunk(pageNumber, this.props.pageSize);

    }

    render() {
        return(<>
            {this.props.itsLoad ? <Loader />
            : null}
            <Users
                currentPage={this.props.currentPage}
                onPageChange = {this.onPageChange}
                totalCount = {this.props.totalCount}
                pageSize = {this.props.pageSize}
                users = {this.props.users}
                
                followingInProgress = {this.props.followingInProgress}
                
                addFollowingThunk = {this.props.addFollowingThunk}
                deleteFolowingThunk = {this.props.deleteFolowingThunk}

                toggleFollow = { this.props.toggleFollow}
            /></>
        )
     }
}


const mapStateToProps = (state)=>{
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        itsLoad: loading(state),
        followingInProgress: followingInProgress(state)
    }
}

let AuthUserContainer = withAuthRedirect(UsersContainer);

export default connect(mapStateToProps, {
    follow:followAC,
    unFollow:unFollowAC,
    setUsers:setStateAC,
    setPage:setCurrentPageAC,
    setTotalCount:setTotalCountAC,
    loadingFunc:loadingAC,
    toggleFollow:toggleFollowingAC,
    setUsersThunk,
    addFollowingThunk,
    deleteFolowingThunk
})(AuthUserContainer);

// const mapDispatchToProps = (dispatch)=>{
//     return{
//         follow: (userID)=>{
//             dispatch(followAC(userID));
//         },
//         unFollow: (userID) => {
//             dispatch(unFollowAC(userID));
//         },
//         setUsers: (users) => {
//             dispatch(setStateAC(users));
//         },
//         setPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setTotalCount: (totalCount) => {
//             dispatch(setTotalCountAC(totalCount));
//         },
//         loadingFunc: (mean) => {
//             dispatch(loadingAC(mean));
//         }
//     }
// }




