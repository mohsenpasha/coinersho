'use client'
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function DashboardPage(){
    const router = useRouter()
    const [userInfo,setUserInfo] = useState<null | string>(null)
    useEffect(()=>{
        const innerUserInfo = localStorage.getItem('userInfo')
        if(!innerUserInfo){
            router.push('/auth')
        }
        else{
            setUserInfo(innerUserInfo)
        }
    },[])
    if(!userInfo) return
    return(
        <div>
            welcome to dashboard {userInfo}
        </div>
    )
}