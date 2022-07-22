import "./App.css";
import LeftSideBar from "./components/layouts/LeftSideBar";
import Main from "./components/layouts/Main";
import RightSideBar from "./components/layouts/RightSideBar";

function App() {
  return (
    <div className="App">
      <div className="AppContainer">
        <LeftSideBar />
        <Main />
        <RightSideBar />
      </div>
    </div>
  );
}

export default App;
