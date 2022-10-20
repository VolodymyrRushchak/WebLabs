import './header.css';
import PagesChoice from './pagesChoice';
import Logo from '../logo/logo';


function Header() {
  return (
    <div className="header">
      <Logo/>
      <PagesChoice chosen='home'/>
    </div>
  );
}

export default Header;