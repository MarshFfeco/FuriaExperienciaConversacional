import { getDatabase, push, ref, set, type DatabaseReference } from 'firebase/database'
import { Timestamp } from 'firebase/firestore'
import { defineStore } from 'pinia'
import app from '../firebase/FirebaseService'

interface IChat {
    chatUid: string,
    author: string,
    title: string,
    description: string
    lastMessage: string,
    timestamp: Timestamp
}

interface State {
    chats: IChat[],
    chatRef: DatabaseReference,
}

export const useChatStore = defineStore('chat', {
  state: (): State => {
    const db =  getDatabase(app)

    return {
        chats: [],
        chatRef: ref(db, 'chats')
    }
  },

  actions: {
    addChat(author: string, title: string, description: string, lastMessage = '')
    {
        const newChat = {
            author: author,
            title: title,
            description: description,
            lastMessage: lastMessage,
            timestamp: Timestamp.now()
        };

        const newChatRef = push(this.chatRef)

        set(newChatRef, newChat)
    }
  }
})