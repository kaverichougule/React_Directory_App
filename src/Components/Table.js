import React from 'react';

function Table(props) {
    function DeleteElement(aadharNumber){
        props.setData((prev)=>{
          let filteredArray=prev.filter((item)=>{
            return item.aadhar!=aadharNumber
          })
          localStorage.setItem("user",JSON.stringify(filteredArray));
          return filteredArray;
        })
      }
    return (
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
              {props.LocalStorageData.map((ele) => {
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
    );
}

export default Table;