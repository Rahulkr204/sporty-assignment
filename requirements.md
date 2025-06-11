Overview
Build a single-page application (SPA) that consumes the All Leagues API and displays the sports leagues with filtering options.
-  Fetch and display a list of sports leagues.
-  Display Fields:
    -  strLeague
    -  strSport
    -  strLeagueAlternate
-  Add a search bar to filter leagues by name.
-  Add a dropdown to filter by sport type (e.g., Soccer, Basketball, Motorsport).
-  Use component-based architecture.
-  The UI should be responsive and functional as a priority, visual enhancements can be added if time allows
-  Responses should be cached to avoid repeat calls

The league entities respond to clicks and call the Season Badge API with the league ID to display a season badge image (can be for any season you like or the first entity in the response)

Tools and libraries
- Vue3
- Tailwindcss

Things to keep in mind:
- UI should be responsive
- For large list displays we should optimize for rendering lists
- For API, create a composable which can cache results as well

APIs:
- All Leagues: https://www.thesportsdb.com/api/v1/json/3/all_leagues.php
- Badge Lookup: https://www.thesportsdb.com/api/v1/json/3/search_all_seasons.php?badge=1&id=<id>