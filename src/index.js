import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";

//- [1 ] Redux store'u yaratmak için `createStore` fonksiyonunu kullanın.
const store = createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //- [2 ] Redux store'u React uygulaması ile ilişkilendirmek için `Provider` bileşenini kullanın.
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
