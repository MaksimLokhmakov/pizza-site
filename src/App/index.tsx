import { BrowserRouter } from "react-router-dom";
import { AppRouter, Header, StoresProvider } from "../components";
import "./app-default.scss";

function App() {
  return (
    <BrowserRouter>
      <StoresProvider>
        <div className="App">
          <Header />
          <AppRouter />
        </div>
      </StoresProvider>
    </BrowserRouter>
  );
}

export default App;
