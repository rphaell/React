import './about.css'
import AboutImage from '../../assets/astronaut_header.jpg'
import CV from '../../assets/cv.pdf'
import { AiOutlineDownload } from 'react-icons/ai'
import data from './data'
import Card from '../../components/Card'

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__profile">
            <img src={AboutImage} alt="About Portrait" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {
              data.map(item => (
                <Card key={item.id} className="about__card">
                  <span className='about__card-icon'>{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))
            }
          </div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum deserunt vero rem sunt, ipsa ipsam?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, architecto ullam? Totam veritatis et modi?</p>
          <a href={CV} download className="btn primary">Download CV<AiOutlineDownload /></a>
        </div>
      </div>
    </section>
  )
}

export default About