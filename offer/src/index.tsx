import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//17버전부터 ReactDOM.render를 지원하지 않는다.
// const rootElement = document.getElementById('root');
// ReactDOM.render(<App />, rootElement);

import { createRoot } from "react-dom/client";
const container: any = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);