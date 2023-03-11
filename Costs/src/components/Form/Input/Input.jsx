import styles from './Input.module.css'

function Input({ type, text, name, placeholder, handleOnCHange, value }) {
    return (
        <div className={styles.formControl}>
            <label htmlFor={name}> {text} </label>
            <input type={type} name={name} id={name} 
            placeholder={placeholder} onChange={handleOnCHange} value={value}/>
        </div>
    )
}

export default Input