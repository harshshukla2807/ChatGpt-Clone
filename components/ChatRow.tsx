'use client'

import { db } from '@/firebase';
import { ChatBubbleLeftIcon, TrashIcon } from '@heroicons/react/24/outline';
import { collection, deleteDoc, doc } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useParams, usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore';

type props={
    id:string;
}

function ChatRow({id}: props) {
    const pathname=usePathname();
    const param=useParams()
    const router= useRouter();
    const {data:session}= useSession();
    const [active,setActive]= useState(false);
    
    const removeChat=async ()=>{
       await deleteDoc(doc(db,"users",session?.user?.email!,"chats",id));
       router.replace("/");
    }
    
    // console.log("propsid ",id)
    // console.log("pathname",pathname)
    
    
    useEffect(()=>{
        if(!pathname) return;
      
      setActive(pathname.includes(id))
    },[pathname])
    
    // useEffect(()=>{
    //   // console.log(param?.id)
    //  setActive(param?.id===id);
    // },[param])
    
    
    const [messages]=useCollection(collection(db,"users",session?.user?.email!,"chats",id,"messages"));
    
    // console.log(messages)
    
    
    
  return <Link href={`/chat/${id}`} className={`chatRow justify-center ${active && 'bg-gray-700/50'}`}>
  
  <ChatBubbleLeftIcon className='h-5 w-5'/>
  <p className='flex-1 hidden md:inline-flex truncate'> {messages?.docs[messages?.docs?.length-1]?.data().text || "New Chat"}</p>
   <TrashIcon onClick={removeChat} className='h-5 w-5 text-gray-700 hover:text-red-700'/>
  </Link>
}

export default ChatRow