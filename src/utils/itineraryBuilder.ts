interface WeatherData {
  condition: string;
  diningType: 'indoor' | 'outdoor';
}

interface Meal {
  time: 'breakfast' | 'lunch' | 'dinner';
  dish: string;
  restaurant: string;
}

interface MealsData {
  breakfast: Meal;
  lunch: Meal;
  dinner: Meal;
}

export function buildNarrative(city: string, weather: WeatherData, meals: MealsData): string {
  return `
Welcome to ${city}! Today's weather is ${weather.condition}, perfect for ${weather.diningType} dining.

- Breakfast at ${meals.breakfast.restaurant}, enjoying their famous ${meals.breakfast.dish}.
- Lunch at ${meals.lunch.restaurant}, where you'll try the classic ${meals.lunch.dish}.
- Dinner at ${meals.dinner.restaurant}, ending your tour with a delicious ${meals.dinner.dish}.
`.trim();
}
