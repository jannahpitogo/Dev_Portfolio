import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import projectsTech from '../data/projects_tech.json'
import projectsCreative from '../data/projects_creative.json'

export const Route = createFileRoute('/$slug')({
  component: projectPage,
})

function projectPage() {
  const { slug } = Route.useParams()
  const project = projectsTech.find((item) => item.slug === slug) || projectsCreative.find((item) => item.slug === slug)

  if (!project) {
    return (
      <section className="project-case-study project-case-study--empty">
        <div className="project-case-study__wrap">
          <Link to="/" className="project-case-study__back">
            ← Back to home
          </Link>
          <p>Project not found.</p>
        </div>
      </section>
    )
  }

  const projectCategory = project.category?.toLowerCase() === 'creative' ? 'creative' : 'dev'
  const isCreativeProject = projectCategory === 'creative'

  return (
    <article className="project-case-study">
      <div className="project-case-study__wrap">
        <header className="project-case-study__header">
          <Link
            to={`/?category=${projectCategory}`}
            hash="work"
            className="project-case-study__back"
          >
            ← Back to case studies
          </Link>

          <div className="project-case-study__meta">
            <span className="project-case-study__eyebrow">{project.category}</span>
            {!isCreativeProject ? (
              <div className="project-case-study__links">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noreferrer">
                    Live Demo ↗
                  </a>
                ) : null}
                {project.status === 'public' && project.source ? (
                  <a href={project.source} target="_blank" rel="noreferrer">
                    Source ↗
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>

          <h1 className="project-case-study__title">{project.title}</h1>
          <p className="project-case-study__lede">{project.hero?.description}</p>
        </header>

        <div className="project-case-study__gallery">
          <figure className="project-case-study__hero">
            <img src={project.hero?.image} alt={project.hero?.alt || project.title} />
          </figure>

          {(project.images?.length || project.gallery?.length) ? (
            <div className="project-case-study__mini-gallery">
              {(project.gallery && project.gallery.length ? project.gallery : project.images || []).slice(0, 5).map((image, index) => (
                <figure key={`${image}-${index}`} className="project-case-study__mini-item">
                  <img src={image} alt={`${project.title} detail ${index + 1}`} />
                </figure>
              ))}
            </div>

            



            
          ) : null}
        </div>

        <section className="project-case-study__section">
            <div className="project-case-study__label">TOOLS</div>
            <div className="project-case-study__tags">
              {project.tools?.map((tech) => (
                <span key={tech} className="project-case-study__tag">
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-case-study__label">TYPE</div>
            <div className="project-case-study__tags">
              {project.type?.map((tech) => (
                <span key={tech} className="project-case-study__tag">
                  {tech}
                </span>
              ))}
            </div>
          </section>

        <div className="project-case-study__content">
          <section className="project-case-study__section">
            <div className="project-case-study__label">Overview</div>
            <p>{project.overview}</p>
          </section>

          <section className="project-case-study__section project-case-study__section--split">
            <div>
              <div className="project-case-study__label">Problem</div>
              <p>{project.problem}</p>
            </div>
            <div>
              <div className="project-case-study__label">Solution</div>
              <p>{project.solution}</p>
            </div>
          </section>

          <section className="project-case-study__section">
            <div className="project-case-study__label">Process</div>
            <ol className="project-case-study__list">
              {project.process?.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>

          {!isCreativeProject ? (
            <section className="project-case-study__section project-case-study__section--split">
              <div>
                <div className="project-case-study__label">Features</div>
                <ul className="project-case-study__list project-case-study__list--bullets">
                  {project.features?.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="project-case-study__label">Challenges</div>
                <p>{project.challenges}</p>
              </div>
            </section>
          ) : null}

          <section className="project-case-study__section">
            <div className="project-case-study__label">Outcome</div>
            <p>{project.outcome}</p>
          </section>
        </div>

        <Link
            to={`/?category=${projectCategory}`}
            hash="work"
            className="project-case-study__back">
            ← Back to case studies
            </Link>
      </div>
    </article>
  )
}

