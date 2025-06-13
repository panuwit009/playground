import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Test from './Page2';
import reportWebVitals from './reportWebVitals';

function pages(props){
if (props.page === 1) {
  <App />
} else if (props.page === 2) {
  <Test />
}
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <button onClick={pages} page="1">1</button>
    <button onClick={pages} page="2">2</button>
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
