import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "../components";
import "./app-default.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
