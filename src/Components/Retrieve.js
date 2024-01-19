import React, { useReducer, useRef, useState } from "react";
import Table from "./Table";

function Retrieve(props) {
    let [getData,setData]=useState([]);
    let getInput=useRef(null);
    function SearchUser(){
        
        setData(()=>{
            let data=JSON.parse(localStorage.getItem('user'));
            data=data.filter((ele)=>{
                return ele.aadhar==getInput.current.value
            })
            return data
        })
    }
    
  return (
    <div className="App">  
      <div className="MainContainer">
        <div className="container">
          <div>
            <p>Retrieve Information</p>
          </div>
            <input type="number" placeholder="Aadhar Number" ref={getInput} />
            <button onClick={SearchUser}>Find</button>

            <Table LocalStorageData={getData} setData={setData} />
        </div>
        
      </div>
    </div>
  );
}

export default Retrieve;
