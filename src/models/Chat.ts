// import { Timestamp } from "firebase/firestore";

// interface IChats {
//     title: string,
//     lastMessage: string,
//     timestamp: Timestamp
// }

// export class Chat {
//     chats: { [uid: string]: IChats; }

//     constructor(uid: string, title: string, lastMessage: string, timestamp: Timestamp)
//     {
//         this.chats = {
//             [uid]: {
//                 title,
//                 lastMessage,
//                 timestamp
//             }
//         }
//     }
// }

// interface IMembers {
//     [chat_uid: string]: {
//         [member_uid: string]: boolean
//     },
// }

// interface IMessageInfo {
//     name: string,
//     message: string,
//     timestamp: Timestamp
// }

// interface IMessage {
//     [chat_uid: string]: {
//         [uid: string]: IMessageInfo
//     },
// }