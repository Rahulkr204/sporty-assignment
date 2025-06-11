<template>
    <div v-if="visible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" @click.self="$emit('close')">
        <div class="bg-white rounded-lg shadow-lg p-6 relative w-80 max-w-full">
            <button @click="$emit('close')" class="absolute top-2 right-2 text-gray-500 hover:text-gray-800">&times;</button>
            <div class="flex flex-col items-center">
                <img v-if="badgeUrl" :src="badgeUrl" alt="Season Badge" class="w-32 h-32 object-contain mb-4" />
                <div v-if="!badgeUrl" class="text-gray-500">No badge found.</div>
                <div class="font-bold text-lg mb-2 text-center">{{ leagueName }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, watch } from 'vue';

const props = defineProps<{
  visible: boolean,
  badgeUrl: string | null,
  leagueName: string
}>();

const emit = defineEmits(['close']);

function handleEscape(e: KeyboardEvent) {
  if (e.key === 'Escape') emit('close');
}

watch(() => props.visible, (val) => {
  if (val) {
    window.addEventListener('keydown', handleEscape);
  } else {
    window.removeEventListener('keydown', handleEscape);
  }
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleEscape);
});
</script>