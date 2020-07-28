import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:  {
        'API-KEY': '5f00bc5e-d425-4e78-9b58-c6b732ccf35e'
    },
});

export const usersAPI = {
     setUsers (currentPage,pageSize)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
            ).then( response => {
                return response.data
            })
    },
    
    setProfileDataAPI (userId)  {
        return profileAPI.setProfileDataAPI(userId)
    },

    deleteFollowing (userId) {
        return instance.delete(`follow/`+userId,)
        .then( response => {
            return response.data
        }) 
    },

    addFollowing (userId) {
        return instance.post(`follow/`+userId,)
        .then( response => {
            return response.data
        }) 
    }
}

export const profileAPI ={
    setProfileDataAPI (userId)  {
        return instance.get(`profile/` + userId)
        .then( response => {
            return response.data
        }) 
    },

    getUserStatus (userId) {
        return instance.get(`profile/status/` + userId)
    },

    updateUserStatus(status) {
        return instance.put(`profile/status`, {status:status})
    }
} 

export const authAPI = {
    setAuth ()   {
        return instance.get(`auth/me`,
            ).then( response => {
                return response.data
            })
    
    },
    login (email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe}
        ).then( response => {
            return response.data
        })
    },
    logout () {
        return instance.delete(`auth/login`
        ).then( response => {
            return response.data
        })
    }     
}


