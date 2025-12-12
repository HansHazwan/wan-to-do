import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h2>Wan ToDo</h2>
      </div>
      <div className="body">
        <div className="taskView">
          <div className="search">
            <form>
              <input type="text"/>
              <button>Search</button>
            </form>
          </div>
          <div>
            <ol>
              <li>
                <p>Tugas</p>
                <input type="radio"/>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
