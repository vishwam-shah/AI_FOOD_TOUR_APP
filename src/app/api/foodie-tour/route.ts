import { NextRequest, NextResponse } from 'next/server';
import { getWeather } from '../../../services/weatherService';
import { findRestaurant } from '../../../services/restaurantService';
import { buildNarrative } from '../../../utils/itineraryBuilder';
import fs from 'fs';
import path from 'path';

interface RequestBody {
  city: string;
}

interface WeatherData {
  condition: string;
  diningType: string;
}

interface Meal {
  time: 'breakfast' | 'lunch' | 'dinner';
  dish: string;
  restaurant: string;
}

interface ItineraryResponse {
  city: string;
  weather: WeatherData;
  meals: Meal[];
  narrative: string;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body: RequestBody = await req.json();
    const { city } = body;

    if (!city) {
      return NextResponse.json(
        { message: 'City is required' },
        { status: 400 }
      );
    }

    // Get weather
    const weather = await getWeather(city);
    
    // Load dishes data
    const dishesPath = path.join(process.cwd(), 'src', 'data', 'dishes.json');
    let dishesDB: Record<string, string[]> = {};
    
    try {
      dishesDB = JSON.parse(fs.readFileSync(dishesPath, 'utf8'));
    } catch (error) {
      console.warn('Could not load dishes.json, using fallback data');
    }

    // Get dishes for the city or use fallback
    let dishes = dishesDB[city];
    
    if (!dishes || dishes.length < 3) {
      // Fallback dishes for any city
      dishes = [
        'Local Breakfast Special',
        'Traditional Lunch Cuisine',
        'Regional Dinner Delicacy'
      ];
    }

    // Get restaurant recommendations
    const breakfast: Meal = {
      time: 'breakfast',
      dish: dishes[0],
      restaurant: await findRestaurant(city, dishes[0])
    };
    
    const lunch: Meal = {
      time: 'lunch',
      dish: dishes[1],
      restaurant: await findRestaurant(city, dishes[1])
    };
    
    const dinner: Meal = {
      time: 'dinner',
      dish: dishes[2],
      restaurant: await findRestaurant(city, dishes[2])
    };

    const meals = [breakfast, lunch, dinner];
    const narrative = buildNarrative(city, weather, { breakfast, lunch, dinner });

    const response: ItineraryResponse = {
      city,
      weather,
      meals,
      narrative
    };

    return NextResponse.json(response);
    
  } catch (error) {
    console.error('Error generating itinerary:', error);
    return NextResponse.json(
      { message: 'Failed to generate itinerary' },
      { status: 500 }
    );
  }
}
