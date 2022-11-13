import styles from './item.module.css';
import hamster1 from '../../images/hamster1.png';
import hamster2 from '../../images/hamster2.jpeg';
import hamster3 from '../../images/hamster3.png';
import { useState } from "react";
import GoBackButton from "./goBackButton";
import NumberSelect from './numberSelect';
import DeliverySelect from './deliverySelect';


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
                    <p>Weight: {props.hamster.weight}</p>
                    <div className={styles.fields}>
                        <NumberSelect onChange={e => setCount(parseInt(document.getElementById("count").value))}/>
                        <DeliverySelect/>
                    </div>
                </div>
            </div>
            <div className={styles.purchaseDiv}>
                <span className={styles.priceTag}>Price: ${props.hamster.price * count}</span>
                <GoBackButton/>
                <button className={styles.addToCartButton}>Add to cart</button>
            </div>
        </>
    );
}