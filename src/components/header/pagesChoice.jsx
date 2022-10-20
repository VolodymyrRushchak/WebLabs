import './header.css'

export default function PagesChoice(props) {
    let homeChosen = props.chosen.localeCompare('home') ? 'notchosen' : 'chosen';
    let catalogChosen = props.chosen.localeCompare('catalog') ? 'notchosen' : 'chosen';
    let cartChosen = props.chosen.localeCompare('cart') ? 'notchosen' : 'chosen';
    return (
        <ul className="pagesChoice">
            <li className={homeChosen}>Home</li>
            <li className={catalogChosen}>Catalog</li>
            <li className={cartChosen}>Cart</li>
        </ul>
    );
}