import { createContext, useContext, useEffect, useState } from "react";

const SocialMediaContext=createContext()
const SocialMediaProvider=({children})=>{
    const [posts,setPosts]=useState([])
    const [users,setUsers]=useState([])
    const [likeStatus,setLikedStatus]=useState(false)
    const [likedUser,setLikedUser]=useState([])
    const [likeCounter,setLikeCounter]=useState('')
    
    const getPosts= async()=>{
        try {
            const res=await fetch("/api/posts")
            const {posts}=await res.json()
            setPosts(posts)
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(()=>{ getPosts()},[])

    const getUsers= async()=>{
        try {
            const res=await fetch("/api/users")
            const {users}=await res.json()
            setUsers(users)
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(()=>{ getUsers()},[])
    return(
        <SocialMediaContext.Provider value={{posts,users,likeStatus,setLikedStatus,likeCounter,setLikeCounter}}>{children}</SocialMediaContext.Provider>
    )
}

const useSocialMedia=()=>useContext(SocialMediaContext)
export {useSocialMedia,SocialMediaProvider}