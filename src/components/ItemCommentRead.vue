<script setup lang="ts">
    import { computed, onBeforeMount, onUpdated } from 'vue';
    import { useCommentStore } from '../store/CommentStore';
    import { onChildAdded } from 'firebase/database';
    import { useUserStore } from '../store/UserStore';

    interface Prop {
        chatUid: string
    }

    const { chatUid } = defineProps<Prop>()

    const userStore = useUserStore()
    const Name = computed(() => userStore.name)
    const ICanDelete = computed(() => userStore.ICanDelete)

    const useComment = useCommentStore()

    const comments = computed(() => useComment.comments)

    onBeforeMount(Inicialize)
    onUpdated(Inicialize)

    function Inicialize()
    {
        useComment.chatUid = chatUid
        useComment.comments = []

        onChildAdded(useComment.referenceById(chatUid), data => {
            if(data.exists())
                useComment.addNewComment(data)
        })
    }

    async function RemoveComment(commentUid: string)
    {
        await userStore.removeComment(chatUid, commentUid)
    }
</script>

<template>
    <UContainer class="mt-2 space-y-4">
        <article 
            v-for="comment in comments" 
            :key="comment.timestamp.seconds" 
            class="flex items-center space-x-2 mx-8 p-2 hover:bg-muted">
            <UAvatar class="flex-none w-16 h-16" :alt="comment.name" size="3xl" />

            <div class="flex-grow">
                <h2 class="text-highlighted text-lg font-bold">{{ comment.name }}</h2>
                <p class="text-base mt-1">{{ comment.comment }}</p>
            </div>

            <UButton 
                v-if="comment.name == Name || ICanDelete" 
                @click="RemoveComment(comment.commentUid)"
                icon="iconamoon:trash-simple" 
                size="xl" 
                color="error" 
                variant="ghost" />
        </article>
    </UContainer>
</template>