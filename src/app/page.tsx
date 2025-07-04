'use client';

import { useState } from 'react';
import Head from 'next/head';

interface WeatherInfo {
  condition: string;
  diningType: string;
}

interface Meal {
  time: 'breakfast' | 'lunch' | 'dinner';
  dish: string;
  restaurant: string;
}

interface Itinerary {
  city: string;
  weather: WeatherInfo;
  meals: Meal[];
  narrative: string;
}

const POPULAR_CITIES = [
  'Tokyo', 'Paris', 'Mumbai', 'New York', 'Rome', 'London', 'Bangkok', 
  'Barcelona', 'Istanbul', 'Dubai', 'Singapore', 'Sydney', 'Mexico City',
  'Buenos Aires', 'Cairo', 'Seoul', 'Berlin', 'Amsterdam', 'Prague', 'Vienna'
];

export default function Home() {
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [itinerary, setItinerary] = useState<Itinerary | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleCitySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedCity.trim()) {
      setError('Please select or enter a city name');
      return;
    }

    setLoading(true);
    setError('');
    setItinerary(null);

    try {
      const response = await fetch('/api/foodie-tour', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ city: selectedCity }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate itinerary');
      }

      const data = await response.json();
      setItinerary(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
      <Head>
        <title>Foodie Tour - Discover Culinary Adventures</title>
        <meta name="description" content="Plan your perfect foodie tour with weather-based recommendations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            🍽️ Foodie Tour Planner
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover amazing culinary experiences tailored to your city's weather
          </p>
        </div>

        <form onSubmit={handleCitySubmit} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
          <div className="space-y-4">
            <label htmlFor="city" className="block text-lg font-medium text-gray-700 dark:text-gray-300">
              Choose your destination:
            </label>
            <input
              type="text"
              id="city"
              list="cities"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              placeholder="Select or type a city name..."
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-lg"
            />
            <datalist id="cities">
              {POPULAR_CITIES.map((city) => (
                <option key={city} value={city} />
              ))}
            </datalist>
          </div>
          
          <button 
            type="submit" 
            disabled={loading}
            className="w-full mt-6 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-6 rounded-lg transition duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed text-lg"
          >
            {loading ? '🔄 Planning your tour...' : '🗺️ Plan My Foodie Tour'}
          </button>
        </form>

        {error && (
          <div className="bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-200 px-6 py-4 rounded-lg mb-8 flex items-center">
            <span className="text-2xl mr-3">⚠️</span>
            <span>{error}</span>
          </div>
        )}

        {itinerary && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 space-y-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
              Your Foodie Tour in {itinerary.city}
            </h2>
            
            <div className="bg-blue-50 dark:bg-blue-900 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-3 flex items-center">
                <span className="text-2xl mr-2">🌤️</span>
                Weather Update
              </h3>
              <p className="text-blue-700 dark:text-blue-300 text-lg">
                Today's weather is <strong>{itinerary.weather.condition}</strong>, 
                perfect for <strong>{itinerary.weather.diningType}</strong> dining!
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {itinerary.meals.map((meal, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-6 border border-orange-200 dark:border-gray-600 hover:shadow-lg transition-shadow">
                  <div className="text-center mb-4">
                    <div className="text-3xl mb-2">
                      {meal.time === 'breakfast' ? '🌅' : meal.time === 'lunch' ? '☀️' : '🌙'}
                    </div>
                    <div className="text-lg font-semibold text-orange-600 dark:text-orange-400 capitalize">
                      {meal.time}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2 text-center">{meal.dish}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-center flex items-center justify-center">
                    <span className="mr-2">📍</span>
                    {meal.restaurant}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-green-50 dark:bg-green-900 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-4 flex items-center">
                <span className="text-2xl mr-2">📝</span>
                Your Day
              </h3>
              <p className="text-green-700 dark:text-green-300 leading-relaxed text-lg">{itinerary.narrative}</p>
            </div>
          </div>
        )}

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center justify-center">
            <span className="text-3xl mr-2">🌍</span>
            Popular Destinations
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {POPULAR_CITIES.slice(0, 10).map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className="bg-white dark:bg-gray-700 hover:bg-orange-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 hover:border-orange-300 dark:hover:border-orange-500 transition-colors duration-200"
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}