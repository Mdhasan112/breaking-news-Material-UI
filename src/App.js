import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import News from './components/News/News';
import { useEffect, useState } from 'react';

function App() {
  const[articles, setArticles] = useState([])
  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=34d22f9d2ede41a39e34e08c6a4d219f')
    .then(res => res.json())
    .then(data => setArticles(data.articles))
  }, [])
  return (
    <div>
      <Button variant="contained">Hello World</Button>
      {
        articles.map(article => <News article ={article}></News>)
      }
    </div>
  );
}

export default App;
