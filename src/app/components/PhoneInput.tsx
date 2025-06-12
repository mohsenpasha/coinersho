export default function PhoneInput({value,onchange}){
    return(
        <div>
            <span>
                +98
            </span>
            <input value={value} onChange={(event)=> onchange(event.target.value)} type="number" />
        </div>
    )
}