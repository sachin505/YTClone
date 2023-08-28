import React, { useEffect, useState } from "react";
import Header from "./Header";
import SideNavBar from "./SideNavBar";
import './HomePage.css'
import VideosList from "./VideosList";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import store from "./Store";
import { videoSliceActions } from "./Store/VideosSlice";


function HomePage(props) {
  // useSelector()
  const dispatch=useDispatch
  const [data,setData]=useState([])
  let search=useSelector(state=>state.searchSlice)
  const actions=videoSliceActions;
  console.log(search)
  const addVideosFetched=(content)=>{
  }
  useEffect(()=>{
    const  getTheData=async ()=>{
       await axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyBY4vfEDOf8ghmslvREDhnOgLkO2qZmY3E&q="${search?search:'doremon'}"&type=video&part=snippet`)
       .then(response=>{
        setData(response.data.items)
        addVideosFetched(response.data.items)
       }).catch(error=>{
        console.log(error);
       })
    }
    getTheData();
  },[search])
//  console.log(data)
  return (
    <div>
        {/* <NavBar/>
        <CardRow content={props.results}/> */}
        <Header />
        {data?(<div className="HomePage">
          <SideNavBar />
          <VideosList videos={data} />
        </div>):<h1>Loading</h1>}
    </div>
  )
}

export default HomePage