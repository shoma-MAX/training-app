import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// interface AppProps{}
// interface AppState{
//   name:string;
// }

// class Apps extends Component<AppProps, AppState> {
//   [x: string]: any;
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       name: "React",
//     };
//   }
// }


ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
