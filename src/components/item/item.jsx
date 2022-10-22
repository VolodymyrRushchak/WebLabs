import { useParams } from 'react-router-dom';
import Header from '../header/header';
import './item.css';


export default function Item() {
    const { id } = useParams();

    return (
        <>
            <Header/>
            <h1>{id}</h1>
        </>
    );
}