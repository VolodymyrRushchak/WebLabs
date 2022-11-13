import { useEffect, useState } from "react";
import { HamsterListContext } from "../../contexts/hamsterList";
import Filter from "../filter/filter";
import Footer from "../footer/footer";
import Header from "../header/header";
import ItemsContainer from "../itemsContainer/itemsContainer";
import { api } from "../../api";
import Loader from "../loader/loader";


export default function Catalog() {
    const [hamsters, setHamsters] = useState([]);
    const [hamstersList, setHamstersList] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        api.get().then(res => {
            setHamsters(res.data);
            setHamstersList(res.data);
        });
    }, []); 

    setTimeout(() => {
        setLoading(false);
    }, 1000);

    return (
        <HamsterListContext.Provider value={[hamstersList, setHamstersList, hamsters]}>
            <Header/>
            <Filter/>
            {loading ? <Loader/> : <ItemsContainer/>}
            <Footer/>
        </HamsterListContext.Provider>
    );
}