<script lang="ts" setup>
    import { computed, onBeforeMount, onUpdated, ref, type Ref } from 'vue';
    import { useChatStore, type IChat } from '../store/ChatStore';
    import router from '../router';
    import ItemComentCreate from '../components/ItemCommentCreate.vue';
    import ItemCommentRead from '../components/ItemCommentRead.vue';
    import { useUserStore } from '../store/UserStore';

    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };

    const useChat = useChatStore()
    const ICanDelete = computed(() => userStore.ICanDelete)
    const userStore = useUserStore()

    const chat: Ref<IChat | null> = ref(null)
    const date = computed(() => new Date(chat.value!.timestamp.seconds! * 1000 + chat.value!.timestamp.nanoseconds! / 1000000))

    onBeforeMount(async () => {
        await Inicialize()
    })

    onUpdated(async () => {
        await Inicialize()
    })

    async function Inicialize()
    {
        const uid: string = router.currentRoute.value.params.uid as string

        chat.value = useChat.currentChat(uid)
    }

    async function RemoveChat()
    {
        const uid: string = router.currentRoute.value.params.uid as string

        await userStore.removeChat(uid)

        router.push('/')
    }
</script>

<template>
    <div>
        <div class="padding-top">
            <header class="p-4 bg-inverted flex items-center">
                <div class="flex space-x-2 flex-grow">
                    <UAvatar class="w-16 h-16" :alt="chat?.author" size="3xl" />
                    <div>
                        <p class="text-inverted text-lg text-highlighted font-bold">{{ chat?.author }}</p>
                        <p class="text-inverted text-base text-muted">{{ date.toLocaleDateString('pt-BR', options) }}</p>
                    </div>
                </div>

                <UButton 
                    v-if="ICanDelete" 
                    @click="RemoveChat"
                    icon="iconamoon:trash-simple" 
                    size="xl" 
                    color="error" 
                    variant="ghost" />
            </header>
        </div>

        <UContainer class="main py-8 flex flex-col justify-between">
            <section class="flex flex-col justify-center items-center mt-12">
                <h1 class="text-highlighted lg:text-5xl text-3xl font-bold">{{ chat?.title }}</h1>
                <p class="mt-8 lg:text-lg text-base">{{ chat?.description }}</p>
            </section>

            <div>
                <USeparator color="primary" type="solid" />

                <ItemComentCreate v-if="userStore.name" class="my-6" :chat-uid="chat!.chatUid" />

                <ItemCommentRead :chat-uid="chat!.chatUid" />
            </div>
        </UContainer>
    </div>
</template>