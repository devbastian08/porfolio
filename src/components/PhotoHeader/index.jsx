import "./PhotoHeader.css";

const PhotoHeader = () => {
  const handleClick = () => {
    window.location.href = `mailto: sebastian08.dev@gmail.com`;
  };

  return (
    <section className="photoheader">
      <figure className="img">
        <img src="./img/bastian.png" alt="sebastian" />
      </figure>
      <div className="texto">
        <h1 className="p1">Hola, soy Sebastian trujillo</h1>
        <h2 className="p2">Desarrollador FrontEnd</h2>
        <div className="botones">
          <button className="btn contactame" onClick={handleClick}>
            Contáctame
          </button>
          <a
            href="https://www.linkedin.com/in/sebastiandev08/"
            className="btn linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};
export default PhotoHeader;
