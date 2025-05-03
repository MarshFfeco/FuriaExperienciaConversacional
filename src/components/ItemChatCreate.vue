<script setup lang="ts">
    import { computed, ref } from 'vue';
    import { useUserStore } from '../store/UserStore';

    const userStore = useUserStore()

    const title = ref('')
    const text = ref('')

    const ICanPublic = computed(() => title.value.length > 3 && text.value.length >= 10)

    const loading = ref(false)

    async function CreateChat()
    {
        loading.value = true

        await userStore.createChat(title.value, text.value)

        title.value = ''
        text.value = ''

        loading.value = false
    }
</script>

<template>
    <div class="grid space-y-4">
        <UInput 
            v-model="title" 
            class="w-full" 
            :disabled="loading" 
            placeholder="Título..." 
            size="xl" 
            variant="subtle" />

        <UTextarea 
            autoresize
            class="flex-grow w-full"
            :disabled="loading"
            v-model="text" 
            placeholder="Faça seu comentário..." 
            size="xl" 
            color="primary" 
            variant="subtle"  />

        <UButton 
            :disabled="!ICanPublic"
            :loading="loading"
            variant="outline"
            color="neutral"
            class="mt-2 justify-self-end" 
            size="xl" 
            label="criar"
            @click="CreateChat"/>
    </div>
</template>