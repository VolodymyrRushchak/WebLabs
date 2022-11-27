import {
    Link
} from "react-router-dom";
import './viewMoreButton.css'


export default function ViewMoreButton(props) {
    return (
        <Link to={props.link}>
            <button onClick={props.onClick} className='viewMoreButton'>View more</button>
        </Link>
    );
}