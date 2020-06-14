import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:  {
        'API-KEY': '5f00bc5e-d425-4e78-9b58-c6b732ccf35e'
    },
});

export const setUsers = (currentPage,pageSize)=> {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        ).then( response => {
            return response.data
        })
}

export const setAuth = ()=> {
    return instance.get(`auth/me`,
        ).then( response => {
            return response.data
        })

       
}

export const setProfileDataAPI = (userId) => {
    return instance.get(`profile/`+userId,
        ).then( response => {
            return response.data
        })

       
}
