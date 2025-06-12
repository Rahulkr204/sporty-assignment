<template>
    <div class="p-4 max-w-3xl mx-auto">
        <div class="sticky top-0 z-10 bg-white">
            <div class="flex flex-col md:flex-row gap-4">
                <input v-model="search" type="text" placeholder="Search leagues..."
                    class="border border-gray-300 rounded px-3 py-2 w-full md:w-1/2 focus:outline-none" />
                <select v-model="selectedSport" class="w-full md:w-1/2 border border-gray-300 py-2 px-1">
                    <option value="">All Sports</option>
                    <option v-for="sport in sports" :key="sport">{{ sport }}</option>
                </select>
            </div>
        </div>
        <div class="h-2 border-b border-gray-200 my-4" />
        <div class="grid gap-2">
            <LeagueCard
                v-for="league in filteredLeagues"
                :key="league.idLeague"
                :league="league"
                @click="onLeagueClick(league)"
            />
        </div>
        <BadgeModal :modal="modal" @close="modal.visible = false" />
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useLeagues, useLeagueBadge } from '../composables/useApiCache';
import BadgeModal from './BadgeModal.vue';
import LeagueCard from './LeagueCard.vue';
import type { League } from '../composables/useApiCache';

const leagues = ref<League[]>([]);
const search = ref('');
const selectedSport = ref('');
const sports = ref<string[]>([]);

const modal = ref({
  visible: false,
  badgeUrl: null as string | null,
  leagueName: '',
});

const { fetchLeagues } = useLeagues();
const { fetchBadge } = useLeagueBadge();

onMounted(async () => {
    leagues.value = await fetchLeagues();
    // Extract unique sports
    sports.value = Array.from(new Set(leagues.value.map(l => l.strSport))).sort();
});

const filteredLeagues = computed(() => {
    return leagues.value.filter(l => {
        const matchesSearch = l.strLeague.toLowerCase().includes(search.value.toLowerCase());
        const matchesSport = !selectedSport.value || l.strSport === selectedSport.value;
        return matchesSearch && matchesSport;
    });
});

async function onLeagueClick(league: League) {
    modal.value.leagueName = league.strLeague;
    modal.value.badgeUrl = null;
    modal.value.visible = true;
    modal.value.badgeUrl = await fetchBadge(league.idLeague);
}
</script>
