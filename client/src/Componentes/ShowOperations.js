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
            <h1>Operaciones Realizadas</h1>
            <Link to="/guardar" className="btn btn-primary">Ingresa una nueva operacion</Link>
            <div className="col">
                <table className="table">
                    <thead className="table-primary">
                        <tr>
                            <th>tipo</th>
                            <th>monto</th>
                            <th>fecha</th>
                            <th>concepto</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {operaciones.map((operacion) => (
                            <tr key= {operacion.id}>
                            <td>{operacion.tipo}</td>
                            <td>{operacion.monto}</td>
                            <td>{operacion.fecha}</td>
                            <td>{operacion.concepto}</td>
                            <td>
                                <Link to={`/actualizar/${operacion.id}`} className='btn btn-info'>Editar</Link>
                                <button className='btn btn-danger'>Eliminar</button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default ShowOperations