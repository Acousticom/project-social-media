import React from 'react'
import { Navbar } from '../components/navbar/Navbar'
import { SideBar } from '../components/sidebar/SideBar'
import { Outlet } from 'react-router-dom'
import { FollowersSuggestionBar } from '../components/followersSuggestioonBar/FollowersSuggestionBar'

export const Layouts = () => {
  return (
    <div>
        <Navbar/>
        <div className='container'>
            <SideBar/>
            <main>
                <Outlet/>
            </main>
            <FollowersSuggestionBar/>
        </div>
    </div>
  )
}
