import { child, getDatabase, onValue, push, ref, remove, set, type DatabaseReference } from 'firebase/database'
import { Timestamp } from 'firebase/firestore'
import { defineStore } from 'pinia'
import app from '../firebase/FirebaseService'

export interface IChat {
    chatUid: string,
    author: string,
    title: string,
    description: string
    lastMessage: string,
    timestamp: Timestamp
}

interface State {
    chats: IChat[]
}

export const useChatStore = defineStore('chat', {
  state: (): State => {
    return {
        chats: [],
    }
  },

  getters: {
    reference(): DatabaseReference
    {
        return ref(getDatabase(app), 'chats/')
    },

    referenceByChild: () => {
        return (chatUid: string) => child(ref(getDatabase(app)), 'chats/' + chatUid)
    },

    referenceById: () => {
        return (chatUid: string) => ref(getDatabase(app), 'chats/' + chatUid)
    },
  },

  actions: {
    currentChat(chatUid: string): IChat
    {
        return this.chats.find(chat => chat.chatUid == chatUid)!
    },

    async addChat(author: string, title: string, description: string, lastMessage = '')
    {
        const newChat = {
            author: author,
            title: title,
            description: description,
            lastMessage: lastMessage,
            timestamp: Timestamp.now()
        };

        const newChatRef = push(this.reference)

        await set(newChatRef, newChat)
    },

    async getChat() {
        await new Promise((resol) => {
            const newChats: IChat[] = []

            onValue(this.reference, (snapshot) => {
                snapshot.forEach(child => {
                    const childKey = child.key;
                    const childData: IChat = child.val();
    
                    newChats.push({
                        chatUid: childKey,
                        author: childData.author,
                        description: childData.description,
                        lastMessage: childData.lastMessage,
                        title: childData.title,
                        timestamp: childData.timestamp
                    })
                })
                
                if(newChats.length > 0)
                    this.chats = newChats

                resol(4)
            }, {
                onlyOnce: true,
            })
        })
    },

    async removeChat(chatId: string)
    {
        await remove(this.referenceById(chatId))
    }
  }
})