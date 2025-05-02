import { defineStore } from "pinia";
import { useChatStore } from "./ChatStore";

enum Rules {
    FURIA_USER,
    FURIA_ADM,
    FURIA_PRO,
}

interface State {
    name: string,
    rule: Rules
}

export const useUserStore = defineStore('user', {
    state: (): State => {
        return {
            name: '',
            rule: Rules.FURIA_USER
        }
    },
  
    actions: {
        createChat(title: string, description: string)
        {
            const chatStore = useChatStore()

            const isAdm = this.rule == Rules.FURIA_ADM
            const isPro = this.rule == Rules.FURIA_PRO

            if(isAdm || isPro)
                chatStore.addChat(this.name, title, description)
        }
    }
  })