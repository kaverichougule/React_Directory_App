import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Heading">
        <h3>Kaveri Chougule Directory App</h3>
      </div>
      <div className="MainContainer">
        <div className="buttons">
          <button>Add New Person</button>
          <button>Retrieve Information</button>
        </div>
        <div className="container">
          <div>
            <p>Add New Person</p>
          </div>
          <table>
            <tr>
              <th>Name</th>
              <th>Date of Birth</th>
              <th>Aadhar Number</th>
              <th>Mobile Number</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>Kaveri</td>
              <td>30 May 2001</td>
              <td>86864315977</td>
              <td>9421745510</td>
              <td>22</td>
              <td>Delete</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
