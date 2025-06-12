'use client'
import { useEffect, useState } from "react";
import PhoneInput from "../components/PhoneInput";
import SubmiteButton from "../components/SubmitButton";

export default function AuthPage(){
    const [inputError,setInputError] = useState<null | string>(null)
    const [inputValue,setInputValue] = useState('')
    const [submitedAlready,setSubmitedAlready] = useState(false)
    
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
    function submitHandler(){
        if(!submitedAlready){
            setSubmitedAlready(true)
        }
        const isValid = isInputValid()
        console.log(isValid)
        if(!isValid) return
    }
    return(
        <div>
            <PhoneInput value={inputValue} changeHandler={setInputValue}/>
            <span>
                {inputError && inputError}
            </span>
            <SubmiteButton submitHandler={submitHandler}/>
        </div>
    )
}