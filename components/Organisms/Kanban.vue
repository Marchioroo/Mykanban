<script setup lang="ts">
import draggable from 'vuedraggable'
import { useCardStore } from '~/stores/Cards';
import type { Column } from "~/types/columnInterface";

const useCard = useCardStore()
const columns = computed<Column[]>(() => useCard.columns)
const searchTerm = ref('')
function onDragEnd(event: Event) {
    console.log('Drag finalizado:', event)
}
// const filteredItems = computed(() => {
//   if (!search.value) return columns.value;
//   return columns.value.filter(column =>
//     column.name.toLowerCase().includes(search.value.toLowerCase())
//   );
// });
function handleSearch(value: string) {
    searchTerm.value = value;
    console.log('searchTerm.value', searchTerm.value)
}

onMounted(() => {
    useCard.fetchCards();
})

</script>

<template>
    <MoleculesFilter @update:search="handleSearch" />
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 mx-auto mt-2">
        <div v-for="(column) in columns" :key="column.id" class=" p-2 rounded-md">
            <h2 class="relative text-lg font-extrabold mb-2 ">
                <div class="relative flex flex-row w-full h-full gap-2 items-center">
                    <!-- Bolinha com número -->
                    <AtomsIconsBolinha :bgColor="column.colorDots" :number="column.tasks.length" />

                    <!-- Nome da coluna -->
                    <span class="text-lg font-semibold">
                        {{ column.name }}
                    </span>

                    <!-- Ícone no canto direito -->
                    <div class="absolute right-0">
                        <atoms-icons-dots />
                    </div>
                </div>
            </h2>


            <draggable v-model="column.tasks" group="tasks" item-key="id" class="min-h-[500px]" @end="onDragEnd"
                :animation="200">
                <template #item="{ element }">
                    <div
                        class="bg-white my-2 p-4 min-h-[180px] rounded-xl cursor-grab select-none shadow-bottom-only mt-4">
                        <div class="text-[#EE6B42] font-bold"># {{ element.id }}</div>

                        <div class="flex flex-row justify-between items-start pt-2">
                            <div class="flex-[0_0_90%] p-1 overflow-hidden font-semibold">
                                {{ element.title }}
                            </div>
                            <div class="flex-[0_0_10%] flex p-2 justify-end items-start">
                                <atoms-icons-dots />
                            </div>
                        </div>

                        <div class="flex flex-wrap gap-2 mt-2">
                            <div v-for="(tag, index) in element.tags" :key="index"
                                class="px-2 py-0.5 text-white rounded-2xl text-xs"
                                :style="{ backgroundColor: tag.color }">
                                {{ tag.title }}
                            </div>
                        </div>

                        <div class="flex flex-row justify-between items-start pt-2">

                            <div class="flex flex-row">
                                <div v-for="index in Math.min(element.users, 2)" :key="index"
                                    class="rounded-4xl border-2 border-[#FFF4F1] -ml-4 first:ml-0">
                                    <NuxtImg src="/img/ImageDefault.png" class="w-10 h-10" />
                                </div>

                                <div v-if="element.users > 2"
                                    class="flex items-center -ml-4 justify-center w-11 h-11 bg-[#c9d4e6] rounded-3xl border-2 border-[#FFF4F1] text-[#36465F] font-semibold">
                                    <p class="mr-1">+{{ element.users - 2 }}</p>
                                </div>
                            </div>

                            <div class="flex flex-row mt-3 ">
                                <div class="flex flex-row gap-1 items-center justify-center  ">
                                    <AtomsIconsAnexo />
                                    <span class="text-[#EE6B42] font-semibold">{{ element.users
                                        }}</span>
                                    <AtomsIconsComentario />
                                    <span class="text-[#EE6B42] font-semibold">{{ element.users + 2
                                        }}</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </template>
            </draggable>
        </div>
    </div>
</template>

<style>
body {
    font-family: 'Chillax', sans-serif;

}
</style>
