import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/Context";


export default function WorkerSearch() {

  const inputRef = useRef();
  const nav = useNavigate();

  const {setInput} = useContext(AppContext);

  const onSearchClick = () => {
    const input_search = inputRef.current.value;
    setInput(input_search);
    nav(`/?search=${input_search}`);
  };
  return (
    <header className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="logo col-auto"></div>
          <nav className="d-flex col-md">
            <input
              ref={inputRef}
              placeholder="Search for Company"
              type="search"
              className="form-control"
            />
            <button onClick={onSearchClick} className="btn btn-warning">
              Search
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
