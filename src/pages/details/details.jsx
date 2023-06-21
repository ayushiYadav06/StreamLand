/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Details.scss'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/UseFetch'
import DetailsBanner from './detailsBanner/DetailsBanner'
import Cast from './cast/Cast'
import VideosSection from './videosSection/VideosSection'
import Similar from './carousels/Similar'
import Recommendations from './carousels/Recommendations'

const details = () => {

  const { mediaType , id } = useParams()
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const {data : credits , loading:creditsLoading} =useFetch(`/${mediaType}/${id}/credits`)

  return (
    <div>
     <DetailsBanner  video = {data?.results[0]}  crew={credits?.crew}/>
     <Cast data={credits?.cast} loading={creditsLoading} 
     />
     <VideosSection data ={data}  loading ={loading}  />
     <Similar mediaType={mediaType} id={id}/>
   <Recommendations mediaType={mediaType} id={id} />
    </div>
  )
}

export default details
