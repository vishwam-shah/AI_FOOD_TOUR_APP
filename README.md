# 🍽️ **AI Foodie Tour Planner**

An intelligent culinary adventure app that creates personalized foodie tours based on weather conditions and local cuisine expertise.

## 🌟 **Current Features (Implemented)**

- **Modern UI/UX**: Beautiful responsive design with Tailwind CSS
- **TypeScript Integration**: Full type safety throughout the application
- **Weather API Integration**: Real-time weather data from OpenWeatherMap
- **Restaurant API Integration**: Yelp API for restaurant recommendations
- **City Selection**: Support for 20 popular global destinations
- **Basic Itinerary Generation**: Simple meal planning with weather consideration
- **Dark Mode Support**: Automatic theme switching
- **Mobile Responsive**: Works perfectly on all devices

## 🚀 **Getting Started**

### Prerequisites
```bash
Node.js 18+ and npm
```

### Installation
```bash
# Install dependencies
npm install

# Set up environment variables
# Add your API keys to .env.local:
OPENWEATHERMAP_API_KEY=your_openweathermap_api_key
YELP_API_KEY=your_yelp_api_key

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 📊 **Current Project Status**

### ✅ **What's Already Implemented**

1. **Frontend Architecture**
   - Next.js 14 with App Router
   - TypeScript for type safety
   - Tailwind CSS for styling
   - Inter font integration

2. **API Integration**
   - Weather service (OpenWeatherMap)
   - Restaurant service (Yelp API)
   - Basic itinerary builder

3. **User Interface**
   - City selection with autocomplete
   - Weather-aware dining suggestions
   - Restaurant recommendations display
   - Loading states and error handling

4. **Data Structure**
   - Basic dishes.json for city-specific foods
   - Simple weather-to-dining logic
   - Basic narrative generation

### 🔄 **Current Workflow (Basic Implementation)**

```
User Input (City) → Weather API → Basic Dish Selection → Restaurant API → Simple Narrative
```

## 🤖 **Proposed AI Workflow Enhancement** (To Be Implemented)

Transform the basic app into an intelligent AI-powered system without external LLM APIs:

### **Enhancement Phase 1: Intelligent Data Architecture** 🏗️

**Goal**: Replace basic data structures with intelligent databases

```
📊 Enhanced City Database:
├── Weather Patterns & Seasonal Data (Advanced)
├── Iconic Dishes Database (3 per city + cultural context)
├── Restaurant Ratings & Cuisine Mapping (Smart scoring)
├── Cultural Food Timing Preferences (Authentic patterns)
└── Narrative Template Engine (Dynamic storytelling)
```

**Implementation Tasks**:
- [ ] Expand dishes.json with cultural context and timing
- [ ] Add seasonal food preferences database
- [ ] Create weather-to-dining preference matrix
- [ ] Build narrative template system

### **Enhancement Phase 2: Smart Algorithm Components** 🧠

#### **1. Enhanced Weather Intelligence Engine** 🌤️
**Current**: Basic weather condition mapping
**Proposed Enhancement**:
```javascript
advancedWeatherLogic = {
  temperature: { cold: <10°C, mild: 10-25°C, hot: >25°C },
  conditions: { sunny, cloudy, rainy, snowy, windy },
  diningRecommendation: {
    cold + rainy → "cozy indoor dining with warming foods",
    hot + sunny → "outdoor terrace dining with cooling dishes", 
    mild + any → "flexible indoor/outdoor with seasonal options"
  },
  seasonalModifiers: {
    summer: "prioritize cooling foods, outdoor seating",
    winter: "emphasize warming dishes, indoor ambiance"
  }
}
```

#### **2. Intelligent Culinary Knowledge Base** 🍜
**Current**: Simple dish arrays
**Proposed Enhancement**:
```javascript
intelligentCityDishes = {
  "Tokyo": {
    iconic: ["Ramen", "Sushi", "Tempura"],
    timePreference: { 
      breakfast: { type: "light", examples: ["Tamagoyaki", "Miso Soup"] },
      lunch: { type: "hearty", examples: ["Ramen", "Donburi"] },
      dinner: { type: "elaborate", examples: ["Kaiseki", "Sushi"] }
    },
    weatherAdaptation: { 
      cold: "hot ramen, warming broths", 
      hot: "cold soba, sashimi" 
    },
    culturalContext: "Japanese dining emphasizes seasonal ingredients"
  }
  // Enhanced data for all 20 cities
}
```

#### **3. Advanced Restaurant Intelligence** 🏆
**Current**: Basic Yelp API calls
**Proposed Enhancement**:
```javascript
smartRestaurantSelector = {
  scoringAlgorithm: {
    yelpRating: 0.35,
    reviewCount: 0.15,
    priceMatch: 0.15,
    cuisineSpecialization: 0.20,
    weatherSuitability: 0.10,
    culturalAuthenticity: 0.05
  },
  
  calculateIntelligentScore(restaurant, dish, weather, timeOfDay, season) {
    // Advanced multi-factor scoring algorithm
    return combinedIntelligenceScore;
  },
  
  filterByContext: {
    rainyDay: "indoor seating, cozy atmosphere",
    hotDay: "outdoor terrace, cooling options",
    cultural: "local favorites over tourist spots"
  }
}
```

#### **4. Dynamic Narrative Generation Engine** ✍️
**Current**: Simple string concatenation
**Proposed Enhancement**:
```javascript
intelligentNarrativeEngine = {
  contextualIntros: {
    "sunny + Tokyo": "Under Tokyo's brilliant sunshine, your culinary adventure begins...",
    "rainy + Paris": "As gentle rain kisses Parisian streets, perfect for intimate dining...",
  },
  
  culturalStorytellings: {
    "breakfast + Japan": "Following Japanese tradition of asa-gohan (morning rice)...",
    "dinner + Italy": "As the Italian evening unfolds with aperitivo culture..."
  },
  
  weatherNarratives: {
    buildStory(weather, city, meals, culturalContext) {
      // Intelligent narrative composition
    }
  }
}
```

### **Enhancement Phase 3: Advanced AI Logic Implementation** 🚀

#### **Current vs Enhanced Workflow**

**Current Simple Flow**:
```
City Input → Basic Weather → Simple Dish Selection → Yelp Search → Basic Output
```

**Proposed Intelligent Flow**:
```
City Input
↓
Advanced Context Analysis (Cultural + Geographic + Seasonal)
↓
Real-time Weather Intelligence (Multi-factor analysis)
↓
Smart Meal Planning (Time + Weather + Culture + Preferences)
↓
Intelligent Restaurant Scoring (Multi-dimensional algorithm)
↓
Dynamic Narrative Generation (Context-aware storytelling)
↓
Personalized Foodie Experience
```

#### **Implementation Roadmap** 📋

**Phase 1 - Data Enhancement** (Week 1-2)
- [ ] Expand dishes.json with cultural context
- [ ] Add seasonal preferences database
- [ ] Create weather-dining preference matrix
- [ ] Build restaurant scoring database

**Phase 2 - Algorithm Development** (Week 3-4)
- [ ] Implement advanced weather intelligence
- [ ] Create smart restaurant scoring system
- [ ] Build dynamic narrative engine
- [ ] Add cultural timing preferences

**Phase 3 - AI Integration** (Week 5-6)
- [ ] Integrate all AI components
- [ ] Create learning preferences system
- [ ] Add user personalization
- [ ] Implement A/B testing for recommendations

**Phase 4 - Advanced Features** (Week 7-8)
- [ ] Add seasonal intelligence
- [ ] Implement mood-based recommendations
- [ ] Create cultural authenticity scoring
- [ ] Add dietary preference support

## 🛠️ **Current Tech Stack**

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS v3 
- **APIs**: OpenWeatherMap, Yelp Fusion API
- **Environment**: Node.js, ES Modules
- **Fonts**: Inter (Google Fonts)
- **Development**: ESLint, PostCSS, Autoprefixer

## 🌍 **Supported Cities**

Tokyo, Paris, Mumbai, New York, Rome, London, Bangkok, Barcelona, Istanbul, Dubai, Singapore, Sydney, Mexico City, Buenos Aires, Cairo, Seoul, Berlin, Amsterdam, Prague, Vienna

## 📱 **Current Features**

- **Responsive Design**: Works perfectly on desktop and mobile
- **Dark Mode**: Automatic dark/light theme switching  
- **Real-time Weather**: Live weather integration via OpenWeatherMap
- **Restaurant Search**: Yelp API integration for venue discovery
- **TypeScript Safety**: Full type checking throughout
- **Modern UI**: Beautiful gradients and smooth animations

## 🎯 **Project Goals**

### **Immediate Goals** (Current Implementation)
- ✅ Functional weather-aware dining app
- ✅ Clean, modern UI with Tailwind CSS
- ✅ TypeScript integration
- ✅ API integrations working
- ✅ Mobile-responsive design

### **Future AI Enhancement Goals**
- 🔄 Intelligent dish selection algorithms
- 🔄 Advanced restaurant scoring system
- 🔄 Dynamic narrative generation
- 🔄 Cultural dining pattern recognition
- 🔄 Seasonal preference adaptation
- 🔄 Personalized recommendation engine

## � **Getting Involved**

### **For Contributors**
This project has a solid foundation and is ready for AI enhancement. Areas where you can contribute:

1. **Data Enhancement**: Expanding the cultural food databases
2. **Algorithm Development**: Building intelligent recommendation systems  
3. **UI/UX Improvements**: Enhancing the user experience
4. **API Optimizations**: Improving data fetching and processing
5. **Testing**: Adding comprehensive test coverage

### **Current Development Status**
- **Phase**: MVP Complete ✅
- **Next Phase**: AI Algorithm Implementation 🔄
- **Contributors Welcome**: Yes! 
- **Difficulty Level**: Intermediate to Advanced

## 🚀 **Deployment**

The app can be deployed on Vercel, Netlify, or any platform supporting Next.js applications.

```bash
npm run build
npm run start
```

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 **License**

This project is licensed under the MIT License.
#   A I _ F O O D _ T O U R _ A P P  
 # AI_FOOD_TOUR_APP
