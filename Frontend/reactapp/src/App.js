// import "./App.css";
// import React, { useState } from "react";

// import AllRoutes from "./Components/AllRoutes";
// import { CartContextProvider } from "./Components/assests/cart-context";
// import { MyOrdersContextProvider } from "./Components/assests/myorders-context";

// function App() {
//   const [isLogged, setIsLogged] = useState(false);

//   return (
//     <div className="App">
//       <CartContextProvider>
//         <MyOrdersContextProvider>
//           <AllRoutes changeIsLogged={setIsLogged} isLogged={isLogged} />
//         </MyOrdersContextProvider>
//       </CartContextProvider>
//     </div>
//   );
// }

// export default App;

import logo from './logo.svg';
import "./App.css";
import Homepage from "./Components/Admin/Homepage";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [data, setData] = useState([
    {
      ud: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT28jgzI630uP-HoLrAGAZFzmR893c8F5LaYw&usqp=CAU",
      productName: "keychain1",
      cost: "50",
      quantity: "10",
    },

    {
      ud: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT28jgzI630uP-HoLrAGAZFzmR893c8F5LaYw&usqp=CAU",
      productName: "keychain2",
      cost: "100",
      quantity: "20",
    },

    {
      ud: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT28jgzI630uP-HoLrAGAZFzmR893c8F5LaYw&usqp=CAU",
      productName: "keychain3",
      cost: "150",
      quantity: "30",
    },
  ]);
  const onDelete = (item) => {
    setData(
      data.filter((e) => {
        return e !== item;
      })
    );
  };

  const onAdd = (image, productName, cost, quantity) => {
    let ud;
    if (!image || !productName || !cost || !quantity) {
      alert("please give all the information!");
    } else {
      if (data.length == 0) {
        ud = 1;
      } else {
        ud = data[data.length - 1].ud + 1;
      }
      console.log(ud);
      setData([
        ...data,
        {
          ud: ud,
          image: image,
          productName: productName,
          cost: cost,
          quantity: quantity,
        },
      ]);
    }
  };

  const onEditProduct = (productName, cost, image, quantity, item) => {
    setData(
      data.map((ele) => {
        if (ele === item) {
          return {
            ...ele,
            productName: productName,
            cost: cost,
            image: image,
            quantity: quantity,
          };
        }
        return ele;
      })
    );
  };

  return (
    <div>
      <Homepage
        data={data}
        onDelete={onDelete}
        onAdd={onAdd}
        onEditProduct={onEditProduct}
      />
    </div>
  );
}

export default App;
