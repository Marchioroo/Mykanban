<script setup lang="ts">
import { ref } from 'vue';

const isActive = ref(false);
const toggleColor = () => {
    isActive.value = !isActive.value;
};
</script>

<template>
    <div @click="toggleColor" :class="[
        'cursor-pointer w-12 h-12 p-2 rounded-full flex items-center justify-center transition',

    ]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-full h-full"
            :fill="isActive ? '#E91E63' : 'none'" :stroke="isActive ? '#E91E63' : '#555'" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
            <path
                d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
        </svg>
    </div>
</template>
