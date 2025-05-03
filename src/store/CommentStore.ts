import { DataSnapshot, getDatabase, push, ref, remove, set, type DatabaseReference } from "firebase/database"
import { Timestamp } from "firebase/firestore"
import { defineStore } from "pinia"
import app from "../firebase/FirebaseService"
import { useUserStore } from "./UserStore"

export interface IComment {
  commentUid: string
  name: string,
  comment: string,
  timestamp: Timestamp
}

interface State {
  chatUid: string,
  comments: IComment[]
}

export const useCommentStore = defineStore('comment', {
  state: (): State => {
    return {
        chatUid: '',
        comments: []
    }
  },

  getters: {
    reference(): DatabaseReference
    {
        return ref(getDatabase(app), 'comments/')
    },

    referenceByChildUid: () => {
      return (chatUid: string, commentUid: string) => ref(getDatabase(app), `comments/${chatUid}/${commentUid}`)
    },

    referenceById: () => {
        return (chatUid: string) => ref(getDatabase(app), 'comments/' + chatUid)
    },
  },

  actions: {
    addNewComment(newComments: DataSnapshot)
    {
      const newComment: IComment = newComments.val()
      newComment.commentUid = newComments.key!

      this.comments.push(newComment)
    },

    async addComment(chatUid: string, comment: string)
    {
        const useUser = useUserStore()

        const newComment = {
            name: useUser.name,
            comment: comment,
            timestamp: Timestamp.now()
        };

        const newCommentRef = push(this.referenceById(chatUid))


        await set(newCommentRef, newComment)
    }, 

    async deleteComment(chatUid: string, commentUid: string) {
      await remove(this.referenceByChildUid(chatUid, commentUid))
      this.comments = this.comments.filter(com => com.commentUid != commentUid)
    }
  }
})