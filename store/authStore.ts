import { AuthInitialState, User } from '@/types'
import {create} from 'zustand'
import {persist} from 'zustand/middleware'


const authStore=(set:any):AuthInitialState=>({
    userProfile: null,
    addUser:(user:User)=>set({userProfile:user}),
    removeUser:()=>set({userProfile:null})
})

export const  useAuthStore=create(persist(authStore,{name:'auth'}))