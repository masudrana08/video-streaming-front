import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../../App'
import MyNav from '../../components/Home/MyNav/MyNav'
import RelevanceVideo from '../../components/Home/RelevanceVideo/RelevanceVideo'

export default function Home() {

  return (
    <div>
      <MyNav />
      <RelevanceVideo />
    </div>
  )
}
