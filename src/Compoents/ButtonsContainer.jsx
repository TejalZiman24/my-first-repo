import styles from './ButtonsContainer.module.css'

function BUttonsContainer({onButtonClick}){
    const buttonName=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
return <div className={styles.buttonContainer}>
    {buttonName.map((btn)=>{
return <button key={btn} className={styles.button}
 onClick={()=>onButtonClick(btn)}>{btn}</button>
})}
</div>
} 

export default BUttonsContainer