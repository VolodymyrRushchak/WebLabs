import { Link } from "react-router-dom";
import styles from "./item.module.css";

export default function GoBackButton() {
    return (
        <Link to="/catalog">
            <button className={styles.backButton}>Go back</button>
        </Link>
    );
}