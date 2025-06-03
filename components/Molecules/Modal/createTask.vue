<script setup lang="ts">
import type { TagWithColor, DropdownItem, TagsName } from '~/types/TagsInterface';

const props = defineProps({
    showModalCreateTask: {
        type: Boolean
    }
})
const text = ref('')
const selectedTags = ref<any>([]);
const selectedTag = ref<TagsName['title'] | null>(null);
const tagValues: TagWithColor[] = [
    { title: 'Setup', color: '#4CAF50' },
    { title: 'Design', color: '#2196F3' },
    { title: 'Segurança', color: '#F44336' },
    { title: 'Backend', color: '#9C27B0' },
    { title: 'API', color: '#FF9800' },
    { title: 'Code Review', color: '#009688' },
    { title: 'Testes', color: '#607D8B' },
    { title: 'Q&A', color: '#E91E63' },
    { title: 'Deploy', color: '#3F51B5' },
    { title: 'DevOps', color: '#795548' },
];

const autoResize = (event: Event) => {
    const target = event.target as HTMLTextAreaElement;
    target.style.height = 'auto';
    target.style.height = target.scrollHeight + 'px';
};

const dropdownItems = computed(() => {
    const items: DropdownItem[] = [];

    tagValues.forEach((tag) => {
        items.push({
            label: tag.title,
            color: tag.color
        });
    });

    return items;
});

const handleSelect = () => {
    if (selectedTag.value && !selectedTags.value.includes(selectedTag.value)) {
        selectedTags.value.push(selectedTag.value);
        console.log('selectedTags.value', selectedTags.value);
    }
};
const formatSelectedTags = computed(() => {
    return selectedTags.value.map((tag: any) => `${tag.label}`).join(', ');
});

</script>
<template>
    <MoleculesModal v-model="props.showModalCreateTask">
        <main>
            <div>
                <div class="flex flex-row w-full items-center justify-start text-2xl font-semibold mb-6">
                    Nova tarefa
                </div>
                <div>
                    <form action="">
                        <div class="flex flex-col w-full mb-6">
                            <label for="" class="font-semibold mb-2">Titulo</label>
                            <MoleculesInput type="text" class="" placeholder="Digite aqui o título" />
                        </div>

                        <div class="flex flex-col w-full mb-4">
                            <label for="" class="font-semibold mb-2">Descrição</label>
                            <MoleculesInput type="text" :isTextarea="true" class="" rows="5"
                                placeholder="Digite aqui o título" @input="autoResize" />
                        </div>

                        <section class="flex flex-row items-start w-full py-2 ">
                            <div class="font-semibold w-1/2">
                                <div class="mb-2">
                                    <span>Tags</span>
                                </div>

                                <div>
                                    <select v-model="selectedTag" class="px-5 py-1 bg-gray-100 rounded-lg mb-2"
                                        @change="handleSelect">
                                        <option v-for="item in dropdownItems" :key="item.label" :value="item"
                                            :style="{ color: item.color }">
                                            {{ item.label }}
                                        </option>
                                    </select>
                                    <p v-if="selectedTags.length">Tags selecionadas: {{ formatSelectedTags }}</p>
                                </div>
                            </div>
                            <div class="font-semibold w-1/2">
                                Data
                            </div>
                        </section>

                    </form>
                </div>
            </div>
        </main>
    </MoleculesModal>
</template>
