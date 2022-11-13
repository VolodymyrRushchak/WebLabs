import hamsters from '../../images/hamsters.png';
import './main.css'

export default function Main() {
    return (
        <div className='mainDiv'>
            <img className='hamstersPicture' src={hamsters} alt='hamsters'/>
            <div className='titleDiv'>
                <h1>Hamster shop</h1>
                <p>We offer the best hamsters in the world! Our hamsters are cute, smart and energetic. 
                    On this site, you can find a hamster that would suit your preferences. 
                    So, if you want to get a new pet, what are you waiting for? Let's do some shopping!</p>
            </div>
        </div>
    );
}
