import { Dispatch, KeyboardEvent, SetStateAction } from "react"

export default function PhoneInput({value,changeHandler}:{value:string,changeHandler:Dispatch<SetStateAction<string>>}){
    // this function is for preventing bad characters in input
    function preventThings(event:KeyboardEvent<HTMLInputElement>){
        if(event.key == 'e' || event.key == '+' || event.key == '-') event.preventDefault()
    }
    return(
        <div>
            <span>
                +98
            </span>
            <input type="number" value={value} onKeyDown={(event)=>preventThings(event)} onChange={(event)=>changeHandler(event.target.value)} />
        </div>
    )
}