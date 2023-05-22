import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import GlobalContext from './contexts/global-context/GlobalContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalContext>
    <App />
  </GlobalContext>
);
