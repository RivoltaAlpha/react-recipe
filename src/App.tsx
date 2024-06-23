import { useState, useEffect } from 'react';
import Header from './components/header/header';
import FoodGrid from './components/cards/foodGrid';
import { FoodItem } from './types/types';
import './App.css';

const API_KEY = 'de3201c7efbd493fad218796c6bf7365';

const App = () => {
  const [foods, setFoods] = useState<FoodItem[]>([]);

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async (query: string = '') => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${query}&number=10`
    );
    const data = await response.json();
    setFoods(data.results.map((item: any) => ({ ...item, isFavorite: false })));
  };

  const handleSearch = (searchTerm: string) => {
    fetchFoods(searchTerm);
  };

  const toggleFavorite = (id: number) => {
    setFoods(prevFoods => prevFoods.map(food => 
      food.id === id ? { ...food, isFavorite: !food.isFavorite } : food
    ));
  };

  return (
    <div className="App">
      <Header onSearch={handleSearch} />
      <FoodGrid foods={foods} onToggleFavorite={toggleFavorite} />
    </div>
  );
};

export default App;
