import './portfolio.css'
import Projects from './Projects'
import ProjectsCategories from './ProjectsCategories'
import data from './data'
import { useState } from 'react'
const Portfolio = () => {
  const [projects, setProjects] = useState(data);

  const categories = data.map(item => item.category);
  const uniqueCategories = ["all", ...new Set(categories)];

  //função filter para retornar uma nova array com a categoria selecionada
  const filterProjectsHandler = (category) => { 
    if (category === "all") {
      setProjects(data);
      return;
    }
    const filterProjects = data.filter(project => project.category === category); //new array with the selected category
    setProjects(filterProjects) //atualizando a nova array no projeto
  }


  return (
    <section id="portfolio">
      <h2>My Projects</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ex corrupti ut obcaecati perferendis. Fuga.
      </p>
      <div className="container portfolio__container">
        <ProjectsCategories categories={uniqueCategories} onFilterProjects={filterProjectsHandler}/>
        <Projects projects={projects}/>
      </div>
    </section>
  )
}

export default Portfolio