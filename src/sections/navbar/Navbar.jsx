// import Logo from '../../assets/logo.jpg'
import data from './data'
import './navbar.css'
import { MdDarkMode } from 'react-icons/md'
import { FaWhatsapp } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav>
      <div className='container nav__container'>
        <a href="index.html" className="nav__logo">
          <p>Raphael Almeida</p>
          {/* <img src={Logo} alt="Logo" /> */}
        </a>
        <ul className='nav__menu'>
          {
            data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
          }
        </ul>
        <a href="https://w.app/Infonet"><button id='theme__icon'><FaWhatsapp /></button></a>
      </div>
    </nav>
  )
}

export default Navbar