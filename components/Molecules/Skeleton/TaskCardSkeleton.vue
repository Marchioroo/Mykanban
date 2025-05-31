<script setup lang="ts">
import { computed } from 'vue'

const diagonalWaveStyle = computed(() => ({
    backgroundImage:
        'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'20\'><path d=\'M 0 10 Q 25 0, 50 10 T 100 10\' stroke=\'%23e6bbce\' fill=\'none\' stroke-width=\'2\'/></svg>")',
    backgroundSize: '20px 6px'
}))
</script>

<template>
    <div
        class="card relative bg-white my-2 p-4 min-h-[180px] rounded-xl shadow-bottom-only mt-4 overflow-hidden animate-pulse">
        <!-- Fundo SVG rotacionado -->
        <div class="absolute inset-0 z-0 rotate-45 opacity-10 bg-repeat" :style="diagonalWaveStyle" />

        <!-- Conteúdo fictício -->
        <div class="relative z-10">
            <!-- ID -->
            <div class="w-20 h-4 bg-[#f2d5dc] rounded mb-2"></div>

            <!-- Title + Icon -->
            <div class="flex justify-between items-start pt-2">
                <div class="w-3/4 h-5 bg-[#f2d5dc] rounded"></div>
                <div class="w-5 h-5 bg-[#f2d5dc] rounded-full"></div>
            </div>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mt-4">
                <div class="w-16 h-4 bg-[#f2d5dc] rounded-2xl"></div>
                <div class="w-12 h-4 bg-[#f2d5dc] rounded-2xl"></div>
            </div>

            <!-- Avatares + contadores -->
            <div class="flex justify-between items-center mt-6">
                <div class="flex -space-x-4">
                    <div class="w-10 h-10 rounded-full border-2 border-white bg-[#f2d5dc]"></div>
                    <div class="w-10 h-10 rounded-full border-2 border-white bg-[#f2d5dc]"></div>
                    <div
                        class="w-11 h-11 rounded-full border-2 border-white bg-[#f2d5dc] flex items-center justify-center text-xs text-[#36465F]">
                        +2
                    </div>
                </div>
                <div class="flex gap-2 items-center">
                    <div class="w-4 h-4 bg-[#f2d5dc] rounded-full"></div>
                    <div class="w-6 h-4 bg-[#f2d5dc] rounded"></div>
                    <div class="w-4 h-4 bg-[#f2d5dc] rounded-full"></div>
                    <div class="w-6 h-4 bg-[#f2d5dc] rounded"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes pulse {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.4;
    }
}

.animate-pulse {
    animation: pulse 1.6s ease-in-out infinite;
}
</style>
