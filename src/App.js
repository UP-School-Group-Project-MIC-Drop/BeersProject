import Home from "./components/Home"

import {PaginationContextProvider} from "./context/PaginationContext";

function App() {
  document.body.style.backgroundColor = "black"
  return (
    
    <PaginationContextProvider>
      <Home />
    </PaginationContextProvider>
    
  );
}

export default App;
