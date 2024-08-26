import "./PhotoHeader.css";

const PhotoHeader = ()=>{

    return (
        <section className="photoheader">
            <figure className="img" >
              <img src="./img/bastian.png" alt="sebastian" />
            </figure>
                <div className="texto">
                <h1 className="p1">Hola, soy Sebastian trujillo</h1>
                <h2 className="p2">Desarrollador FrontEnd</h2>
                </div>
        </section>
    )
}
export default PhotoHeader; 