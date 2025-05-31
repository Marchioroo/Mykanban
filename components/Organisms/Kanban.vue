<script setup lang="ts">
import draggable from 'vuedraggable'
import { useCardStore } from '~/stores/Cards'
import type { Column } from "~/types/columnInterface"

const useCard = useCardStore()
const columns = computed<Column[]>(() => useCard.columns)
const searchTerm = ref('')
const isLoading = ref<boolean>(true)
const filteredItems = ref<Column[]>([])
const showModalCard = ref(false);
const cardInfo = computed(() => (useCard.taskSelected));
let debounceTimer: ReturnType<typeof setTimeout> | null = null

watch([columns, searchTerm], () => {
    if (debounceTimer) clearTimeout(debounceTimer)
    isLoading.value = true

    debounceTimer = setTimeout(() => {
        const term = searchTerm.value.toLowerCase().trim()

        if (!term) {
            filteredItems.value = columns.value
        } else {
            filteredItems.value = columns.value
                .map(col => ({
                    ...col,
                    tasks: col.tasks.filter(task =>
                        task.title.toLowerCase().includes(term)
                    ),
                }))
                .filter(col => col.tasks.length > 0)
        }

        isLoading.value = false
    }, 400)
}, { immediate: true })

function onDragEnd(event: Event) {
    console.log('Drag finalizado:', event)
}

function handleSearch(value: string) {
    searchTerm.value = value;
    console.log('searchTerm.value', searchTerm.value)

}

const openModal = (id: number) => {
    showModalCard.value = true;
    useCard.findCardSelected(id);
}

const handleCloseModal = (val: boolean) => {
    showModalCard.value = val;
};

const createTask = (val: String) => {
    console.log('valor', val)
}
onMounted(async () => {
    isLoading.value = true
    await useCard.fetchCards()
})
</script>
<template>
    <MoleculesModalCardModal v-model="showModalCard" @closeModal="handleCloseModal" />
    <MoleculesFilter @update:search="handleSearch" />

    <div v-if="isLoading" class="p-4">
        <AtomsSpinner />
    </div>
    <div v-else-if="filteredItems.length > 0" class="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 mx-auto mt-2">
        <div v-for="(column) in filteredItems" :key="column.id" class=" p-2 rounded-md ">
            <h2 class="relative text-lg font-extrabold mb-2 ">
                <div class="relative flex flex-row w-full h-full gap-2 items-center">
                    <!-- Bolinha com número -->
                    <AtomsIconsBolinha :bgColor="column.colorDots" :number="column.tasks.length" />

                    <!-- Nome da coluna -->
                    <span class="text-lg font-semibold">
                        {{ column.name }}
                    </span>

                    <!-- Ícone no canto direito -->
                    <div class="absolute right-0 cursor-pointer">
                        <atoms-icons-dots />
                    </div>
                </div>
            </h2>
            <div>
                <draggable v-model="column.tasks" group="tasks" item-key="id" class="min-h-[430px] " @end="onDragEnd"
                    :animation="200">
                    <template #item="{ element }">
                        <div class=" relative bg-white my-2 p-4 min-h-[200px] rounded-xl cursor-grab select-none shadow-bottom-only mt-4 shadow-md"
                            @click="openModal(element.id)">
                            <div class="text-[#EE6B42] font-bold"># {{ element.id }}</div>

                            <div class="flex flex-row justify-between items-start pt-2">
                                <div class="flex-[0_0_90%] p-1 overflow-hidden font-semibold">
                                    {{ element.title }}
                                </div>
                            </div>

                            <div class="absolute flex flex-wrap gap-2 mt-2 bottom-17">
                                <div v-for="(tag, index) in element.tags" :key="index"
                                    class="px-2 py-0.5 text-white rounded-2xl text-xs"
                                    :style="{ backgroundColor: tag.color }">
                                    {{ tag.title }}
                                </div>
                            </div>

                            <div class="flex flex-row w-full justify-between items-start pt-2 absolute bottom-3 ">
                                <div class="flex flex-row  ">
                                    <div v-for="index in Math.min(element.users, 2)" :key="index"
                                        class="rounded-4xl border-2 border-[#FFF4F1] -ml-4 first:ml-0">
                                        <NuxtImg src="/img/ImageDefault.png" class="w-10 h-10" />
                                    </div>

                                    <div v-if="element.users > 2"
                                        class="flex items-center -ml-4 justify-center w-11 h-11 bg-[#c9d4e6] rounded-3xl border-2 border-[#FFF4F1] text-[#36465F] font-semibold">
                                        <p class="mr-1">+{{ element.users - 2 }}</p>
                                    </div>
                                </div>

                                <div class="flex flex-row mt-3 mr-8 ">
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
                <div class="w-full h-full pt-2">
                    <div>
                        <span class="flex flex-row items-center justify-center">
                            <AtomsIconsAddCard class="w-13 h-13 cursor-pointer" @click="createTask(column.name)" />
                        </span>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <div v-else>
        <div class="flex flex-col items-center justify-center p-4">
            <div class="text-lg">Nenhum conteudo encontrado</div>
            <div>
                <NuxtImg src="/img/kanbanlogo.png" class="w-25 h-25" />
            </div>
        </div>
    </div>


    <!-- Nao irei usar no momento mas quem sabe mais pra frente -->
    <!-- <div v-if="filteredItems.length === 0">
        <div class="!w-full flex mx-auto text-lg  items-center justify-center flex-col">
            <p>Nenhum conteúdo encontrado!</p>

            <div class="rounded-4xl border-2 border-[#FFF4F1] -ml-4 first:ml-0">
                <NuxtImg src="/img/kanbanlogo.png" class="w-25 h-25" />
            </div>
        </div>
    </div> -->
</template>

<style>
body {
    font-family: 'Chillax', sans-serif;

}

.card {
    background-image: aliceblue;
    z-index: 20;
}
</style>