# Weather app

A concise description of your application:  
A weather search app that lets users enter locations, view search history, and see extended weather forecasts powered by the OpenWeather API.

---

## ✨ Features

- **Location Search**: Type in a location to search and navigate.
- **Search History**: View and clear recent searches.
- **Weather Forecast**: Get a 5-day forecast for a selected location.
- **State Persistence**: Remembers the last-used location across sessions.

---

## 📁 Project Structure
 ```bash
    ├── src/
    │   ├── features/
    │   │   ├── search/        # SearchInput, SearchHistory, search logic
    │   │   └── weather/       # WeatherSummary, WeatherForecast, weather logic
    │   ├── shared/
    │   │   ├── components/    # Reusable UI components (e.g., LocationBar)
    │   │   └── store/         # Cross-cutting state (e.g., locationStore)
```
---

## 🚀 Getting Started

### Prerequisites

- Node.js v16+ or [Bun](https://bun.sh)
- An OpenWeather API key

### Installation

1. Clone the repo:

    ```bash
    git clone https://github.com/your-org/your-repo.git
    cd your-repo
    ```
2. Copy environment variables:
    ```bash
    cp .env.example .env
    ```
3. Install dependencies:
    ```bash
    # With Bun
    bun install
    
    # Or with npm
    npm install
    ```
4. Start the development server:
    ```bash
    # With Bun
    bun dev
    
    # Or with npm
    npm run dev
    ```
5. Open your browser to http://localhost:3000.
