import faqs from './data'
import FAQ from './FAQ'
import './faqs.css'

const FAQs = () => {
  return (
    <section id="faqs">
      <h2>Frequelly Asked Questions</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. In repudiandae veritatis facilis aperiam aut iure repellat obcaecati laudantium rerum similique.
      </p>
      <div className="container faqs__container">
        {
          faqs.map(faq => (
            <FAQ key={faq.id} faq={faq}/>
          ))
        }
      </div>
    </section>
  )
}

export default FAQs