import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "../components";
import "./style.scss";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
