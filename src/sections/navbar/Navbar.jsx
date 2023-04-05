// import Logo from '../../assets/logo.jpg'
import data from './data'
import './navbar.css'
import { MdDarkMode } from 'react-icons/md'


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
        <button id='theme__icon'><MdDarkMode /></button>
      </div>
    </nav>
  )
}

export default Navbar