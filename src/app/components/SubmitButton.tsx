import styles from './SubmitButton.module.scss'
export default function SubmiteButton({submitHandler,isLoading}:{submitHandler:()=>void,isLoading:boolean}){
    return(
        <div>
            <button className={styles.btn} onClick={submitHandler}>
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