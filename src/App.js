import './App.sass';
import Quiz from './components/Quiz';
import { jsQuiz } from './components/questions';
import { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async() => {

      setLoading(true);

      const res = await fetch('./products.json');
      const data = await res.json();
      setProducts(data);

      setLoading(false);
    }
    fetchData();
  }, []);

  

  return (
      <Quiz 
        questions={jsQuiz.questions} 
        products={products} 
        loading={loading}
      />
  );
}

export default App;