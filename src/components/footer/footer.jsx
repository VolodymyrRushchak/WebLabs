import './footer.css'
import Logo from '../logo/logo';
import SocialMedia from './socialMedia';


export default function Footer() {
    return (
        <div className='footerDiv'>
            <div className="topDiv">
                <span className='title'>Hamster shop</span>
                <Logo/>
                <SocialMedia/>
            </div>
            <hr />
            <p>2022 IoT © All rights reserved</p>
        </div>    
    );
} 
