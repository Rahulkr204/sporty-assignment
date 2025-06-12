<template>
    <div class="p-4 bg-white rounded shadow-md border border-gray-50 cursor-pointer hover:bg-gray-100 min-w-[300px]" @click="$emit('click')">
        <div class="font-bold">{{ league.strLeague }}</div>
        <div class="text-sm text-gray-600">{{ league.strSport }}</div>
        <div class="text-xs text-gray-400">{{ league.strLeagueAlternate }}</div>
    </div>
</template>

<script setup lang="ts">
import type { League } from '../composables/useApiCache';

defineProps<{ league: League }>();

defineEmits(['click']);
</script>