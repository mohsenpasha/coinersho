'use client'

import styles from './page.module.scss'
import { useEffect, useState } from "react";
import PhoneInput from "../components/PhoneInput";
import SubmiteButton from "../components/SubmitButton";
import { useRouter } from "next/navigation";

export default function AuthPage(){
    const router = useRouter()
    const [inputError,setInputError] = useState<null | string>(null)
    const [inputValue,setInputValue] = useState('')
    const [submitedAlready,setSubmitedAlready] = useState(false)
    const [isLoading,setIsLoading] = useState(false)
    useEffect(()=>{
        const userInfo = localStorage.getItem('userInfo')
        if(!!userInfo){
            router.push('/dashboard')
        }
    },[])
    useEffect(()=>{
        // this is for preventing more than 11 digit number
        if(inputValue.length > 11){
            setInputValue(inputValue.slice(0,11))
        }
        if(submitedAlready){
            isInputValid()
        }
    },[inputValue])
    function isInputValid(){
        if(!inputValue){
            setInputError('لطفا شماره را وارد کنید')
            return false
        }
        if(inputValue.length < 10){
            setInputError('شماره کوتاه تر از حد واقعی خود است')
            return false
        }
        else if(inputValue.length == 11 && inputValue.slice(0,2) != '09'){
            setInputError('شماره نامعتبر است')
            return false
        }
        else if(inputValue.length == 10 && (inputValue[0] == '0' || inputValue[0] != '9')){
            setInputError('شماره نامعتبر است')
            return false
        }
        else{
            setInputError(null)
            return true
        }
    }
    async function submitHandler(){
        if(!submitedAlready){
            setSubmitedAlready(true)
        }
        const isValid = isInputValid()
        if(!isValid) return
        try{
            setIsLoading(true)
            const response = await fetch('https://randomuser.me/api/?results=1&nat=us')
            const jsonRes = await response.json()
            const name = jsonRes.results[0].name
            localStorage.setItem('userInfo',`${name.title} ${name.first} ${name.last}`)
            router.push('/dashboard')
        }
        catch(err){
            setIsLoading(false)
            console.log(err)
        }
    }
    return(
        <div className={styles.form}>
            <PhoneInput value={inputValue} changeHandler={setInputValue}/>
            <span className={styles.error}>
                {inputError && inputError}
            </span>
            <SubmiteButton submitHandler={submitHandler} isLoading={isLoading} />
        </div>
    )
}