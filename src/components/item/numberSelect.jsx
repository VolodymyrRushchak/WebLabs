import styles from "./item.module.css";

export default function NumberSelect(props) {
    return (
        <div className={styles.selectDiv}>
            <p className={styles.paragraph}>Number of hamsters:</p>
            <input onChange={props.onChange} id="count" type="number" min={1} defaultValue={1} className={styles.numberInput}/>
        </div>
    );
}