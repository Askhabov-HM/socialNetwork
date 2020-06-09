import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Users from './Users.jsx'

import {followAC, unFollowAC, setStateAC, setCurrentPageAC, setTotalCountAC} from './../../redux/users-reducer'


class UsersContainer extends React.Component  {

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(
            response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
                console.log(1);
            }
        );
    }

    onPageChange = (pageNumber) => {
        this.props.setPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(
            response => {
                this.props.setUsers(response.data.items);
            }
        );
    }

    render() {
        return(
            <Users
            onPageChange = {this.onPageChange}
            totalCount = {this.props.totalCount}
            pageSize = {this.props.pageSize}
            currentPage={this.props.currentPage}
            follow = {this.props.follow}
            unfollow = {this.props.unFollow}
            users = {this.props.users}
        />
        )
     }
}





const mapStateToProps = (state)=>{
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        follow: (userID)=>{
            dispatch(followAC(userID));
        },
        unFollow: (userID) => {
            dispatch(unFollowAC(userID));
        },
        setUsers: (users) => {
            dispatch(setStateAC(users));
        },
        setPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalCount: (totalCount) => {
            dispatch(setTotalCountAC(totalCount));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);


