import ItemFrame from '../itemFrame/itemFrame';
import './itemsContainer.css';
import hamster1 from '../../images/hamster1.png';
import hamster2 from '../../images/hamster2.jpeg';
import hamster3 from '../../images/hamster3.png';


export default function ItemsContainer(props) {
    let pictures = [hamster1, hamster2, hamster3]
    let hamsters = props.items;
    let itemsList = hamsters.map((hamster) => 
        <ItemFrame key={hamster.id} item={hamster} picture={pictures[hamster.id % 3]}/>
    );

    return (
        <ul className='itemsList'>
            {itemsList}
        </ul>
    );
}
