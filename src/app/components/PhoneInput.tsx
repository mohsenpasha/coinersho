import { Dispatch, KeyboardEvent, SetStateAction } from "react"
import styles from './PhoneInput.module.scss'

export default function PhoneInput({value,changeHandler}:{value:string,changeHandler:Dispatch<SetStateAction<string>>}){
    // this function is for preventing bad characters in input
    function preventThings(event:KeyboardEvent<HTMLInputElement>){
        if(event.key == 'e' || event.key == '+' || event.key == '-') event.preventDefault()
    }
    return(
        <label className={styles.inputHolder}>
            <span className={styles['country-code']}>
                +98
            </span>
            <input placeholder="9101234567" type="number" value={value} onKeyDown={(event)=>preventThings(event)} onChange={(event)=>changeHandler(event.target.value)} />
        </label>
    )
}