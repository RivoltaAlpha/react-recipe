import './food-item.css';
import { FoodItem as FoodItemType } from '../../types/types';

interface FoodItemProps {
    food: FoodItemType;
    onToggleFavorite: () => void;
  }
  
  const FoodItem = ({ food, onToggleFavorite }: FoodItemProps) => {
    return (
      <div className="food-item">
        <img src={food.image} alt={food.title} className="food-image" />
        <h3 className="food-title">{food.title}</h3>
        <button onClick={onToggleFavorite} className="favorite-button">
          {food.isFavorite ? '♥' : '♡'}
        </button>
      </div>
    );
  };
  

export default FoodItem;