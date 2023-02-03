import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './styles/globalStyles';
import App from './App';
import GetContext from './context/GetContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GetContext>
        <GlobalStyle />
        <App />
      </GetContext>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
