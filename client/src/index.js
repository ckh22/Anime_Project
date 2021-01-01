import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";

const rootEl = document.getElementById("root");


function render() {
  ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    rootEl
  );
}

if (module.hot) {
  module.hot.accept("./App", function () {
    setTimeout(render);
  });
}

render();