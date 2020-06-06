import React, { Component } from 'react';
import CSS from './Users.module.css';


const Users =  (props) => {
    return (
        <>
            <div>
                {
                    props.users.map( u => <div key={u.id}>
                        <div>
                            <div>
                                <img className={CSS.avatar} src={u.logoImg} alt=""/>
                            </div>
                            <div>
                                { u.following
                                ? <button onClick={()=>{props.unFollow(u.id)}}>Unfollow</button>
                                : <button onClick={()=>{props.follow(u.id)}}>Follow</button>}
                                
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>{u.firstName}</div>
                                <div>{u.status}</div>
                            </div>
                            <div>
                                <div>{u.location.cityName}</div>
                                <div>{u.location.national}</div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </>
    )
}

export default Users;