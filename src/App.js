import './App.css';

function App() {
  return (
    <div className="App">
      <div className="formContainer">
        <div className="header">
          <h2>ToDo App</h2>
        </div>
        <div className="searchContainer">
          <input type="text" placeholder="Enter task name"/>
          <button>Search</button>
        </div>
        <div className="taskView">
          <ul>
            <li>
              <p>Activity</p>
              <input type="radio"/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
