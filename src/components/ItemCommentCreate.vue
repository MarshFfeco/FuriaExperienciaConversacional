<script lang="ts" setup>
    import {computed, ref } from 'vue';
    import { useUserStore } from '../store/UserStore';

    interface Prop {
        chatUid: string
    }

    const { chatUid } = defineProps<Prop>()

    const useStore = useUserStore()

    const comment = ref('')
    const ICanComment = computed(() => comment.value.length > 3)
    const loading = ref(false)

    async function SendComment()
    {
        loading.value = true

        await useStore.createComment(chatUid, comment.value)
        
        comment.value = ''
        loading.value = false
    }
</script>

<template>
    <UContainer class="grid">
        <div class="flex space-x-2">
            <UAvatar class="flex-none" :alt="useStore.name" size="3xl" />
            <UTextarea 
                class="flex-grow"
                :disabled="loading"
                v-model="comment" 
                placeholder="Faça seu comentário..." 
                size="xl" 
                color="primary" 
                variant="subtle"  />
        </div>

        <UButton 
            :disabled="!ICanComment"
            :loading="loading"
            variant="outline"
            color="neutral"
            class="mt-2 justify-self-end" 
            size="xl" 
            label="comentar"
            @click="SendComment"/>
    </UContainer>
</template>