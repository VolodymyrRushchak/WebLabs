import './afterMain.css'


export default function HamsterInfo(props) {
    return (
        <div className="hamsterInfoDiv">
            <img className='hamsterPicture' src={props.picture} alt="hamster" />
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </div>
    );
}