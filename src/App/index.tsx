import { BrowserRouter } from "react-router-dom";
import { AppRouter, Header } from "../components";
import "./app-default.scss";

function App() {
  console.log("app render");

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
