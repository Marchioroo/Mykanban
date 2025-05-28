<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue'
import draggable from 'vuedraggable'

const columns = ref([
    {
        id: 1,
        name: 'To Do',
        tasks: [
            { id: 1, title: 'Comprar materiais' },
            { id: 2, title: 'Enviar email' },
        ],
    },
    {
        id: 2,
        name: 'Em Progresso',
        tasks: [
            { id: 3, title: 'Desenvolver funcionalidade' },
        ],
    },
    {
        id: 3,
        name: 'Concluído',
        tasks: [
            { id: 4, title: 'Revisar código' },
        ],
    },
])

function onDragEnd(event: Event) {
    console.log('Drag finalizado:', event)
    // Salvar estado ou chamar API, se quiser
}
</script>

<template>
    <div class="flex gap-4">
        <div v-for="(column) in columns" :key="column.id" class="bg-gray-100 p-2 rounded-md w-[250px]">
            <h2 class="text-lg font-semibold mb-2">{{ column.name }}</h2>
            <draggable v-model="column.tasks" group="tasks" item-key="id" class="min-h-[100px]" @end="onDragEnd">
                <template #item="{ element }">
                    <div class="bg-white my-2 p-3 rounded cursor-grab select-none shadow-sm">
                        {{ element.title }}
                    </div>
                </template>
            </draggable>
        </div>
    </div>
</template>
