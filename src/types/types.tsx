export interface HeaderProps {
    onSearch: (searchTerm: string) => void;
}
  
export interface FoodItemProps {
    food: {
      id: number;
      name: string;
      image: string;
      isFavorite: boolean;
    };
    onToggleFavorite: () => void;
  }
 export interface FoodItemType {
    id: number;
    title: string;
    image: string;
    imageType: string;
    isFavorite?: boolean; // Add this if you're managing favorites locally
  }
  
  export interface FoodItem {
    id: number;
    title: string;
    image: string;
    imageType: string;
    isFavorite?: boolean; // Add this if you're managing favorites locally
  }
  
  export interface FoodGridProps {
    foods: FoodItem[];
    onToggleFavorite: (id: number) => void;
  }
