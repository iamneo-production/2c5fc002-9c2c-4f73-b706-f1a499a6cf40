import "./App.css";
import React, { useState } from "react";

import AllRoutes from "./Components/AllRoutes";
import { CartContextProvider } from "./Components/assests/cart-context";
import { MyOrdersContextProvider } from "./Components/assests/myorders-context";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className="App">
      <CartContextProvider>
        <MyOrdersContextProvider>
          <AllRoutes changeIsLogged={setIsLogged} isLogged={isLogged} />
        </MyOrdersContextProvider>
      </CartContextProvider>
    </div>
  );
}

export default App;
