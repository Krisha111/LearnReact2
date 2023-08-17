import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Time from './Time'
import reportWebVitals from './reportWebVitals';
import AddDel from './AddDel';
// import Eventhandling from './Eventhandling';
// import FormHandling from './FormHandling';
// import Complexstate from './Complexstate';
// import Complexstateprac from './Complexstateprac';
// import Todolist from './Todolist';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Time/> */}
    {/* <Eventhandling/> */}
    {/* <FormHandling/> */}
    {/* <Complexstate/> */}
    {/* <Complexstateprac/> */}
    {/* <Todolist/> */}
    <AddDel/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
