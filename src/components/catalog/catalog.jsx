import { useState } from "react";
import Filter from "../filter/filter";
import Footer from "../footer/footer";
import Header from "../header/header";
import ItemsContainer from "../itemsContainer/itemsContainer";


export default function Catalog() {
    let hamstersArray = [
        {
            id: 1, 
            age: 0.5,
            weight: 1.2,
            price: 75,
            name: 'Hendalf'
        },
        {
            id: 2, 
            age: 1.5,
            weight: 1.4,
            price: 65,
            name: 'Carl'
        },
        {
            id: 3, 
            age: 0.3,
            weight: 2.2,
            price: 115,
            name: 'McFly'
        },
        {
            id: 4, 
            age: 2.2,
            weight: 1.0,
            price: 86,
            name: 'Gotham'
        }
    ];

    let [hamsters, setHamsters] = useState(hamstersArray);

    return (
        <>
            <Header/>
            <Filter/>
            <ItemsContainer items={hamsters}/>
            <Footer/>
        </>
    );
}