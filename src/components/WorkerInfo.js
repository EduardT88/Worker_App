import React, { useContext, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { AppContext } from "../context/Context";

export default function WorkerInfo() {
  const params = useParams();

  const { worker_en } = useContext(AppContext);
  const item = worker_en;

  useEffect(() => {
    console.log(item);
  },[]);

  return (
    <div className="container p-2 text-center">
      <h2>Info about:{}</h2>
      <img src="" alt="" className="col-md-3" />
      <div>Age: {item.dob.age}</div>
      <div>Country: {item.location.country}</div>
      <div>City: {item.location.city}</div>
      <div>Email: {item.email}</div>
      <div>phone:{}</div>
      <button className="btn btn-dark mt-3">Back to List</button>
    </div>
  );
}


