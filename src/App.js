import Home from "./components/Home"
import {PaginationContextProvider} from "./context/PaginationContext";

function App() {
  document.body.style.backgroundColor = "black"
  return (
    <PaginationContextProvider>
    <div>
      <Home />
    </div>
    </PaginationContextProvider>
  );
}

export default App;
