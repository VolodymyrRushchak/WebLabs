import styles from "./item.module.css";

export default function DeliverySelect() {
    return (
        <div className={styles.selectDiv}>
            <p className={styles.paragraph}>With delivery or not:</p>
            <select className={styles.select}>
                <option value="">Delivery</option>
                <option value="">No delivery</option>
            </select>
        </div>
    );
}