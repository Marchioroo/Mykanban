<script setup lang="ts">
import type { Task } from '~/types/columnInterface';
import type { TagWithColor, DropdownItem, TagsName } from '~/types/TagsInterface';
import { formSchema } from '~/utils/validators';


const props = defineProps({
    showModalCreateTask: {
        type: Boolean
    }
})
const title = ref('')
const description = ref('')
const date = ref<Date>(new Date());
const dataFormatada = computed(() => formatterData(date.value));
const errors = ref<Record<string, string>>({});
const model = ref(false)
const selectedTags = ref<any>([]);
const selectedTag = ref<TagsName['title'] | null>(null);
const emit = defineEmits<{ (e: 'closeModalCreateTask', value: boolean): void; }>()

const togglePopover = (event: Event) => {
    event.preventDefault();
};

const formData = computed<Task>(() => ({
    id: 1,
    title: title.value,
    description: description.value,
    date: dataFormatada.value,
    tags: selectedTags.value
}));

const validateForm = () => {
    const result = formSchema.safeParse(formData.value);
    console.log('result', result)
    console.log('Dados do formulário:', formData.value);

    if (!result.success) {
        errors.value = Object.fromEntries(
            Object.entries(result.error.flatten().fieldErrors).map(([key, value]) => [key, value?.[0] || ''])
        );
    } else {
        // Dados válidos, prosseguir com o envio
    }
};



watch(formData, (newValue) => {
    console.log('formData', newValue)
})

const resetForm = () => {
    title.value = '',
        date.value = new Date(),
        selectedTags.value = [],
        selectedTag.value = null
}

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

onMounted(() => {
    selectedTags.value = []
    selectedTag.value = ''
})

const closeModal = () => {
    emit("closeModalCreateTask", model.value);
    resetForm()
};

</script>
<template>
    <MoleculesModal v-model="props.showModalCreateTask">
        <main>
            <div>
                <div class="flex flex-row w-full items-center justify-start text-2xl font-semibold mb-6">
                    Nova tarefa
                </div>
                <div class="absolute top-4 right-4 p-3  cursor-pointer" @click="closeModal()"><atoms-icons-close
                        class="w-5 h-5" /></div>
                <div>
                    <form @submit.prevent="validateForm" class="relative">
                        <div class="flex flex-col w-full mb-6">
                            <label for="" class="font-semibold mb-2">Titulo</label>
                            <MoleculesInput type="text" v-model="title" placeholder="Digite aqui o título" />
                            <div v-if="errors.title">
                                <span class="text-red-500">{{ errors.title }}</span>
                            </div>

                        </div>

                        <div class="flex flex-col w-full mb-4">
                            <label for="" class="font-semibold mb-2">Descrição</label>
                            <MoleculesInput type="text" v-model="description" :isTextarea="true" class="" rows="5"
                                placeholder="Digite aqui o título" @input="autoResize" />
                            <div v-if="errors.description">
                                <span class="text-red-500">{{ errors.description }}</span>
                            </div>
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
                                    <p v-if="selectedTags.length">
                                    <div class="p-2 gap-2 flex flex-wrap ">
                                        <span v-for="tag in selectedTags" :key="tag.label"
                                            :style="{ backgroundColor: tag.color }"
                                            class="mr-2 font-normal text-white px-2 rounded-xl text-sm ">
                                            {{ tag.label }}
                                        </span>
                                    </div>
                                    </p>
                                </div>
                            </div>
                            <div class="font-semibold w-1/2 flex flex-col">
                                <span class="mb-2">Data</span>
                                <VDatePicker v-model="date" :min-date="new Date()">
                                    <template #default="{ togglePopover }">
                                        <div class="flex flex-row gap-2 items-center">
                                            <button type="button"
                                                class="px-2 py-1.5 w-[100px] bg-orange-500 text-sm cursor-pointer text-white font-semibold rounded-md"
                                                @click="togglePopover">
                                                Selecione
                                            </button>
                                            <span class="bg-gray-100 px-2 font-semibold rounded-md py-1.5">
                                                {{ formatterData(date) }}
                                            </span>
                                        </div>
                                    </template>
                                </VDatePicker>

                            </div>
                        </section>

                        <div class="  w-full flex flex-row items-center justify-end mt-10 ">
                            <AtomsButton type="submit" title="Enviar" class="cursor-pointer hover:bg-orange-500" />
                        </div>

                    </form>
                </div>
            </div>
        </main>
    </MoleculesModal>
</template>
