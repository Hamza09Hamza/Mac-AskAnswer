import styles from "../styles/Circul.module.css"
const Circul = ({number}) => {
    return ( <>
        <div  className={styles.Circul+" "+styles[number]}>
        </div>
    </> );
}
 
export default Circul;