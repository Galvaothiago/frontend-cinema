import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from './globalStyle'
import { MovieProvider } from './context/MovieContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <MovieProvider>
      <BrowserRouter>
        <App />
        <GlobalStyle />
      </BrowserRouter>
    </MovieProvider>
  </>
)
