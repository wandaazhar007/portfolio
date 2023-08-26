'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './navbar.scss';
import Image from "next/image";
import Link from "next/link";
import { faBars, faBook, faBookOpen, faClose, faCode, faCommenting, faComments, faHome, faPencil, faPhoneAlt, faPhoneSquare, faQuestionCircle, faSignIn, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { usePathname } from "next/navigation";
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [on, setOn] = useState(false);
  const handleNavbar = () => {
    setOn(!on);
  }

  const handleClickMenu = () => {
    setOn(false)
  }
  return (
    <header className="navbar">
      <div className="wrapContainer">
        <div className="sectionContainer">
          <div className="colLeft">
            <div className="logo">
              <Image src="/wanda-azhar.jpg" alt="logo" width={500} height={500} />
            </div>
          </div>
          <div className="colRight">
            <FontAwesomeIcon icon={faClose} className={`iconClose ${on ? 'on' : ''}`} onClick={handleNavbar} />
            <div className={`nav ${on ? 'on' : ''}`}>
              <Link href="/" className={`link ${pathname === '/' ? 'on' : ''}`} onClick={handleClickMenu}><FontAwesomeIcon icon={faUser} className="icon" /> Profile</Link>
              <Link href="/my-works" className={`link ${pathname === '/my-works' ? 'on' : ''}`} onClick={handleClickMenu} ><FontAwesomeIcon icon={faPencil} className="icon" /> My Works</Link>
              <Link href="#" className="link" onClick={handleClickMenu}><FontAwesomeIcon icon={faCode} className="icon" /> Projects</Link>
              <Link href="https://instagram.com/wanda_azharr/" target="_blank" className="link" onClick={handleClickMenu}><FontAwesomeIcon icon={faInstagram} className="icon" /> Instagram</Link>
              <Link href="https://github.com/wandaazhar007/" target="_blank" className="link" onClick={handleClickMenu}><FontAwesomeIcon icon={faGithub} className="icon" /> Github</Link>
              <Link href="/faq" className={`link ${pathname === '/faq' ? 'on' : ''}`} onClick={handleClickMenu}><FontAwesomeIcon icon={faQuestionCircle} className="icon" /> Faq</Link>
            </div>
            <div className="wrap">
              <button className="btnLogin"><FontAwesomeIcon icon={faPhoneAlt} className='icon' /> Reach Me</button>
              <button className="btnMenu" onClick={handleNavbar}>
                <FontAwesomeIcon icon={faBars} className='icon' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;