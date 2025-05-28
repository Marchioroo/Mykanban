<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
    <footer class="bg-gray-900 text-white py-6">
        <div class="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <p class="text-sm">&copy; {{ year }} Minha Empresa. Todos os direitos reservados.</p>

            <div class="flex space-x-4 mt-4 md:mt-0">
                <a href="#" class="hover:underline">Política de Privacidade</a>
                <a href="#" class="hover:underline">Termos de Uso</a>
                <a href="#" class="hover:underline">Contato</a>
            </div>
        </div>
    </footer>
</template>
