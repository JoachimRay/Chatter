import { create } from 'zustand'
import { db } from './firebase';
import {doc, getDoc} from 'firebase/firestore';
import { useUserStore } from './userStore';

export const useChatStore = create((set) => ({
 
  changeChat: (chatId, user) => {
    const currentUser = useUserStore.getState().currentUser;

    if(user.blocked.includes(currentUser.id)) {
      return set ({
        chatId,
        user: null,
        isCurrentUserBlocked: true,
        isReceiverBLocked: false,


      })
    }

    
    if(currentUser.blocked.includes(user.id)) {
      return set ({
        chatId,
        user: user,
        isCurrentUserBlocked: false,
        isReceiverBLocked: true,
     

      })
    } else {


   
   return set ({
      chatId,
      user,
      isCurrentUserBlocked: false,
      isReceiverBLocked: false,
   
    
    })
  }
  },


  changeBlock : () => {
    set((state)=>({...state, isReceiverBLocked: !state.isReceiverBLocked}));
  }
 
}));