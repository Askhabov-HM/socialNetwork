import React, { Component } from 'react';


import CSS from './Users.module.css';


let Users = (props) => {        
        let pageCount = Math.ceil(props.totalCount/props.pageSize);

        let pages = [];
        for( let i = 1;  i <= pageCount; i++){
            if( i <= 50){
                pages.push(i);
            }
            
        }

        return (
            
            <>
                <div>
                    {
                        pages.map( p => {
                            return <span 
                            className={ props.currentPage === p && CSS.countBold}
                            onClick={ () => { props.onPageChange(p) } }>
                                {p}
                            </span>
                        })
                    }
                </div>
                <div>
                    {
                        props.users.map( u => <div key={u.id}>
                            <div>
                                <div>
                                    <img className={ CSS.avatar}
                                        src={u.photos.small!= null ? u.photos.small : 'https://i.stack.imgur.com/x8PhM.png'} alt=""/>
                                </div>
                                <div>
                                    { u.following
                                    ? <button onClick={()=>{props.unFollow(u.id)}}>Unfollow</button>
                                    : <button onClick={()=>{props.follow(u.id)}}>Follow</button>}
                                    
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div>{u.name}</div>
                                    <div>{u.status}</div>
                                </div>
                                <div>
                                    <div>u.location.cityName</div>
                                    <div>u.location.national</div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </>
        )
        
}
    

export default Users;