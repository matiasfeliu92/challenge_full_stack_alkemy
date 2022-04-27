//import React from 'react'
import axios from 'axios'
import {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import swal from "sweetalert"
import 'bootstrap/dist/css/bootstrap.css'

const URI = 'http://localhost:4000/users/signUp'

const SignUp = () => {

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const registro = async (e) => {
        e.preventDefault()
        const res = await axios.post(URI, {nombre: nombre, apellido: apellido, email: email, password: password})
        if (res.data.message === 'el usuario ya se encuentra en la base de datos') {
            swal({
                title: "fAIL",
                text: res.data.message,
                icon: "error",
                button: "OK!"
            })
            navigate('/users/signUp')
        } else {
            swal({
                title: "OK", 
                text: "Register Success",
                icon: "success",
                button: "OK!"
            })
            navigate('/')
        }
        
    }

  return (
    <div>
        <h1>Registrate para utilizar la App de Presupuesto Personal</h1>
        <form onSubmit={registro}>
            <div className="container">
                <label className="form-label">nombre</label>
                <input type="text" className="form-control" onChange={(e) => setNombre(e.target.value)} value={nombre} placeholder="ingresa tu nombre" />
                <label className="form-label">apellido</label>
                <input type="text" className="form-control" onChange={(e) => setApellido(e.target.value)} value={apellido} placeholder="ingresa tu apellido" />
                <label className="form-label">email</label>
                <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="ingresa tu email" />
                <label className="form-label">password</label>
                <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="ingresa una contraseña" />
                <button type="submit" className='btn btn-primary'>Registrarse</button>
            </div>
        </form>
    </div>
  )
}

export default SignUp