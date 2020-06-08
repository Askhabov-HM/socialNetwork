import React, { Component } from 'react';
import * as axios from 'axios';

import CSS from './Users.module.css';


class Users extends React.Component  {

    constructor(props){
        super(props);

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(
            response => {
                this.props.setUsers(response.data.items);
                console.log(1);
            }
        );
    }

    render() {  
        return (
            <>
                <div>
                    {
                        this.props.users.map( u => <div key={u.id}>
                            <div>
                                <div>
                                    <img className={CSS.avatar} src='https://i.stack.imgur.com/x8PhM.png' alt=""/>
                                </div>
                                <div>
                                    { u.following
                                    ? <button onClick={()=>{this.props.unFollow(u.id)}}>Unfollow</button>
                                    : <button onClick={()=>{this.props.follow(u.id)}}>Follow</button>}
                                    
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
    

    
}

export default Users;