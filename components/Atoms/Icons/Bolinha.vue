<script setup lang="ts">

const props = defineProps({
    bgColor: {
        type: String,
        required: true
    },
    number: {
        type: Number
    }
})

</script>

<template>
    <p class="w-6 h-6 flex items-center justify-center rounded-full text-white text-xs font-semibold"
        :style="{ backgroundColor: props.bgColor }">
        {{ props.number }}
    </p>

</template>