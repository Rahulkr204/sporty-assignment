<template>
    <div v-if="modal && modal.visible" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50" @click.self="$emit('close')">
        <div class="bg-white rounded-lg shadow-lg p-6 relative w-80 max-w-full">
            <button @click="$emit('close')" class="absolute top-2 right-2 text-gray-500 hover:text-gray-800">&times;</button>
            <div class="flex flex-col items-center">
                <img v-if="modal.badgeUrl" :src="modal.badgeUrl" alt="Season Badge" class="w-32 h-32 object-contain mb-4" />
                <div v-if="!modal.badgeUrl" class="text-gray-500">No badge found.</div>
                <div class="font-bold text-lg mb-2 text-center">{{ modal.leagueName }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, watch } from 'vue';

interface BadgeModalProps {
    visible: boolean;
    badgeUrl: string | null;
    leagueName: string;
}

const props = defineProps<{ modal: BadgeModalProps }>();
const emit = defineEmits(['close']);

function handleEscape(e: KeyboardEvent) {
    if (e.key === 'Escape') emit('close');
}

watch(() => props.modal?.visible, (val) => {
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