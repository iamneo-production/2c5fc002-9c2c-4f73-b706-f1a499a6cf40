import "./App.css";
import React from "react";

import AllRoutes from "./Components/AllRoutes";
// Context Providers
import { CartContextProvider } from "./Components/assests/cart-context";
import { MyOrdersContextProvider } from "./Components/assests/myorders-context";
import UserContextProvider from "./Components/assests/user-context";
import AuthContextProvider from "./Components/assests/auth-context";
import { ProductsContextProvider } from "./Components/assests/products-context";
import { ReviewContextProvider } from "./Components/assests/review-context";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ReviewContextProvider>
          <ProductsContextProvider>
            <UserContextProvider>
              <CartContextProvider>
                <MyOrdersContextProvider>
                  <AllRoutes />
                </MyOrdersContextProvider>
              </CartContextProvider>
            </UserContextProvider>
          </ProductsContextProvider>
        </ReviewContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
