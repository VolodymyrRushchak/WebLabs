import styles from './shoppingCartList.module.css';
import hamster1 from '../../../images/hamster1.png';
import hamster2 from '../../../images/hamster2.jpeg';
import hamster3 from '../../../images/hamster3.png';
import { useDispatch } from 'react-redux';
import { decreaseAmount, increaseAmount } from '../../../redux/actions';

export default function ListItem(props) {
    const hamsters = [hamster1, hamster2, hamster3];
    const dispatch = useDispatch()

    return (
        <div className={styles.mainDiv}>
            <img className={styles.picture} src={hamsters[props.order.hamster.id % 3]} alt="hamster picture" />
            <span className={styles.name}>{props.order.hamster.name}</span>
            <span className={styles.price}>${props.order.amount * props.order.hamster.price}</span>
            <button onClick={() => dispatch(increaseAmount(props.order.hamster.id))} className={styles.button}>+</button>
            <span className={styles.amount}>{props.order.amount}</span>
            <button onClick={() => dispatch(decreaseAmount(props.order.hamster.id))} className={styles.button}>-</button>
        </div>
    );
}