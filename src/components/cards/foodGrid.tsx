import FoodItem from '../food-item/foodItem'
import "./foodGrid.css";
import { FoodGridProps } from '../../types/types';



const FoodGrid = ({ foods, onToggleFavorite }: FoodGridProps) => {
    return (
      <div className="food-grid">
        {foods.map((food) => (
          <FoodItem
            key={food.id}
            food={food}
            onToggleFavorite={() => onToggleFavorite(food.id)}
          />
        ))}
      </div>
    );
  };
  

export default FoodGrid;