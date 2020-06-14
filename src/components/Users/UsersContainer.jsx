import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';

import Users from './Users.jsx';
import Loader from './../Loader/Loader.jsx';

import {followAC, unFollowAC, setStateAC, setCurrentPageAC, setTotalCountAC, loadingAC, toggleFollowingAC} from './../../redux/users-reducer'
import { setUsers } from '../../api/api.js';


class UsersContainer extends React.Component  {

    componentDidMount(){
       setUsers(this.props.currentPage, this.props.pageSize)
        .then(
            data => {
                this.props.setUsers(data.items);
                this.props.setTotalCount(data.totalCount);
                this.props.loadingFunc(this.props.itsLoad);
                console.log(1);
            }
        );
    }

    onPageChange = (pageNumber) => {
        this.props.loadingFunc(!this.props.itsLoad);
        this.props.setPage(pageNumber);
        setUsers(pageNumber, this.props.pageSize).then(
            data => {
                this.props.setUsers(data.items);
                setTimeout(this.props.loadingFunc(!this.props.itsLoad), 20000);
            }
        );
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
                
                follow = {this.props.follow}
                unfollow = {this.props.unFollow}
                toggleFollow = { this.props.toggleFollow}
            /></>
        )
     }
}





const mapStateToProps = (state)=>{
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        itsLoad: state.usersPage.loading,
        followingInProgress: state.usersPage.followingInProgress
    }
}

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

export default connect(mapStateToProps, {
    follow:followAC,
    unFollow:unFollowAC,
    setUsers:setStateAC,
    setPage:setCurrentPageAC,
    setTotalCount:setTotalCountAC,
    loadingFunc:loadingAC,
    toggleFollow:toggleFollowingAC
})(UsersContainer);


