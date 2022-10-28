import { useContext, useState } from "react";
import { HamsterListContext } from "../../contexts/hamsterList";
import { HamstersContext } from "../../contexts/hamstersContext";
import Filter from "../filter/filter";
import Footer from "../footer/footer";
import Header from "../header/header";
import ItemsContainer from "../itemsContainer/itemsContainer";


export default function Catalog() {

    let [hamsterList, setHamsterList] = useState(useContext(HamstersContext));

    return (
        <HamsterListContext.Provider value={[hamsterList, setHamsterList]}>
            <Header/>
            <Filter/>
            <ItemsContainer/>
            <Footer/>
        </HamsterListContext.Provider>
    );
}