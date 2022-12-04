import styles from './checkoutPage.module.css';

export default function ErrorMessage(props) {
    return (
        <div className={styles.error}>{props.error}</div>
    );
}