import styles from './afterMain.module.css'
import HamsterInfo from './hamsterInfo';
import hamster1 from '../../images/hamster1.png';
import hamster2 from '../../images/hamster2.jpeg';
import hamster3 from '../../images/hamster3.png';
import hamster4 from '../../images/hamster4.jpg';
import hamster5 from '../../images/hamster5.png';
import hamster6 from '../../images/hamster6.jpg';
import ViewMoreButton from '../viewMoreButton/viewMoreButton';
import { useState } from 'react';


export default function AfterMain() {
    const someHamsters = [
        {
            picture: hamster1,
            name: 'Homka',
            description: "Two months old, very energetic and playful. If your childrens are bored and want to play with someone, his would be the best choice!"
        }, 
        {
            picture: hamster2,
            name: 'Nastya',
            description: "Cute, gentle and very beautiful, three months old Nastya a waiting for someone to give her love and care. Don't lose a chance to get a new family member ;)"
        }, 
        {
            picture: hamster3,
            name: 'Vasyl',
            description: "Young and full of energy. Loves apples and carrot. Childrens like to play with him, and so does he :)"
        },
        {
            picture: hamster4,
            name: 'Kozak',
            description: "Very strong and powerful hamster. One of the biggest hamsters in the world. If you decide to buy him, consider to buy a lot of food as well)"
        },
        {
            picture: hamster5,
            name: 'Pikachu',
            description: "If you love cute hamsters, he is the best choice. Pikachu eats a lot, which makes him quite fatty and, therefore, even more cute"
        },
        {
            picture: hamster6,
            name: 'Didaprio',
            description: "Very playful, fast and energetic. The best choice for lonely people. If you take him, he will fill your heart with warmер and love :)"
        }
    ];


    const [homeHamsters, setHomeHamsters] = useState([
        someHamsters[0], someHamsters[1], someHamsters[2]
    ]);

    return (
        <div className={styles.afterMainDiv}>
            <div className={styles.topHamstersDiv}>
                <HamsterInfo picture={homeHamsters[0].picture} name={homeHamsters[0].name} description={homeHamsters[0].description}/>
                <HamsterInfo picture={homeHamsters[1].picture} name={homeHamsters[1].name} description={homeHamsters[1].description}/>
                <HamsterInfo picture={homeHamsters[2].picture} name={homeHamsters[2].name} description={homeHamsters[2].description}/>
            </div>
            <ViewMoreButton onClick={e => {
                    let length = someHamsters.length; 
                    let randindex1 = Math.floor(Math.random() * length);
                    let randindex2;
                    do {randindex2 = Math.floor(Math.random() * length)} while (randindex2 === randindex1);
                    let randindex3;
                    do {randindex3 = Math.floor(Math.random() * length)} while (randindex3 === randindex1 || randindex3 === randindex2);
                    setHomeHamsters([someHamsters[randindex1], someHamsters[randindex2], someHamsters[randindex3]]);
                }
            }/>
        </div>
    );
}
