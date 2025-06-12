'use client'
import { useEffect, useState } from "react";
import PhoneInput from "../components/PhoneInput";
import SubmiteButton from "../components/SubmitButton";

export default function AuthPage(){
    const [inputValue,setInputValue] = useState('')
    
    useEffect(()=>{
        // this is for preventing more than 11 digit number
        if(inputValue.length > 11){
            setInputValue(inputValue.slice(0,11))
        }
    },[inputValue])
    
    function submitHandler(){
        console.log(inputValue)
    }
    return(
        <div>
            <PhoneInput value={inputValue} changeHandler={setInputValue}/>
            <SubmiteButton submitHandler={submitHandler}/>
        </div>
    )
}