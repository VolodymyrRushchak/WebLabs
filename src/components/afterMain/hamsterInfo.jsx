import styles from './afterMain.module.css';


export default function HamsterInfo(props) {
    return (
        <div className={styles.hamsterInfoDiv}>
            <img className={styles.hamsterPicture} src={props.picture} alt="hamster" />
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </div>
    );
}