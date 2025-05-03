<script setup lang="ts">
    import { computed, onBeforeMount, ref } from 'vue';
    import { useChatStore } from '../store/ChatStore';
    import router from '../router';
    import LoadingComp from './LoadingComp.vue';

    const emit = defineEmits(["selectChat"])

    const chatStore = useChatStore()

    const loading = ref(true)

    onBeforeMount(async () => {
        await chatStore.getChat()
        loading.value = false
    })

    const searchChats = ref('')
    const SearchChatsResults = computed(() => chatStore.chats.filter(chat => chat.title.toLowerCase().includes(searchChats.value.toLowerCase())))

    function SelectChat(chatUid: string)
    {
        router.push("/chat/" + chatUid)
        emit("selectChat")
    }
</script>

<template>
    <UInput 
        class="w-full" 
        icon="iconamoon:search" 
        size="xl" 
        color="neutral" 
        variant="ghost" 
        placeholder="Procurar..."  
        v-model="searchChats"/>

    <div class="mt-6 space-y-4">
        <article
            v-if="!loading"
            v-for="chat in SearchChatsResults" 
            @click="SelectChat(chat.chatUid)"
            :key="chat.chatUid"
            class="flex space-x-2 rounded-lg border border-default p-4 hover:border-primary">
                
            <UAvatar :alt="chat.author" size="xl" />

            <div>
                <h3 class="text-lg font-semibold">
                    {{chat.title}}
                </h3>
                
                <p class="text-base text-pretty text-muted">
                    {{ chat.description }}
                </p>
            </div>
        </article>

        <LoadingComp v-else />
    </div>
</template>