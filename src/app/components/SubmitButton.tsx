import styles from './SubmitButton.module.scss'
export default function SubmiteButton({submitHandler,isLoading}:{submitHandler:()=>void,isLoading:boolean}){
    return(
        <div>
            <button disabled={isLoading} className={styles.btn} onClick={submitHandler}>
                {isLoading
                ?
                    <div className={styles.loading}></div>
                :
                    <>ورود</>
                }
            </button>
        </div>
    )
}