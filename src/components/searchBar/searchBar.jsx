import { useContext } from 'react';
import { HamsterListContext } from '../../contexts/hamsterList';
import './searchBar.css'; 


export default function SearchBar() {
    let [hamstersList, setHamstersList, hamsters] = useContext(HamsterListContext);

    return (
        <input onChange={e => {
            let text = document.getElementById("searchBar").value;
            hamsters = hamsters.filter((hamster) => hamster.name.search(text) !== -1);
            setHamstersList(hamsters);
        }} type="text" id="searchBar" placeholder='🔍' className='searchBar' />
    );
}