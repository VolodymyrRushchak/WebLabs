import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { HamstersContext } from '../../contexts/hamstersContext';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from'./item.module.css';
import ItemInfo from './itemInfo';


export default function Item() {
    let { id } = useParams();
    id = parseInt(id);
    const hamsters = useContext(HamstersContext);
    const hamster = hamsters.find(x => x.id === id);

    return (
        <>
            <Header/>
            <ItemInfo hamster={hamster}/>
            <Footer/>
        </>
    );
}