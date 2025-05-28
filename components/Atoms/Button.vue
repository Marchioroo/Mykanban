<script setup lang="ts">

const props = defineProps({
    title: {
        type: String,
        required: true,
        default: 'Me clica ai'
    },
    filter: {
        type: Boolean,
        required: false,
    }
})

</script>
<template>
    <button class="px-5 py-2 bg-[#36465F] text-white rounded-lg transition-all outline-none hover:bg-[#5d697c]">
        <div class="flex items-center justify-center">
            <div v-if="props.filter">
                <AtomsIconsFilter class="w-5 h-5 inline-block mr-2 mb-0.5" />
            </div>

            <div>
                {{ props.title }}
            </div>
        </div>

    </button>
</template>