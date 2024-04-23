import React, { useState } from 'react'
import Header from '../Header/Header'
import './Home.css'
import ExploreMenu from '../ExploreMenu/ExploreMenu';

function Home() {
  // const [category,setCategory]=useState;

  return (
    <div>
    <Header/>
    <ExploreMenu />
    </div>
  )
}

export default Home