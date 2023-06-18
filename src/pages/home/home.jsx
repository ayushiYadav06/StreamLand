/* eslint-disable no-unused-vars */
import React from 'react'
import './home.scss'

import HeroBanner from './heroBanner/heroBanner'
import Trending from './trending/Trending'
import Popular from './popular/popular'
import TopRated from './topRated/topRated'

const home = () => {
  return (
    <div>
       <HeroBanner />
       <Trending />
       <Popular />
       <TopRated />
    </div>
  )
}

export default home
