import './afterMain.css'
import HamsterInfo from './hamsterInfo';
import hamster1 from '../../images/hamster1.png';
import hamster2 from '../../images/hamster2.jpeg';
import hamster3 from '../../images/hamster3.png';
import ViewMoreButton from '../viewMoreButton/viewMoreButton';


export default function AfterMain() {
    let descr1 = "Two months old, very energetic and playful. If your childrens are bored and want to play with someone, his would be the best choice!";
    let descr2 = "Cute, gentle and very beautiful, three months old Nastya a waiting for someone to give her love and care. Don't lose a chance to get a new family member ;)";
    let descr3 = "Young and full of energy. Loves apples and carrot. Childrens like to play with him, and so does he :)";
    return (
        <div className='afterMainDiv'>
            <div className="topHamstersDiv">
                <HamsterInfo picture={hamster1} name='Homka' description={descr1}/>
                <HamsterInfo picture={hamster2} name='Nastya' description={descr2}/>
                <HamsterInfo picture={hamster3} name='Vasyl' description={descr3}/>
            </div>
            <ViewMoreButton/>
        </div>
    );
}
