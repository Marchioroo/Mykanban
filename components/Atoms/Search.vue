<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
    search: {
        type: String,
        default: ""
    },
    filter: {
        type: Boolean,
        default: false
    },
    placeholder: {
        type: String,
        default: "Busque por cards ou assuntos..."
    },
});

const emit = defineEmits(["update:search"]);
const searchTerm = ref('');

function updateValue(event: Event) {
    const target = event.target as HTMLInputElement;
    emit("update:search", target.value);
}

const limparCampo = () => {
    searchTerm.value = ''
    emit("update:search", searchTerm.value);
}
</script>

<template>
    <div>
        <div class="relative flex items-center w-full px-2">
            <input type="text" id="filtro" name="filtro" v-model="searchTerm" :placeholder="placeholder"
                @input="updateValue"
                class="rounded-md block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border border-gray-200 focus:border-licorice form-input placeholder-gray-400 px-4 py-2.5 pr-10 focus:ring-0 shadow-lg bg-white" />

            <AtomsIconsSearch v-if="searchTerm === ''"
                class="absolute right-5 h-5 w-5 text-gray-400 pointer-events-none" />
            <AtomsIconsCircleClose v-else @click="limparCampo"
                class="absolute right-5 h-5 w-5 text-gray-400  cursor-pointer" />
        </div>
    </div>
</template>
