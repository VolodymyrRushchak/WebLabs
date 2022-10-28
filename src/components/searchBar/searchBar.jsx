import { useContext } from 'react';
import { HamsterListContext } from '../../contexts/hamsterList';
import { HamstersContext } from '../../contexts/hamstersContext';
import './searchBar.css'; 


export default function SearchBar() {
    let [hamsterList, setHamsterList] = useContext(HamsterListContext);
    let hamsters = useContext(HamstersContext);

    return (
        <input onChange={e => {
            let text = document.getElementById("searchBar").value;
            hamsters = hamsters.filter((hamster) => hamster.name.search(text) !== -1);
            setHamsterList(hamsters);
        }} type="text" id="searchBar" placeholder='🔍' className='searchBar' />
    );
}