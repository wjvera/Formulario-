import React, {useState} from 'react'

const Formulario = () => {


    //creacion de hook
    const [fruta, setFruta] = useState('')
    const [descripcion, setDescripcion] = useState('')


    //creacion de un arreglo vacio
    const listavacia = []

    //creacion de un hook
    const [guardar, setGuardar] = useState(listavacia)


    const guardarDatos = (e)=>{

        //para que la pagina no se recarge
        e.preventDefault()

        //validacion de fruta y descripcion
        if(fruta.trim().length >= 2 && descripcion.trim().length >= 5){
            console.log('procesando los datos')
        }else{
            alert('Escriba una fruta que exista, y una breve descripcion')
        }
        
        //llamamos al array vacio para guardar fruta y descripcion
        setGuardar([
            ...guardar,
            {guardarFruta: fruta, guardarDescripcion: descripcion}
        ])
        
        //resetear internamente el objeto
        e.target.reset()

        //
        setFruta('')
        setDescripcion('')
    }

    return (
        <div className="container mt-5">

            <h2>Formulario</h2>

            <form onSubmit={ guardarDatos }>

                <input 
                      type = "text"
                      placeholder = "Fruta favorita"
                      className = "form-control mb-2"
                      onChange = {(e)=> setFruta(e.target.value)}
                />

                <input 
                      type = "text"
                      placeholder = "Ingrese descripcion"
                      className = "form-control mb-2"
                      onChange = {(e)=> setDescripcion(e.target.value)}
                />

                <button className="btn btn-primary btn-block" type = "submit">
                    Agregar
                </button>
            </form>
            <br />
            <hr />
            <ul>
                {
                //el array vacio lo mapeamos
                    guardar.map((dev, index)=>(
                        <li key={index}>
                            {dev.guardarFruta} : {dev.guardarDescripcion}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Formulario
