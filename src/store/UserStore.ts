import { defineStore } from "pinia";
import { useChatStore } from "./ChatStore";
import { Rules } from "../enums/Rules";
import { useCommentStore } from "./CommentStore";

interface State {
    name: string,
    rule: Rules,
}

export const useUserStore = defineStore('user', {
    state: (): State => {
        return {
            name: '',
            rule: Rules.FURIA_USER,
        }
    },

    getters: {
        ICanAuthorization(state) {
            const isAdm = state.rule == Rules.FURIA_ADM
            const isPro = state.rule == Rules.FURIA_PRO
 
            return isAdm || isPro
        },

        ICanDelete(state) {
            return state.rule == Rules.FURIA_ADM
        }
    },
  
    actions: {
        async createChat(title: string, description: string)
        {
            const chatStore = useChatStore()
            
            await chatStore.addChat(this.name, title, description)
        },

        async removeChat(chatUid: string)
        {
            const chatStore = useChatStore()

            await chatStore.removeChat(chatUid)
        },

        async createComment(chatUid: string, comment: string)
        {
            const commentStore = useCommentStore()

            await commentStore.addComment(chatUid, comment)
        },

        async removeComment(chatUid: string, commentUid: string)
        {
            const commentStore = useCommentStore()

            await commentStore.deleteComment(chatUid, commentUid)
        }
    }
  })