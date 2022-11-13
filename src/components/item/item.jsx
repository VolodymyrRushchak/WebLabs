import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../api';
import Footer from '../footer/footer';
import Header from '../header/header';
import ItemInfo from './itemInfo';


export default function Item() {
    let { id } = useParams();
    id = parseInt(id);
    let [hamster, setHamster] = useState({});
    useEffect(() => {
        api.get(`/${id}`).then(res => {
            setHamster(res.data);
        });
    }, []); 

    return (
        <>
            <Header/>
            <ItemInfo hamster={hamster}/>
            <Footer/>
        </>
    );
}