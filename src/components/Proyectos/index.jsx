import "./proyectos.css";

const Proyectos = () => {
  const proyecto = [
    {
      titulo: "Proyecto 1",
      descripcion: "Una descripcion del proyecto 1",
      url: "https://github.com/sebastian08/proyecto1",
      imagen: "./img/proyecto1.png",
    },
    {
      titulo: "Proyecto 2",
      descripcion: "Una descripcion del proyecto 2",
      url: "https://github.com/sebastian08/proyecto2",
      imagen: "./img/proyecto2.png",
    },
    {
      titulo: "Proyecto 3",
      descripcion: "Una descripcion del proyecto 3",
      url: "https://github.com/sebastian08/proyecto3",
      imagen: "./img/proyecto3.png",
    },
    {
      titulo: "Proyecto 4",
      descripcion: "Una descripcion del proyecto 4",
      url: "https://github.com/sebastian08/proyecto4",
      imagen: "./img/proyecto4.png",
    },
    {
      titulo: "Proyecto 5",
      descripcion: "Una descripcion del proyecto 5",
      url: "https://github.com/sebastian08/proyecto5",
      imagen: "./img/proyecto5.png",
    },
  ];

  return (
    <section className="proyectos">
      <h2>Proyectos</h2>
      <div className="grid-proyectos">
        {proyecto.map((proyecto) => (
          <div key={proyecto.url} className="proyecto">
            <img src={proyecto.imagen} alt={proyecto.titulo} />
            <h3>{proyecto.titulo}</h3>
            <p>{proyecto.descripcion}</p>
            <a href={proyecto.url} target="_blank" rel="noopener noreferrer">
              Ver proyecto
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Proyectos;
