import "./Campo.css"

const Campo = (props) => {
     //destructuracion
    const {placeholder, actualizarValor, titulo, required, valor,  type = "text"} = props

    const placeholderModificado = `${placeholder}...`

    const manejaCambio = (e) => {
        actualizarValor(e.target.value)
    }

    return (
        <div className = {`campo campo-${type}`}>
            <label>{ titulo }</label>
            <input 
                placeholder ={ placeholderModificado } 
                required={required} 
                value = {valor}
                onChange = {manejaCambio}
                type={type}
            />
        </div>
    )
}

export default Campo