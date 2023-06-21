import { useEffect } from "react";

import { BrowserRouter , Routes , Route } from "react-router-dom";

import { fetchDataFromApi } from "./utils/Api";

import { getApiConfiguration  } from "./store/HomeSlice";
import { getGenre } from './store/HomeSlice'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import Header from './components/header/Header'
import Footer from './components/Footer/Footer'

import Home from "./pages/home/Home";
import Details from './pages/details/Details'
import Explore from './pages/explore/Explore'
import SearchResults from './pages/searchResults/SearchResults'
import PageNotFound from './pages/404/PageNotFound'


function App() {
  useEffect(() => {
    fetchApiConfig();
    genresCall();
  });

  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  const fetchApiConfig = () => {
    url
    fetchDataFromApi("/configuration").then((res) => {
      const url = {
        backdrop:res.images.secure_base_url + "original" , 
        poster:res.images.secure_base_url + "original" + '/', 
        profile:res.images.secure_base_url + "original"
      }
      dispatch(getApiConfiguration(url));
    });
  };

  const genresCall = async() =>{
    let promises = []
    let endPoints = ["tv" , "movie"]
    let allGenres = {}

    endPoints.forEach((url)=>{
       promises.push(fetchDataFromApi(`/genre/${url}/list`))
    })

    const data = await Promise.all(promises)

    data.map(({genres})=>{
           return genres.map((item)=>(
                allGenres[item.id] = item

           ))
    })
   dispatch(getGenre(allGenres))

  }

  return (
    <div>
       
       
        <BrowserRouter>
        < Header />
        <Routes>
          <Route path='/' element = {<Home />} />
           <Route path='/:mediaType/:id' element={<Details />} /> 
          <Route path='/explore/:mediaType' element={<Explore />} />
         
          <Route path='/search/:query' element={<SearchResults />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
        </BrowserRouter>
 
    </div>
  );
}

export default App;
