import { useContext } from 'react';
import { api } from '../../../api';
import { HamsterListContext } from '../../../contexts/hamsterList';
import './applyButton.css';


export default function ApplyButton() {
    let [hamstersList, setHamstersList, hamsters] = useContext(HamsterListContext);

    return (
        <button onClick={e => {
            let ageFilterOption = parseInt(document.getElementById("ageFilter").value);
            let weightFilterOption = parseInt(document.getElementById("weightFilter").value);
            let priceFilterOption = parseInt(document.getElementById("priceFilter").value);
            api.get(`/filter/${ageFilterOption}/${weightFilterOption}/${priceFilterOption}`).then(res => {
                setHamstersList(res.data);
            });
        }} className='applyButton'>Apply</button>
    );
}