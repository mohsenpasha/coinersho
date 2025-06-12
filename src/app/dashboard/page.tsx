'use client'
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import styles from './page.module.scss'

export default function DashboardPage(){
    const router = useRouter()
    const [userInfo,setUserInfo] = useState<null | string>(null)
    function logout(){
        localStorage.removeItem('userInfo')
        router.push('/auth')
    }
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
        <div className={styles.dashboard}>
            welcome to dashboard {userInfo}
            <button onClick={logout} className={styles.logout}>
                خروج
            </button>
        </div>
    )
}