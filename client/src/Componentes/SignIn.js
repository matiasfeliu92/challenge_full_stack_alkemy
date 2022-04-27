//import React from 'react'
import axios from 'axios'
import {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

const URI = 'http://localhost:4000/users/signIn'

const SignIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const loggin = async(e) => {
        e.preventDefault()
        await axios.post(URI, {email: email, password: password})
        navigate('/operaciones')
    }

  return (
    <div>
        <h1>Inicie sesion en su cuenta</h1>
        <form onSubmit={loggin}>
            <div className="container">
                <label className="form-label">email</label>
                <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="ingresa tu email" />
                <label className="form-label">password</label>
                <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="ingresa una contraseña" />
                <button type='submit' className='btn btn-primary'>Sign In</button>
            </div>
        </form>
        <h2>Si no tenes cuenta, registrate</h2>
        <Link to="/users/signUp" className='btn btn-primary'>Registro</Link>
    </div>
  )
}

export default SignIn