import React, { useEffect, useState, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { AppContext } from "../context/Context";
import WorkerSearch from "../components/WorkerSearch";
import WorkerList from "../components/WorkerList";

import "../components/home.css";


export default function Home() {
  const [querys] = useSearchParams();
  const [ar, setAr] = useState([]);

  const{setWorker_ar} = useContext(AppContext);

  useEffect(() => {
    const searchQ = querys.get("search") || "google";
    doApi(searchQ);
  }, [querys]);

  const doApi = async (_searchQ) => {
    try {
      const url = `https://randomuser.me/api/?results=10&seed=${_searchQ}`;
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      setAr(data.results);
      setWorker_ar(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <WorkerSearch />
      <WorkerList worker_ar={ar} />
    </React.Fragment>
  );
}
