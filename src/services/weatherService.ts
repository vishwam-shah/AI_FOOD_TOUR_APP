import 'dotenv/config';

const API_KEY = process.env.OPENWEATHERMAP_API_KEY;

interface WeatherResponse {
  weather: Array<{
    main: string;
    description: string;
  }>;
}

interface WeatherData {
  condition: string;
  diningType: 'indoor' | 'outdoor';
}

export async function getWeather(city: string): Promise<WeatherData> {
  try {
    if (!API_KEY) {
      console.error('OPENWEATHERMAP_API_KEY environment variable is not set');
      return { condition: 'sunny', diningType: 'outdoor' };
    }
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    console.log('Fetching weather for:', city);
    const res = await fetch(url);
    
    if (!res.ok) {
      throw new Error(`Weather API error: ${res.status} ${res.statusText}`);
    }
    
    const data: WeatherResponse = await res.json();
    
    if (!data.weather || !Array.isArray(data.weather) || data.weather.length === 0) {
      console.warn('Weather data not available for city:', city);
      return { condition: 'sunny', diningType: 'outdoor' };
    }
    
    const condition = data.weather[0].main.toLowerCase();
    const description = data.weather[0].description;
    const diningType: 'indoor' | 'outdoor' = ['rain', 'snow', 'storm', 'thunderstorm'].includes(condition)
      ? 'indoor'
      : 'outdoor';
      
    return {
      condition: description, // e.g., "light rain", "cloudy", "clear sky"
      diningType: diningType  // "indoor" or "outdoor"
    };
  } catch (error) {
    console.error('Error fetching weather:', error instanceof Error ? error.message : 'Unknown error');
    return { condition: 'sunny', diningType: 'outdoor' };
  }
}
