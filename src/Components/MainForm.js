import { useEffect, useRef, useState } from "react";
import "../App.css";
import Table from "./Table";
import Header from "./Header";
import Retrieve from './Retrieve';
function MainForm() {
  document.title="Directory App"
  let [displayForm, setdisplayForm] = useState("none");

  function NewEntry() {
    if (displayForm == "none") {
      setdisplayForm("flex");
    } else {
      setdisplayForm("none");
    }
  }

  let nameRef = useRef(null);
  let dobRef = useRef(null);
  let aadharRef = useRef(null);
  let mobRef = useRef(null);
  
  let [getAge,setAge]=useState(null);
  function CurrentAge(){
    let CurrentDate=new Date();
    let BirthDate = new Date(dobRef.current.value)
    let Age=CurrentDate.getFullYear() - BirthDate.getFullYear();
    setAge(Age);
  }
  
  let [LocalStorageData, setData] = useState([]);
  useEffect(()=>{
    setData((prev)=>{
      return JSON.parse(localStorage.getItem('user')) || prev;
    })
  },[])
  function HandleFormSubmit(ele) {
    ele.preventDefault();

    setData((prev) => {
      let user = [
        ...prev,
        {
          name: nameRef.current.value,
          dob: dobRef.current.value,
          aadhar: aadharRef.current.value,
          mobileNum: mobRef.current.value,
          userAge: getAge
        },
      ];
      localStorage.setItem("user", JSON.stringify(user));
      setdisplayForm("none")
      return user;
    });
  }
  return (
    <div className="App">
      
      <div className="MainContainer">
        

        <div className="container">
          <div>
            <p>Add New Person</p>
          </div>

          <Table LocalStorageData={LocalStorageData} setData={setData} />
          
          <button className="AddElement" onClick={NewEntry}>
            Add
          </button>

          <div className="NewEntryForm" style={{ display: displayForm }}>
            <h3>Fill below form for New Entry</h3>
            <form action="" onSubmit={HandleFormSubmit}>
              <input type="text" placeholder="Name" ref={nameRef} />
              <input type="date" onChange={CurrentAge} ref={dobRef} />
              <input
                type="number"
                placeholder="Aadhar Number"
                ref={aadharRef}
                min="100000000000"
                max="999999999999"
              />
              <input
                type="number"
                placeholder="Mobile Number"
                min="1000000000"
                ref={mobRef}
                max="9999999999"
              />
              <input type="number" placeholder="Age" disabled value={getAge} />
              <input type="submit" value="Save" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainForm;
