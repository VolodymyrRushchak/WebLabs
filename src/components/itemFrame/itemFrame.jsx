import ViewMoreButton from '../viewMoreButton/viewMoreButton';
import './itemFrame.css'


export default function ItemFrame(props) {
    
    return (
        <div className="itemFrame">
            <p className='itemTitle'>Item {props.item.id}</p>
            <img className='picture' src={props.picture} alt="hamster" />
            <h2 className='itemName'>{props.item.name}</h2>
            <p className="describtion">Age: {props.item.age}</p>
            <p className="describtion">Weight: {props.item.weight}</p>
            <div className="priceDiv">
                <span className='boldText'>Price:</span>
                <span>{props.item.price} $</span>
            </div>
            <ViewMoreButton link={`/item/${props.item.id}`}/>
        </div>
    );
}
