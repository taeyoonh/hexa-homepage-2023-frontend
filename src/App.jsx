/* eslint-disable react/jsx-props-no-spreading */

import "static/css/app/App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "mobx-react";

import LoginStore from "common/stores/LoginStore";

import LoginPage from "pages/login";
import Home from "pages/home";

function App() {
  return (
    <div className="App">
      <Provider loginStore={new LoginStore()}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;