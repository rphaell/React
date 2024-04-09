import './header.css'
import data from './data'
import HeaderImage from '../../assets/astronaut3.jpg'

const Header = () => {
  return (
    <header class="background:red " id="header">
        <div className="container header__container">
          <div className="header__profile">
            <img class = "header_image"src= {HeaderImage} alt="#" />
          </div>
          <h3>Raphael Almeida</h3>
          <p>
          Hello, I'm Raphael. Welcome! <br />My portfolio highlights my work in user interface and user experience design
          </p>
          <div className="header__cta">
            <a href="#contact" className='btn primary'>Let's Talk</a>
            <a href="#portfolio" className='btn light'>My Work</a>
          </div>
          <div className="header__socials">
            {
              data.map(item => <a key={item.id} herf={item.link} target = "_blank"
              rel= "noopener noreferrer">{item.icon}</a> )
            }
          </div>
        </div>
    </header>
  )
}

export default Header