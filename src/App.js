import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
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
  function DeleteElement(aadharNumber){
    setData((prev)=>{
      let filteredArray=prev.filter((item)=>{
        return item.aadhar!=aadharNumber
      })
      localStorage.setItem("user",JSON.stringify(filteredArray));
      return filteredArray;
    })
  }
  
  return (
    <div className="App">
      <div className="Heading">
        <h3>Kaveri Chougule Directory App</h3>
      </div>
      <div className="MainContainer">
        <div className="buttons">
          <button >Add New Person</button>
          <button >Retrieve Information</button>
        </div>

        <div className="container">
          <div>
            <p>Add New Person</p>
          </div>
          <table>
            <thead>
              <tr className="headingTr">
                <th>Name</th>
                <th>Date of Birth</th>
                <th>Aadhar Number</th>
                <th>Mobile Number</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {LocalStorageData.map((ele) => {
                return (
                  <tr>
                    <td>{ele.name}</td>
                    <td>{ele.dob}</td>
                    <td>{ele.aadhar}</td>
                    <td>{ele.mobileNum}</td>
                    <td>{ele.userAge}</td>
                    <td onClick={()=>{
                      DeleteElement(ele.aadhar);
                    }}>Delete</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
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

export default App;
