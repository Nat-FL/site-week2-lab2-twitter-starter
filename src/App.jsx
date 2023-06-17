import React, {useState} from "react"
import Feed from "./components/Feed/Feed"
import Navbar from "./components/Navbar/Navbar"
import UserProfile from "./components/UserProfile/UserProfile"
import Advertisements from "./components/Advertisements/Advertisements"
import { codepathUserProfile, firstTweet, navLinks } from "./constants"

export default function App() {

  
  const [userProfile, setUserProfile] = useState(codepathUserProfile)

  console.log({navLinks})
  console.log(userProfile)
  return (
    <div className="app">
      {/* creates new prop/argument that takes in navLinks properties
      navLinks is an array of objects */}
      <Navbar navInfo = {navLinks}/> 
      <main>
        <UserProfile userProfile ={userProfile} />
        <Feed />
        <Advertisements />
      </main>
    </div>
  )
}
