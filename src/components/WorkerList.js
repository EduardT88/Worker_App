import React from "react";
import WorkerItem from "./WorkerItem";

export default function WorkerList(props) {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="container-fluid h2 text-center">List of Workers</div>
        <div className="row">
          {props.worker_ar.map((item) => {
            return <WorkerItem key={item.login.username} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
