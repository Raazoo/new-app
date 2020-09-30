// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';

//import from component
import TodoContainer from "./components/TodoContainer"
import './App.css';
ReactDOM.render(<TodoContainer/>,document.getElementById('root'));
