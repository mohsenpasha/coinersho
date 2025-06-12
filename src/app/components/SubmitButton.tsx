export default function SubmiteButton({submitHandler}:{submitHandler:()=>void}){
    return(
        <div>
            <button onClick={submitHandler}>
                ورود
            </button>
        </div>
    )
}