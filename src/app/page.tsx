'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter()
  useEffect(()=>{
    const userInfo = localStorage.getItem('userInfo')
    console.log('test')
    if(!userInfo){
      router.push('auth')
    }
    else{
      router.push('dashboard')
    }
  },[])
  return (
    <div>
      loading...
    </div>
  );
}
