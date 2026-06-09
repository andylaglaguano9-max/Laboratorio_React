import style from "./personaje.module.css";

export const PersonajeCard = ({ nombre, especie, imagen }) => {
    return (
        <div className={style.personajeCard}>
            <img src={imagen} alt={nombre} />
            <h3>{nombre}</h3>
            <p>{especie}</p>
        </div>
    );
};

