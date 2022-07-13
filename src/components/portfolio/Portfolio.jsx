import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: "Example 1",
    github: "https://github.com/AnastasiiaBoryslavska",
    demo: "https://github.com/AnastasiiaBoryslavska"
  },
  {
    id: 2,
    image: IMG2,
    title: "Example 2",
    github: "https://github.com/AnastasiiaBoryslavska",
    demo: "https://github.com/AnastasiiaBoryslavska"
  },
  {
    id: 3,
    image: IMG3,
    title: "Example 3",
    github: "https://github.com/AnastasiiaBoryslavska",
    demo: "https://github.com/AnastasiiaBoryslavska"
  },
  {
    id: 4,
    image: IMG4,
    title: "Example 4",
    github: "https://github.com/AnastasiiaBoryslavska",
    demo: "https://github.com/AnastasiiaBoryslavska"
  },
  {
    id: 5,
    image: IMG5,
    title: "Example 5",
    github: "https://github.com/AnastasiiaBoryslavska",
    demo: "https://github.com/AnastasiiaBoryslavska"
  },
  {
    id: 6,
    image: IMG6,
    title: "Example 6",
    github: "https://github.com/AnastasiiaBoryslavska",
    demo: "https://github.com/AnastasiiaBoryslavska"
  },
  
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github,demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title}></img>
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target="_blank" rel="noreferrer">GitHub</a>
                  <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio