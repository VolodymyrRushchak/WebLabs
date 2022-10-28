import {
    Link
} from "react-router-dom";

import styles from './item.module.css';
import hamster1 from '../../images/hamster1.png';
import hamster2 from '../../images/hamster2.jpeg';
import hamster3 from '../../images/hamster3.png';
import { useState } from "react";


export default function ItemInfo(props) {
    let pictures = [hamster1, hamster2, hamster3];
    const [count, setCount] = useState(1);

    return (
        <>
            <div className={styles.itemInfoDiv}>
                <img className={styles.hamsterPicture} src={pictures[props.hamster.id % 3]} alt="hamster" />
                <div className={styles.itemProperties}>
                    <div className={styles.characteristics}>
                        <span className={styles.characteristic}>Energetic</span>
                        <span className={styles.characteristic}>Healthy</span> 
                    </div>
                    <h1>{props.hamster.name}</h1>
                    <p>Age: {props.hamster.age}</p>
                    <p>Weight: {props.hamster.age}</p>
                    <div className={styles.fields}>
                        <div className={styles.selectDiv}>
                            <p className={styles.paragraph}>Number of hamsters:</p>
                            <input onChange={e => setCount(parseInt(document.getElementById("count").value))} id="count" type="number" min={1} defaultValue={1} className={styles.numberInput}/>
                        </div>
                        <div className={styles.selectDiv}>
                            <p className={styles.paragraph}>With delivery or not:</p>
                            <select className={styles.select}>
                                <option value="">Delivery</option>
                                <option value="">No delivery</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.purchaseDiv}>
                <span className={styles.priceTag}>Price: ${props.hamster.price * count}</span>
                <Link to="/catalog">
                    <button className={styles.backButton}>Go back</button>
                </Link>
                <button className={styles.addToCartButton}>Add to cart</button>
            </div>
        </>
    );
}