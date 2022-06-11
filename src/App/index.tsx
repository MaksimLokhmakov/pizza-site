import { BrowserRouter } from "react-router-dom";
import { AppRouter, Header } from "../components";
import "./app-default.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
