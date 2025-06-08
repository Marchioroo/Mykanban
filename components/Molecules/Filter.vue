<script setup lang="ts">
import { ref } from 'vue';

const search = ref('');
const emit = defineEmits(["update:search"]);

function handleSearch() {
    emit("update:search", search.value);

}
</script>

<template>
    <main>
        <section class="md:px-4 ">
            <div class="flex flex-row items-center justify-center p-4 rounded-lg">
                <AtomsSearch class="w-full max-w-md" v-model:search="search" />
                <AtomsButton title="Buscar" class="cursor-pointer !h-11 !w-25" :filter="true" @click="handleSearch" />
            </div>
        </section>
    </main>
</template>
