import "./App.css";
import React from "react";

import AllRoutes from "./Components/AllRoutes";
// Context Providers
import { CartContextProvider } from "./Components/assests/cart-context";
import { MyOrdersContextProvider } from "./Components/assests/myorders-context";
import UserContextProvider from "./Components/assests/user-context";
import AuthContextProvider from "./Components/assests/auth-context";
import { ProductsContextProvider } from "./Components/assests/products-context";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ProductsContextProvider>
          <UserContextProvider>
            <CartContextProvider>
              <MyOrdersContextProvider>
                <AllRoutes />
              </MyOrdersContextProvider>
            </CartContextProvider>
          </UserContextProvider>
        </ProductsContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
