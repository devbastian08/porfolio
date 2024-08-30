import "./AboutMe.css";

const AboutMe =()=>{

return (
        <div className="AboutMe" id="about">
                <section className="title-area">
                <h2 className="title">Acerca de mi</h2>
                </section>
        <section className="about">
            <figure className="img-area">
            <img src="./img/ilustracion.jpeg" alt="ilustracion persona enfrente de un portatil" />
            </figure>
            <section className="text-area">
                <p>
                Apasionado desarrollador frontend, entusiasmado por la creación de interfaces web intuitivas y atractivas. Domino HTML, CSS y JavaScript, y disfruto trabajando con bibliotecas y frameworks como React. Mi enfoque se centra en la usabilidad, accesibilidad y rendimiento optimizado para brindar una experiencia de usuario excepcional. Siempre estoy buscando aprender y mantenerme actualizado en las últimas tendencias y tecnologías del desarrollo frontend. ¡Estoy emocionado de enfrentar nuevos desafíos y crear soluciones web sobresalientes para cualquier proyecto!
                </p>
            </section>
            </section>
        </div>
)

};

export default AboutMe;