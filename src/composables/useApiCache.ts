import { ref } from 'vue';

export interface League {
  idLeague: string;
  strLeague: string;
  strSport: string;
  strLeagueAlternate: string;
}

const BASE_URL = 'https://www.thesportsdb.com/api/v1/json/3';

const leaguesCache = ref<League[] | null>(null);
const badgeCache = ref<Record<string, string | null>>({});

export function useLeagues() {
  async function fetchLeagues(): Promise<League[]> {
    if (leaguesCache.value) return leaguesCache.value;
    const response = await fetch(`${BASE_URL}/all_leagues.php`);
    const data = await response.json();
    leaguesCache.value = (data.leagues as League[]) || [];
    return leaguesCache.value;
  }
  return { fetchLeagues };
}

export function useLeagueBadge() {
  async function fetchBadge(idLeague: string) {
    if (badgeCache.value[idLeague] !== undefined) {
      return badgeCache.value[idLeague];
    }
    const response = await fetch(`${BASE_URL}/search_all_seasons.php?badge=1&id=${idLeague}`);
    const data = await response.json();
    // Use the first season's strBadge if available
    const badge = data.seasons?.[0]?.strBadge || null;
    badgeCache.value[idLeague] = badge;
    return badge;
  }
  return { fetchBadge };
}