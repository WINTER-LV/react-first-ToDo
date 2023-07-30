import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CoinList from './Coin-List';
import ConvertPrice from './Convert-price';
import MovieList from './Movie';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App />

    <CoinList />

    <ConvertPrice style={{ marginTop: '20px' }} />

    <MovieList />

  </div>

);

