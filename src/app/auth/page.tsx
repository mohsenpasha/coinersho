'use client'
import { useEffect, useState } from "react";
import PhoneInput from "../components/PhoneInput";

export default function AuthPage(){
    const [inputValue,setInputValue] = useState('')
    useEffect(()=>{
        console.log(inputValue)
    },[inputValue])
    return(
        <div>
            <PhoneInput value={inputValue} onchange={setInputValue}/>
        </div>
    )
}