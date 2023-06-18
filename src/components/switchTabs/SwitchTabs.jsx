/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './switchTabs.scss'

const SwitchTabs = ( { data , onTabChange }) => {

  const [selectedTab , setSelectedTab] = useState(0)
  const [left , setLeft] = useState(0);

  const activeTab = (tab ,index) => {
    setLeft(index*100)
    setTimeout(()=>{
       setSelectedTab(index)
       onTabChange(tab , index)
    },300)
  }
  return (

    <div className='switchingTabs'>
      <div className="tabItems">
         {data.map((tab ,index)=>(
            <span 
            key={index}
            className={`tabItem ${selectedTab === index ? "active":""}`}
            onClick={()=>{
              activeTab(tab,index)
            }}
            >
              {tab}
            </span>
         ))}

         <span className="movingBg" style={{left}}/>
      </div>
    </div>
  )
}

export default SwitchTabs