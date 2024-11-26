import './skills.css'
import Frontend from './Frontend'
import Backend from './Backend'

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Hard Skills</h2>
            <span className="section__subtitle">Tecnologias</span>

            <div className="skills__container container grid">
                <Frontend />
                <Backend />
            </div>

            <div className="skills section">
                <h2 className="section__title">Soft Skills</h2>
                <div className="skills__container container grid">
                    
            <div className="skills__content">
                <h3 className="skills__title">Habilidades interpersonales</h3>

                <div className="skills__box">
                    <div className="skills__group">
                        <div className="skills__data">
                            <p>Además de mis habilidades técnicas, me destaco por tener excelentes habilidades interpersonales. Estas me permiten comunicarme de manera efectiva, colaborar en equipo y adaptarme rápidamente a diferentes dinámicas laborales. Creo firmemente que la tecnología es más poderosa cuando se combina con un enfoque humano.</p>
                    </div>
                    </div>
                </div>
            </div>

            <div className="skills__content">
                <h3 className="skills__title">gestion de Aprendizaje</h3>
                <div className="skills__box">
                    <div className="skills__group">
                        <div className="skills__data">
                            <p>Como desarrollador, una de mis mayores fortalezas es mi excelente gestión del aprendizaje. Tengo la capacidad de adquirir nuevas habilidades de forma autónoma y rápida, adaptándome a las demandas de proyectos y tecnologías en constante evolución. Disfruto enfrentar desafíos que me permiten crecer profesionalmente y optimizar mis procesos de aprendizaje para contribuir con soluciones innovadoras en un entorno laboral dinámico.</p>
                    </div>
                    </div>
                </div>
            </div>


                </div>
            </div>

        </section>
    )
}

export default Skills