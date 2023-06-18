/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import{ useEffect } from "react";

import './heroBanner.scss'

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useFetch from "../../../hooks/useFetch";

import Img from "../../../components/lazyLoadImage/img";
import ContentWrapper from "../../../components/contentWrapper/contentWrapper";

const heroBanner = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { data, loading } = useFetch("/movie/upcoming");

  const { url } = useSelector((state) => state.home);

 
  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);



  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && event.target.value.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  return (
    <div className="heroBanner">
     
     {!loading && <div className="backdrop-img">
     <Img src={background} />
     </div>
       }
      
<div className="opacity-layer"></div>

      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Millions of movies ,TV shows, people to discover . Explore me
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="search for movies or TV shows...."
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              onKeyUp={searchQueryHandler}
            />
              <button>search</button>
            
          </div>        
        </div>
      </ContentWrapper>
    </div>
  );
};

export default heroBanner;
