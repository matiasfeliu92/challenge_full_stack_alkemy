import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

const URI = 'http://localhost:4000/operaciones'

const ShowOperations = () => {

    const [operaciones, setOperaciones] = useState([])

    const mostrarOperaciones = async () => {
        const res = await axios.get(URI)
        setOperaciones(res.data)
    }

    useEffect(() => {
        mostrarOperaciones()
    }, [])

  return (
    <div className="container">
        <div className="row">
            {operaciones.map((operacion) => (
                <div className='col-md-4'>
                    <h2>{operacion.tipo}</h2>
                    <h2>{operacion.concepto}</h2>
                    <h3>{operacion.monto}</h3>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ShowOperations