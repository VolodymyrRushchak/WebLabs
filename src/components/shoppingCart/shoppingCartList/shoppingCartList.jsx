import { store } from '../../../redux/store';
import ListItem from './listItem';
import styles from './shoppingCartList.module.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function ShoppingCartList() {
    const orders = useSelector((state) => state);
    const total = Object.keys(orders).reduce((total, index) => total + orders[index].amount * orders[index].hamster.price, 0);

    return (
        <>
        <h1 className={styles.title}>Shopping Cart</h1>   
        {Object.keys(orders).map((index) => <ListItem order={orders[index]}/>)}
        <span className={styles.total}>{`Total amount: $${total}`}</span>
        <div className={styles.buttonsDiv}>
            <Link to={'/catalog'}>
                <button className={styles.button2}>Back to catalog</button>
            </Link> 
            <button className={styles.button2}>Continue</button>
        </div>
        </>
    );
}