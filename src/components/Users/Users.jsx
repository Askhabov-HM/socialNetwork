import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import UnitUser from './UnitUser';
import CSS from './Users.module.css';
import Pagination from './Pagination/Pagination';


let Users = ({
            onPageChange,
            currentPage,
            totalCount,
            pageSize,
            users,
            followingInProgress,
            toggleFollow,
            deleteFolowingThunk,
            addFollowingThunk,
            ...restProps}) => {        

            let pageCount = Math.ceil(totalCount/pageSize);

            let pages = [];
            for( let i = 1;  i <= pageCount; i++){
                if( i <= 50){
                    pages.push(i);
                }
                
            }

            return (
                
                <>
                    <div>
                        <Pagination pages={pages} currentPage={currentPage} onPageChange={onPageChange}/>
                    </div>
                    <div>
                        <UnitUser users={users}
                                followingInProgress={followingInProgress}
                                toggleFollow={toggleFollow}
                                deleteFolowingThunk={deleteFolowingThunk}
                                addFollowingThunk={addFollowingThunk}
                                />
                    </div>
                </>
            )
        
}
    

export default Users;