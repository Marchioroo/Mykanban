<script setup lang="ts">
const props = defineProps({
    filter: {
        type: Boolean,
        required: false,
        default: false
    },
    placeholder: {
        type: String,
        required: false,
        default: 'Busque por cards ou assuntos...'
    }
})
const input = ref('')
watch(input, (newValue) => {
    console.log('Input changed:', newValue)
})
</script>

<template>
    <div>
        <div class="relative flex items-center w-full px-2">
            <input type="text" id="filtro" name="filtro" v-model="input" :placeholder="props.placeholder"
                class="rounded-md block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border border-gray-200 focus:border-licorice form-input placeholder-gray-400 px-4 py-2.5 pr-10 focus:ring-0  shadow-lg bg-white" />
            <AtomsIconsSearch v-if="input == ''" class="absolute right-5 h-5 w-5 text-gray-400 pointer-events-none" />
        </div>
    </div>

</template>
