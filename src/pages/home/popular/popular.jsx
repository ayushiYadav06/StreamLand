/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import ContentWrapper from "../../../components/contentWrapper/contentWrapper";
import useFetch from "../../../hooks/useFetch";

import Carosuel from "../../../components/carosuel/carosuel";

const popular = () => {
  const [endPoint, SetEndPoint] = useState("movie");
  const { data, loading } = useFetch(`/${endPoint}/popular`);

  const onTabChange = (tab) => {
    SetEndPoint(tab === "Movies" ? "movie" : "tv");
  
  };
   

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle"> What's Popular</span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>

      <Carosuel data={data?.results} loading={loading} endPoint={endPoint} />

    </div>
  );
};

export default popular;