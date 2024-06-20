import React,{useContext} from "react";
import { AppContext } from "../context/Context";
import { useNavigate } from "react-router-dom";

export default function WorkerItem(props) {
  const item = props.item;
  const nav = useNavigate();

  const{input, worker_ar,setWorker_en} = useContext(AppContext);

  const onInfoClick = () => {
    setWorker_en(item);
    nav(`/employee/?company=${input}&index=${worker_ar.results.indexOf(item)}`)
  }

  return (
    <div className="col-md-3 p-2">
      <div className="border p-2 h-100 overflow-hidden shadow">
        <img src={item.picture.large} className="float-start me-3 w-25" />
        <h3>
          {item.name.first} {item.name.last}
        </h3>
        <div>Age: {item.dob.age}</div>
        <div>Country: {item.location.country}</div>
        <button onClick={onInfoClick} className="btn btn-dark">More info</button>
      </div>
    </div>
  );
}
