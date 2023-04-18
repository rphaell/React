import "./contact.css"
import data from "./data"
// import Contact from './Contact';


const Contact = () => {
  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <p>
        Lorem ipsum dolor sit.
      </p>
      <div className="container contact__container">
        {
          data.map(contact => <a key={contact.id} href={contact.link} target="_blank" rel="noopener noreferrer">
            {contact.icon}
          </a>)
        }
      </div>
    </section>
  )
}

export default Contact