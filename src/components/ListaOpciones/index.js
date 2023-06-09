import "./ListaOpciones.css";

const ListaOpciones = (props) => {

    //Metodo Map -> arreglo.map( (equipo, index) => return {
    // return <option>equipo<option/>   
    //} )

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className = "lista-opciones">
        <label>Equipos</label>
        <select value = {props.valor} onChange = {manejarCambio}>
            <option value="" disable defaultValue = "" hidden>Seleccionar equipo</option>
            { props.equipos.map( (equipo, index) => <option key={index}>{equipo}</option> 
            ) }
        </select>
    </div>
}

export default ListaOpciones