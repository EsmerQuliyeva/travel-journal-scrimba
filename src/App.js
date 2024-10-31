import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import datas from "../src/data";

function App(props) {
  return (
    <div className="App">
      <Navbar />
      {datas.map((data) => {
        return <Main key={data.key} data={data} />;
      })}
    </div>
  );
}

export default App;
