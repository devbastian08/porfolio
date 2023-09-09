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
          titulo : "Sass",
          foto : "./img/sass.png"
        },
        {
          titulo : "Tailwind",
          foto : "./img/tailwind.png"
        },
    ]

    return (
      <section className="lenguaje">
        {lenguajes.map((lenguaje) => (
          <div key={lenguaje.titulo} className="lenguaje">
            <img src={lenguaje.foto} alt={lenguaje.titulo} />
            <h2>{lenguaje.titulo}</h2>
          </div>
        ))}
      </section>
    );
  };

  export default Lenguajes;
