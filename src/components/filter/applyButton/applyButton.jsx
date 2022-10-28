import { useContext } from 'react';
import { HamsterListContext } from '../../../contexts/hamsterList';
import { HamstersContext } from '../../../contexts/hamstersContext';
import './applyButton.css';


export default function ApplyButton() {
    let [hamsterList, setHamsterList] = useContext(HamsterListContext);
    let hamsters = useContext(HamstersContext);

    return (
        <button onClick={e => {
            let ageValues = {0: [0.0, 0.4], 1: [0.4, 1.5], 2: [1.5, 999.9]};
            let weightValues = {0: [0.0, 1.0], 1: [1.0, 2.0], 2: [2.0, 999.9]};
            let priceValues = {0: [0.0, 65.0], 1: [65.0, 110.0], 2: [110.0, 999.9]};

            let ageFilterOption = parseInt(document.getElementById("ageFilter").value);
            let weightFilterOption = parseInt(document.getElementById("weightFilter").value);
            let priceFilterOption = parseInt(document.getElementById("priceFilter").value);


            if (ageFilterOption !== -1) {
                hamsters = hamsters.filter(hamster => 
                    hamster.age > ageValues[ageFilterOption][0] && hamster.age <= ageValues[ageFilterOption][1]
                );
            }
            if (weightFilterOption !== -1) {
                hamsters = hamsters.filter(hamster => 
                    hamster.weight > weightValues[weightFilterOption][0] && hamster.weight <= weightValues[weightFilterOption][1]
                );
            }
            if (priceFilterOption !== -1){
                hamsters = hamsters.filter(hamster => 
                    hamster.price > priceValues[priceFilterOption][0] && hamster.price <= priceValues[priceFilterOption][1]
                );
            }
            setHamsterList(hamsters);
        }} className='applyButton'>Apply</button>
    );
}