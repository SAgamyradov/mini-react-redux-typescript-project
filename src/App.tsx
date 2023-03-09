import React from "react";
import { Provider } from "react-redux";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import store from "./store/store";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Products />
      </Provider>
    </div>
  );
};

export default App;
