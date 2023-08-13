import React from 'react'
import { useParams } from 'react-router-dom'
import { useSocialMedia } from '../../context/SocialMediaContext'

export const IndividualPostCard = () => {
    const {postId}=useParams()
    const {posts}=useSocialMedia()
    const clickedPost=posts.find((post)=>post._id===postId)
    console.log(clickedPost)
  return (
    <div>IndividualPostCard</div>
  )
}
