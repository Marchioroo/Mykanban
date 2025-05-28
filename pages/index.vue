<script setup lang="ts">
import { MoleculesTitle } from '#components';

</script>

<template>
    <div>
        <MoleculesTitle />

        <MoleculesFilter />
        <div class="flex w-[1200px] bg-amber-700 mx-auto">
            <OrganismsKanban />
        </div>

    </div>
</template>
