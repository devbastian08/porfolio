import "./Habilidades.css"

const Lenguajes = () => {
    const lenguajes =[
        {
          titulo : "Html",
          foto : "./img/html5.png"
        },
        {
          titulo : "Css",
          foto : "./img/css.png"
        },
        {
          titulo : "Javascript",
          foto : "./img/javascript.png"
        },
        {
          titulo : "Typescript",
// Suggested code may be subject to a license. Learn more: ~LicenseLog:793096615.
          foto : "./img/typescript.png"
        },
        {
          titulo : "Git",
          foto : "./img/git.png"
        },
        {
          titulo : "Github",
          foto : "./img/github.png"
        },
        {
          titulo : "React",
          foto : "./img/react.png"
        },
        {
          titulo : "Tailwind",
          foto : "./img/tailwind.png"
        },

    ]

    return (
      <section className="lenguaje" id="lenguaje">
        <h2>Habilidades</h2>
        {lenguajes.map((lenguaje) => (
          <div key={lenguaje.titulo} className="lenguaje">
            <img src={lenguaje.foto} alt={lenguaje.titulo} />
            <h3>{lenguaje.titulo}</h3>
          </div>
        ))}
      </section>
    );
  };

  export default Lenguajes;
