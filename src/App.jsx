// import logo from './logo.svg';
import "./styles/style.css";
import Header from "./components/Header/Header"
import ItemList from "./components/Room/ItemList"
import ProjectList from "./components/Room/ProjectList"
import KaneLogo from "./components/KaneLogo/KaneLogo"

{/* <header className="App-header"> */}
  {/* <img src={logo} className="App-logo" alt="logo" /> */}
  {/* <p> */}
    {/* Edit <code>src/App.js</code> and save to reload. */}
  {/* </p> */}
  {/* <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header> */}
{/* <Header /> */}

function App() {
  return (
    <div className="App">

      <Header />
      <KaneLogo />
      <ItemList />
      <ProjectList />
    </div>
  );
}

export default App;
