<script setup lang="ts">
import { AtomsIconsData, MoleculesModalConfirmModal } from '#components';
import { useCardStore } from '~/stores/Cards'

const props = defineProps({
    showModalCard: {
        type: Boolean
    }
})
const emit = defineEmits<{
    (e: 'closeModal', value: boolean): void;
}>();


const useCard = useCardStore()
const cardInfo = computed(() => (useCard.taskSelected));
const isEditing = ref(false);
const isConfirmSave = ref(false);
const editableTitle = ref('');
const editableDescription = ref('');
const editableDate = ref('');
const model = ref(false)

const saveChanges = () => {
    isConfirmSave.value = true

};

const closeModal = () => {
    emit("closeModal", model.value);
    isEditing.value = false
};

const handleClose = (result: 'confirm' | 'cancel') => {
    if (result === 'confirm') {
        useCard.updateTask({
            ...cardInfo.value,
            title: editableTitle.value,
            description: editableDescription.value,
            date: editableDate.value,
        });
    }
    isConfirmSave.value = false;
    isEditing.value = false
};

const toggleEditing = () => {
    isEditing.value = !isEditing.value;
};

watch(cardInfo, (newCard) => {
    if (newCard) {
        editableTitle.value = newCard.title;
        editableDescription.value = newCard.description;
        editableDate.value = newCard.date;
    }
});

</script>
<template>
    <MoleculesModal v-model="props.showModalCard" @closeModalClickOut="closeModal()">
        <MoleculesModalConfirmModal v-model="isConfirmSave" @closeConfirm="handleClose"
            title="Deseja salvar as modificações?" />
        <div class="absolute top-4 right-4 p-3  cursor-pointer" @click="closeModal()"><atoms-icons-close
                class="w-5 h-5" /></div>

        <div class=" flex flex-row text-md font-semibold mb-2 text-orange-400">
            #{{ cardInfo?.id }} - Em progesso
        </div>
        <div class="flex flex-row w-full h-full font-semibold text-2xl items-center justify-between mb-6">
            <div v-if="!isEditing" class="text-2xl font-semibold">{{ cardInfo?.title }}</div>
            <input v-else v-model="editableTitle"
                class="text-2xl font-semibold w-full border-b border-gray-400 py-1 outline-none" />
        </div>

        <div>
            <div class="text font-medium mb-3 flex flex-row h-full w-full items-center justify-start gap-2">
                <AtomsIconsDescription class="w-5 h-5 " />
                <div class="font-semibold">Descrição</div>
            </div>
            <div class="p-4 bg-gray-100 rounded-2xl mb-4 min-h-[120px]">
                <div v-if="!isEditing">{{ cardInfo?.description }}</div>
                <textarea v-else v-model="editableDescription"
                    class="w-full bg-transparent outline-none resize-none "></textarea>
            </div>

        </div>

        <div class="flex flex-row gap mb-6">
            <div class="w-1/2">
                <div class="flex flex-col">
                    <div class="text font-medium mb-3 flex flex-row items-center gap-2">
                        <AtomsIconsTag class="w-5 h-5" />
                        <div class="font-semibold">Tags</div>
                    </div>
                    <div class="flex flex-wrap gap-2  py-2">
                        <div v-for="(tag, index) in cardInfo?.tags" :key="index"
                            class="px-2 py-0.5 text-white rounded-2xl text-xs" :style="{ backgroundColor: tag.color }">
                            {{ tag.title }}
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-1/2 px-3">
                <div class="flex flex-col">
                    <div class="text font-medium mb-3 flex flex-row items-center gap-2">
                        <AtomsIconsData class="w-5 h-4" />
                        <div class="font-semibold">Data</div>
                    </div>
                    <div class="flex flex-wrap gap-2">
                        <div class="px-2 py-0.5 text-black rounded-2xl text-md font-extrabold">
                            {{ formatterDataSimple(cardInfo?.date) }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <span class="flex items-center gap-2 font-extrabold mb-3 mr-2 ">
                <AtomsIconsComentario class="w-6 h-6 " />
                Comentários
            </span>

            <div v-for="comment in cardInfo?.comments" class="w-full min-h-[120px] rounded-2xl">
                <div class="flex w-full ">
                    <div class="p-2">
                        <div class="rounded-full border-2 border-[#FFF4F1] overflow-hidden w-11 h-11">
                            <NuxtImg :src="comment.user.photo" class="w-full h-full object-cover" />
                        </div>
                    </div>

                    <div class="flex-1 p-2">
                        <div class="bg-gray-100 rounded-2xl p-3.5 min-h-[75px] flex flex-col items-start w-full">
                            <span class="text-sm text-black font-semibold">{{ comment.user.name }}</span>
                            <span class="text-sm text-[#4A566B] p-1 w-full break-words break-all">
                                {{ comment.text }}
                            </span>

                        </div>
                        <div>
                            <span class="flex flex-row items-center">
                                <AtomsIconsLike class="!w-9 !h-9 " />
                                <span> {{ comment.time }}</span>
                            </span>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-row justify-end w-full ">
            <atoms-button :title="isEditing ? 'Salvar' : 'Editar'"
                :class="isEditing ? '!bg-green-600 hover:!bg-green-700' : '!bg-orange-400 hover:!bg-orange-500'"
                class=" cursor-pointer" @click=" isEditing ? saveChanges() : toggleEditing()" />
        </div>
    </MoleculesModal>
</template>