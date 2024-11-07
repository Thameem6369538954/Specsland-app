import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { Provider } from 'react-redux';
import store from './Redux/Store.js';
// ..
AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      
     <App />
    </Provider>
  </StrictMode>,
)
