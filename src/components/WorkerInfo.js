import React, { useContext, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { AppContext } from "../context/Context";

export default function WorkerInfo() {

  const params = useParams();

  const { worker_ar, worker_en } = useContext(AppContext);


  // useEffect(() => {

  //   doApi()
  // },[])

  // const doApi = async() => {
  //   try{
  //     const url = `https://randomuser.me/api/?i=${worker_ar}`
  //     const resp = await fetch(url);
  //     const data = await resp.json();
  //     console.log(data);
  //   }
  //   catch(err){
  //     console.log(err);
  //   }
  // }

  return (
    <div className="container p-2 text-center">
      <h2>Info about:{name.first}</h2>
      <img src="" alt="" className="col-md-3" />
      <div>Age:{}</div>
      <div>Country:{}</div>
      <div>City:{}</div>
      <div>Email:{}</div>
      <div>phone:{}</div>
      <button className="btn btn-dark mt-3">Back to List</button>
    </div>
  );
}
