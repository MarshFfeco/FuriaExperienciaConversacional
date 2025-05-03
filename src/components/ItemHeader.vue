<script lang="ts" setup>
    import { ref } from 'vue';
    import ItemChatCreate from './ItemChatCreate.vue';

    const openCreateChat = ref(false)
</script>

<template>
    <UModal
        v-model:open="openCreateChat"
        title="Crie uma Publicação para os Fãs">

        <template #body>
            <ItemChatCreate />
        </template>
    </UModal>

    <header class="bg-inverted padding-top">
        <UContainer class="flex items-center justify-between px-4 py-6">
            <div>
                <h2 class="text-inverted text-highlighted text-lg sm:text-xl lg:text-3xl font-bold">
                    DASHBOARD
                </h2>
                <p class="mt-1 text-base text-muted">
                    Bem-vindo ao Dashboard da FURIA! 
                </p>
            </div>

            <UButton 
                @click="openCreateChat = true"
                class="cursor-pointer rounded-full ring-0" 
                size="xl" 
                icon="iconamoon:sign-plus"
                :active="false"
                color="neutral" 
                variant="outline" />
        </UContainer>
    </header>
</template>