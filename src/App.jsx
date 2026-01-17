import "./App.css";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import data from "./data.js";

function App() {
  const cardData = data.map((data) => {
    return <Main key={data.id} {...data} />;
  });
  return (
    <div className="journal-container">
      <Header />
      <div className="main-container">{cardData}</div>
    </div>
  );
}

export default App;
