import "./App.css";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";

function App() {
  return (
    <div className="journal-container">
      <Header />
      <div className="main--container">
        <Main />
      </div>
    </div>
  );
}

export default App;
