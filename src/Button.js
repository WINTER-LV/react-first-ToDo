
import Styles from "./input.module.css";


function Input({ value, onChange, placeholder }) {
    return <input value={value} onChange={onChange} className={Styles.input} placeholder={placeholder} />
}


export default Input;