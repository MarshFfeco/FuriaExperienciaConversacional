<script setup lang="ts">
    import { onBeforeMount, ref, type Ref } from 'vue';
    import { useChatStore, type IChat } from '../store/ChatStore';
    import LoadingComp from './LoadingComp.vue';

    const chatStore = useChatStore()

    const loading = ref(true)

    const itemsBlog: Ref<IChat[]> = ref([])

    onBeforeMount(async () => {
        await chatStore.getChat()
        console.log(chatStore.chats)
        const limit = chatStore.chats.length > 4 ? 4 : chatStore.chats.length

        for(let i = 0; i < limit; i++)
        {
            itemsBlog.value[i] = chatStore.chats[i]
        }

        loading.value = false
    })
</script>

<template>
    <UContainer class="main flex flex-col space-y-20 py-4 justify-center items-center">
        <article class="text-center">
            <small class="text-primary text-base text-pretty font-semibold">
                Bastidores e Curiosidades
            </small>

            <h3 class="mt-2 text-highlighted md:text-5xl lg:text-7xl text-3xl font-bold">
                Comunidade FURIA
            </h3>

            <p class="mt-6 lg:text-lg text-base text-muted">
                Junte-se ao nosso grupo oficial e conecte-se com outros fãs da FURIA! <br>Compartilhe notícias, 
                troque ideias e acompanhe tudo sobre o time em tempo real.
            </p>
        </article>

        <div class="w-full MyGrid" >
            <article v-if="!loading" v-for="item in itemsBlog" 
                class="border border-default hover:border-accented rounded-lg p-4 space-y-1">
                
                <h3 class="truncate text-base text-highlighted font-bold">
                    {{item.title}}
                </h3>

                <p class="truncate text-sm text-toned">
                    {{ item.description }}
                </p>

                <UButton class="cursor-pointer mt-4" color="primary" size="xl" icon="iconamoon:do-redo-fill">Acessar</UButton>
            </article>

            <LoadingComp class="my" v-else />
        </div>
    </UContainer>
</template>

<style>
    .MyGrid {
        display: grid;

        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));

        justify-content: center;

        gap: 16px;
    }

    .my {
        grid-column: span 8;
    }
</style>