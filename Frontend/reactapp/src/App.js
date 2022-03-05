import "./App.css";
import React, { useState } from "react";

import AllRoutes from "./Components/AllRoutes";
import { CartContextProvider } from "./Components/assests/cart-context";

function App() {
  const [isLogged, setIsLogged] = useState(true);

  return (
    <div className="App">
      <CartContextProvider>
        <AllRoutes changeIsLogged={setIsLogged} isLogged={isLogged} />
      </CartContextProvider>
    </div>
  );
}

export default App;
