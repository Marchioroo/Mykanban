<script setup lang="ts">
const model = defineModel<boolean>()
</script>

<template>
    <transition name="slide-fade">
        <div v-if="model" class="fixed  inset-0 bg-gray-100  flex items-end md:items-center justify-center z-50"
            @click.self="model = false">
            <div
                class="bg-white md:rounded-2xl p-6 w-full  md:min-w-[600px] h-[100vh] md:h-auto md:max-w-md shadow-lg transform transition-all overflow-y-auto">

                <slot />

                <div class="mt-4 text-right gap-2 w-full flex flex-row items-center justify-center">
                    <button class="px-4 py-2 bg-green-600 text-white rounded cursor-pointer hover:bg-green-700"
                        @click="model = false">
                        Editar
                    </button>
                    <button class="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-700"
                        @click="model = false">
                        Fechar
                    </button>
                </div>
            </div>
        </div>
    </transition>
</template>


<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.4s ease;
}

.slide-fade-enter-from {
    opacity: 0;
    transform: translateY(50px);
}

.slide-fade-leave-to {
    opacity: 0;
    transform: translateY(50px);
}

/* .card {
    background-color: #ffffff;
    opacity: 0.9;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='20'><path d='M 0 10 Q 25 0, 50 10 T 100 10' stroke='%23e6bbce' fill='none' stroke-width='2'/></svg>");
    background-repeat: repeat;
    background-size: 20px 5px;
    padding: 20px;
    border-radius: 8px;
    z-index: 10;
} */
</style>
