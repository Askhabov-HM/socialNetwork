import React from 'react';
import { NavLink } from 'react-router-dom';

import CSS from './UnitUser.module.css';

const  UnitUser = ({
                    users,
                    followingInProgress,
                    toggleFollow,
                    deleteFolowingThunk,
                    addFollowingThunk,
                    ...restprops
                }) => {
                return(
                    <>
                        {
                        users.map( u => <div key={u.id}>
                            <div>
                                <div>
                                    <NavLink to={'./profile/' + u.id}>
                                        <img
                                            
                                            className={ CSS.avatar}
                                            src={u.photos.small!= null ? u.photos.small : 'https://i.stack.imgur.com/x8PhM.png'} alt=""/>
                                    </NavLink>
                                </div>
                                <div>
                                    
                                    { u.followed ? <button disabled={followingInProgress.some( id => id === u.id)} onClick={()=>{
                                        toggleFollow(true, u.id);
                                        
                                        deleteFolowingThunk(u.id);
                                    }}
                                    
                                    >Unfollow</button>
                                    : <button disabled={followingInProgress.some( id => id === u.id)} onClick={()=>{
                                        toggleFollow(true, u.id);
                                        addFollowingThunk(u.id);
    
                                    }}>Follow</button>}
                                    
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
                    </>   
                )        
}

export default UnitUser;