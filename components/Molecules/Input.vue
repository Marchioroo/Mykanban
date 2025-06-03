<script setup lang="ts">
// Tipagem das propriedades do componente
type textSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
type textColor = "black" | "awesome";

const model = defineModel<string>();
const showPassword = ref(false);

// Propriedades do componente
const props = defineProps({
    errorMessage: {
        type: String,
        default: "",
    },
    textSize: {
        type: String as PropType<textSize>,
        default: "sm",
    },
    textColor: {
        type: String as PropType<textColor>,
        default: "black",
    },
    mask: {
        type: [String, Array] as PropType<string | Array<string | RegExp>>,
        default: null,
    },
    type: {
        type: String,
        default: "text",
    },
    isTextarea: {
        type: Boolean,
        default: false,
    },
});


// Define o tipo de input dinamicamente
const inputType = computed(() => {
    if (props.type === "password") {
        return showPassword.value ? "text" : "password";
    }
    return props.type;
});

// Atributos de estilo do input
const inputDynamicClasses = computed(() => {
    return {
        [`text-${props.textColor}`]: !!props.textColor,
        [`text-${props.textSize}`]: !!props.textSize,
    };
});
</script>

<template>
    <div class="relative w-full">
        <!-- Input ou Textarea -->
        <textarea v-if="props.isTextarea"
            class="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-none rounded-lg border-gray-400 focus:border-licorice ps-0 !px-2 !py-2 focus:ring-0 focus:shadow-none pr-10 bg-gray-100 placeholder:text-[#C0C0C0] placeholder:text-md font-semibold resize-y  "
            :class="[inputDynamicClasses]" v-model="model" v-bind="$attrs"></textarea>

        <input v-else
            class="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-none rounded-lg border-gray-400 focus:border-licorice ps-0 !px-2 !py-2 focus:ring-0 focus:shadow-none pr-10 bg-gray-100 placeholder:text-[#C0C0C0] placeholder:text-md font-semibold"
            :class="[inputDynamicClasses]" :type="inputType" v-model="model" v-bind="$attrs" v-maska="props.mask" />

        <button v-if="props.type === 'password' && !props.isTextarea" type="button"
            @click="showPassword = !showPassword" class="absolute inset-y-0 end-0 flex items-center px-3 text-gray-500">
            <AtomsEyePasswordInput :open="!showPassword" />
        </button>

        <p v-if="errorMessage" class="text-sm text-red-500 pt-1.5">
            {{ errorMessage }}
        </p>
    </div>
</template>


<style lang="postcss"></style>
