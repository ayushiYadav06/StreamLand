/* eslint-disable no-unused-vars */
import React, { useState } from 'react' 

import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import useFetch from '../../../hooks/UseFetch'

import Carosuel from '../../../components/carosuel/Carosuel'

const Trending = () => {

const [endPoint , SetEndPoint] = useState("day")
const {data , loading } = useFetch(`/trending/all/${endPoint}`)


  const onTabChange = (tab) => {
    SetEndPoint(tab === "Day" ?"day" : "week")
  }
  
  return (
 
    <div className='carouselSection'>

     <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs  data={[ "Day" , "Week"]} onTabChange = {onTabChange} />
     </ContentWrapper>

     <Carosuel  data={data?.results} loading={loading} />

    

    </div>
  )
}

export default Trending