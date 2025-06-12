## Sporty Group Assignment

### Overview
Build a single-page application (SPA) that consumes the All Leagues API and displays the sports leagues with filtering options.
-  Fetch and display a list of sports leagues.
-  Display Fields:
    -  strLeague
    -  strSport
    -  strLeagueAlternate
-  Search bar to filter leagues by name.
-  Dropdown to filter by sport type (e.g., Soccer, Basketball, Motorsport).
-  Use component-based architecture.
-  The UI should be responsive and functional as a priority, visual enhancements can be added if time allows
-  Responses should be cached to avoid repeat calls

### Components

- Leaguelist: Consists of all leagues from api
- LeagueCard: Display of each league
- BadgeModal: Displays first season badge from api

### Composables

- useAPICache: API calls for leagues and season by leagueId

