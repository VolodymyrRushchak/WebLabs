import ItemFrame from '../itemFrame/itemFrame';
import './itemsContainer.css';
import hamster1 from '../../images/hamster1.png';
import hamster2 from '../../images/hamster2.jpeg';
import hamster3 from '../../images/hamster3.png';
import { useContext } from 'react';
import { HamsterListContext } from '../../contexts/hamsterList';


export default function ItemsContainer() {
    let pictures = [hamster1, hamster2, hamster3];
    let hamsters = useContext(HamsterListContext)[0];

    return (
        <ul className='itemsList'>
            {hamsters.map((hamster) => 
                <ItemFrame key={hamster.id} item={hamster} picture={pictures[hamster.id % 3]}/>
            )}
        </ul>
    );
}
